// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=80)}({80:function(t,e,n){var o,r,a=[];a.push(n(81)),o=n(82);var i=n(83);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/module_captcha.vue",r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-6f36c8aa",r.style=r.style||{},a.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,a),t.exports=o,t.exports.el="true",new Vue(t.exports)},81:function(t,e){t.exports={app:{width:"750",flex:1},navbar:{width:"750",height:"100"},title:{fontSize:"28",color:"#ffffff"},iconr:{width:"100",height:"100",color:"#ffffff"},content:{flex:1,justifyContent:"center",alignItems:"center"},button:{fontSize:"24",textAlign:"center",marginTop:"20",paddingTop:"20",paddingBottom:"20",width:"220",color:"#ffffff",backgroundColor:"#00B4FF"}}},82:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=app.requireModule("eeui");e.default={methods:{viewCode:function(t){this.openViewCode(t)},swipeCaptcha:function(){o.swipeCaptcha(null,function(t){switch(t.status){case"success":o.toast("验证成功");break;case"failed":o.toast("验证失败")}})}}}},83:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app"]},[n("navbar",{staticClass:["navbar"]},[n("navbar-item",{attrs:{type:"back"}}),n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["title"]},[t._v("弹窗验证")])]),n("navbar-item",{attrs:{type:"right"},on:{click:function(e){t.viewCode("module/captcha")}}},[n("icon",{staticClass:["iconr"],attrs:{content:"md-code-working"}})],1)],1),n("div",{staticClass:["content"]},[n("text",{staticClass:["button"],on:{click:t.swipeCaptcha}},[t._v("开始验证")])])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});