(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e91d02b"],{"0090":function(t,e,a){},"35b8":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7"),a("3ca3"),a("ddb0");function n(t,e,n){Promise.all([a.e("chunk-234ecc1b"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(a){a.export_json_to_excel({header:t,data:e,filename:n})}))}},3848:function(t,e,a){"use strict";a("0090")},"7cb6":function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"b",(function(){return l}));var n=a("b4af");function i(t){return Object(n["a"])({url:"/api/v1/equipments/page",method:"get",params:t})}function r(){return Object(n["a"])({url:"/api/v1/equipments",method:"get"})}function o(t){return Object(n["a"])({url:"/api/v1/equipments",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/api/v1/equipments/"+t.Id,method:"put",data:t})}function l(t){return Object(n["a"])({url:"/api/v1/equipments/"+t.Id,method:"Delete",data:t})}},d239:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"head_container"},[a("el-row",[a("div",{staticClass:"search-container"},[a("label",[t._v("设备名称")]),a("el-select",{staticStyle:{width:"400px"},attrs:{filterable:"",multiple:"","collapse-tags":"",placeholder:"请选择设备名称"},model:{value:t.eqpNameAndWorkline,callback:function(e){t.eqpNameAndWorkline=e},expression:"eqpNameAndWorkline"}},t._l(t.equipmentList,(function(t){return a("el-option",{key:t.Id,attrs:{label:t.EqpName+"("+t.Workline+")",value:t.EqpName+"("+t.Workline+")"}})})),1),a("label",[t._v("保养项")]),a("el-select",{staticStyle:{width:"400px"},attrs:{filterable:"","collapse-tags":"",placeholder:"请选择保养项"},on:{change:t.setMainteInfo},model:{value:t.mainteInfo,callback:function(e){t.mainteInfo=e},expression:"mainteInfo"}},t._l(t.mainteInfoList,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1),a("br"),a("label",[t._v("开始时间")]),a("el-date-picker",{attrs:{type:"datetime",clearable:!1,placeholder:"选择日期时间",align:"right","picker-options":t.startPickerOptions},model:{value:t.search.startTime,callback:function(e){t.$set(t.search,"startTime",e)},expression:"search.startTime"}}),a("label",{staticStyle:{"margin-left":"10px"}},[t._v("结束时间")]),a("el-date-picker",{attrs:{type:"datetime",clearable:!1,placeholder:"选择日期时间",align:"right","picker-options":t.endPickerOptions},model:{value:t.search.endTime,callback:function(e){t.$set(t.search,"endTime",e)},expression:"search.endTime"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleDraw}},[t._v(" 绘制 ")])],1)])],1),a("div",{staticClass:"show-container"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("保养记录")]),a("el-table",{attrs:{border:"",fit:"",height:"400",data:t.RecordList,"row-class-name":t.setRowClass}},[a("el-table-column",{key:"1",attrs:{label:"设备名称",prop:"eqpName","min-width":"15%",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.EqpName))])]}}])}),a("el-table-column",{key:"2",attrs:{label:"所属产线",prop:"workline","min-width":"25%",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.Workline))])]}}])}),a("el-table-column",{key:"3",attrs:{label:"起始时间",prop:"startTime","min-width":"15%",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.StartTime))])]}}])}),a("el-table-column",{key:"4",attrs:{label:"终止时间",prop:"endTime","min-width":"15%",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.EndTime))])]}}])}),a("el-table-column",{key:"5",attrs:{label:"保养时长",prop:"duration","min-width":"15%",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t._f("formateTime")(n.Duration)))])]}}])}),a("el-table-column",{key:"6",attrs:{label:"保养内容",prop:"information","min-width":"35%",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.Information))])]}}])})],1)],1),a("div",{staticClass:"show-container"},[a("el-row",[a("el-col",{staticStyle:{"background-color":"#fff"}},[a("div",[a("AvgTimeLineChart",{attrs:{data:t.avgLineSrcData,config:t.avgLineConfig}})],1)])],1)],1)])},i=[],r=a("5530"),o=(a("14d9"),a("ac1f"),a("841c"),a("d3b7"),a("159b"),a("1276"),a("d81d"),a("7cb6")),s=a("71dc"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},c=[],d=a("b85c"),h=(a("a15b"),a("b0c0"),a("b680"),a("313e")),m=a("ed08"),u={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(m["b"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}},p=a("35b8"),f=a("86d5"),b=a.n(f);a("817d"),a("9fad");var v=2e3,g={mixins:[u],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"},data:{type:Object,default:function(){return{eqpName:["设备1","设备2"],dataSet:[[[1,1],[2,2]],[[0,1.5],[360,2.2],[792,1.8],[1272,2.5],[1728,2.1],[2136,1.9],[2568,2.3]]]}}},config:{type:Object,default:function(){return{title:"保养时间曲线",legendData:["保养耗时(h)","平均耗时(h)"],valueLabelIsShow:!0}}}},data:function(){return{seriesData:[],chart:null,MinXAxisValue:0}},watch:{data:{handler:function(t){this.chartSetOption()},deep:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=h["init"](this.$el,"macarons"),this.chartSetOption()},chartSetOption:function(){var t=this,e=this.data.dataSet.join("");if(""===e)this.showNoDataOption();else{var a,n=1/0,i=Object(d["a"])(this.data.dataSet);try{for(i.s();!(a=i.n()).done;){var r,o=a.value,s=Object(d["a"])(o);try{for(s.s();!(r=s.n()).done;){var l=r.value,c=l[0];c<n&&(n=c)}}catch(_){s.e(_)}finally{s.f()}}}catch(_){i.e(_)}finally{i.f()}this.MinXAxisValue=n-43200,this.seriesData=[];for(var h=function(e){u=[],p=t.data.dataSet[e].length+1;for(var a=0;a<t.data.dataSet[e].length;a++)u.push([a+1,t.data.dataSet[e][a][0]]);f=b.a.regression("polynomial",u,1),v=Math.floor(f.parameter[0]+f.parameter[1]*p),g=[];for(var n=0;n<t.data.dataSet[e].length;n++)g.push([n+1,t.data.dataSet[e][n][1]]);y=b.a.regression("polynomial",g,5),w=Math.floor(y.parameter[0]+y.parameter[1]*p+y.parameter[2]*Math.pow(p,2)+y.parameter[3]*Math.pow(p,3)+y.parameter[4]*Math.pow(p,4)+y.parameter[5]*Math.pow(p,5)),y.points.push([v,w]),console.log(t.data.eqpName[e]+" X轴预测"+f.expression),console.log(t.data.eqpName[e]+" Y轴预测"),console.log(y),x={name:t.data.eqpName[e]+"实际值",type:"scatter",data:t.data.dataSet[e],symbolSize:10},t.seriesData.push(x),k={name:t.data.eqpName[e]+"拟合值",type:"line",smooth:!0,data:y.points,symbolSize:.1,symbol:"circle",labelLayout:{dx:-20},markLine:{data:[{type:"average"}],silent:!0},label:{show:!0,position:"top",fontSize:"13px",fontFamily:"Arial",fontWeight:"bold",color:"#3888fa",align:"left",distance:0,offset:[0,0],rotate:0,padding:[0,-70],formatter:function(a){return y.points.length-1===a.dataIndex?"----"+t.data.eqpName[e]+"预测----\n时间："+t.$moment(new Date(1e3*a.value[0])).format("YYYY-MM-DD HH:mm:ss")+"\n时长："+a.value[1]+"小时":""}}},t.seriesData.push(k)},m=0;m<this.data.eqpName.length;m++){var u,p,f,v,g,y,w,x,k;h(m)}this.setTwoDimHourDayMonthOption()}},showNoDataOption:function(){var t=this;this.chart.clear(),this.chart.setOption({title:{text:this.config.title,left:"center",top:10,textStyle:{fontWeight:"normal",color:"black",fontSize:"22",fontFamily:"Arial"}},graphic:{type:"text",left:"center",top:"50%",style:{text:"暂无数据",fontSize:"22",fontFamily:"Arial",fill:"#909399"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{top:"10%",itemWidth:44,itemHeight:22,textStyle:{fontSize:15}},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0,optionToContent:function(t){for(var e=t.xAxis[0].data,a=t.series,n='<table  border="1px" bordercolor="#e0dddd" cellspacing="0" style="width:100%;text-align:center"><tbody><tr><th style="padding:10px">时间</th>',i=0,r=a.length;i<r;i++)n+="<th>"+a[i].name+"</th>";n+="</tr>";for(var o=0,s=e.length;o<s;o++){var l=[];l.push(e[o]),n+="<tr><td>"+e[o]+"</td>";for(var c=0,d=a.length;c<d;c++)n+="<td>"+a[c].data[o]+"</td>",l.push(a[c].data[o])}return n+="</tbody></table>",n}},myExportToExcel:{show:!0,title:"导出Excel",icon:"path://M725.312 608.768V433.152c0-74.112-326.784 24.192-384 263.424 0 0-75.584 88-85.312 0 0 0 109.696-482.944 469.312-482.944V81.92s42.688-61.824 128 43.968L1024 301.44l-298.688 307.328zM128 433.152a43.392 43.392 0 0 0-42.688 43.968v351.232c0 24.256 19.072 43.904 42.688 43.904h725.312a43.328 43.328 0 0 0 42.688-43.904v-43.904c0-24.256 19.072-43.968 42.688-43.968 23.616 0 42.688 19.712 42.688 43.968v87.808C981.312 920.768 943.104 960 896 960H85.312C38.208 960 0 920.768 0 872.256V433.152c0-48.512 38.208-87.808 85.312-87.808H128c23.552 0 42.688 19.648 42.688 43.904A43.328 43.328 0 0 1 128 433.152z",onclick:function(e){var a=[],n=[];Object(p["a"])(a,n,t.$moment(new Date).format("YYYY-MM-DD HH:mm:ss")+"_稼动率")}},restore:{show:!0},saveAsImage:{show:!0},magicType:{type:["line","bar","stack"]}}},grid:{top:80,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.data.xData,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}},{type:"value",position:"right",alignTicks:!0,axisLine:{show:!1,lineStyle:{color:"red"}}}],series:[{name:this.config.legendData[0],type:"bar",stack:"vistors",barWidth:"60%",label:{show:this.config.valueLabelIsShow,position:"inside",color:"white",fontSize:12},animationDuration:v},{name:this.config.legendData[1],type:"line",yAxisIndex:1,animationDuration:v}],color:["#91CC75","#EE6666"]},!0)},setTwoDimHourDayMonthOption:function(){var t=this;this.chart.clear(),this.chart.setOption({title:{text:this.config.title,x:"center",top:10,textStyle:{fontWeight:"normal",color:"black",fontSize:"22",fontFamily:"Arial"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:function(e){for(var a=t.$moment(new Date(1e3*e[0].data[0])).format("YYYY-MM-DD HH:mm:ss")+"<br/>",n=0;n<e.length;n++)void 0!==e[n].data[1]&&(a+=e[n].marker+e[n].seriesName+":&nbsp&nbsp&nbsp"+e[n].data[1].toFixed(2)+"小时<br/>");return a}},legend:{top:"10%",itemWidth:44,itemHeight:22,textStyle:{fontSize:15}},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0,optionToContent:function(t){for(var e=t.xAxis[0].data,a=t.series,n='<table  border="1px" bordercolor="#e0dddd" cellspacing="0" style="width:100%;text-align:center"><tbody><tr><th style="padding:10px">时间</th>',i=0,r=a.length;i<r;i++)n+="<th>"+a[i].name+"</th>";n+="</tr>";for(var o=0,s=e.length;o<s;o++){var l=[];l.push(e[o]),n+="<tr><td>"+e[o]+"</td>";for(var c=0,d=a.length;c<d;c++)n+="<td>"+a[c].data[o]+"</td>",l.push(a[c].data[o])}return n+="</tbody></table>",n}},myExportToExcel:{show:!0,title:"导出Excel",icon:"path://M725.312 608.768V433.152c0-74.112-326.784 24.192-384 263.424 0 0-75.584 88-85.312 0 0 0 109.696-482.944 469.312-482.944V81.92s42.688-61.824 128 43.968L1024 301.44l-298.688 307.328zM128 433.152a43.392 43.392 0 0 0-42.688 43.968v351.232c0 24.256 19.072 43.904 42.688 43.904h725.312a43.328 43.328 0 0 0 42.688-43.904v-43.904c0-24.256 19.072-43.968 42.688-43.968 23.616 0 42.688 19.712 42.688 43.968v87.808C981.312 920.768 943.104 960 896 960H85.312C38.208 960 0 920.768 0 872.256V433.152c0-48.512 38.208-87.808 85.312-87.808H128c23.552 0 42.688 19.648 42.688 43.904A43.328 43.328 0 0 1 128 433.152z",onclick:function(e){var a=[],n=[];a.push("时间");for(var i=0;i<t.data.eqpName.length;i++)a.push(t.data.eqpName[i]);for(var r=0;r<t.data.xData.length;r++){var o=[];o.push(t.data.xData[r]);for(var s=0;s<t.data.yData.length;s++)o.push(t.data.yData[s][r]);n.push(o)}Object(p["a"])(a,n,t.$moment(new Date).format("YYYY-MM-DD HH:mm:ss")+"_稼动率")}},restore:{show:!0},saveAsImage:{show:!0},magicType:{type:["line","bar","stack"]}}},grid:{top:80,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:{min:this.MinXAxisValue,splitLine:{lineStyle:{type:"dashed"}}},yAxis:{splitLine:{lineStyle:{type:"dashed"}},axisLabel:{formatter:function(t,e){return t+"小时"}}},series:this.seriesData},!0)}}},y=g,w=a("2877"),x=Object(w["a"])(y,l,c,!1,null,null,null),k=x.exports,_={name:"",components:{AvgTimeLineChart:k},filters:{formateTime:function(t){var e="",a=t;if(a/86400>1){var n=parseInt(a/86400);e+=n+"天",a-=86400*n}if(a/3600>1){var i=parseInt(a/3600);e+=i+"时",a-=3600*i}if(a/60>1){var r=parseInt(a/60);e+=r+"分",a-=60*r}if(a>1){var o=parseInt(a);e+=o+"秒"}return e}},data:function(){return{eqpNameAndWorkline:[],worklineContainer:[],equipmentList:null,RecordList:[],mainteInfo:null,mainteInfoList:[],avgLineConfig:{title:"保养时间曲线",legendData:["保养耗时(h)","平均耗时(h)"],valueLabelIsShow:!0},avgLineSrcData:{eqpName:[],dataSet:[]},search:{selectedEqpName:[],information:null,startTime:new Date(new Date(this.$moment().subtract(1,"months")).toLocaleDateString()+" 00:00:00"),endTime:new Date((new Date).toLocaleDateString()+" 24:00:00")},startPickerOptions:{shortcuts:[{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}},{text:"一个月前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-2592e6),t.$emit("pick",e)}},{text:"六个月前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-15552e6),t.$emit("pick",e)}}]},endPickerOptions:{shortcuts:[{text:"今天",onClick:function(t){var e=new Date;e.setTime(e.getTime()),t.$emit("pick",e)}}]}}},created:function(){null==this.equipmentList&&this.getTotalList()},mounted:function(){},methods:{getTotalList:function(){var t=this;Object(o["c"])().then((function(e){t.equipmentList=e.data.items;var a=[];a.push(t.equipmentList[0].EqpName+"("+t.equipmentList[0].Workline+")"),t.eqpNameAndWorkline=a,t.handleDraw()}))},handleDraw:function(){var t=this;if(0!==this.eqpNameAndWorkline.length)if(null!=this.search.startTime&&null!=this.search.endTime)if(this.search.startTime>this.search.endTime)this.$notify.error({title:"错误",message:"时间设置错误! 开始时间不能大于结束时间"});else{this.worklineContainer=[],this.search.selectedEqpName=[],this.eqpNameAndWorkline.forEach((function(e){var a=e.split(/[\(\)]/);-1===t.search.selectedEqpName.indexOf(a[0])&&t.search.selectedEqpName.push(a[0]),-1===t.worklineContainer.indexOf(a[1])&&t.worklineContainer.push(a[1])}));var e=Object(r["a"])({},this.search);e.worklineContainer=this.worklineContainer,Object(s["m"])(e).then((function(e){t.RecordList=e.data.map((function(e){return t.mainteInfoList.indexOf(e.Information)<0&&t.mainteInfoList.push(e.Information),{StartTime:t.$moment(e.StartTime).format("YYYY-MM-DD HH:mm:ss"),EndTime:t.$moment(e.EndTime).format("YYYY-MM-DD HH:mm:ss"),EqpName:e.EqpName,Workline:e.Workline,Information:e.Information,Duration:(new Date(e.EndTime)-new Date(e.StartTime))/1e3}}))})),Object(s["l"])(this.search).then((function(e){t.avgLineSrcData=e.data}))}else this.$notify.error({title:"错误",message:"开始时间和结束时间为空！"});else this.$notify.error({title:"错误",message:"未获取到设备名称，网络故障! 请重新刷新页面！"})},setMainteInfo:function(){this.search.information=this.mainteInfo,console.log(this.search.information)},setRowClass:function(t){var e=t.row,a=t.rowIndex;if(0===a&&null!=e)return"row-green"}}},D=_,S=(a("3848"),Object(w["a"])(D,n,i,!1,null,"45e6998c",null));e["default"]=S.exports}}]);