/**
 * storeUI 1.0 (1.0.18.5_storeui_dev.181226-0032)
 * HTML/CSS framework for creating App Store-like user interfaces
 * Copyright © 2018 Team FESTIVAL
 */

class storeUI {
	constructor(params) {
		let app = this;
		window._storeUIInstance = app;
		
		app.params = {};
		Object.assign(app.params, params);
		app.init = () => {
			console.info(storeUI.buildString);
			
			// Navigation Bars
			app.navigationBars = [];
			document.querySelectorAll("div.navigation-bar").forEach(navBar => {
				app.navigationBars.push(new storeUI.NavigationBar(navBar));
			});
			
			// Collection Views
			app.collectionViews = [];
			document.querySelectorAll(".horizontal-collection-view-cell, .product-media-cell").forEach(view => {
				if (view.querySelector(".swiper-slide")) {
					let classes = Array.from(view.querySelector(".swiper-slide").classList);
					classes.every(className => {
						const _swiperClass = (() => {
							switch (className) {
								case "editorial-card":
									return "editorial";
								case "small-lockup-cell":
									return "small";
								case "medium-lockup-cell":
									return "medium";
								case "brick-cell":
									return "brick";
								case "screenshot-cell":
									return "media";
								case "product-review-cell":
									return "media";
								default: return null;
							}
						})();
						
						if (_swiperClass) {
							app.collectionViews.push(new storeUI.CollectionView(view, { type: _swiperClass }));
							return true;
						}
						
						return false;
					});
				}
			});
			
			// Expandable texts
			app.expandableTexts = [];
			document.querySelectorAll(".expandable-text-view").forEach(view => {
				app.expandableTexts.push(new storeUI.ExpandableText(view, {
					startExpanded: view.getAttribute("data-start-expanded") == "true",
					hideEmptyLines: view.getAttribute("data-hide-empty-lines") != "false",
					maxLines: parseInt(view.getAttribute("data-max-lines")) || 3,
					redirectUri: view.getAttribute("data-redirect-uri")
				}));
			});
			
			// Annotation Cells
			app.annotationCells = [];
			document.querySelectorAll(".annotation-cell.expandable").forEach(cell => {
				app.annotationCells.push(new storeUI.AnnotationCell(cell, null));
			});
		}
		
		app.init();
	}
	
	static get touchEventStart() { return ("ontouchstart" in window) ? "touchstart" : "mousedown"; }
	static get touchEventMove() { return ("ontouchmove" in window) ? "touchmove" : "mousemove"; }
	static get touchEventEnd() { return ("ontouchend" in window) ? "touchend" : "mouseup"; }
	static get touchEventClick() { return ("ontouchend" in window) ? "touchend" : "click"; }
	
