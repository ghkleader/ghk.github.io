(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12e9696d"],{"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,a){var n=o(),i=e-n,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var o=Math.easeInOutQuad(u,n,i,t);s(o),u<t?r(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(a("5660"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"6af373ef",null);t["a"]=p.exports},5660:function(e,t,a){"use strict";a("7a30")},6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function i(e,t){function a(a){var n=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),i.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var r={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},s=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;t["a"]=r},"71dc":function(e,t,a){"use strict";a.d(t,"f",(function(){return c})),a.d(t,"d",(function(){return d})),a.d(t,"h",(function(){return p})),a.d(t,"e",(function(){return m})),a.d(t,"i",(function(){return f})),a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return g})),a.d(t,"c",(function(){return b})),a.d(t,"g",(function(){return v}));a("d3b7"),a("d9e2");var n=a("bc3a"),i=a.n(n),r=a("5c96"),s=a("4360"),o=a("5f87"),l=i.a.create({baseURL:"/inter",timeout:3e5});l.interceptors.request.use((function(e){return s["a"].getters.token&&Object(o["a"])()&&(e.headers["Authorization"]="Bearer "+Object(o["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),l.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(r["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||r["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){s["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var u=l;function c(){return u({url:"api/v1/equipments/status",method:"get"})}function d(){return u({url:"api/v1/database/status",method:"get"})}function p(){return u({url:"api/v1/database/status/settings",method:"get"})}function m(){return u({url:"api/v1/database/status/tables",method:"get"})}function f(){return u({url:"api/v1/database/status/tables/flush",method:"get"})}function h(e){return u({url:"api/v1/database/status/settings/timer",method:"put",data:e})}function g(e){return u({url:"api/v1/database/status/settings/paras",method:"put",data:e})}function b(e){return u({url:"api/v1/database/status/tables",method:"delete",params:e})}function v(e){return u({url:"api/v1/ip/status",method:"get",params:e})}},"775a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-autocomplete",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{"fetch-suggestions":e.querySearchEqpname,placeholder:"请选择设备名称",clearable:""},on:{select:e.handleSelect},model:{value:e.listQuery.eqpname,callback:function(t){e.$set(e.listQuery,"eqpname",t)},expression:"listQuery.eqpname"}}),a("el-autocomplete",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{"fetch-suggestions":e.querySearchWorkline,placeholder:"请选择所属产线",clearable:""},on:{select:e.handleSelect},model:{value:e.listQuery.workline,callback:function(t){e.$set(e.listQuery,"workline",t)},expression:"listQuery.workline"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"请选择设备状态",clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.eqpStatusTypeOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" "+e._s(e.$t("table.search"))+" ")]),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" "+e._s(e.$t("table.add"))+" ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" "+e._s(e.$t("table.export"))+" ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"table",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":e.highLightEnable},on:{"row-click":e.rowClick}},[a("el-table-column",{attrs:{label:"序号",prop:"id",align:"center",width:"80",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.Id))])]}}])}),a("el-table-column",{attrs:{label:"时间","min-width":"20%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("parseTime")(Date.parse(n.DateTime),"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),a("el-table-column",{attrs:{label:"设备名称",align:"center","min-width":"20%"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",{staticClass:"link-type",on:{click:function(t){return e.handleUpdate(n)}}},[e._v(e._s(n.EqpName))])]}}])}),a("el-table-column",{attrs:{label:"MES IP地址",align:"center","min-width":"15%"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-tooltip",{attrs:{content:"点击Ping设备",placement:"top",effect:"light","hide-after":2500,"open-delay":500}},[a("el-tag",{staticClass:"link-type",on:{click:function(t){return e.pingTest(n.MesIP)}}},[e._v(e._s(n.MesIP))])],1)]}}])}),a("el-table-column",{attrs:{label:"所属产线",align:"center","min-width":"30%"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.Workline))])]}}])}),a("el-table-column",{attrs:{label:"创建人","min-width":"15%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.Author))])]}}])}),a("el-table-column",{attrs:{label:e.$t("table.status"),"class-name":"status-col","min-width":"15%"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-tag",{attrs:{type:e._f("statusFilter")(n.ActionStatus)}},[e._v(" "+e._s(n.Status)+" ")])]}}])}),a("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center","min-width":"30%","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row,i=t.$index;return[a("el-button",{attrs:{disabled:"published"==n.ActionStatus,type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v(" "+e._s(e.$t("table.edit"))+" ")]),"published"!=n.ActionStatus?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.handleModifyStatus(n,"published")}}},[e._v(" "+e._s(e.$t("table.publish"))+" ")]):e._e(),"draft"!=n.ActionStatus?a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleModifyStatus(n,"draft")}}},[e._v(" "+e._s(e.$t("table.draft"))+" ")]):e._e(),"deleted"!=n.ActionStatus?a("el-button",{attrs:{disabled:"published"==n.ActionStatus,size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(n,i)}}},[e._v(" "+e._s(e.$t("table.delete"))+" ")]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),a("el-dialog",{staticStyle:{"min-width":"500px"},attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:e.dialogFormWidth,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"70%","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"85px"}},[a("el-form-item",{attrs:{label:"设备名称",prop:"EqpName"}},[a("el-input",{model:{value:e.temp.EqpName,callback:function(t){e.$set(e.temp,"EqpName",t)},expression:"temp.EqpName"}})],1),a("el-form-item",{attrs:{label:"设备状态",prop:"Status"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.Status,callback:function(t){e.$set(e.temp,"Status",t)},expression:"temp.Status"}},e._l(e.createEqpTypeOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"IP地址",prop:"MesIP"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.MesIP,callback:function(t){e.$set(e.temp,"MesIP",t)},expression:"temp.MesIP"}})],1),a("el-form-item",{attrs:{label:"所属产线",prop:"Workline"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.Workline,callback:function(t){e.$set(e.temp,"Workline",t)},expression:"temp.Workline"}})],1),a("el-form-item",{attrs:{label:"时间",prop:"DateTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"请选择"},model:{value:e.temp.DateTime,callback:function(t){e.$set(e.temp,"DateTime",t)},expression:"temp.DateTime"}})],1),a("el-form-item",{attrs:{label:"创建人",prop:"Author"}},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:"请输入"},model:{value:e.temp.Author,callback:function(t){e.$set(e.temp,"Author",t)},expression:"temp.Author"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" "+e._s(e.$t("table.cancel"))+" ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(" "+e._s(e.$t("table.confirm"))+" ")])],1)],1)],1)},i=[],r=a("c7eb"),s=a("1da1"),o=(a("d9e2"),a("ac1f"),a("00b4"),a("4de4"),a("d3b7"),a("159b"),a("caad"),a("14d9"),a("4e82"),a("3ca3"),a("ddb0"),a("d81d"),a("7cb6")),l=a("71dc"),u=a("6724"),c=a("ed08"),d=a("333d"),p={data:function(){return{$_resizeHandler:null}},mounted:function(){var e=this;this.$_resizeHandler=Object(c["b"])((function(){console.log("宽度："+document.body.clientWidth),document.body.clientWidth-1<992?e.dialogFormWidth="100%":e.dialogFormWidth="40%"}),100),this.$_initResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent()},activated:function(){this.$_initResizeEvent()},deactivated:function(){this.$_destroyResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)}}},m={name:"EquipmentTable",components:{Pagination:d["a"]},directives:{waves:u["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},xmlNameFilter:function(e){var t=e.split("\\");return t[t.length-1]}},mixins:[p],data:function(){var e=function(e,t,a){var n=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;""===t?a(new Error("请输入IP地址")):""!==t&&!1===n.test(t)?a(new Error("请输入正确格式IP如(11.11.11.11)")):a()};return{dialogFormWidth:"40%",editDisEnable:!1,deleteDisEnable:!1,lastClickId:void 0,highLightEnable:!0,tableKey:0,list:null,allEqp:null,eqpNameContainer:[],worklineContainer:[],total:0,listLoading:!0,listQuery:{page:1,limit:20,eqpname:void 0,mesip:void 0,workline:void 0,status:void 0,author:void 0},eqpStatusTypeOptions:["项目启动中","代码开发中","测试验证中","正在量产"],createEqpTypeOptions:["项目启动中","代码开发中","测试验证中"],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],showReviewer:!1,temp:{Id:void 0,MesIP:"",Workline:"",DateTime:new Date,Author:"",EqpName:"",Status:"",ActionStatus:"draft"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新建"},dialogPvVisible:!1,pvData:[],rules:{Status:[{required:!0,message:"设备状态是必须的",trigger:"change"}],DateTime:[{type:"date",required:!0,message:"创建日期是必须的",trigger:"change"}],EqpName:[{required:!0,message:"设备名称是必须的",trigger:"blur"}],Author:[{required:!0,message:"创建人是必须的",trigger:"blur"}],MesIP:[{required:!0,message:e.Error,validator:e,trigger:"blur"}],Workline:[{required:!0,message:"所属产线是必须的",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList(),this.getTotalList()},methods:{handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},querySearchEqpname:function(e,t){var a=this.eqpNameContainer,n=e?a.filter(this.createFilter(e)):a;t(n)},querySearchWorkline:function(e,t){var a=this.worklineContainer,n=e?a.filter(this.createFilter(e)):a;t(n)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){},getList:function(){var e=this;this.listLoading=!0,Object(o["d"])(this.listQuery).then((function(t){e.list=t.data.items,e.total=t.data.total,e.listLoading=!1}))},getTotalList:function(){var e=this,t=[],a=[];Object(o["c"])().then((function(n){e.allEqp=n.data.items,e.allEqp.forEach((function(e,n){t.includes(e.EqpName)||t.push(e.EqpName),t.sort(),a.includes(e.Workline)||a.push(e.Workline),a.sort()})),e.eqpNameContainer=[],t.forEach((function(t,a){e.eqpNameContainer.push({value:t})})),e.worklineContainer=[],a.forEach((function(t,a){e.worklineContainer.push({value:t})}))}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){var a=this;"published"===t?(this.editDisEnable=!0,this.deleteDisEnable=!0,e.Status=this.eqpStatusTypeOptions[3]):"draft"===t&&(this.editDisEnable=!1,this.deleteDisEnable=!1,e.Status=this.eqpStatusTypeOptions[2]),e.ActionStatus=t,this.temp=Object.assign({},e),Object(o["e"])(this.temp).then((function(e){e.data&&(a.$message({message:"操作成功",type:"success"}),a.getList())}))},resetTemp:function(){this.temp={Id:void 0,MesIP:"",Workline:"",DateTime:new Date,EqpName:"",Author:"",Status:"",ActionStatus:"draft"}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&Object(o["a"])(e.temp).then((function(t){e.dialogFormVisible=!1,t.data&&(e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3}),e.getList(),e.getTotalList())}))}))},handleUpdate:function(e){var t=this;"正在量产"!==e.Status&&(this.temp=Object.assign({},e),this.temp.DateTime=new Date(this.temp.DateTime),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()})))},pingTest:function(e){var t=this;return Object(s["a"])(Object(r["a"])().mark((function a(){var n;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:n={ip:e},Object(l["g"])(n).then((function(a){a.data?t.$notify({title:"测试Ping "+e+" 结果",message:"通讯正常",type:"success",duration:2e3}):t.$notify({title:"测试Ping "+e+" 结果",message:"通讯失败",type:"error",duration:2e3})}));case 2:case"end":return a.stop()}}),a)})))()},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);Object(o["e"])(a).then((function(t){e.dialogFormVisible=!1,t.data&&(e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}),e.getList(),e.getTotalList())}))}}))},handleDelete:function(e,t){var a=this,n=Object.assign({},e);Object(o["b"])(n).then((function(e){e.data&&(a.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),a.getList(),a.getTotalList())}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-6e83591c"),a.e("chunk-234ecc1b"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(t){var a=["序号","时间","设备名称","MES IP地址","所属产线","创建人","状态"],n=["Id","DateTime","EqpName","MesIP","Workline","Author","Status"],i=e.formatJson(n);t.export_json_to_excel({header:a,data:i,filename:"配置表"}),e.downloadLoading=!1}))},formatJson:function(e){return this.allEqp.map((function(t){return e.map((function(e){return"datetime"===e?Object(c["d"])(Date.parse(t[e]),"{y}-{m}-{d} {h}:{i}:{s}"):t[e]}))}))},rowClick:function(e,t,a){this.lastClickId===e.id&&!0===this.highLightEnable?this.highLightEnable=!1:this.highLightEnable=!0,this.lastClickId=e.id}}},f=m,h=a("2877"),g=Object(h["a"])(f,n,i,!1,null,null,null);t["default"]=g.exports},"7a30":function(e,t,a){},"7cb6":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return l}));var n=a("b4af");function i(e){return Object(n["a"])({url:"/api/v1/equipments/page",method:"get",params:e})}function r(){return Object(n["a"])({url:"/api/v1/equipments",method:"get"})}function s(e){return Object(n["a"])({url:"/api/v1/equipments",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/api/v1/equipments/"+e.Id,method:"put",data:e})}function l(e){return Object(n["a"])({url:"/api/v1/equipments/"+e.Id,method:"Delete",data:e})}},"8d41":function(e,t,a){}}]);