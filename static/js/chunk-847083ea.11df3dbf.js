(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-847083ea"],{"54ef":function(t,e,s){t.exports=s.p+"static/img/equip6.d39080f2.png"},"69c8":function(t,e,s){t.exports=s.p+"static/img/equip1.1fb9501d.png"},"87e0":function(t,e,s){},"9ed6":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"login-container"},[n("el-row",{staticStyle:{width:"100%"}},[n("el-col",{staticClass:"carousel-container",attrs:{xs:0,sm:13,md:15,lg:15,xl:15}},[n("el-carousel",{staticClass:"carouselPic",attrs:{interval:3e3,type:"",height:"500px"}},t._l(t.imageArray,(function(t,e){return n("el-carousel-item",{key:e},[n("img",{staticClass:"carouselPic-img",attrs:{src:t.src,alt:""}})])})),1)],1),n("el-col",{attrs:{xs:24,sm:11,md:9,lg:9,xl:9}},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"login-pic"},[n("img",{attrs:{src:s("0e44"),alt:"login picture"}})]),n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v(" "+t._s(t.$t("login.title")))]),n("lang-select",{staticClass:"set-language"})],1),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:t.$t("login.username"),name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:"大写已打开",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v(" "+t._s(t.$t("login.logIn"))+" ")]),n("div",{staticClass:"tips"},[n("span",[t._v("版本信息 : V1.1.0")])])],1)],1)],1)],1)},a=[],i=(s("d9e2"),s("14d9"),s("13d5"),s("d3b7"),s("b64b"),s("61f7")),o=s("1131"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"social-signup-container"},[s("div",{staticClass:"sign-btn",on:{click:function(e){return t.wechatHandleClick("wechat")}}},[s("span",{staticClass:"wx-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" WeChat ")]),s("div",{staticClass:"sign-btn",on:{click:function(e){return t.tencentHandleClick("tencent")}}},[s("span",{staticClass:"qq-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ ")])])},c=[],l={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},u=l,p=(s("bfec"),s("2877")),d=Object(p["a"])(u,r,c,!1,null,"7309fbbb",null),g=d.exports,f={name:"Login",components:{LangSelect:o["a"],SocialSign:g},data:function(){var t=function(t,e,s){Object(i["d"])(e)?s():s(new Error("请输入正确的用户名"))},e=function(t,e,s){e.length<6?s(new Error("密码位数不能少于6位")):s()};return{loginForm:{username:"admin",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},imageArray:[{name:"图片1",src:s("69c8")},{name:"图片2",src:s("aab2")},{name:"图片3",src:s("a99b")},{name:"图片4",src:s("f6dd")},{name:"图片5",src:s("d5a5")},{name:"图片6",src:s("54ef")}]}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;if("drlaser"!==this.loginForm.password)return this.$message.error("密码输入错误！"),!1;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:"/centercontrol-line/search-eqp-info"}),t.loading=!1})).catch((function(e){t.$message({message:"登录失败："+e,type:"error"}),t.loading=!1}))}))},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,s){return"redirect"!==s&&(e[s]=t[s]),e}),{})}}},m=f,h=(s("d537"),s("f3bb"),Object(p["a"])(m,n,a,!1,null,"36b5306e",null));e["default"]=h.exports},a99b:function(t,e,s){t.exports=s.p+"static/img/equip3.7fdfc1b7.png"},aab2:function(t,e,s){t.exports=s.p+"static/img/equip2.65ac4f12.png"},bfec:function(t,e,s){"use strict";s("87e0")},d537:function(t,e,s){"use strict";s("ef38")},d5a5:function(t,e,s){t.exports=s.p+"static/img/equip5.7eb9332a.png"},ef38:function(t,e,s){},f2ac:function(t,e,s){},f3bb:function(t,e,s){"use strict";s("f2ac")},f6dd:function(t,e,s){t.exports=s.p+"static/img/equip4.923cfcb6.png"}}]);