(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["versionEdit"],{"456d":function(t,e,a){var s=a("4bf8"),i=a("0d58");a("5eda")("keys",function(){return function(t){return i(s(t))}})},"5eda":function(t,e,a){var s=a("5ca1"),i=a("8378"),n=a("79e5");t.exports=function(t,e){var a=(i.Object||{})[t]||Object[t],r={};r[t]=e(a),s(s.S+s.F*n(function(){a(1)}),"Object",r)}},ac6a:function(t,e,a){for(var s=a("cadf"),i=a("0d58"),n=a("2aba"),r=a("7726"),o=a("32e9"),c=a("84f2"),l=a("2b4c"),u=l("iterator"),d=l("toStringTag"),v=c.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(g),h=0;h<p.length;h++){var m,f=p[h],k=g[f],b=r[f],D=b&&b.prototype;if(D&&(D[u]||o(D,u,v),D[d]||o(D,d,f),c[f]=v,k))for(m in s)D[m]||n(D,m,s[m],!0)}},ea0f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("Nav")],1),a("div",{staticClass:"col-md-9"},[t.packageData&&t.versionData&&(t.packageData.status||t.versionData.status)?t._e():a("div",[a("div",{staticClass:"dashhead mb-3"},[a("div",{staticClass:"dashhead-titles"},[a("h6",{staticClass:"dashhead-subtitle"},[t._v(t._s(t.packageData.name)+" – Versions")]),a("h2",{staticClass:"dashhead-title"},[t._v("Edit Version "+t._s(t.versionData.version))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-left"},[a("button",{staticClass:"btn btn-danger",attrs:{disabled:!t.$v.$anyDirty||t.isDoingWork},on:{click:function(e){t.cancel()}}},[a("span",{staticClass:"icon icon-squared-cross"}),t._v("\n\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t")])]),a("div",{staticClass:"col-6 row p-0 justify-content-end text-right"},[t.isDoingWork?a("div",{staticClass:"col p-0 pr-3"},[a("div",{staticClass:"loading-indicator"})]):t._e(),a("div",{staticClass:"col-auto p-0"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.$v.$invalid||!t.$v.$anyDirty||t.isDoingWork},on:{click:function(e){t.saveVersion()}}},[a("span",{staticClass:"icon icon-save"}),t._v("\n\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t")])])])])]),t.packageData&&404==t.packageData.status?a("div",[a("vue-headful",{attrs:{title:"Package not found – FESTIVAL Pack'd"}}),a("h4",[t._v("Package not found")]),a("p",[t._v('Could not retrieve info for package "'+t._s(t.$route.params.packageId)+'"')])],1):t._e(),t.versionData&&404==t.versionData.status?a("div",[a("vue-headful",{attrs:{title:"Version not found – FESTIVAL Pack'd"}}),a("h4",[t._v("Version not found")]),a("p",[t._v('Could not retrieve info for version "'+t._s(t.$route.params.versionId)+'"')])],1):t._e(),t.packageData&&!t.packageData.status&&t.versionData&&!t.versionData.status?a("div",[a("vue-headful",{attrs:{title:"Edit Version – FESTIVAL Pack'd"}}),a("form",{attrs:{name:"addVersionForm",novalidate:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 form-group"},[a("h4",{staticClass:"my-4"},[t._v("Version Info")]),a("label",[t._v("Version Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.versionData.version,expression:"versionData.version"}],staticClass:"form-control",attrs:{type:"text",placeholder:"1.0",disabled:""},domProps:{value:t.versionData.version},on:{input:function(e){e.target.composing||t.$set(t.versionData,"version",e.target.value)}}}),a("p",{staticClass:"text-muted text-right m-b-0"},[t._v(t._s(50-t.versionData.version.length))]),a("label",[t._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.versionData.changeText,expression:"versionData.changeText"}],staticClass:"form-control",staticStyle:{height:"250px"},attrs:{maxlength:"4000",autocomplete:"off",disabled:t.isDoingWork},domProps:{value:t.versionData.changeText},on:{input:[function(e){e.target.composing||t.$set(t.versionData,"changeText",e.target.value)},function(e){t.$v.$touch()}]}}),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-3"},[a("p",{staticClass:"text-muted text-right m-b-0"},[t._v(t._s(4e3-t.versionData.changeText.length))])])])]),a("div",{staticClass:"list-group col-md-6 m-b px-3"},[a("h4",{staticClass:"mb-4 mt-md-4"},[t._v("Options")]),a("div",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._m(1),a("div",{staticClass:"col-auto p-0"},[a("SwitchCheckbox",{class:{disabled:t.isDoingWork},attrs:{checkboxName:"visible"},on:{input:function(e){t.$v.$touch()}},model:{value:t.packageData.visible,callback:function(e){t.$set(t.packageData,"visible",e)},expression:"packageData.visible"}})],1)]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-6 mt-4 mt-md-0"},[a("h4",{staticClass:"mb-4"},[t._v("Package File")]),a("PackageFileSelector",{class:{disabled:t.isDoingWork},on:{input:function(e){t.$v.$touch()}},model:{value:t.selectedPackageFile,callback:function(e){t.selectedPackageFile=e},expression:"selectedPackageFile"}})],1)])])])])],1):t._e()])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-9"},[a("p",{staticClass:"text-muted text-left m-b-0"},[t._v("Descriptions support HTML")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-auto p-0"},[a("p",{staticClass:"m-0"},[t._v("Version is visible")])])}],n=(a("a481"),a("6762"),a("2fdb"),a("ac6a"),a("456d"),a("96cf"),a("1da1")),r=(a("cadf"),a("551c"),a("097d"),a("216c")),o=a("ef61"),c=a("f051"),l=a("a1ef"),u=a("b5ae"),d={name:"versionEdit",components:{Nav:r["a"],PackageFileSelector:o["a"],SwitchCheckbox:c["a"]},data:function(){return{packageData:null,versionData:{version:"",changeText:"",visible:!0},selectedPackageFile:null,isDoingWork:!1}},validations:{versionData:{version:{required:u["required"]},changeText:{required:u["required"]}}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isDoingWork=!0,t.next=3,l["d"].getPackage(this.$route.params.packageId);case 3:if(e=t.sent,200!=e.status){t.next=12;break}return this.packageData=e.data,t.next=8,l["d"].getPackageVersion(this.$route.params.packageId,this.$route.params.versionId);case 8:a=t.sent,200==a.status?(this.versionData=Object.keys(a.data).filter(function(t){return Object.keys(s.versionData).includes(t)}).reduce(function(t,e){return t[e]=a.data[e],t},{}),this.isDoingWork=!1):(this.isDoingWork=!1,this.versionData={status:a.status}),t.next=14;break;case 12:this.isDoingWork=!1,this.packageData={status:e.status};case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){window.scrollTo(0,0)},methods:{cancel:function(){var t=this,e=this;bootbox.confirm({title:"Canel?",message:"Are you sure you want to cancel? All unsaved progress will be lost.",buttons:{confirm:{label:"OK",className:"btn-danger"},cancel:{label:"Cancel",className:"btn-secondary"}},callback:function(){var a=Object(n["a"])(regeneratorRuntime.mark(function a(s){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:s&&e.$router.replace("/packages/".concat(t.$route.params.packageId));case 1:case"end":return a.stop()}},a,this)}));function s(t){return a.apply(this,arguments)}return s}()})},saveVersion:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isDoingWork=!0,t.next=3,l["d"].updatePackageVersion(this.$route.params.packageId,this.$route.params.versionId,this.versionData);case 3:if(e=t.sent,200!=e.status){t.next=16;break}if(!this.selectedPackageFile){t.next=12;break}return t.next=8,l["d"].uploadPackageFile(this.$route.params.packageId,e.data.id,this.selectedPackageFile);case 8:if(a=t.sent,200==a.status){t.next=12;break}return this.isDoingWork=!1,t.abrupt("return",bootbox.alert("There was an error uploading the package file.<br>You need to manually upload the package file again through the Version manager.<br><br>".concat(a.data.message)));case 12:this.$v.$reset(),this.isDoingWork=!1,t.next=18;break;case 16:this.isDoingWork=!1,bootbox.alert("There was an error updating the version.<br><br>".concat(e.data.message));case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectPackage:function(t){this.$v.$touch(),this.selectedPackageFile=t.target.files[0]}}},v=d,g=a("2877"),p=Object(g["a"])(v,s,i,!1,null,null,null);p.options.__file="VersionEdit.vue";e["default"]=p.exports}}]);
//# sourceMappingURL=versionEdit.371bcda9.js.map