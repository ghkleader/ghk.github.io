(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8132ac4e"],{"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,n){var a=l(),i=e-a,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var l=Math.easeInOutQuad(u,a,i,t);r(l),u<t?o(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(n("5660"),n("2877")),m=Object(d["a"])(c,a,i,!1,null,"6af373ef",null);t["a"]=m.exports},5660:function(e,t,n){"use strict";n("7a30")},5915:function(e,t,n){},6724:function(e,t,n){"use strict";n("8d41");var a="@@wavesContext";function i(e,t){function n(n){var a=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",o.appendChild(l)),i.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-r.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-r.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=n:e[a]={removeHandle:n},n}var o={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"6e67":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var a=n("042a");function i(e){return Object(a["a"])({url:"/api/v1/qrcodes/page",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/api/v1/qrcodes/volume-container",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/api/v1/qrcodes/volume-life",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/api/v1/qrcodes/volume-pass",method:"get",params:e})}},"7a30":function(e,t,n){},"8d41":function(e,t,n){},c93f:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"search-container filter-item"},[n("label",[e._v("二维码参数:")]),n("el-autocomplete",{staticStyle:{width:"250px"},attrs:{"fetch-suggestions":function(t,n){return e.querySearchItem(e.membranenoContainer,t,n)},placeholder:"请选择二维码ID",clearable:""},model:{value:e.listQuery.membraneno,callback:function(t){e.$set(e.listQuery,"membraneno",t)},expression:"listQuery.membraneno"}}),n("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择合格类型",clearable:""},model:{value:e.listQuery.manufacturePass,callback:function(t){e.$set(e.listQuery,"manufacturePass",t)},expression:"listQuery.manufacturePass"}},e._l(e.manufactureTypeOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e,value:e}})})),1),n("el-autocomplete",{staticStyle:{width:"180px"},attrs:{"fetch-suggestions":function(t,n){return e.querySearchItem(e.equipNoContainer,t,n)},placeholder:"请选择生产设备编号",clearable:""},model:{value:e.listQuery.equipNo,callback:function(t){e.$set(e.listQuery,"equipNo",t)},expression:"listQuery.equipNo"}}),n("label",{staticStyle:{"margin-left":"50px"}},[e._v("膜参数:")]),n("el-autocomplete",{staticStyle:{width:"150px"},attrs:{"fetch-suggestions":function(t,n){return e.querySearchItem(e.materialContainer,t,n)},placeholder:"请选择膜材质",clearable:""},model:{value:e.listQuery.material,callback:function(t){e.$set(e.listQuery,"material",t)},expression:"listQuery.material"}}),n("el-autocomplete",{staticStyle:{width:"150px"},attrs:{"fetch-suggestions":function(t,n){return e.querySearchItem(e.batchNoContainer,t,n)},placeholder:"请选择膜批次号",clearable:""},model:{value:e.listQuery.batchNo,callback:function(t){e.$set(e.listQuery,"batchNo",t)},expression:"listQuery.batchNo"}}),n("el-autocomplete",{staticStyle:{width:"200px"},attrs:{"fetch-suggestions":function(t,n){return e.querySearchItem(e.shimNoContainer,t,n)},placeholder:"请选择SHIM型号及编号",clearable:""},model:{value:e.listQuery.shimNo,callback:function(t){e.$set(e.listQuery,"shimNo",t)},expression:"listQuery.shimNo"}}),n("el-autocomplete",{staticStyle:{width:"120px"},attrs:{"fetch-suggestions":function(t,n){return e.querySearchItem(e.volumeNoContainer,t,n)},placeholder:"请选择卷号",clearable:""},model:{value:e.listQuery.volumeNo,callback:function(t){e.$set(e.listQuery,"volumeNo",t)},expression:"listQuery.volumeNo"}}),n("br"),n("label",[e._v("开始时间:")]),n("el-date-picker",{attrs:{type:e.DateType,clearable:!1,placeholder:"选择生产开始时间",align:"right","picker-options":e.startPickerOptions},model:{value:e.listQuery.manufactureStartTime,callback:function(t){e.$set(e.listQuery,"manufactureStartTime",t)},expression:"listQuery.manufactureStartTime"}}),n("label",{staticStyle:{"margin-left":"10px"}},[e._v("结束时间:")]),n("el-date-picker",{attrs:{type:e.DateType,clearable:!1,placeholder:"请选择生产截止时间",align:"right","picker-options":e.endPickerOptions},model:{value:e.listQuery.manufactureEndTime,callback:function(t){e.$set(e.listQuery,"manufactureEndTime",t)},expression:"listQuery.manufactureEndTime"}}),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" "+e._s(e.$t("table.search"))+" ")]),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" "+e._s(e.$t("table.export"))+" ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"table",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"",height:"630","highlight-current-row":e.highLightEnable},on:{"row-click":e.rowClick}},[n("el-table-column",{attrs:{label:"生产时间","min-width":"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("parseTime")(Date.parse(a.ManufactureTime),"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),n("el-table-column",{attrs:{label:"二维码ID",prop:"id","min-width":"250px",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.MembraneNo))])]}}])}),n("el-table-column",{attrs:{label:"合格类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.ManufacturePass))])]}}])}),n("el-table-column",{attrs:{label:"生产设备编号","min-width":"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.EquipNo))])]}}])}),n("el-table-column",{attrs:{label:"膜材质","min-width":"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.Material))])]}}])}),n("el-table-column",{attrs:{label:"膜批次号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.BatchNo))])]}}])}),n("el-table-column",{attrs:{label:"SHIM型号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.ShimNo))])]}}])}),n("el-table-column",{attrs:{label:"卷号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.VolumeNo))])]}}])}),n("el-table-column",{attrs:{label:"加热时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.HeatTime))])]}}])}),n("el-table-column",{attrs:{label:"最低温度",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.MinHoldingTemp))])]}}])}),n("el-table-column",{attrs:{label:"冷水时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.coldwatertime))])]}}])}),n("el-table-column",{attrs:{label:"脱膜最高温度",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.maxdetachmenttemp))])]}}])}),n("el-table-column",{attrs:{label:"合膜压力",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.lowermoldpressure))])]}}])}),n("el-table-column",{attrs:{label:"生产片数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cleanproductionpcs))])]}}])}),n("el-table-column",{attrs:{label:"是否真空",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.sealpass))])]}}])}),n("el-table-column",{attrs:{label:"膜长",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.membranelength))])]}}])}),n("el-table-column",{attrs:{label:"清洗合格",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cleanpass))])]}}])}),n("el-table-column",{attrs:{label:"清洗速度",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cleanspeed))])]}}])}),n("el-table-column",{attrs:{label:"清洗温度",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cleantemp))])]}}])}),n("el-table-column",{attrs:{label:"清洗次数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cleancount))])]}}])}),n("el-table-column",{attrs:{label:"清洗时间",align:"center","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cleantime))])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],staticStyle:{"margin-top":"0px"},attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}})],1)},i=[],o=(n("d81d"),n("4de4"),n("d3b7"),n("14d9"),n("4e82"),n("159b"),n("3ca3"),n("ddb0"),n("6e67")),r=n("6724"),l=n("ed08"),s=n("333d"),u={components:{Pagination:s["a"]},directives:{waves:r["a"]},filters:{},data:function(){return{DateType:"datetime",lastClickId:void 0,highLightEnable:!0,tableKey:0,list:null,membranenoContainer:[],equipNoContainer:[],materialContainer:[],batchNoContainer:[],shimNoContainer:[],volumeNoContainer:[],total:0,listLoading:!0,listQuery:{page:1,limit:20,membraneno:void 0,manufactureStartTime:new Date((new Date).getTime()-7776e6),manufactureEndTime:new Date,material:void 0,batchNo:void 0,shimNo:void 0,equipNo:void 0,volumeNo:void 0,manufacturePass:void 0},manufactureTypeOptions:["合格","不合格"],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新建"},dialogPvVisible:!1,pvData:[],downloadLoading:!1,startPickerOptions:{shortcuts:[{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}},{text:"一个月前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-2592e6),e.$emit("pick",t)}},{text:"六个月前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-15552e6),e.$emit("pick",t)}}]},endPickerOptions:{shortcuts:[{text:"今天",onClick:function(e){var t=new Date;t.setTime(t.getTime()),e.$emit("pick",t)}}]}}},created:function(){this.getList(),this.getTotalList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(o["c"])(this.listQuery).then((function(t){e.list=t.data.items,e.total=t.data.total,e.list.map((function(e){return!0===e.ManufacturePass?e.ManufacturePass="合格":!1===e.ManufacturePass&&(e.ManufacturePass="不合格"),e})),e.listLoading=!1}))},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},querySearchItem:function(e,t,n){var a=e,i=t?a.filter(this.createFilter(t)):a;n(i)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){},insertSuggestContain:function(e){this.membranenoContainer.some((function(t){return t.value===e.MembraneNo}))||this.membranenoContainer.push({value:e.MembraneNo}),this.membranenoContainer.sort(),this.equipNoContainer.some((function(t){return t.value===e.EquipNo}))||this.equipNoContainer.push({value:e.EquipNo}),this.equipNoContainer.sort(),this.materialContainer.some((function(t){return t.value===e.Material}))||this.materialContainer.push({value:e.Material}),this.materialContainer.sort(),this.batchNoContainer.some((function(t){return t.value===e.BatchNo}))||this.batchNoContainer.push({value:e.BatchNo}),this.batchNoContainer.sort(),this.shimNoContainer.some((function(t){return t.value===e.ShimNo}))||this.shimNoContainer.push({value:e.ShimNo}),this.shimNoContainer.sort(),this.volumeNoContainer.some((function(t){return t.value===e.VolumeNo}))||this.volumeNoContainer.push({value:e.VolumeNo}),this.volumeNoContainer.sort()},getTotalList:function(){var e=this;this.listLoading=!0,Object(o["c"])(this.listQuery).then((function(t){t.data.items.forEach((function(t,n){e.insertSuggestContain(t)})),e.listLoading=!1}))},handleFilter:function(){null!=this.listQuery.manufactureStartTime&&null!=this.listQuery.manufactureEndTime?this.listQuery.manufactureStartTime>this.listQuery.manufactureEndTime?this.$notify.error({title:"错误",message:"时间设置错误! 开始时间不能大于结束时间"}):(this.listQuery.page=1,this.getList()):this.$notify.error({title:"错误",message:"开始时间和结束时间为空！"})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-6e83591c"),n.e("chunk-234ecc1b"),n.e("chunk-2133cd4f")]).then(n.bind(null,"4bf8")).then((function(t){var n=["生产时间","二维码ID","合格类型","生产设备编号","膜材质","膜批次号","SHIM型号","卷号"],a=["ManufactureTime","MembraneNo","ManufacturePass","EquipNo","Material","BatchNo","ShimNo","VolumeNo"],i=e.formatJson(a);t.export_json_to_excel({header:n,data:i,filename:"二维码信息"}),e.downloadLoading=!1}))},formatJson:function(e){return this.list.map((function(t){return e.map((function(e){return"datetime"===e?Object(l["d"])(Date.parse(t[e]),"{y}-{m}-{d} {h}:{i}:{s}"):t[e]}))}))},rowClick:function(e,t,n){this.lastClickId===e.id&&!0===this.highLightEnable?this.highLightEnable=!1:this.highLightEnable=!0,this.lastClickId=e.id}}},c=u,d=(n("f974"),n("2877")),m=Object(d["a"])(c,a,i,!1,null,"2e803f5e",null);t["default"]=m.exports},f974:function(e,t,n){"use strict";n("5915")}}]);