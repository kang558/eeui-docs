// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(e){function t(s){if(a[s])return a[s].exports;var n=a[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,s){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=36)}({36:function(e,t,a){var s,n,r=[];r.push(a(37)),s=a(38);var i=a(39);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=s=s.default),"function"==typeof n&&(n=n.options),n.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/component_tabbar.vue",n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-f3a30b38",n.style=n.style||{},r.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),e.exports=s,e.exports.el="true",new Vue(e.exports)},37:function(e,t){e.exports={app:{flex:1},iconr:{width:"100",height:"100",color:"#ffffff"},tabbar:{width:"750",flex:1},"page-content":{width:"750",paddingTop:"200",paddingBottom:"200",alignItems:"center"},"content-text":{fontSize:"24",paddingTop:"20",paddingRight:"20",paddingBottom:"20",paddingLeft:"20"},"page-navbar":{width:"750",height:"90"},"page-navbar-title":{color:"#ffffff",fontSize:"28"},"page-content-image":{width:"480",height:"480",marginTop:"30",marginBottom:"30"}}},38:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=app.requireModule("eeui");t.default={methods:{viewCode:function(e){this.openViewCode(e)},pageSelected:function(e){s.toast({message:"切换到第"+(e.position+1)+"个标签页",gravity:"middle"})},tabReselect:function(e){s.toast({message:"第"+(e.position+1)+"个标签页被再次点击",gravity:"middle"}),s.toast()},refreshListener:function(e){var t=this;setTimeout(function(){s.toast({message:"刷新成功："+e.tabName,gravity:"middle"}),t.$refs[e.tabName].refreshEnd()},1e3)}}}},39:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:["app"]},[a("tabbar",{ref:"reflectName",staticClass:["tabbar"],attrs:{eeui:{tabType:"bottom"}},on:{pageSelected:e.pageSelected,tabReselect:e.tabReselect}},[a("tabbar-page",{ref:"name_1",attrs:{eeui:{tabName:"name_1",title:"首页",selectedIcon:"md-home"}},on:{refreshListener:e.refreshListener}},[a("navbar",{staticClass:["page-navbar"]},[a("navbar-item",{attrs:{type:"back"}}),a("navbar-item",{attrs:{type:"title"}},[a("text",{staticClass:["page-navbar-title"]},[e._v("首页")])]),a("navbar-item",{attrs:{type:"right"},on:{click:function(t){e.viewCode("component/tabbar")}}},[a("icon",{staticClass:["iconr"],attrs:{content:"md-code-working"}})],1)],1),a("div",{staticClass:["page-content"]},[a("image",{staticClass:["page-content-image"],attrs:{src:"https://eeui.app/assets/images/cartoon/m2.png"}}),a("text",{staticClass:["content-text"]},[e._v("页签里面可以放任何子组件，感谢你对eeui的支持")])])],1),a("tabbar-page",{ref:"name_2",attrs:{eeui:{tabName:"name_2",title:"好友",message:3,selectedIcon:"https://eeui.app/assets/images/cartoon/m8.png",unSelectedIcon:"https://eeui.app/assets/images/cartoon/m7.png"}},on:{refreshListener:e.refreshListener}},[a("navbar",{staticClass:["page-navbar"]},[a("navbar-item",{attrs:{type:"title"}},[a("text",{staticClass:["page-navbar-title"]},[e._v("好友")])])],1),a("div",{staticClass:["page-content"]},[a("text",{staticClass:["content-text"]},[e._v("page 2，tab显示器图标支持网络图片")])])],1),a("tabbar-page",{ref:"name_3",attrs:{eeui:{tabName:"name_3",title:"圈子",message:99,selectedIcon:"md-aperture"}},on:{refreshListener:e.refreshListener}},[a("navbar",{staticClass:["page-navbar"]},[a("navbar-item",{attrs:{type:"title"}},[a("text",{staticClass:["page-navbar-title"]},[e._v("操作")])])],1),a("div",{staticClass:["page-content"]},e._l(20,function(t){return a("text",{staticClass:["content-text"]},[e._v("长页面占位 "+e._s(t))])}))],1),a("tabbar-page",{ref:"name_4",attrs:{eeui:{tabName:"name_4",title:"设置",dot:!0,selectedIcon:"md-cog"}},on:{refreshListener:e.refreshListener}},[a("navbar",{staticClass:["page-navbar"]},[a("navbar-item",{attrs:{type:"title"}},[a("text",{staticClass:["page-navbar-title"]},[e._v("设置")])])],1),a("div",{staticClass:["page-content"]},[a("text",{staticClass:["content-text"]},[e._v("page 4")])])],1)],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});