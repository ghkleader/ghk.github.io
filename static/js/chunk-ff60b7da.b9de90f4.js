(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff60b7da"],{"372d":function(e,t,a){"use strict";a.r(t);var l,i,n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("label",{staticClass:"labelstyle"},[e._v("数据库部署：")]),a("el-button",{attrs:{loading:e.initialDBLoading,type:"primary",icon:"el-icon-circle-check"},on:{click:e.handleInitialDB}},[e._v(" "+e._s(e.$t("table.initialDB"))+" ")]),a("label",{staticClass:"labelstyle",staticStyle:{"margin-left":"10px"}},[e._v("硅片流入流出线别：")]),a("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",multiple:"","collapse-tags":"",placeholder:"请选择统计的线别"},model:{value:e.selectedWorkLine,callback:function(t){e.selectedWorkLine=t},expression:"selectedWorkLine"}},e._l(e.workLineList,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1),a("br"),a("label",{staticClass:"labelstyle"},[e._v("配置信息")]),a("el-tooltip",{attrs:{content:"输入破片ID，多个ID，用空格分割",placement:"top",effect:"light"}},[a("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"多个ID，用空格分割",clearable:""},model:{value:e.brokenAlarmId,callback:function(t){e.brokenAlarmId=t},expression:"brokenAlarmId"}})],1),a("el-tooltip",{attrs:{content:"输入异常片ID，多个ID，用空格分割",placement:"top",effect:"light"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"多个ID，用空格分割",clearable:""},model:{value:e.rejectAlarmId,callback:function(t){e.rejectAlarmId=t},expression:"rejectAlarmId"}})],1),a("el-tooltip",{attrs:{content:"输入丢片ID，多个ID，用空格分割",placement:"top",effect:"light"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"多个ID，用空格分割",clearable:""},model:{value:e.dropAlarmId,callback:function(t){e.dropAlarmId=t},expression:"dropAlarmId"}})],1),a("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:e.isOldSilkScreenLine,callback:function(t){e.isOldSilkScreenLine=t},expression:"isOldSilkScreenLine"}},[e._v("老版本丝网整线")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.configSettingInfo}},[e._v(" 写入 ")]),a("br"),a("label",{staticClass:"labelstyle"},[e._v("数据库表信息查询：")]),a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择表占用空间大小的界限值，标红显示"},model:{value:e.dataSize,callback:function(t){e.dataSize=t},expression:"dataSize"}},e._l(e.dataSizeOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleGetDBTablesInfo}},[e._v(" "+e._s(e.$t("table.getDBTables"))+" ")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-refresh-right"},on:{click:e.flushDBTablesInfo}},[e._v(" "+e._s(e.$t("table.flushDBTables"))+" ")]),a("br"),a("label",{staticClass:"labelstyle"},[e._v("数据库表中数据的保留时间：")]),a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择表中记录过期时间，每天自动删除"},model:{value:e.expirationTime,callback:function(t){e.expirationTime=t},expression:"expirationTime"}},e._l(e.timeOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),a("el-switch",{staticStyle:{"margin-left":"10px"},attrs:{"active-text":"启用定时清理数据任务","active-color":"#13ce66"},on:{change:e.timerHandleSwitch},model:{value:e.dbDeleteOldDataEnable,callback:function(t){e.dbDeleteOldDataEnable=t},expression:"dbDeleteOldDataEnable"}}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","font-size":"15px"},attrs:{"element-loading-text":"数据正在加载中，请等候...",height:"600",data:e.showList,border:"",fit:"","highlight-current-row":"","row-style":{height:"20px"},"header-cell-style":{textAlign:"center",height:"20px"},size:"mini","cell-style":{padding:"0px"},"row-class-name":e.setRowClass}},[a("el-table-column",{key:"1",attrs:{label:"数据库名称",prop:"DatabaseName","min-width":"28%",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.DatabaseName))])]}}])}),a("el-table-column",{key:"2",attrs:{label:"表名称",prop:"TableName","min-width":"28%",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("el-tooltip",{attrs:{content:"点击删除对应表中数据",placement:"top",effect:"light","hide-after":2500,"open-delay":500}},[a("el-tag",{staticClass:"link-type",on:{click:function(t){return e.handleTable(l)}}},[e._v(e._s(l.TableName))])],1)]}}])}),a("el-table-column",{key:"3",attrs:{label:"占用空间(M)",prop:"TableSize","min-width":"28%",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.TableSize))])]}}])}),a("el-table-column",{key:"4",attrs:{label:"记录总数(条)",prop:"RowsCount","min-width":"28%",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.RowsCount))])]}}])}),a("el-table-column",{key:"5",attrs:{label:"记录初始日期",prop:"MinDateTime","min-width":"28%",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(null==l.MinDateTime?"--":e.$moment(l.MinDateTime).format("YYYY-MM-DD HH:mm:ss")))])]}}])}),a("el-table-column",{key:"6",attrs:{label:"记录最新日期",prop:"MaxDateTime","min-width":"28%",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(null==l.MaxDateTime?"--":e.$moment(l.MaxDateTime).format("YYYY-MM-DD HH:mm:ss")))])]}}])})],1),a("el-dialog",{staticStyle:{"min-width":"500px"},attrs:{title:"删除表数据",visible:e.dialogFormVisible,width:"40%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"70%","margin-left":"50px"},attrs:{model:e.temp,"label-position":"left","label-width":"85px"}},[a("el-form-item",{attrs:{label:"数据库名称",prop:"DatabaseName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.DatabaseName,callback:function(t){e.$set(e.temp,"DatabaseName",t)},expression:"temp.DatabaseName"}})],1),a("el-form-item",{attrs:{label:"表名称",prop:"TableName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.TableName,callback:function(t){e.$set(e.temp,"TableName",t)},expression:"temp.TableName"}})],1),a("el-form-item",{attrs:{label:"开始时间",prop:"Workline"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"请选择"},model:{value:e.temp.StartTime,callback:function(t){e.$set(e.temp,"StartTime",t)},expression:"temp.StartTime"}})],1),a("el-form-item",{attrs:{label:"结束时间",prop:"DateTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"请选择"},model:{value:e.temp.EndTime,callback:function(t){e.$set(e.temp,"EndTime",t)},expression:"temp.EndTime"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("label",{staticStyle:{"margin-right":"100px"}},[e._v(e._s(e.handleProcessTip))]),a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" 取消 ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.deleteData()}}},[e._v(" 删除 ")])],1)],1)],1)])},o=[],s=(a("d3b7"),a("159b"),a("14d9"),a("a15b"),a("71dc")),c=a("7cb6"),u="darkblue-row",d={name:"",components:{},data:function(){return{selectedWorkLine:[],workLineList:[],brokenAlarmId:"",rejectAlarmId:"",dropAlarmId:"",initialDBLoading:!1,listLoading:!0,showList:[],temp:{DatabaseName:null,TableName:null,StartTime:null,EndTime:null},queryTemp:{DatabaseName:null,TableName:null,StartTime:null,EndTime:null},dialogFormVisible:!1,dataSizeOptions:[{label:"标红-大于200M",value:200},{label:"标红-大于500M",value:500},{label:"标红-大于1GM",value:1024},{label:"标红-大于2G",value:2048}],dataSize:500,timeOptions:[{label:"半个月",value:15},{label:"一个月",value:30},{label:"二个月",value:60},{label:"三个月",value:90},{label:"半年",value:182},{label:"一年",value:365},{label:"二年",value:730}],expirationTime:90,dbDeleteOldDataEnable:!1,handleProcessTip:"",isOldSilkScreenLine:!1}},created:function(){this.handleGetDBTablesInfo()},mounted:function(){},methods:{handleInitialDB:function(){var e=this;this.initialDBLoading=!0,Object(s["e"])().then((function(t){e.initialDBLoading=!1,e.$alert(t.data,"初始化数据库")})).catch((function(t){console.log(t),e.initialDBLoading=!1}))},handleGetDBTablesInfo:function(){var e=this;Object(s["i"])().then((function(t){e.dbDeleteOldDataEnable=t.data.dbDeleteOldDataEnable,e.expirationTime=t.data.expirationTime,e.isOldSilkScreenLine=t.data.isOldSilkScreenLine,e.brokenAlarmId=t.data.brokenAlarmId,e.rejectAlarmId=t.data.rejectAlarmId,e.dropAlarmId=t.data.dropAlarmId,t.data.waferInOutWorkline.split(",").forEach((function(t){e.selectedWorkLine.push(t)})),console.log(t.data)})),Object(c["c"])().then((function(t){var a=t.data.items;a.forEach((function(t){-1===e.workLineList.indexOf(t.Workline)&&e.workLineList.push(t.Workline)}))})),this.listLoading=!0,Object(s["f"])().then((function(t){e.showList=t.data,e.listLoading=!1})).catch((function(e){console.log(e)})).finally((function(){e.listLoading=!1}))},flushDBTablesInfo:function(){var e=this;Object(s["j"])().then((function(t){e.$notify({title:"表数据刷新成功，请重新点击查询",message:"执行成功",type:"success",duration:3e3})})).catch((function(e){console.log(e)}))},setRowClass:function(e){var t=e.row,a=e.rowIndex,r=parseInt(t.TableSize);return""===t.DatabaseName?r>=this.dataSize?"lightblue-row-red":"lightblue-row-black":(0===a&&(l=n,i=u),l===t.DatabaseName?"lightblue-row"===i?r>=this.dataSize?"lightblue-row-red":"lightblue-row-black":r>=this.dataSize?"darkblue-row-red":"darkblue-row-black":(l=t.DatabaseName,"lightblue-row"===i?(i="darkblue-row",0===a&&(n=t.DatabaseName,u="darkblue-row"),r>=this.dataSize?"darkblue-row-red":"darkblue-row-black"):(0===a&&(n=t.DatabaseName,u="lightblue-row"),i="lightblue-row",r>=this.dataSize?"lightblue-row-red":"lightblue-row-black")))},handleTable:function(e){this.handleProcessTip="",this.temp.DatabaseName=e.DatabaseName,this.temp.TableName=e.TableName,this.temp.StartTime=e.MinDateTime,this.temp.EndTime=e.MaxDateTime,this.dialogFormVisible=!0},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},deleteData:function(){var e=this;this.queryTemp=Object.assign({},this.temp),this.queryTemp.StartTime=this.$moment(this.temp.StartTime).format("YYYY-MM-DD HH:mm:ss"),this.queryTemp.EndTime=this.$moment(this.temp.EndTime).format("YYYY-MM-DD HH:mm:ss"),this.$confirm("确认要删除表数据吗？").then((function(t){e.handleProcessTip="正在删除中，请耐心等待......",Object(s["c"])(e.queryTemp).then((function(t){e.handleProcessTip="",t.data?(e.$notify({title:"删除表数据",message:"执行成功",type:"success",duration:3e3}),e.dialogFormVisible=!1):e.$notify({title:"删除表数据",message:"执行失败",type:"error",duration:3e3})}))})).catch((function(e){}))},timerHandleSwitch:function(){var e=this;this.dbDeleteOldDataEnable?this.$confirm("确认需要开启定时清理数据任务吗？").then((function(t){e.configTimer()})).catch((function(t){e.dbDeleteOldDataEnable=!1})):this.$confirm("确认需要关闭定时清理数据任务吗？").then((function(t){e.configTimer()})).catch((function(t){e.dbDeleteOldDataEnable=!0}))},configTimer:function(){var e=this,t={dbDeleteOldDataEnable:this.dbDeleteOldDataEnable,expirationTime:this.expirationTime,isOldSilkScreenLine:this.isOldSilkScreenLine};Object(s["b"])(t).then((function(t){t.data?e.$notify({title:"设置定时清理数据任务",message:"执行成功",type:"success",duration:3e3}):e.$notify({title:"设置定时清理数据任务",message:"执行失败",type:"error",duration:3e3})}))},configSettingInfo:function(){var e=this;console.log(this.selectedWorkLine);var t={isOldSilkScreenLine:this.isOldSilkScreenLine,brokenAlarmId:this.brokenAlarmId,rejectAlarmId:this.rejectAlarmId,dropAlarmId:this.dropAlarmId,waferInOutWorkline:this.selectedWorkLine.join(",")};Object(s["a"])(t).then((function(t){t.data?e.$notify({title:"设置参数",message:"执行成功",type:"success",duration:3e3}):e.$notify({title:"设置参数",message:"执行失败",type:"error",duration:3e3})}))}}},m=d,p=a("2877"),b=Object(p["a"])(m,r,o,!1,null,null,null);t["default"]=b.exports},"71dc":function(e,t,a){"use strict";a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"i",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"j",(function(){return b})),a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return h})),a.d(t,"c",(function(){return g})),a.d(t,"h",(function(){return v})),a.d(t,"d",(function(){return k}));a("d3b7"),a("d9e2");var l=a("bc3a"),i=a.n(l),n=a("5c96"),r=a("4360"),o=a("5f87"),s=i.a.create({baseURL:"/inter",timeout:3e5});s.interceptors.request.use((function(e){return r["a"].getters.token&&Object(o["a"])()&&(e.headers["Authorization"]="Bearer "+Object(o["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),s.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(n["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||n["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){r["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var c=s;function u(){return c({url:"api/v1/equipments/status",method:"get"})}function d(){return c({url:"api/v1/database/status",method:"get"})}function m(){return c({url:"api/v1/database/status/settings",method:"get"})}function p(){return c({url:"api/v1/database/status/tables",method:"get"})}function b(){return c({url:"api/v1/database/status/tables/flush",method:"get"})}function f(e){return c({url:"api/v1/database/status/settings/timer",method:"put",data:e})}function h(e){return c({url:"api/v1/database/status/settings/paras",method:"put",data:e})}function g(e){return c({url:"api/v1/database/status/tables",method:"delete",params:e})}function v(e){return c({url:"api/v1/ip/status",method:"get",params:e})}function k(e){return c({url:"api/v1/equipments/status//activation",method:"get",params:e})}},"7cb6":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return s}));var l=a("b4af");function i(e){return Object(l["a"])({url:"/api/v1/equipments/page",method:"get",params:e})}function n(){return Object(l["a"])({url:"/api/v1/equipments",method:"get"})}function r(e){return Object(l["a"])({url:"/api/v1/equipments",method:"post",data:e})}function o(e){return Object(l["a"])({url:"/api/v1/equipments/"+e.Id,method:"put",data:e})}function s(e){return Object(l["a"])({url:"/api/v1/equipments/"+e.Id,method:"Delete",data:e})}}}]);