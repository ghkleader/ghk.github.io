(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8d388ae"],{1256:function(t,e,a){"use strict";a("4ed3")},"2af2":function(t,e,a){"use strict";a("3248")},3248:function(t,e,a){},"385b":function(t,e,a){},4303:function(t,e,a){"use strict";function i(t){var e=t instanceof Date?t:new Date(t);return e.getDate()||(e=new Date),e}function n(t,e){var a=i(t),n=void 0,o=void 0,s=0;for(e=e||"YYYY-MM-DD HH:mm:ss",n=a.getHours(),o=[["M+",a.getMonth()+1],["D+",a.getDate()],["H+",n],["h+",n>12?n-12:n],["m+",a.getMinutes()],["s+",a.getSeconds()]],/(Y+)/.test(e)&&(e=e.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));s<o.length;s++)new RegExp("("+o[s][0]+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?o[s][1]:("00"+o[s][1]).substr((""+o[s][1]).length)));return e.replace(/a/gi,n>11?"pm":"am")}var o={future:"in %s",past:"%s ago",s:"a few seconds",mm:"%s minutes",hh:"%s hours",dd:"%s days",MM:"%s months",yy:"%s years"},s={future:"%s内",past:"%s前",s:"几秒",mm:"%s分钟",hh:"%s小时",dd:"%s天",MM:"%s月",yy:"%s年"},r=void 0;function l(t){var e=void 0,a=void 0;for(a in e="string"===typeof t?"zh-cn"===t?s:o:t,r||(r={}),e)e.hasOwnProperty(a)&&"string"===typeof e[a]&&(r[a]=e[a])}var c=[["yy",31536e6],["MM",2592e6],["dd",864e5],["hh",36e5],["mm",6e4],["s",0]];function d(t){r||l("");var e=+new Date-+i(t),a=void 0,n=void 0,o=0,s=void 0,d=void 0;for(e<0?(a=r.future,e=-e):a=r.past;o<c.length;o++)if(s=c[o],d=s[1],e>=d){n=r[s[0]].replace("%s",parseInt(e/d,0)||1);break}return a.replace("%s",n)}e.format=n,e.locate=l,e.fromNow=d},"4ed3":function(t,e,a){},"4fc5":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return s}));var i=a("b4af");function n(t){return Object(i["a"])({url:"/api/v1/equipments/production",method:"get",params:t})}function o(){return Object(i["a"])({url:"/api/v1/equipments/production/today",method:"get"})}function s(){return Object(i["a"])({url:"/api/v1/equipments/production/72hours",method:"get"})}},"71dc":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return r}));var i=a("b4af");function n(){return Object(i["a"])({url:"api/v1/equipments/status",method:"get"})}function o(){return Object(i["a"])({url:"api/v1/database/status",method:"get"})}function s(){return Object(i["a"])({url:"api/v1/database/status/tables",method:"get"})}function r(t){return Object(i["a"])({url:"api/v1/ip/status",method:"get",params:t})}},9406:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a(t.currentRole,{tag:"component"})],1)},n=[],o=a("5530"),s=(a("caad"),a("2532"),a("2f62")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container",on:{contextmenu:function(e){return e.preventDefault(),t.show(e)}}},[a("dv-full-screen-container",[a("full-screen-title"),a("full-screen-main"),a("full-screen-footer")],1)],1)},l=[],c=(a("14d9"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module_row"},[a("div",{staticStyle:{flex:"0 1 30%"}},[a("dv-decoration-10",{staticStyle:{height:"5px"}})],1),a("div",{staticStyle:{flex:"0 1 40%"}},[a("div",{staticClass:"d-flex"},[a("dv-decoration-8",{staticStyle:{height:"50px",flex:"1"}}),a("dv-decoration-11",{staticClass:"title",staticStyle:{height:"60px",flex:"1"}},[t._v("中控系统智慧中心")]),a("dv-decoration-8",{staticStyle:{height:"50px",flex:"1"},attrs:{reverse:!0}})],1)]),a("div",{staticStyle:{flex:"0 1 30%"}},[a("dv-decoration-10",{staticStyle:{height:"5px",transform:"rotateY(180deg)"}})],1)])}),d=[],h={name:"FullScreenTitle",components:{},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},u=h,f=a("2877"),p=Object(f["a"])(u,c,d,!1,null,"b2fa6690",null),g=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module_row"},[a("div",{staticStyle:{flex:"0 1 30%"}},[a("dv-border-box-13",{staticStyle:{width:"100%",height:"360px",padding:"20px 8px"}},[a("el-tooltip",{attrs:{content:"设备当前报警",placement:"top",effect:"light","hide-after":2500,"open-delay":500}},[a("div",{staticStyle:{height:"320px"}},[t.isLoading.alarmLatest?a("dv-loading",[t._v("Loading...")]):t.isLoading.alarmLatest||0==t.alarmLatestConfig.data.length?t.isLoading.alarmLatest||0!=t.alarmLatestConfig.data.length?t._e():a("div",{staticStyle:{color:"#909399","font-size":"22px","font-family":"'Arial'","margin-top":"140px","text-align":"center"}},[t._v("暂无数据")]):a("dv-scroll-board",{attrs:{config:t.alarmLatestConfig}})],1)])],1),a("dv-border-box-13",{staticStyle:{height:"270px",padding:"10px 10px 0px 10px",display:"flex"}},[a("el-tooltip",{attrs:{content:"设备当天报警统计",placement:"top",effect:"light","hide-after":2500,"open-delay":500}},[a("div",{staticStyle:{height:"250px"}},[t.isLoading.alarmToday?a("dv-loading",[t._v("Loading...")]):t.isLoading.alarmToday||0==t.alarmTodayConfig.data.length?t.isLoading.alarmToday||0!=t.alarmTodayConfig.data.length?t._e():a("div",{staticStyle:{color:"#909399","font-size":"22px","font-family":"'Arial'","margin-top":"100px","text-align":"center"}},[t._v("暂无数据")]):a("dv-scroll-ranking-board",{attrs:{config:t.alarmTodayConfig}})],1)])],1)],1),a("div",{staticStyle:{flex:"0 1 40%"}},[a("dv-border-box-12",{staticStyle:{width:"100%",height:"630px"}},[a("div",{staticClass:"main-title-box"},[a("dv-border-box-10",{staticStyle:{width:"20%",height:"100px"},attrs:{color:[,"#00BFFF"]},nativeOn:{click:function(e){return t.setproductivityMode("productivity")}}},[a("div",{staticClass:"title-data"},[t._v(t._s(t.averagePro))]),a("div",{staticClass:"title-label"},[t._v("小时产能")])]),a("dv-border-box-10",{staticStyle:{width:"20%",height:"100px"},attrs:{color:[,"#00BFFF"]},nativeOn:{click:function(e){return t.setproductivityMode("alarm")}}},[a("div",{staticClass:"title-data"},[t._v(t._s(t.averageAlarm))]),a("div",{staticClass:"title-label"},[t._v("小时报警")])]),a("dv-border-box-10",{staticStyle:{width:"20%",height:"100px"},attrs:{color:[,"#00BFFF"]},nativeOn:{click:function(e){return t.setproductivityMode("brokenRate")}}},[a("div",{staticClass:"title-data"},[t._v(t._s(t.averageBrokenRate)+"%")]),a("div",{staticClass:"title-label"},[t._v("小时碎片率")])]),a("dv-border-box-10",{staticStyle:{width:"20%",height:"100px"},attrs:{color:[,"#00BFFF"]},nativeOn:{click:function(e){return t.setproductivityMode("passRate")}}},[a("div",{staticClass:"title-data"},[t._v(t._s(t.averagePassRate)+"%")]),a("div",{staticClass:"title-label"},[t._v("小时合格率")])])],1),t.isLoading.lineChart?a("dv-loading",[t._v("Loading...")]):t._e(),"productivity"!=t.lineChartConfig.class||t.isLoading.lineChart?t._e():a("LineChart",{attrs:{config:t.lineChartConfig,data:t.lineChartSrcData}}),"alarm"==t.lineChartConfig.class?a("LineChart",{attrs:{config:t.lineChartConfig,data:t.lineChartSrcData}}):t._e(),"brokenRate"==t.lineChartConfig.class?a("LineChart",{attrs:{config:t.lineChartConfig,data:t.lineChartSrcData}}):t._e(),"passRate"==t.lineChartConfig.class?a("LineChart",{attrs:{config:t.lineChartConfig,data:t.lineChartSrcData}}):t._e()],1)],1),a("div",{staticStyle:{flex:"0 1 30%"}},[a("dv-border-box-13",{staticStyle:{width:"100%",height:"360px",padding:"20px 8px"}},[a("el-tooltip",{attrs:{content:"设备当前连接状态",placement:"top",effect:"light","hide-after":2500,"open-delay":500}},[a("div",{staticStyle:{height:"320px"}},[t.isLoading.eqpStatus?a("dv-loading",[t._v("Loading...")]):t.isLoading.eqpStatus||0==t.eqpStatusConfig.data.length?t.isLoading.eqpStatus||0!=t.eqpStatusConfig.data.length?t._e():a("div",{staticStyle:{color:"#909399","font-size":"22px","font-family":"'Arial'","margin-top":"140px","text-align":"center"}},[t._v("暂无数据")]):a("dv-scroll-board",{attrs:{config:t.eqpStatusConfig}})],1)])],1),a("dv-border-box-13",{staticStyle:{width:"100%",height:"270px"}},[a("el-tooltip",{attrs:{content:"设备当前运行状态统计",placement:"top",effect:"light","hide-after":2500,"open-delay":500}},[a("div",{staticStyle:{height:"270px"}},[t.isLoading.eqpRunStatus?a("dv-loading",[t._v("Loading...")]):t.isLoading.eqpRunStatus||0==t.eqpRunStatusConfig.data.length?t.isLoading.eqpRunStatus||0!=t.eqpRunStatusConfig.data.length?t._e():a("div",{staticStyle:{color:"#909399","font-size":"22px","font-family":"'Arial'","padding-top":"100px","text-align":"center"}},[t._v("暂无数据")]):a("dv-active-ring-chart",{staticStyle:{height:"250px"},attrs:{config:t.eqpRunStatusConfig}})],1)])],1)],1)])},v=[],y=(a("fb6a"),a("b680"),a("d81d"),a("e9c4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})}),b=[],x=(a("d3b7"),a("b0c0"),a("313e")),D=a("ed08"),S={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(D["b"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var C={mixins:[S],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"490px"},data:{type:Object,default:function(){return{xData:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],yActualData:[10,12,15,20,40],yAverageData:[5,15,14,20,35]}}},config:{type:Object,default:function(){return{title:"产能",class:"productivity",legendData:["实际产能","平均产能"]}}}},data:function(){return{chart:null}},watch:{data:{handler:function(t){this.setOptions()},deep:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=x["init"](this.$el,"macarons"),this.setOptions()},setOptions:function(){this.data.yActualData.every((function(t){return 0===t}))?this.showNoDataOption():"productivity"===this.config.class||"alarm"===this.config.class?this.setProAlarmOptions():"brokenRate"!==this.config.class&&"passRate"!==this.config.class||this.setBrokenPassRateOptions()},showNoDataOption:function(){this.chart.clear(),this.chart.setOption({graphic:{type:"text",left:"center",top:"50%",style:{text:"暂无数据",fontSize:"22",fontFamily:"Arial",fill:"#909399"}},xAxis:{data:this.data.xData,boundaryGap:!1,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:{axisTick:{show:!1},splitLine:{show:!1},splitArea:{show:!1}},grid:{top:"20%",left:"2%",right:"2%",bottom:"3%",containLabel:!0}})},setProAlarmOptions:function(){var t=this;this.chart.setOption({graphic:{type:"text",style:{text:"",fontSize:"22",fontFamily:"Arial",fill:"#909399"}},title:{text:this.config.title,x:"center",top:10,textStyle:{fontWeight:"normal",color:"white",fontSize:"22",fontFamily:"Arial"}},xAxis:{data:this.data.xData,boundaryGap:!1,axisTick:{show:!1},axisLine:{show:!0},axisLabel:{show:!0}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{name:"个",type:"value",alignTicks:!0,axisLine:{show:!0},splitLine:{show:!0},splitArea:{show:!0}},legend:{data:this.config.legendData,top:"10%",itemWidth:44,itemHeight:22,textStyle:{fontSize:15,color:"white"}},grid:{top:"20%",left:"2%",right:"2%",bottom:"3%",containLabel:!0},series:[{name:this.config.legendData[0],smooth:!1,type:"line",label:{show:!0,position:"top",fontSize:"20px",fontFamily:"Arial",fontWeight:"bold",color:"#3888fa",formatter:function(e){return t.data.yActualData.length-1===e.dataIndex?e.value:""}},itemStyle:{color:"#3888fa"},lineStyle:{color:"#3888fa",width:2},data:this.data.yActualData,animationDuration:200,animationEasing:"quinticIn"},{name:this.config.legendData[1],label:{show:!0,position:"right",fontSize:"20px",fontFamily:"Arial",fontWeight:"bold",color:"#FF005A",formatter:function(e){return t.data.yActualData.length-1===e.dataIndex?e.value:""}},itemStyle:{color:"#FF005A"},lineStyle:{color:"#FF005A",width:2},smooth:!0,type:"line",data:this.data.yAverageData,animationDuration:200,animationEasing:"quinticIn"}]})},setBrokenPassRateOptions:function(){var t=this;this.chart.setOption({graphic:{type:"text",style:{text:"",fontSize:"22",fontFamily:"Arial",fill:"#909399"}},title:{text:this.config.title,x:"center",top:10,textStyle:{fontWeight:"normal",color:"white",fontSize:"22",fontFamily:"Arial"}},xAxis:{data:this.data.xData,boundaryGap:!1,axisTick:{show:!1},axisLine:{show:!0},axisLabel:{show:!0}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:function(t){for(var e=t[0].name+"<br/>",a=0;a<t.length;a++)void 0!==t[a].data&&(e+=t[a].marker+t[a].seriesName+":&nbsp&nbsp&nbsp"+(100*t[a].data).toFixed(2)+"%<br/>");return e},padding:[5,10]},yAxis:{name:"百分比",type:"value",alignTicks:!0,axisLine:{show:!0},axisLabel:{formatter:function(t,e){return 100*t+"%"}},splitLine:{show:!0},splitArea:{show:!0}},legend:{data:this.config.legendData,top:"10%",itemWidth:44,itemHeight:22,textStyle:{fontSize:15,color:"white"}},grid:{top:"20%",left:"2%",right:"2%",bottom:"3%",containLabel:!0},series:[{name:this.config.legendData[0],smooth:!1,type:"line",label:{show:!0,position:"top",fontSize:"20px",fontFamily:"Arial",fontWeight:"bold",color:"#3888fa",formatter:function(e){return t.data.yActualData.length-1===e.dataIndex?(100*e.value).toFixed(2)+"%":""}},itemStyle:{color:"#3888fa"},lineStyle:{color:"#3888fa",width:2},data:this.data.yActualData,animationDuration:200,animationEasing:"quinticIn"},{name:this.config.legendData[1],smooth:!0,type:"line",label:{show:!0,position:"right",fontSize:"20px",fontFamily:"Arial",fontWeight:"bold",color:"#FF005A",formatter:function(e){return t.data.yActualData.length-1===e.dataIndex?(100*e.value).toFixed(2)+"%":""}},itemStyle:{color:"#FF005A"},lineStyle:{color:"#FF005A",width:2},data:this.data.yAverageData,animationDuration:200,animationEasing:"quinticIn"}]})}}},w=C,L=Object(f["a"])(w,y,b,!1,null,null,null),A=L.exports,E=a("4fc5"),_=a("bfea"),F=a("71dc"),O=a("4303"),R=a.n(O),q={name:"FullScreenMain",components:{LineChart:A},data:function(){return{isLoading:{alarmLatest:!0,alarmToday:!0,lineChart:!0,eqpStatus:!0,eqpRunStatus:!0},todayAlarm:[],averagePro:"NaN",averageAlarm:"NaN",averageBrokenRate:"NaN",averagePassRate:"NaN",updateTimer:void 0,lineChartConfigArray:{productivity:{title:"小时产能",class:"productivity",legendData:["实际产能","平均产能"]},alarm:{title:"小时报警",class:"alarm",legendData:["实际报警","平均报警"]},brokenRate:{title:"小时碎片率",class:"brokenRate",legendData:["实际碎片率","平均碎片率"]},passRate:{title:"小时合格率",class:"passRate",legendData:["实际合格率","平均合格率"]}},lineChartConfig:null,lineChartSrcData:{xData:[],yActualData:[],yAverageData:[]},alarmLatestConfig:{data:[]},eqpStatusConfig:{data:[]},alarmTodayConfig:{data:[]},eqpRunStatusConfig:{data:[]},lastDataTemp:void 0}},created:function(){this.lineChartConfig=this.lineChartConfigArray["productivity"],this.initData(),this.fetchAllEqp72HoursProList(),this.updateLatestAlarmInfo(),this.updateEqpDatabaseStatus(),this.updateAlarmTodayNum()},mounted:function(){var t=this;this.updateTimer=setInterval((function(){t.updateLatestAlarmInfo(),t.updateEqpDatabaseStatus(),t.updateAlarmTodayNum(),(new Date).getHours()!==t.lastHours&&(new Date).getMinutes()>=1&&(t.lastHours=(new Date).getHours(),"productivity"===t.lineChartConfig.class?t.fetchAllEqp72HoursProList():"alarm"===t.lineChartConfig.class?t.fetchAllEqp72HoursAlarmList():"brokenRate"===t.lineChartConfig.class?t.fetchAllEqp72HoursBrokenRateList():"passRate"===t.lineChartConfig.class&&t.fetchAllEqp72HoursPassRateList(),t.initData(),console.log(new Date+" 小时产能、报警、碎片率、合格率已经更新！"))}),5e3)},beforeDestroy:function(){this.updateTimer=clearInterval(this.updateTimer)},methods:{fetchAllEqp72HoursProList:function(){var t=this;Object(E["a"])().then((function(e){t.lineChartSrcData=e.data,t.averagePro=e.data.yAverageData.slice(-1)[0],t.isLoading.lineChart=!1}))},fetchAllEqp72HoursAlarmList:function(){var t=this;Object(_["b"])().then((function(e){t.lineChartSrcData=e.data,t.averageAlarm=e.data.yAverageData.slice(-1)[0]}))},fetchAllEqp72HoursBrokenRateList:function(){var t=this;Object(_["c"])().then((function(e){t.lineChartSrcData=e.data,t.averageBrokenRate=(100*e.data.yAverageData.slice(-1)[0]).toFixed(2)}))},fetchAllEqp72HoursPassRateList:function(){var t=this;Object(_["d"])().then((function(e){t.lineChartSrcData=e.data,t.averagePassRate=(100*e.data.yAverageData.slice(-1)[0]).toFixed(2)}))},initData:function(){var t=this;Object(E["a"])().then((function(e){t.averagePro=e.data.yAverageData.slice(-1)[0]})),Object(_["b"])().then((function(e){t.averageAlarm=e.data.yAverageData.slice(-1)[0]})),Object(_["c"])().then((function(e){t.averageBrokenRate=(100*e.data.yAverageData.slice(-1)[0]).toFixed(2)})),Object(_["d"])().then((function(e){t.averagePassRate=(100*e.data.yAverageData.slice(-1)[0]).toFixed(2)}))},updateLatestAlarmInfo:function(){var t=this;Object(_["e"])().then((function(e){if(e.data.length>0)var a=e.data.map((function(t,e){var a=[];return 0===e?(a[0]='<span style="color:red;font-Weight:bold;">'+t.EqpName+"</span>",new Date(t.DateTime).getDate()===(new Date).getDate()?a[1]='<span style="color:red;font-Weight:bold;">'+new Date(t.DateTime).toLocaleTimeString()+"</span>":a[1]='<span style="color:red;font-Weight:bold;">'+R.a.format(new Date(t.DateTime),"MM-DD HH:mm")+"</span>",a[2]='<span style="color:red;font-Weight:bold;">'+t.Message+"</span>"):(a[0]=t.EqpName,new Date(t.DateTime).getDate()===(new Date).getDate()?a[1]=new Date(t.DateTime).toLocaleTimeString():a[1]=R.a.format(new Date(t.DateTime),"MM-DD HH:mm"),a[2]=t.Message),a}));else a=[];t.alarmLatestConfig={header:["设备名称","时间","报警信息"],data:a,index:!0,columnWidth:[35,120,150],align:["center","center","center","left"],headerBGC:"#00BFFF",rowNum:9},t.isLoading.alarmLatest=!1}))},updateAlarmTodayNum:function(){var t=this,e={};e.startTime=new Date((new Date).toLocaleDateString()+" 00:00:00"),e.endTime=new Date,Object(_["g"])(e).then((function(e){var a=e.data;JSON.stringify(t.alarmTodayConfig.data)!==JSON.stringify(a)&&(t.alarmTodayConfig={data:e.data,unit:"个",rowNum:6}),t.isLoading.alarmToday=!1}))},updateEqpDatabaseStatus:function(){var t=this;Object(F["c"])().then((function(e){if(JSON.stringify(t.lastDataTemp)!==JSON.stringify(e.data)){t.lastDataTemp=e.data;var a=0,i=0,n=0,o=0,s=e.data.map((function(t){var e="",s="";switch(e="true"===t[2]?'<span style="color:#00EE00;font-Weight:bold;">已连接</span>':'<span style="color:red;font-Weight:bold;">未连接</span>',t[1]){case"1":a++,s="运行";break;case"2":o++,s="待机";break;case"4":n++,s="报警";break;case"3":i++,s="暂停";break;default:s="--";break}return[t[0],s,e]})),r=s.length;if(r<10&&0!==r)for(var l=0;l<10-r;l++)s.push(["预留","--","--"]);0===a&&0===o&&0===n&&0===i||(t.eqpRunStatusConfig={radius:"50%",activeRadius:"60%",digitalFlopStyle:{fontSize:20},lineWidth:30,color:["#00FF00","#00F5FF","#FF7256","#C1CDCD"],data:[{name:"运 行",value:a},{name:"待 机",value:o},{name:"报 警",value:n},{name:"停 机",value:i}]}),t.eqpStatusConfig={header:["设备名称","设备状态","通讯状态"],data:s,index:!0,columnWidth:[50],align:["center","center","center","center"],headerBGC:"#00BFFF",rowNum:9},t.isLoading.eqpStatus=!1,t.isLoading.eqpRunStatus=!1}}))},setproductivityMode:function(t){this.lineChartConfig=this.lineChartConfigArray[t],"productivity"===t?(this.$message({message:"切换产能成功",type:"success",duration:1e3}),this.fetchAllEqp72HoursProList()):"alarm"===t?(this.$message({message:"切换报警成功",type:"success",duration:1e3}),this.fetchAllEqp72HoursAlarmList()):"brokenRate"===t?(this.$message({message:"切换碎片率成功",type:"success",duration:1e3}),this.fetchAllEqp72HoursBrokenRateList()):"passRate"===t&&(this.$message({message:"切换合格率成功",type:"success",duration:1e3}),this.fetchAllEqp72HoursPassRateList())}}},T=q,z=Object(f["a"])(T,m,v,!1,null,"5d3d79ee",null),k=z.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module_row"},[a("div",{staticStyle:{flex:"0 1 100%"}},[a("dv-border-box-8",{staticStyle:{width:"100%",height:"calc(100vh - 710px)"}},[t.isLoading?a("dv-loading",[t._v("Loading...")]):t._e(),t.isLoading?t._e():a("bar-chart",{attrs:{height:"calc(100vh - 710px)",data:t.barSrcData,config:t.barConfig}})],1)],1)])},j=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},N=[];a("817d"),a("9fad");var P=1e3,I={mixins:[S],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"},data:{type:Object,default:function(){return{xData:[1,2,3,4,5,6,7],yDayData:[2080,2032,4e3,3314,3690,6040,4820],yNightData:[12080,20352,38e3,33314,36590,26040,16820]}}},config:{type:Object,default:function(){return{title:"日产能",proClass:"everyDay",legendData:["白班","夜班","平均值"],valueLabelIsShow:!0}}}},data:function(){return{chart:null}},watch:{data:{handler:function(t){this.chartSetOption()},deep:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=x["init"](this.$el,"macarons"),this.chartSetOption()},chartSetOption:function(){0===this.data.yDayData.length?this.showNoDataOption():"everyDay"===this.config.proClass&&this.setPerDayOption()},showNoDataOption:function(){this.chart.clear(),this.chart.setOption({title:{text:this.config.title,left:"center",top:"2%",textStyle:{fontWeight:"normal",color:"white",fontSize:"22",fontFamily:"Arial"}},graphic:{type:"text",left:"center",top:"50%",style:{text:"暂无数据",fontSize:"22",fontFamily:"Arial",fill:"#909399"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{data:this.config.legendData,top:"10%",itemWidth:44,itemHeight:22,textStyle:{fontSize:15,color:"white"}},grid:{top:"20%",left:"2%",right:"2%",bottom:"3%",containLabel:!0,show:!1},xAxis:[{type:"category",data:this.data.xData,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1},splitLine:{show:!1}}],series:[{name:this.config.legendData[0],type:"bar",stack:"vistors",barWidth:"60%",data:this.data.yDayData,label:{show:this.config.valueLabelIsShow,position:"inside",color:"white",fontSize:12},itemStyle:{color:new x["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:"#B4EEB4"},{offset:.5,color:"#76EEC6"},{offset:1,color:"#00FFFF"}])},animationDuration:P},{name:this.config.legendData[1],type:"bar",stack:"vistors",barWidth:"60%",data:this.data.yNightData,label:{show:this.config.valueLabelIsShow,position:"inside",color:"white",fontSize:12},itemStyle:{color:new x["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:"#EEAEEE"},{offset:.5,color:"#D15FEE"},{offset:1,color:"#BF3EFF"}])},animationDuration:P}]},!0)},setPerDayOption:function(){this.chart.setOption({title:{text:this.config.title,x:"center",top:"5",textStyle:{fontWeight:"normal",color:"white",fontSize:20,fontFamily:"Arial"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{top:"30",itemWidth:44,itemHeight:22,textStyle:{fontSize:12,color:"white"}},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{show:!0,readOnly:!0,optionToContent:function(t){for(var e=t.xAxis[0].data,a=t.series,i='<table  border="1px" bordercolor="#e0dddd" cellspacing="0" style="width:100%;text-align:center"><tbody><tr><th style="padding:10px">时间</th><th>'+a[0].name+"</th><th>"+a[1].name+"</th></tr>",n=0,o=e.length;n<o;n++)i+="<tr><td>"+e[n]+"</td><td>"+a[0].data[n]+"</td><td>"+a[1].data[n]+"</td></tr>";return i+="</tbody></table>",i}},restore:{show:!0},saveAsImage:{show:!0}}},grid:{top:"60",left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.data.xData,axisTick:{alignWithLabel:!0},axisLabel:{color:"white"}}],yAxis:[{type:"value",axisTick:{show:!1},splitLine:{show:!1},splitArea:{show:!1},axisLabel:{color:"white"}}],series:[{name:this.config.legendData[0],type:"bar",stack:"vistors",barWidth:"60%",data:this.data.yDayData,label:{show:this.config.valueLabelIsShow,position:"inside",color:"white",fontSize:12},itemStyle:{color:new x["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:"#B4EEB4"},{offset:.5,color:"#76EEC6"},{offset:1,color:"#00FFFF"}])},animationDuration:P},{name:this.config.legendData[1],type:"bar",stack:"vistors",barWidth:"60%",data:this.data.yNightData,label:{show:this.config.valueLabelIsShow,position:"inside",color:"white",fontSize:12},itemStyle:{color:new x["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:"#EEAEEE"},{offset:.5,color:"#D15FEE"},{offset:1,color:"#BF3EFF"}])},animationDuration:P}]},!0)}}},M=I,W=Object(f["a"])(M,H,N,!1,null,null,null),B=W.exports,G={name:"FullScreenFooter",components:{BarChart:B},data:function(){return{isLoading:!0,barSrcData:{xData:[],yDayData:[],yNightData:[]},barConfig:{title:"当天产能",proClass:"everyDay",legendData:["白班","夜班"],valueLabelIsShow:!0},updateTimer:void 0}},created:function(){this.getAllEqpETodayProList()},mounted:function(){this.updateTimer=setInterval(this.getAllEqpETodayProList,2e3)},beforeDestroy:function(){this.updateTimer=clearInterval(this.updateTimer)},methods:{getAllEqpETodayProList:function(){var t=this;Object(E["b"])().then((function(e){t.barSrcData=e.data,t.barSrcData.xData.length>=20?t.barConfig.valueLabelIsShow=!1:t.barConfig.valueLabelIsShow=!0;var a=t.barSrcData.xData.length;if(a<=10)for(var i=0;i<10-a;i++)t.barSrcData.xData.push("预留");t.isLoading=!1}))}}},Y=G,J=Object(f["a"])(Y,$,j,!1,null,"57213508",null),Z=J.exports,V={name:"DashboardAdmin",components:{FullScreenTitle:g,FullScreenMain:k,FullScreenFooter:Z},data:function(){return{}},methods:{show:function(){console.log(this),this.$message({type:"success",message:"退出大屏"}),this.$router.push({path:"/centercontrol-line/search-eqp-info"})}}},K=V,Q=(a("9b09"),Object(f["a"])(K,r,l,!1,null,"57244f65",null)),U=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("div",{staticClass:" clearfix"},[a("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v(" Your roles: "),t._l(t.roles,(function(e){return a("span",{key:e,staticClass:"pan-info-roles"},[t._v(t._s(e))])}))],2),a("github-corner",{staticStyle:{position:"absolute",top:"0px",border:"0",right:"0"}}),a("div",{staticClass:"info-container"},[a("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),a("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])],1),a("div",[a("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),a("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+t.image+")"}})])},at=[],it=(a("a9e3"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),nt=it,ot=(a("1256"),Object(f["a"])(nt,et,at,!1,null,"799537af",null)),st=ot.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank","aria-label":"View source on Github"}},[a("svg",{staticStyle:{fill:"#40c9c6",color:"#fff"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},lt=[],ct=(a("2af2"),{}),dt=Object(f["a"])(ct,rt,lt,!1,null,"09fe1acc",null),ht=dt.exports,ut={name:"DashboardEditor",components:{PanThumb:st,GithubCorner:ht},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:Object(o["a"])({},Object(s["b"])(["name","avatar","roles"]))},ft=ut,pt=(a("cb89"),Object(f["a"])(ft,X,tt,!1,null,"e3426062",null)),gt=pt.exports,mt={name:"Dashboard",components:{adminDashboard:U,editorDashboard:gt},data:function(){return{currentRole:"adminDashboard"}},computed:Object(o["a"])({},Object(s["b"])(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},vt=mt,yt=Object(f["a"])(vt,i,n,!1,null,null,null);e["default"]=yt.exports},"99dc":function(t,e,a){},"9b09":function(t,e,a){"use strict";a("99dc")},bfea:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"f",(function(){return o})),a.d(e,"g",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"e",(function(){return d}));var i=a("b4af");function n(t){return Object(i["a"])({url:"/api/v1/equipments/alarms",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/api/v1/equipments/alarms/today",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/api/v1/equipments/alarms/today/num",method:"get",params:t})}function r(){return Object(i["a"])({url:"/api/v1/equipments/alarms/72hours-total",method:"get"})}function l(){return Object(i["a"])({url:"/api/v1/equipments/alarms/72hours-broken-rate",method:"get"})}function c(){return Object(i["a"])({url:"/api/v1/equipments/alarms/72hours-pass-rate",method:"get"})}function d(){return Object(i["a"])({url:"/api/v1/equipments/alarms/latest",method:"get"})}},cb89:function(t,e,a){"use strict";a("385b")}}]);