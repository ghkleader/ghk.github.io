(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c52b516"],{"35b8":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("d3b7"),a("3ca3"),a("ddb0");function r(e,t,r){Promise.all([a.e("chunk-234ecc1b"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(a){a.export_json_to_excel({header:e,data:t,filename:r})}))}},"363a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-eqp-info-main-container"},[a("div",{staticClass:"head_container"},[a("el-row",[a("el-col",[a("div",{staticClass:"search-container filter-item"},[a("label",[e._v("设备名称")]),a("el-select",{staticStyle:{width:"400px"},attrs:{filterable:"",multiple:"","collapse-tags":"",placeholder:"请选择设备名称"},model:{value:e.search.selectedEqpName,callback:function(t){e.$set(e.search,"selectedEqpName",t)},expression:"search.selectedEqpName"}},e._l(e.equipmentList,(function(e){return a("el-option",{key:e.Id,attrs:{label:e.EqpName+"("+e.Workline+")",value:e.EqpName}})})),1),a("br"),a("label",[e._v("统计周期")]),a("el-select",{attrs:{placeholder:"请选择统计周期"},on:{change:e.setPeriodMode},model:{value:e.search.periodMode,callback:function(t){e.$set(e.search,"periodMode",t)},expression:"search.periodMode"}},e._l(e.periodModeArray,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),a("br"),a("label",[e._v("开始时间")]),a("el-date-picker",{attrs:{type:e.DateType,clearable:!1,placeholder:"选择日期时间",align:"right","picker-options":e.startPickerOptions},model:{value:e.search.startTime,callback:function(t){e.$set(e.search,"startTime",t)},expression:"search.startTime"}}),a("label",{staticStyle:{"margin-left":"10px"}},[e._v("结束时间")]),a("el-date-picker",{attrs:{type:e.DateType,clearable:!1,placeholder:"选择日期时间",align:"right","picker-options":e.endPickerOptions},model:{value:e.search.endTime,callback:function(t){e.$set(e.search,"endTime",t)},expression:"search.endTime"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleDraw}},[e._v(" 绘制 ")])],1)])],1)],1),a("div",{staticClass:"show-container"},[a("el-row",[a("el-col",{staticStyle:{"background-color":"#fff"}},[a("div",["everyHour"==e.search.periodMode?a("Activation-BarChart",{attrs:{data:e.actBarSrcData,config:e.actBarConfig}}):e._e(),"everyDay"==e.search.periodMode?a("Activation-BarChart",{attrs:{data:e.actBarSrcData,config:e.actBarConfig}}):e._e(),"everyMonth"==e.search.periodMode?a("Activation-BarChart",{attrs:{data:e.actBarSrcData,config:e.actBarConfig}}):e._e()],1)])],1)],1)])},i=[],n=(a("ac1f"),a("841c"),a("14d9"),a("7cb6")),o=a("71dc"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},c=[],l=(a("b0c0"),a("b680"),a("313e")),d=a("ed08"),u={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var e=this;this.$_resizeHandler=Object(d["b"])((function(){e.chart&&e.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(e){"width"===e.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}},h=a("35b8");a("817d"),a("9fad");var p=2e3,f={mixins:[u],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"},data:{type:Object,default:function(){return{eqpName:["测试"],xData:[1,2,3,4,5,6,7],yData:[2080,2032,4e3,3314,3690,6040,4820]}}},config:{type:Object,default:function(){return{title:"每日稼动率",dataClass:"everyDay",legendData:["稼动率(%)","累计值(%)"],valueLabelIsShow:!0}}}},data:function(){return{seriesData:[],chart:null}},watch:{data:{handler:function(e){this.chartSetOption()},deep:!0}},mounted:function(){var e=this;this.$nextTick((function(){e.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=l["init"](this.$el,"macarons"),this.chartSetOption()},chartSetOption:function(){if(0===this.data.xData.length)this.showNoDataOption();else{this.seriesData=[];for(var e=0;e<this.data.yData.length;e++){var t={name:this.data.eqpName[e],type:"line",data:this.data.yData[e]};this.seriesData.push(t)}this.setTwoDimHourDayMonthOption()}},showNoDataOption:function(){var e=this;this.chart.clear(),this.chart.setOption({title:{text:this.config.title,left:"center",top:10,textStyle:{fontWeight:"normal",color:"black",fontSize:"22",fontFamily:"Arial"}},graphic:{type:"text",left:"center",top:"50%",style:{text:"暂无数据",fontSize:"22",fontFamily:"Arial",fill:"#909399"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{top:"10%",itemWidth:44,itemHeight:22,textStyle:{fontSize:15}},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0,optionToContent:function(e){for(var t=e.xAxis[0].data,a=e.series,r='<table  border="1px" bordercolor="#e0dddd" cellspacing="0" style="width:100%;text-align:center"><tbody><tr><th style="padding:10px">时间</th>',i=0,n=a.length;i<n;i++)r+="<th>"+a[i].name+"</th>";r+="</tr>";for(var o=0,s=t.length;o<s;o++){var c=[];c.push(t[o]),r+="<tr><td>"+t[o]+"</td>";for(var l=0,d=a.length;l<d;l++)r+="<td>"+a[l].data[o]+"</td>",c.push(a[l].data[o])}return r+="</tbody></table>",r}},myExportToExcel:{show:!0,title:"导出Excel",icon:"path://M725.312 608.768V433.152c0-74.112-326.784 24.192-384 263.424 0 0-75.584 88-85.312 0 0 0 109.696-482.944 469.312-482.944V81.92s42.688-61.824 128 43.968L1024 301.44l-298.688 307.328zM128 433.152a43.392 43.392 0 0 0-42.688 43.968v351.232c0 24.256 19.072 43.904 42.688 43.904h725.312a43.328 43.328 0 0 0 42.688-43.904v-43.904c0-24.256 19.072-43.968 42.688-43.968 23.616 0 42.688 19.712 42.688 43.968v87.808C981.312 920.768 943.104 960 896 960H85.312C38.208 960 0 920.768 0 872.256V433.152c0-48.512 38.208-87.808 85.312-87.808H128c23.552 0 42.688 19.648 42.688 43.904A43.328 43.328 0 0 1 128 433.152z",onclick:function(t){var a=[],r=[];a.push("时间");for(var i=0;i<e.data.eqpName.length;i++)a.push(e.data.eqpName[i]);for(var n=0;n<e.data.xData.length;n++){var o=[];o.push(e.data.xData[n]);for(var s=0;s<e.data.yData.length;s++)o.push(e.data.yData[s][n]);r.push(o)}Object(h["a"])(a,r,e.$moment(new Date).format("YYYY-MM-DD HH:mm:ss")+"_稼动率")}},restore:{show:!0},saveAsImage:{show:!0},magicType:{type:["line","bar","stack"]}}},grid:{top:80,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.data.xData,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}},{type:"value",position:"right",alignTicks:!0,axisLine:{show:!1,lineStyle:{color:"red"}}}],series:[{name:this.config.legendData[0],type:"bar",stack:"vistors",barWidth:"60%",label:{show:this.config.valueLabelIsShow,position:"inside",color:"white",fontSize:12},animationDuration:p},{name:this.config.legendData[1],type:"line",yAxisIndex:1,animationDuration:p}],color:["#91CC75","#EE6666"]},!0)},setTwoDimHourDayMonthOption:function(){var e=this;this.chart.clear(),this.chart.setOption({title:{text:this.config.title,x:"center",top:10,textStyle:{fontWeight:"normal",color:"black",fontSize:"22",fontFamily:"Arial"}},tooltip:{trigger:"axis",axisPointer:{type:"line"},formatter:function(e){for(var t=e[0].name+"<br/>",a=0;a<e.length;a++)void 0!==e[a].data&&(t+=e[a].marker+e[a].seriesName+":&nbsp&nbsp&nbsp"+e[a].data.toFixed(2)+"%<br/>");return t}},legend:{top:"10%",itemWidth:44,itemHeight:22,textStyle:{fontSize:15}},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0,optionToContent:function(e){for(var t=e.xAxis[0].data,a=e.series,r='<table  border="1px" bordercolor="#e0dddd" cellspacing="0" style="width:100%;text-align:center"><tbody><tr><th style="padding:10px">时间</th>',i=0,n=a.length;i<n;i++)r+="<th>"+a[i].name+"</th>";r+="</tr>";for(var o=0,s=t.length;o<s;o++){var c=[];c.push(t[o]),r+="<tr><td>"+t[o]+"</td>";for(var l=0,d=a.length;l<d;l++)r+="<td>"+a[l].data[o]+"</td>",c.push(a[l].data[o])}return r+="</tbody></table>",r}},myExportToExcel:{show:!0,title:"导出Excel",icon:"path://M725.312 608.768V433.152c0-74.112-326.784 24.192-384 263.424 0 0-75.584 88-85.312 0 0 0 109.696-482.944 469.312-482.944V81.92s42.688-61.824 128 43.968L1024 301.44l-298.688 307.328zM128 433.152a43.392 43.392 0 0 0-42.688 43.968v351.232c0 24.256 19.072 43.904 42.688 43.904h725.312a43.328 43.328 0 0 0 42.688-43.904v-43.904c0-24.256 19.072-43.968 42.688-43.968 23.616 0 42.688 19.712 42.688 43.968v87.808C981.312 920.768 943.104 960 896 960H85.312C38.208 960 0 920.768 0 872.256V433.152c0-48.512 38.208-87.808 85.312-87.808H128c23.552 0 42.688 19.648 42.688 43.904A43.328 43.328 0 0 1 128 433.152z",onclick:function(t){var a=[],r=[];a.push("时间");for(var i=0;i<e.data.eqpName.length;i++)a.push(e.data.eqpName[i]);for(var n=0;n<e.data.xData.length;n++){var o=[];o.push(e.data.xData[n]);for(var s=0;s<e.data.yData.length;s++)o.push(e.data.yData[s][n]);r.push(o)}Object(h["a"])(a,r,e.$moment(new Date).format("YYYY-MM-DD HH:mm:ss")+"_稼动率")}},restore:{show:!0},saveAsImage:{show:!0},magicType:{type:["line","bar","stack"]}}},grid:{top:80,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.data.xData,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1},axisLabel:{formatter:function(e,t){return e+"%"}}}],series:this.seriesData},!0)}}},m=f,g=a("2877"),b=Object(g["a"])(m,s,c,!1,null,null,null),y=b.exports,v={name:"AlarmInfo",components:{ActivationBarChart:y},data:function(){return{actBarConfig:null,search:{periodMode:"everyHour",selectedEqpName:[],startTime:new Date((new Date).toLocaleDateString()+" 00:00:00"),endTime:new Date((new Date).toLocaleDateString()+" 24:00:00")},actBarConfigArray:{everyHour:{title:"每小时稼动率",dataClass:"everyHour",legendData:["稼动率(%)","累计值(%)"],valueLabelIsShow:!0},everyDay:{title:"每日稼动率",dataClass:"everyDay",legendData:["稼动率(%)","累计值(%)"],valueLabelIsShow:!0},everyMonth:{title:"每月稼动率",dataClass:"everyMonth",legendData:["稼动率(%)","累计值(%)"],valueLabelIsShow:!0}},actBarSrcData:{eqpName:[],xData:[],yData:[],yAverageData:[],ySumData:[]},periodModeArray:[{label:"每小时",value:"everyHour"},{label:"每日",value:"everyDay"},{label:"每月",value:"everyMonth"}],equipmentList:null,DateType:"datetime",DateTypeArray:{everyHour:"datetime",everyDay:"date",everyMonth:"month"},equipStatusMode:{run:1,alarm:2,standby:3,stop:4},equipStatus:1,startPickerOptions:{shortcuts:[{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}},{text:"一个月前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-2592e6),e.$emit("pick",t)}},{text:"六个月前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-15552e6),e.$emit("pick",t)}}]},endPickerOptions:{shortcuts:[{text:"今天",onClick:function(e){var t=new Date;t.setTime(t.getTime()),e.$emit("pick",t)}}]}}},created:function(){this.actBarConfig=this.actBarConfigArray["everyHour"],null==this.equipmentList&&this.getTotalList()},mounted:function(){},beforeDestroy:function(){},methods:{setPeriodMode:function(){this.DateType=this.DateTypeArray[this.search.periodMode],this.barConfig=this.barConfigArray[this.search.periodMode],this.actBarConfig=this.actBarConfigArray[this.search.periodMode]},formateTime:function(e){var t=e.getFullYear()+"-",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",r=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",i=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",n=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return t+a+r+i+n+o},getTotalList:function(){var e=this;Object(n["c"])().then((function(t){e.equipmentList=t.data.items;var a=[];a.push(e.equipmentList[0].EqpName),e.search.selectedEqpName=a,e.handleDraw()}))},handleDraw:function(){var e=this;0!==this.search.selectedEqpName.length?null!=this.search.startTime&&null!=this.search.endTime?this.search.startTime>this.search.endTime?this.$notify.error({title:"错误",message:"时间设置错误! 开始时间不能大于结束时间"}):Object(o["d"])(this.search).then((function(t){if(e.actBarSrcData=t.data,0!==t.data.xData.length){e.actBarSrcData.xData.push("平均值"),e.actBarSrcData.xData.push("累计值");for(var a=0;a<e.actBarSrcData.yData.length;a++)e.actBarSrcData.yData[a].push(e.actBarSrcData.yAverageData[a]),e.actBarSrcData.yData[a].push(e.actBarSrcData.ySumData[a])}})):this.$notify.error({title:"错误",message:"开始时间和结束时间为空！"}):this.$notify.error({title:"错误",message:"未获取到设备名称，网络故障! 请重新刷新页面！"})}}},D=v,x=(a("d747"),Object(g["a"])(D,r,i,!1,null,"4b0465fa",null));t["default"]=x.exports},"6eb8":function(e,t,a){},"71dc":function(e,t,a){"use strict";a.d(t,"g",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"i",(function(){return h})),a.d(t,"f",(function(){return p})),a.d(t,"j",(function(){return f})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return g})),a.d(t,"c",(function(){return b})),a.d(t,"h",(function(){return y})),a.d(t,"d",(function(){return v}));a("d3b7"),a("d9e2");var r=a("bc3a"),i=a.n(r),n=a("5c96"),o=a("4360"),s=a("5f87"),c=i.a.create({baseURL:"/inter",timeout:3e5});c.interceptors.request.use((function(e){return o["a"].getters.token&&Object(s["a"])()&&(e.headers["Authorization"]="Bearer "+Object(s["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(n["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||n["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){o["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var l=c;function d(){return l({url:"api/v1/equipments/status",method:"get"})}function u(){return l({url:"api/v1/database/status",method:"get"})}function h(){return l({url:"api/v1/database/status/settings",method:"get"})}function p(){return l({url:"api/v1/database/status/tables",method:"get"})}function f(){return l({url:"api/v1/database/status/tables/flush",method:"get"})}function m(e){return l({url:"api/v1/database/status/settings/timer",method:"put",data:e})}function g(e){return l({url:"api/v1/database/status/settings/paras",method:"put",data:e})}function b(e){return l({url:"api/v1/database/status/tables",method:"delete",params:e})}function y(e){return l({url:"api/v1/ip/status",method:"get",params:e})}function v(e){return l({url:"api/v1/equipments/status//activation",method:"get",params:e})}},"7cb6":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return c}));var r=a("b4af");function i(e){return Object(r["a"])({url:"/api/v1/equipments/page",method:"get",params:e})}function n(){return Object(r["a"])({url:"/api/v1/equipments",method:"get"})}function o(e){return Object(r["a"])({url:"/api/v1/equipments",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/api/v1/equipments/"+e.Id,method:"put",data:e})}function c(e){return Object(r["a"])({url:"/api/v1/equipments/"+e.Id,method:"Delete",data:e})}},"9fad":function(e,t,a){var r,i,n;(function(o,s){i=[t,a("313e")],r=s,n="function"===typeof r?r.apply(t,i):r,void 0===n||(e.exports=n)})(0,(function(e,t){var a=function(e){"undefined"!==typeof console&&console&&console.error&&console.error(e)};if(t){var r=["#c12e34","#e6b600","#0098d9","#2b821d","#005eaa","#339ca8","#cda819","#32a487"],i={color:r,title:{textStyle:{fontWeight:"normal"}},visualMap:{color:["#1790cf","#a2d4e6"]},toolbox:{iconStyle:{borderColor:"#06467c"}},tooltip:{backgroundColor:"rgba(0,0,0,0.6)"},dataZoom:{dataBackgroundColor:"#dedede",fillerColor:"rgba(154,217,247,0.2)",handleColor:"#005eaa"},timeline:{lineStyle:{color:"#005eaa"},controlStyle:{color:"#005eaa",borderColor:"#005eaa"}},candlestick:{itemStyle:{color:"#c12e34",color0:"#2b821d"},lineStyle:{width:1,color:"#c12e34",color0:"#2b821d"},areaStyle:{color:"#e6b600",color0:"#005eaa"}},graph:{itemStyle:{color:"#e6b600"},linkStyle:{color:"#005eaa"}},map:{itemStyle:{color:"#f2385a",borderColor:"#eee",areaColor:"#ddd"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{show:!0,lineStyle:{color:[[.2,"#2b821d"],[.8,"#005eaa"],[1,"#c12e34"]],width:5}},axisTick:{splitNumber:10,length:8,lineStyle:{color:"auto"}},axisLabel:{color:"auto"},splitLine:{length:12,lineStyle:{color:"auto"}},pointer:{length:"90%",width:3,color:"auto"},title:{color:"#333"},detail:{color:"auto"}}};t.registerTheme("shine",i)}else a("ECharts is not Loaded")}))},d747:function(e,t,a){"use strict";a("6eb8")}}]);