	static get buildVersion() { return "1.0"; }
	static get buildNumber() { return "18"; }
	static get buildRevision() { return "5"; }
	static get buildBranch() { return "storeui_dev"; }
	static get buildDate() { return "181226-0032"; }
	static get buildString() { return "1.0.18.5_storeui_dev.181226-0032"; }
}
storeUI.CollectionView = class {
	constructor(element, params) {
		let collectionView = this;
		collectionView.container = element;
		
		collectionView.params = {
			type: null
		};
		Object.assign(collectionView.params, params);
		
		collectionView._swiper = new Swiper(element, Object.assign({
			roundLengths: 'false',
			spaceBetween: 32,
			breakpoints: {
				414: {
					spaceBetween: 10,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20
				},
				834: {
					spaceBetween: 22
				},
				1024: {
					spaceBetween: 30
				}
			}
		}, collectionView._defaultOptions[collectionView.params.type]));
	}
	
	get _defaultOptions() {
		return {
			editorial: {
				slidesPerView :'auto',
				slidesPerViewFit : false,
			},
			small: {
				slidesPerView: 'auto',
				slidesPerColumn: 3,
				slidesPerGroup: 1,
			},
			medium: {
				slidesPerView: 'auto',
				slidesPerColumn: 2,
				slidesPerGroup: 1,
			},
			brick: {
				slidesPerView :'auto',
				slidesPerViewFit : false,
				breakpoints: {
					414: {
						spaceBetween: 10,
					},
					768: {
						spaceBetween: 20
					},
					834: {
						spaceBetween: 22
					},
					1024: {
						spaceBetween: 30
					}
				}
			},
			media: {
				slidesPerView :'auto',
				slidesPerViewFit : false,
				breakpoints: {
					414: {
						spaceBetween: 10,
					},
					768: {
						spaceBetween: 20
					},
					834: {
						spaceBetween: 22
					},
					1024: {
						spaceBetween: 30
					}
				}
			},
			review: {
				slidesPerView :'auto',
				slidesPerViewFit : false,
			}
		}
	}
}
storeUI.ExpandableText = class {
	constructor(element, params) {
		let expandableText = this;
		expandableText.container = element;
		expandableText.fadeInButton = element.querySelector(".fade-in-button");
		
		expandableText._expanded = false;
		
		expandableText.params = {
			startExpanded: false,
			hideEmptyLines: true,
			maxLines: 3,
			redirectUri: null
		};
		Object.assign(expandableText.params, params);
		
		expandableText._rawText = expandableText.container.querySelector("p").innerHTML;
		expandableText.container.style.maxHeight = `${expandableText.params.maxLines * storeUI.ExpandableText.lineHeight}px`;
		expandableText.container.querySelector("p").innerHTML = this.text;
		
		this.checkMoreButtonPresence();
		window.addEventListener("resize", this.checkMoreButtonPresence.bind(this));
		
		expandableText.fadeInButton.addEventListener(storeUI.touchEventClick, this.expand.bind(this));
	}
	
	static get lineHeight() {
		return 19;
	}
	
	checkMoreButtonPresence() {
		let expandableText = this;
		
		if (expandableText.params.startExpanded) {
			expandableText.container.classList.add("expanded");
			expandableText.container.removeAttribute("style");
		}
		
		if (expandableText.container.scrollHeight > (storeUI.ExpandableText.lineHeight * expandableText.params.maxLines) && !expandableText.params.startExpanded && !expandableText._expanded) {
			expandableText.fadeInButton.classList.remove("hidden");
		} else {
			expandableText.fadeInButton.classList.add("hidden");
		}
	}
	
	expand() {
		let expandableText = this;
		
		if (expandableText.params.redirectUri) {
			window.location.href = expandableText.params.redirectUri;
			return;
		}
		
		expandableText._expanded = true;
		
		expandableText.container.classList.add("expanded");
		expandableText.container.removeAttribute("style");
		expandableText.fadeInButton.classList.add("hidden");
		
		expandableText.container.querySelector("p").innerHTML = this.text;
	}
	
	get text() {
		let expandableText = this;
		
		if (expandableText.params.hideEmptyLines && !expandableText.params.startExpanded && !expandableText._expanded) {
			return expandableText._rawText.replace(/\<br\>\<br\>/g, "<br>");
		} else {
			return expandableText._rawText;
		}
	}
}
storeUI.AnnotationCell = class {
	constructor(element, params) {
		let cell = this;
		cell.container = element;
		
		cell.params = {};
		Object.assign(cell.params, params);
		
		cell.container.addEventListener(storeUI.touchEventClick, () => {
			cell.container.classList.add("expanded");
		})
	}
}
storeUI.NavigationBar = class {
	constructor(element, params) {
		let navigationBar = this;
		navigationBar.container = element;
		
		navigationBar.params = {
			title: navigationBar.container.getAttribute("data-title"),
			
		}
		
		navigationBar.largeTitleView = navigationBar.container.querySelector(".navigation-bar-large-title-view");
		// navigationBar.largeTitleView.className = "navigation-bar-large-title-view";
		// navigationBar.container.appendChild(navigationBar.largeTitleView);
		
		navigationBar.largeTitleAnimationWrapper = navigationBar.largeTitleView.querySelector(".animation-wrapper");
		navigationBar.largeTitleLabel = navigationBar.largeTitleView.querySelector(".navigation-bar-title");
		// navigationBar.largeTitleLabel.className = "navigation-bar-title";
		navigationBar.largeTitleLabel.innerHTML = navigationBar.params.title;
		// navigationBar.largeTitleView.appendChild(navigationBar.largeTitleLabel);
		
		navigationBar.contentView = navigationBar.container.querySelector(".navigation-bar-content-view");
		navigationBar.contentView.className = "navigation-bar-content-view invisible hidden";
		// navigationBar.container.appendChild(navigationBar.contentView);
		
		navigationBar.contentLabel = navigationBar.contentView.querySelector(".navigation-bar-title");
		// navigationBar.contentLabel.className = "navigation-bar-title";
		navigationBar.contentLabel.innerHTML = navigationBar.params.title;
		// navigationBar.contentView.appendChild(navigationBar.contentLabel);

		navigationBar._scrollHeight = navigationBar.largeTitleLabel.clientHeight;
		navigationBar.container.style.height = `${navigationBar._scrollHeight + 44}px`;
		navigationBar.container.classList.add("no-separator");
		
		if (document.querySelector(".collection-view")) {
			document.querySelector(".collection-view").style.paddingTop = `${navigationBar._scrollHeight + 44}px`;
		}
		
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop >= 0 && document.body.scrollTop <= navigationBar._scrollHeight) {
				navigationBar.container.classList.add("no-separator");
				navigationBar.largeTitleView.classList.remove("invisible");
				navigationBar.contentView.classList.add("invisible");
				
				navigationBar.container.style.height = `${96}px`;
				navigationBar.container.style.transform = `translate3d(0, -${document.body.scrollTop}px, 0)`;
				navigationBar.largeTitleLabel.style.transform = ``;
				navigationBar.largeTitleView.style.transform = `translate3d(0, ${document.body.scrollTop}px, 0)`;
				navigationBar.largeTitleAnimationWrapper.style.transform = `translate3d(0, -${document.body.scrollTop}px, 0)`;
				navigationBar.contentView.style.transform = `translate3d(0, ${document.body.scrollTop}px, 0)`;
			} else if (document.body.scrollTop < 0) {
				navigationBar.container.classList.add("no-separator");
				navigationBar.largeTitleView.classList.remove("invisible");
				navigationBar.contentView.classList.add("invisible");
				
				navigationBar.container.style.height = `${96 - document.body.scrollTop}px`;
				navigationBar.container.style.transform = `translate3d(0, 0, 0)`;
				
				if (document.body.scrollTop >= -84) {
					navigationBar.largeTitleLabel.style.transform = `scale(${1 + (0.1 * (document.body.scrollTop / -84))})`;
				} else {
					navigationBar.largeTitleLabel.style.transform = `scale(1.1)`;
				}
				
				navigationBar.largeTitleView.style.transform = `translate3d(0, ${-document.body.scrollTop}px, 0)`;
				navigationBar.largeTitleAnimationWrapper.style.transform = `translate3d(0, 0, 0)`;
				navigationBar.contentView.style.transform = `translate3d(0, 0, 0)`;
			} else if (document.body.scrollTop > navigationBar._scrollHeight) {
				navigationBar.container.classList.remove("no-separator");
				navigationBar.largeTitleView.classList.add("invisible");
				navigationBar.contentView.classList.remove("hidden");
				navigationBar.contentView.classList.remove("invisible");
		
				navigationBar.container.style.height = `${96}px`;
				navigationBar.container.style.transform = `translate3d(0, -${navigationBar._scrollHeight}px, 0)`;
				navigationBar.largeTitleLabel.style.transform = ``;
				navigationBar.largeTitleView.style.transform = `translate3d(0, ${navigationBar._scrollHeight}px, 0)`;
				navigationBar.largeTitleAnimationWrapper.style.transform = `translate3d(0, -${navigationBar._scrollHeight}px, 0)`;
				navigationBar.contentView.style.transform = `translate3d(0, ${navigationBar._scrollHeight}px, 0)`;
			}
		});
		
		if (document.body.scrollTop > 52) {
			navigationBar.container.classList.remove("no-separator");
			navigationBar.largeTitleView.classList.add("invisible");
			navigationBar.contentView.classList.remove("hidden");
			navigationBar.contentView.classList.remove("invisible");
	
			navigationBar.container.style.transform = `translate3d(0, -52px, 0)`;
			navigationBar.largeTitleView.style.transform = `translate3d(0, 52px, 0)`;
			navigationBar.largeTitleAnimationWrapper.style.transform = `translate3d(0, -52px, 0)`;
			navigationBar.contentView.style.transform = `translate3d(0, 52px, 0)`;
		}
	}
}
//# sourceMappingURL=storeUI-1.0.js.map