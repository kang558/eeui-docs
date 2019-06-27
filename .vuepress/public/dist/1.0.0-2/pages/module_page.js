// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=94)}({0:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t){return Array.isArray(t)?t:Array.from(t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a={isNullOrUndefined:function(t){return void 0===t||null===t},isFunction:function(t){return!a.isNullOrUndefined(t)&&"function"==typeof t},isObject:function(t){return!a.isNullOrUndefined(t)&&"object"===(void 0===t?"undefined":s(t))},likeArray:function(t){return!a.isNullOrUndefined(t)&&"number"==typeof t.length},isJson:function(t){return a.isObject(t)&&!a.likeArray(t)},getObject:function(t,e){var n=t;if(0===a.count(t)||0===a.count(e))return"";var r=e.replace(/,/g,"|").replace(/\./g,"|").split("|");return a.each(r,function(t,e){n=void 0===n[e]?"":n[e]}),n},each:function(t,e){var n=void 0,r=void 0;if(a.likeArray(t)){if("number"==typeof t.length)for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(t.hasOwnProperty(r)&&!1===e.call(t[r],r,t[r]))return t;return t},last:function(t){var e=!1;return"object"===(void 0===t?"undefined":s(t))&&t.length>0&&(e=t[t.length-1]),e},delLast:function(t){var e=[];return"object"===(void 0===t?"undefined":s(t))&&t.length>0&&a.each(t,function(n,r){n<t.length-1&&e.push(r)}),e},strExists:function(t,e){return t+="",e+="",-1!==t.indexOf(e)},leftExists:function(t,e){return t+="",e+="",t.substring(0,e.length)===e},rightExists:function(t,e){return t+="",e+="",t.substring(t.length-e.length)===e},getMiddle:function(t,e,n){return t+="",a.ishave(e)&&a.strExists(t,e)&&(t=t.substring(t.indexOf(e)+e.length)),a.ishave(n)&&a.strExists(t,n)&&(t=t.substring(0,t.indexOf(n))),t},subString:function(t,e,n){return t+="",a.ishave(n)||(n=t.length),t.substring(e,n)},randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",n=e.length,r="",i=0;i<t;i++)r+=e.charAt(Math.floor(Math.random()*n));return r},ishave:function(t){return!(null===t||"null"===t||void 0===t||"undefined"===t||!t)},zeroFill:function(t,e,n){if(t+="",t.length>=e)return t;for(var r="",i=0;i<e;i++)r+="0";return n||void 0===n?(r+""+t).substr(-1*e):(t+""+r).substr(0,e)},formatDate:function(t,e){if(""===t&&(t="Y-m-d H:i:s"),void 0===e)e=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(e))e*=1e3;else if(/^(-)?\d{1,13}$/.test(e))e*=1e3;else if(/^(-)?\d{1,14}$/.test(e))e*=100;else if(/^(-)?\d{1,15}$/.test(e))e*=10;else{if(!/^(-)?\d{1,16}$/.test(e))return e;e*=1}var n=new Date(e);return parseInt(n.getFullYear())+""=="NaN"?e:(t=t.replace(/Y/g,n.getFullYear()),t=t.replace(/m/g,a.zeroFill(n.getMonth()+1,2)),t=t.replace(/d/g,a.zeroFill(n.getDate(),2)),t=t.replace(/H/g,a.zeroFill(n.getHours(),2)),t=t.replace(/i/g,a.zeroFill(n.getMinutes(),2)),t=t.replace(/s/g,a.zeroFill(n.getSeconds(),2)))},isDate:function(t){var e=/^(\d{4})-(\d{2})-(\d{2})$/,n=t+"";return""!==n&&!(!e.test(n)&&RegExp.$2<=12&&RegExp.$3<=31)},isMobile:function(t){return/^1(3|4|5|7|8)\d{9}$/.test(t)},formatMobile:function(t){return 0===a.count(t)?"":t.substring(0,3)+"****"+t.substring(t.length-4)},clone:function(t){if("object"!==(void 0===t?"undefined":s(t)))return t;if(null===t)return t;if(a.likeArray(t)){return o(t).slice(0)}return i(t,[])},count:function(t){try{if(void 0===t)return 0;if("number"==typeof t&&(t+=""),"number"==typeof t.length)return t.length;var e=0,n=void 0;for(n in t)e++;return e}catch(t){return 0}},runNum:function(t,e){var n=Number(t);if(n+""=="NaN"&&(n=0),/^[0-9]*[1-9][0-9]*$/.test(e)){n=n.toFixed(e);if(n.indexOf(".")<0){n+=".";for(var r=0;r<e;r++)n+="0"}}return n},formatSeconds:function(t){var e=parseInt(t),n=0,r=0;e>60&&(n=parseInt(e/60),e=parseInt(e%60),n>60&&(r=parseInt(n/60),n=parseInt(n%60)));var i=parseInt(e)+"秒";return n>0&&(i=parseInt(n)+"分"+i),r>0&&(i=parseInt(r)+"小时"+i),i},jsonParse:function(t,e){try{return JSON.parse(t)}catch(t){return e||{}}},jsonStringify:function(t,e){try{return JSON.stringify(t)}catch(t){return e||""}},removerNumberNaN:function(){for(var t=[],e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.forEach(function(e){isNaN(Number(e))||t.push(e)}),t},runMax:function(){return Math.max.apply(Math,r(a.removerNumberNaN.apply(a,arguments)))},runMin:function(){return Math.min.apply(Math,r(a.removerNumberNaN.apply(a,arguments)))},stringConnect:function(){for(var t=null,e="",n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.forEach(function(n){null===t?t=n:n&&(n&&e&&(e+=t),e+=n)}),e},bytesToSize:function(t){if(0===t)return"0 B";var e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(1024));return void 0===e[n]?"0 B":a.runNum(t/Math.pow(1024,n),2)+" "+e[n]}};t.exports=a},1:function(t,e,n){"use strict";var r=n(0),i=app.requireModule("eeui"),o={jshome:"https://eeui.app/dist/1.0.0-2/pages/",openViewCode:function(t){o.openViewUrl("https://eeui.app/"+t+".html")},openViewUrl:function(t){i.openPage({url:o.jshome+"index_browser.js",pageType:"app",statusBarColor:"#3EB4FF",params:{title:"EEUI",url:t}})},checkVersion:function(t){return"function"==typeof i.getVersion&&(0,r.runNum)(i.getVersion())>=(0,r.runNum)(t)}};t.exports=o},100:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app"]},[n("navbar",{staticClass:["navbar"]},[n("navbar-item",{attrs:{type:"back"}}),n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["title"]},[t._v("页面功能")])]),n("navbar-item",{attrs:{type:"right"},on:{click:function(e){t.viewCode("module/newPage")}}},[n("icon",{staticClass:["iconr"],attrs:{content:"md-code-working"}})],1)],1),n("div",{staticClass:["content"]},[n("text",{staticClass:["button"],on:{click:t.openPage}},[t._v("打开一个普通的页面")]),n("text",{staticClass:["button"],on:{click:t.openPage2}},[t._v("打开一个沉浸式页面")]),n("text",{staticClass:["button"],on:{click:t.openPage3}},[t._v("打开一个全屏的页面")]),n("text",{staticClass:["button"],on:{click:t.openPage4}},[t._v("打开一个WEB页面")]),n("div",{staticClass:["item"],on:{click:function(e){t.isLight=!t.isLight}}},[n("text",{staticClass:["item-title"]},[t._v("状态栏字体颜色")]),n("div",{staticClass:["item-input"]}),n("w-switch",{staticClass:["switch"],model:{value:t.isLight,callback:function(e){t.isLight=e},expression:"isLight"}})],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},94:function(t,e,n){var r,i,o=[];o.push(n(95)),r=n(96);var s=n(100);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/module_page.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-54cb5ea4",i.style=i.style||{},o.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),t.exports=r,t.exports.el="true",new Vue(t.exports)},95:function(t,e){t.exports={app:{width:"750",flex:1},navbar:{width:"750",height:"100"},title:{fontSize:"28",color:"#ffffff"},iconr:{width:"100",height:"100",color:"#ffffff"},content:{flex:1,justifyContent:"center",alignItems:"center"},button:{width:"380",fontSize:"24",textAlign:"center",marginTop:"20",marginBottom:"20",paddingTop:"26",paddingBottom:"26",paddingLeft:"30",paddingRight:"30",color:"#ffffff",backgroundColor:"#00B4FF"},item:{width:"380",height:"100",flexDirection:"row",alignItems:"center",backgroundColor:"#ffffff",marginTop:"20",marginBottom:"20"},"item-title":{fontSize:"28",marginLeft:"24",marginRight:"34",color:"#242424"},"item-input":{flex:1,fontSize:"28",height:"80",paddingRight:"24",textAlign:"right"},switch:{width:"86",height:"50",marginRight:"24"}}},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(97),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=app.requireModule("eeui");e.default={components:{WSwitch:o.default},data:function(){return{isLight:!1}},mounted:function(){s.statusBarStyle(this.isLight)},watch:{isLight:function(t){s.statusBarStyle(t)}},methods:{viewCode:function(t){(0,r.openViewCode)(t)},openPage:function(){s.openPage({url:"http://dotwe.org/raw/dist/25f26c060a9358ebfce419f1a0dc7f9b.bundle.wx"})},openPage2:function(){s.openPage({url:"http://dotwe.org/raw/dist/a3ccb0407c780c120c65ade15c6c7110.bundle.wx",statusBarType:"immersion"})},openPage3:function(){s.openPage({url:"http://dotwe.org/raw/dist/c7f96bf3571cc23a94127a6835d1c7a4.bundle.wx",statusBarType:"fullscreen"})},openPage4:function(){s.openPage({url:"https://eeui.app",pageType:"web"})}}}},97:function(t,e,n){var r,i,o=[];r=n(98);var s=n(99);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/components/WSwitch.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i.style=i.style||{},o.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),t.exports=r},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=app.requireModule("animation");e.default={name:"WSwitch",props:{value:{type:Boolean,default:!1},solid:Boolean,disabled:{type:Boolean,default:!1},blurColor:String,focusColor:String,borderColor:{type:String,default:"#D9D9D9"},backgroundColor:{type:String,default:"#E31D1A"}},data:function(){return{wRatio:1,hRatio:1,loadIng:!1,isAnimate:!1,_checked:!1,_ballStyle:{}}},created:function(){this.inited()},mounted:function(){var t=this;this.wRatio=this.$refs.wSwitch.style.width/144,this.hRatio=this.$refs.wSwitch.style.height/72,this.$nextTick(function(){t.inited()})},computed:{getBgStyle:function(){var t=this.solid,e=this.borderColor,n=this.backgroundColor,r=this.disabled,i=this.wRatio,o=this.hRatio,s=t?{borderColor:n,backgroundColor:n}:{borderColor:e,backgroundColor:"transparent"};return s.opacity=r?.3:1,s.flexDirection="row",s.alignItems="center",s.width=144*i,s.height=72*o,s.borderRadius=72*o,s.borderWidth=5*o,s},ballStyle:function(){var t=this._ballStyle,e=this._checked,n=this.hRatio,r=this.focusColor,i=this.solid,o=this.backgroundColor,s=this.blurColor,a=this.borderColor,u=t;return u.width=72*n-5*n*2,u.height=72*n-5*n*2,u.borderRadius=u.width/2,u.backgroundColor=e?r||(i?"#FFFFFF":o):s||(i?"#FFFFFF":a),u}},watch:{value:function(t){this._checked=t,this.toggleState(t)}},methods:{changeState:function(){var t=this;this.loadIng||this.disabled||(this._checked=!this._checked,this.toggleState(this._checked),this.loadIng=!0,setTimeout(function(){t.$emit("input",t._checked),t.loadIng=!1},260))},toggleState:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t?{backgroundColor:this.focusColor||(this.solid?"#FFFFFF":this.backgroundColor),transform:"scale(0.8) translate("+(144*this.wRatio-(72*this.hRatio-5*this.hRatio*2)-5*this.hRatio*2)+"px, 0)",transformOrigin:"center center"}:{backgroundColor:this.blurColor||(this.solid?"#FFFFFF":this.borderColor),transform:"scale(0.6)",transformOrigin:"center center"},i=this.$refs.wBall;i&&r.transition(i,{styles:n,timingFunction:"ease",duration:e?260:1e-5})},inited:function(){this.value?this._ballStyle={backgroundColor:this.focusColor||(this.solid?"#FFFFFF":this.backgroundColor),transform:"scale(0.8) translate("+(144*this.wRatio-(72*this.hRatio-5*this.hRatio*2)-5*this.hRatio*2)+"px, 0)"}:this._ballStyle={backgroundColor:this.blurColor||(this.solid?"#FFFFFF":this.borderColor),transform:"scale(0.6)"},this._checked=this.value,this.toggleState(this._checked,!1)}}}},99:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wSwitch",style:t.getBgStyle,on:{click:t.changeState}},[n("div",{ref:"wBall",style:t.ballStyle})])},staticRenderFns:[]},t.exports.render._withStripped=!0}});