(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],p=0,h=[];p<o.length;p++)a=o[p],c[a]&&h.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(h.length)h.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({dashboard:"dashboard",error:"error","login~register":"login~register",login:"login",register:"register","packageAdd~versionAdd~versionEdit":"packageAdd~versionAdd~versionEdit",packageAdd:"packageAdd",versionAdd:"versionAdd",versionEdit:"versionEdit",packageEdit:"packageEdit",packages:"packages"}[e]||e)+"."+{dashboard:"1b4e1131",error:"49d7a667","login~register":"e0f7bc77",login:"33e97f8c",register:"d9bf88fa","packageAdd~versionAdd~versionEdit":"a9d55b7e",packageAdd:"f45a8de8",versionAdd:"89bc41bd",versionEdit:"371bcda9",packageEdit:"8f239f16",packages:"89b2a6d7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={dashboard:1,login:1,register:1,"packageAdd~versionAdd~versionEdit":1,packageAdd:1,packageEdit:1,packages:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({dashboard:"dashboard",error:"error","login~register":"login~register",login:"login",register:"register","packageAdd~versionAdd~versionEdit":"packageAdd~versionAdd~versionEdit",packageAdd:"packageAdd",versionAdd:"versionAdd",versionEdit:"versionEdit",packageEdit:"packageEdit",packages:"packages"}[e]||e)+"."+{dashboard:"c2f1280e",error:"31d6cfe0","login~register":"31d6cfe0",login:"3b0fb5d4",register:"d7101f77","packageAdd~versionAdd~versionEdit":"83d475af",packageAdd:"859dc27c",versionAdd:"31d6cfe0",versionEdit:"31d6cfe0",packageEdit:"5b11e7bb",packages:"b5f6deba"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===r||p===c))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){s=h[o],p=s.getAttribute("data-href");if(p===r||p===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=u);var s,p=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e),s=function(t){h.onerror=h.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}c[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:h})},12e4);h.onerror=h.onload=s,p.appendChild(h)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/admin/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var d=p;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("f751"),n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("1dce"),c=n.n(a),u=n("ec02"),o=n.n(u),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[];bootbox.setDefaults({animate:!1,closeButton:!1});var p={name:"App"},h=p,d=(n("7c55"),n("2877")),f=Object(d["a"])(h,i,s,!1,null,null,null);f.options.__file="App.vue";var g=f.exports,l=(n("96cf"),n("1da1")),v=n("2b27"),k=n.n(v),m=n("8c4f"),w=n("2f62"),b=n("0e44");r["a"].use(w["a"]);var R=new w["a"].Store({state:{accountId:"",userRole:-1},plugins:[Object(b["a"])()],mutations:{setAccountId:function(e,t){e.accountId=t},setUserRole:function(e,t){e.userRole=t}},getters:{accountId:function(e){return e.accountId},userRole:function(e){return e.userRole}}}),y=n("a1ef"),O=n("6457");r["a"].use(k.a),r["a"].use(m["a"]);var j=new m["a"]({routes:[{path:"/",name:"Dashboard",component:function(){return n.e("dashboard").then(n.bind(null,"7277"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("login~register"),n.e("login")]).then(n.bind(null,"a55b"))},meta:{noAuth:!0}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("login~register"),n.e("register")]).then(n.bind(null,"73cf"))},meta:{noAuth:!0}},{path:"/packages",name:"packages",component:function(){return n.e("packages").then(n.bind(null,"5b9c"))},meta:{minimumRole:O["DEVELOPER"]}},{path:"/packages/new",name:"packageAdd",component:function(){return Promise.all([n.e("packageAdd~versionAdd~versionEdit"),n.e("packageAdd")]).then(n.bind(null,"2f00"))},meta:{minimumRole:O["DEVELOPER"]}},{path:"/packages/:packageId",name:"packageEdit",component:function(){return n.e("packageEdit").then(n.bind(null,"c4cf"))},meta:{minimumRole:O["DEVELOPER"]}},{path:"/packages/:packageId/versions/add",name:"versionAdd",component:function(){return Promise.all([n.e("packageAdd~versionAdd~versionEdit"),n.e("versionAdd")]).then(n.bind(null,"dfbb"))},meta:{minimumRole:O["DEVELOPER"]}},{path:"/packages/:packageId/versions/:versionId",name:"versionEdit",component:function(){return Promise.all([n.e("packageAdd~versionAdd~versionEdit"),n.e("versionEdit")]).then(n.bind(null,"ea0f"))},meta:{minimumRole:O["DEVELOPER"]}},{path:"/error/:errorId",name:"error",component:function(){return n.e("error").then(n.bind(null,"dda8"))},meta:{noAuth:!0}},{path:"*",redirect:"/error/404"}],linkActiveClass:"active"});j.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.matched.some(function(e){return e.meta.noAuth})){e.next=13;break}if(window.$cookies.get("authToken")){e.next=5;break}return e.abrupt("return",r({path:"/login",query:{next:"/"!=t.path?t.path:void 0},replace:!0}));case 5:return e.next=7,y["b"].verify();case 7:if(a=e.sent,200==a.status){e.next=12;break}return e.abrupt("return",r({path:"/login",query:{next:"/"!=t.path?t.path:void 0},replace:!0}));case 12:R.commit("setUserRole",a.data.role);case 13:if(!t.matched.some(function(e){return e.meta.minimumRole})){e.next=18;break}if(c=t.matched.map(function(e){return e.meta.minimumRole})[0],(R.getters.userRole&c)==c){e.next=17;break}return e.abrupt("return",r({path:"/error/403",replace:!0}));case 17:return e.abrupt("return",r());case 18:r();case 19:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}());var x=j;r["a"].config.productionTip=!1,r["a"].use(c.a),r["a"].component("vue-headful",o.a),Object.assign(Array.prototype,{firstObject:function(){return this[0]},lastObject:function(){return this[this.length-1]},lastNthObject:function(e){return this[this.length-(1+e)]}}),new r["a"]({router:x,store:R,render:function(e){return e(g)},data:{test:"test"}}).$mount("#app")},"5c48":function(e,t,n){},6457:function(e,t){e.exports={MIGRATE:1,USER:2,DEVELOPER:4,MODERATOR:8,ADMINISTRATOR:16}},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},a1ef:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return d});n("96cf");var r=n("1da1"),a=n("d4ec"),c=n("bee2"),u=(n("cadf"),n("551c"),n("097d"),n("7338")),o="".concat(window.location.origin,"/api"),i=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"register",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("".concat(o,"/auth/register"),t).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("".concat(o,"/auth/login"),t).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"verify",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/auth/verify"),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),s=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getMe",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/account/me"),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getUser",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/account/").concat(t)).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateMe",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("".concat(o,"/account/me"),t,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateUser",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("".concat(o,"/account/").concat(t),n,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deleteMe",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["delete"])("".concat(o,"/account/me"),updateData,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteUser",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["delete"])("".concat(o,"/account/").concat(t),n,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"uploadProfileImage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("file",t),e.next=4,Object(u["post"])("".concat(o,"/account/profileImage"),n,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken")),"Content-Type":"multipart/form-data, boundary=".concat(n._boundary)}}).catch(function(e){return e.response});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),p=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getDevices",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/devices"),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getDevice",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/devices/").concat(t),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateDevice",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("".concat(o,"/devices/").concat(t),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteDevice",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["delete"])("".concat(o,"/devices/").concat(t),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),h=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getPackages",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/"),{headers:{"X-Packd-Usage":"Developer ".concat(JSON.parse(localStorage.getItem("vuex"))["accountId"])}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"addPackage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("".concat(o,"/packages/add"),t,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getPackage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t),{headers:{"X-Packd-Usage":"Developer ".concat(JSON.parse(localStorage.getItem("vuex"))["accountId"])}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updatePackage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("".concat(o,"/packages/").concat(t),n,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deletePackage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["delete"])("".concat(o,"/packages/").concat(t),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"uploadPackageIcon",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("file",n),e.next=4,Object(u["post"])("".concat(o,"/packages/").concat(t,"/icon"),r,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"uploadPackageScreenshot",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("file",n),a.append("fileName",r),e.next=5,Object(u["post"])("".concat(o,"/packages/").concat(t,"/screenshot"),a,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"deletePackageScreenshot",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["delete"])("".concat(o,"/packages/").concat(t,"/screenshot/").concat(n),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getPackageVersions",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/versions"),{headers:{"X-Packd-Usage":"Developer ".concat(JSON.parse(localStorage.getItem("vuex"))["accountId"])}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getPackageLatestVersion",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/versions/latest")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addVersion",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("".concat(o,"/packages/").concat(t,"/versions/add"),n,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getPackageVersion",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/versions/").concat(n),{headers:{"X-Packd-Usage":"Developer ".concat(JSON.parse(localStorage.getItem("vuex"))["accountId"])}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"updatePackageVersion",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("".concat(o,"/packages/").concat(t,"/versions/").concat(n),r,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"deletePackageVersion",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["delete"])("".concat(o,"/packages/").concat(t,"/versions/").concat(n),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"uploadPackageFile",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("file",r),e.next=4,Object(u["post"])("".concat(o,"/packages/").concat(t,"/versions/").concat(n,"/file"),a,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"getPackageRatings",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/ratings")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getPackageLatestVersionRatings",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/versions/latest/ratings")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getPackageVersionRatings",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/versions/").concat(n,"/ratings")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getPackageReviewRating",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/reviews/").concat(n,"/rating")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"updatePackageReviewRating",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("".concat(o,"/packages/").concat(t,"/reviews/").concat(n,"/rating"),r,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"getReviews",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/reviews"),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPackageReviews",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/reviews")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getPackageLatestVersionReviews",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/versions/latest/reviews")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getPackageVersionReviews",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/versions/").concat(n,"/reviews")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"addReview",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/reviews/add"),n,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getPackageReview",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/reviews/").concat(n)).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getPackageVersionReview",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/packages/").concat(t,"/versions/").concat(n,"/reviews/").concat(r)).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"addReviewMessage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("".concat(o,"/packages/").concat(t,"/reviews/").concat(n,"/addMessage"),r,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"updateReviewMessage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r,a){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("".concat(o,"/packages/").concat(t,"/reviews/").concat(n,"/").concat(r),a,{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n,r,a){return e.apply(this,arguments)}return t}()},{key:"deleteReview",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["delete"])("".concat(o,"/packages/").concat(t,"/reviews/").concat(n),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deleteReviewMessage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["delete"])("".concat(o,"/packages/").concat(t,"/reviews/").concat(n,"/").concat(r),{headers:{Authorization:"Bearer ".concat(window.$cookies.get("authToken"))}}).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()}]),e}(),d=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getStatistics",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/statistics/")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getWeekStatistics",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/statistics/week")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getMonthlyStatistics",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/statistics/monthly")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getYearlyStatistics",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("".concat(o,"/statistics/yearly")).catch(function(e){return e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),e}()}});
//# sourceMappingURL=app.adb8c1a5.js.map