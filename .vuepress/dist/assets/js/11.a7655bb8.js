(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{157:function(t,e){t.exports={leftExists:function(t,e,a){return t+="",e+="",!0!==a&&(t=t.toLowerCase(),e=e.toLowerCase()),t.substring(0,e.length)===e},savaToLocal:function(t,e,a,n){try{void 0===n&&(n="__seller__");var s=window.localStorage[n];s?(s=JSON.parse(s))[t]||(s[t]={}):(s={})[t]={},s[t][e]=a,window.localStorage[n]=JSON.stringify(s)}catch(t){}},loadFromlLocal:function(t,e,a,n){void 0===n&&(n="__seller__");var s=window.localStorage[n];return s&&(s=JSON.parse(s)[t])&&s[e]||a},each:function(t,e){var a,n;if(null===t)return t;if(t.length){if("number"==typeof t.length)for(a=0;a<t.length;a++)if(!1===e.call(t[a],a,t[a]))return t}else for(n in t)if(t.hasOwnProperty(n)&&!1===e.call(t[n],n,t[n]))return t;return t},count:function(t){try{if(void 0===t)return 0;if("number"==typeof t&&(t+=""),"number"==typeof t.length)return t.length;var e,a=0;for(e in t)a++;return a}catch(t){return 0}},randNum:function(t,e){var a=e-t,n=Math.random();return t+Math.round(n*a)},pluginsTypes:function(){return[{name:"component",title:"界面组件"},{name:"module",title:"功能模块"},{name:"media",title:"多媒体"},{name:"sensor",title:"传感器"},{name:"device",title:"设备访问"},{name:"network",title:"网络通信"},{name:"geolocation",title:"地理定位"},{name:"opensdk",title:"开放SDK"}]}}},158:function(t,e,a){},316:function(t,e,a){"use strict";var n=a(158);a.n(n).a},349:function(t,e,a){"use strict";a.r(e);a(61),a(68);var n=a(157),s=a(181),i=a.n(s),o={data:function(){return{loadIng:"",pluginsTypes:Object(n.pluginsTypes)(),key:"",type:"all",loadError:"",lists:[],nextPage:1}},mounted:function(){var t=this.$el.parentNode;t.style.setProperty("max-width","none","important"),t.style.setProperty("padding","0","important"),t.nextElementSibling.style.setProperty("display","none","important"),this.load()},watch:{type:function(t){t&&(this.key="",this.nextPage=1,this.lists=[],this.load())}},methods:{loadFinish:function(){var t=this;"start"===this.loadIng&&(this.$refs.myLoading.addEventListener("transitionend",function(e){setTimeout(function(){t.loadIng="finish"},100)},!1),setTimeout(function(){t.loadIng="finish"},1e3),this.loadIng="end")},search:function(){this.type="",this.nextPage=1,this.lists=[],this.load()},load:function(){var t=this;this.loadError="",this.loadIng="ready",this.loadIng="start",i.a.get("https://console.eeui.app/api/plugin?__Access-Control-Allow-Origin=1",{params:{where:{name:this.key,type:this.type},page:this.nextPage,pagesize:30}}).then(function(e){if(t.loadFinish(),200!==e.status)return t.nextPage=0,void(t.loadError="网络繁忙，请稍后再试......");var a=e.data;1===a.ret?(1===a.data.currentPage&&(t.lists=[]),a.data.lists.forEach(function(e){t.lists.push(e)}),t.nextPage=a.data.hasMorePages?a.data.currentPage+1:0):(t.nextPage=0,t.loadError=a.msg)})},detail:function(t){this.$router.push({path:"detail.html",hash:t})}}},l=(a(316),a(0)),r=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"markets-main"},[a("div",{ref:"myLoading",staticClass:"eeui-loading",class:"eeui-loading-"+t.loadIng}),t._v(" "),a("div",{staticClass:"markets-body"},[a("div",{staticClass:"title"},[t._v("EEUI.APP 插件市场")]),t._v(" "),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"text",placeholder:"搜索插件"},domProps:{value:t.key},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.key=e.target.value)}}}),t._v(" "),a("em",{on:{click:t.search}})]),t._v(" "),a("div",{staticClass:"type"},[a("div",{class:["all"===t.type?"active":""],on:{click:function(e){t.type="all"}}},[t._v("　全部　")]),t._v(" "),t._l(t.pluginsTypes,function(e,n){return a("div",{key:n,class:[t.type===e.name?"active":""],on:{click:function(a){t.type=e.name}}},[t._v(t._s(e.title))])})],2),t._v(" "),a("div",{staticClass:"lists"},t._l(t.lists,function(e,n){return a("div",{key:n,staticClass:"item",on:{click:function(a){return t.detail(e.name)}}},[a("div",{staticClass:"card-title"},[a("div",{staticClass:"name"},[a("span",[t._v(t._s(e.title)+" | "+t._s(e.name))]),t._v(" "),1===e.android?a("div",{staticClass:"logo-android"}):t._e(),t._v(" "),1===e.ios?a("div",{staticClass:"logo-apple"}):t._e()])]),t._v(" "),a("div",{staticClass:"up"},[a("div",{staticClass:"author"},[a("img",{attrs:{src:e.userimg}}),t._v(" "),a("span",[t._v(t._s(e.username))]),t._v(" "),1===e.userid?a("div",{staticClass:"volcano"},[t._v("官方")]):a("div",{staticClass:"purple"},[t._v("开发者")])]),t._v(" "),a("div",{staticClass:"installcount"},[a("div",{staticClass:"download-outline"}),a("span",[t._v(t._s(e.install))])])]),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v(t._s(e.desc))])]),t._v(" "),a("div",{staticClass:"low"},[a("div",{staticClass:"rate"},t._l(5,function(t){return a("em",{key:t})}),0),t._v(" "),a("button",{staticClass:"install"},[t._v("安装")])])])}),0),t._v(" "),t.nextPage>1?a("button",{staticClass:"more",on:{click:t.load}},[t._v("点击加载更多...")]):t.loadError?a("div",{staticClass:"error"},[t._v(t._s(t.loadError))]):t._e()])])},[],!1,null,"0b04b629",null);e.default=r.exports}}]);