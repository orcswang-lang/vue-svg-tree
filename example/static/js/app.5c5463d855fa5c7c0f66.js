webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},l,!1,function(e){a("W43E")},null,null).exports,r=a("/ocq"),o=a("vp0u"),s=[{id:100,name:"Calamus",des:"www.calamus.xyz",color:"#E1244E",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,delay:120,fatherId:0,tlevel:1},{id:101,name:"Calamus1",des:"www.calamus.xyz",color:"#E1244E",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:0,fatherId:100,tlevel:1},{id:102,name:"Calamus2",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:100,fatherId:100,tlevel:0},{id:103,name:"Calamus3",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:100,tlevel:0},{id:104,name:"Calamus4",des:"www.calamus.xyz",color:"#E1244E",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:200,fatherId:100,tlevel:0},{id:105,name:"Calamus5",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:101,tlevel:0},{id:106,name:"Calamus6",des:"www.calamus.xyz",color:"#E1244E",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:102,tlevel:0},{id:107,name:"Calamus7",des:"www.calamus.xyz",color:"#E1244E",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:102,tlevel:0},{id:108,name:"Calamus8",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:102,tlevel:0},{id:109,name:"Calamus9",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:102,tlevel:0},{id:110,name:"Calamus10",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:102,tlevel:0},{id:111,name:"Calamus11",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:102,tlevel:0},{id:112,name:"Calamus12",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:300,fatherId:103,tlevel:0},{id:113,name:"Calamus13",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:103,tlevel:0},{id:114,name:"Calamus14",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:108,tlevel:0},{id:116,name:"Calamus15",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:108,tlevel:0},{id:117,name:"Calamus16",des:"www.calamus.xyz",color:"#aaa",content:"你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你",value:123,fatherId:108,tlevel:0}];s.forEach(function(e){e.delay||(e.delay=200*Math.random())});var c=s,d={name:"HelloWorld",components:{VueSvgTree:o.a},data:function(){return{msg:"Welcome to Your Vue.js App",treeData:c}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("vue-svg-tree",{ref:"svgTree",attrs:{treeData:this.treeData,svgId:"svg"}})],1)},staticRenderFns:[]};var u=a("VU/8")(d,h,!1,function(e){a("xeEF")},"data-v-3e5cda44",null).exports;n.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"HelloWorld",component:u}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:p,components:{App:i},template:"<App/>"})},W43E:function(e,t){},ayXY:function(e,t){},ue7O:function(e,t,a){"use strict";var n=a("mvHQ"),l=a.n(n),i={name:"VueSvgTree",data:function(){return{rules:{min:200,max:350},delayRules:{min:10,max:300},root:null,list:null,levels:null}},props:{treeData:{type:Array},direction:{type:String,default:"row"},svgId:{type:String,default:"svg"},curveness:{type:Boolean,default:!1}},mounted:function(){this.treeData&&this.treeData.length>0&&this.initData(JSON.parse(l()(this.treeData)))},watch:{treeData:function(e){e&&e.length>0&&this.initData(JSON.parse(l()(e)))}},methods:{compare:function(e,t){return e.deep!==t.deep?e.deep-t.deep:e.parent===t.parent?e.id-t.id:this.compare(e.parent,t.parent)},initData:function(e){var t=this;console.log("data",e);var a={},n=null,l=[];(e||e.length>0)&&(e.forEach(function(e){a[e.id]=e,e.deep=0,e.top=0,e.height=0,e.width=0,e.path="",e.left=0,e.prev=null}),e.forEach(function(e){if(e.fatherId||e.fatherId>0){var l=a[e.fatherId];l.children=l.children||[],l.children.push(e),e.parent=l,e.deep=l.deep+1,e.left="col"==t.direction?300*e.deep+10:0,e.top="row"==t.direction?250*e.deep+5:0,e.open=e.deep<1,e.show=e.deep<2}else n=e,e.open=!0,e.show=!0}),e.sort(this.compare),e.forEach(function(e){l[e.deep]=l[e.deep]||[],l[e.deep].push(e),e.prev=l[e.deep][l[e.deep].length-2]}),this.root=n,this.list=e,console.log("daya",e),this.levels=l,"col"==this.direction?(this.calcHeight(n),this.calcTop(),this.calSvg()):(this.calWidth(n),this.calcLeft(),this.calSvgVer()))},calcHeight:function(e){var t=this,a=0;e.parent&&!e.parent.open?(e.height=0,e.open=!1):e.open||(e.height=50),e.children&&e.children.length>0&&e.children.forEach(function(e){t.calcHeight(e),a+=e.height}),e.open&&(e.height=a||50)},calWidth:function(e){var t=this,a=0;e.parent&&!e.parent.open?(e.height=0,e.width=0,e.open=!1):e.open||(e.width=300),e.children&&e.children.length>0&&e.children.forEach(function(e){t.calWidth(e),a+=e.width}),e.open&&(e.width=a||300)},calSvg:function(){var e=this;this.$nextTick(function(){e.levels.flat(1/0).filter(function(e){return e.show}).sort(function(e,t){return t.top-e.top})[0].top;var t=document.getElementById(e.svgId);console.log("svg",t),t.setAttribute("height",500),t.setAttribute("width",700),e.$emit("toggle",e.$refs.treeContent.scrollWidth,e.root.height)})},calSvgVer:function(){var e=this;this.$nextTick(function(){e.levels.flat(1/0).filter(function(e){return e.show}).sort(function(e,t){return t.top-e.top})[0].top;var t=document.getElementById(e.svgId);t.setAttribute("height",e.$refs.treeContent.scrollHeight),t.setAttribute("width",e.root.width),e.$emit("toggle",{width:e.root.width,height:e.$refs.treeContent.scrollHeight})})},calcTop:function(e,t){if(e||(e=this.root),t=t||0,e.top=t+e.height/2,e.children&&e.children.length>0)for(var a=0;a<e.children.length;a++){var n=e.children[a].height;this.calcTop(e.children[a],t),t+=n}if(e.parent){var l=e.parent.left+300-40,i=e.parent.top,r=(e.left+l)/2;e.top;e.path="M"+e.left+","+e.top+" C "+r+" "+e.top+","+r+" "+i+","+l+" "+i+"L "+(e.parent.left+10)+","+i}},calcLeft:function(e,t){if(e||(e=this.root),t=t||0,e.left=t+e.width/2,e.children&&e.children.length>0)for(var a=0;a<e.children.length;a++){var n=e.children[a].width;this.calcLeft(e.children[a],t),t+=n}if(e.parent){var l=e.parent.left+115,i=e.parent.top+150,r=e.left+115,o=e.top,s=(l+r)/2,c=r>l?r+5:r-5;e.path=r==l?"M"+r+","+o+"  L "+l+","+i:"M"+r+","+o+" Q "+c+","+(o-30)+" "+s+","+(o-30)+" T "+l+","+i}},toggle:function(e){e.open=!e.open,console.log("vnode",e),e.children&&e.children.map(function(e){e.show=!e.show}),"col"==this.direction?(this.calcHeight(this.root),this.calcTop(),this.calSvg()):(this.calWidth(this.root),this.calcLeft(),this.calSvgVer()),console.log("toggle:",e,e.open)},showDetail:function(e){delete e.children,this.$emit("detail",e)},addTarget:function(e){delete e.children,console.log("1111111",e),this.$emit("add",e)},editTarget:function(e){delete e.children,console.log("2222222",e),this.$emit("edit",e)},detailTarget:function(e){delete e.children,this.$emit("detail",e)},refreshTarget:function(e){delete e.children,console.log("3333333",e),this.$emit("refresh",e)}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{ref:"treeContent",staticClass:"draw-area",attrs:{id:"treeContent"}},[e._l(e.levels,function(t,n){return a("div",{key:n},e._l(t,function(t,n){return!t.parent||t.parent.open?a("div",{key:n,staticClass:"vnode",class:{pnode:t.children&&t.children.length>0},style:"left:"+t.left+"px; top:"+t.top+"px",on:{click:function(a){return e.toggle(t)}}},[a("div",{staticClass:"text"},[a("div",{staticClass:"node_title"},[a("span",{staticClass:"OKR",class:"0"==t.tlevel?"pink":"blue"},[e._v("\n                          "+e._s("0"==t.tlevel?"C":"L")+"\n                        ")]),e._v(" "),a("span",{staticClass:"label"},[e._v("\n                          "+e._s(t.name)+"\n                        ")])]),e._v(" "),a("div",{staticClass:"node_des"},[a("div",[e._v(e._s(t.content))])]),e._v(" "),a("div",{staticClass:"node_progress"},[e._v("\n                        "+e._s(t.des)+"\n                      ")]),e._v(" "),e._m(0,!0)])]):e._e()}),0)}),e._v(" "),e.curveness?a("svg",{attrs:{id:e.svgId}},e._l(e.list,function(t,n){return t.deep>0&&t.parent.open?a("line",{staticClass:"link",attrs:{x1:t.left+90,y1:t.top,x2:t.parent.left+105,y2:t.parent.top+150,stroke:t.color?t.color:"#aaa","stroke-width":t.strokeWidth?t.strokeWidth:"1px"}}):e._e()}),0):e._e(),e._v(" "),e.curveness?e._e():a("svg",{attrs:{id:e.svgId}},e._l(e.list,function(t,n){return t.deep>0&&t.parent.open?a("path",{staticClass:"link",attrs:{d:t.path,stroke:t.color?t.color:"#aaa","stroke-width":t.strokeWidth?t.strokeWidth:"1px"}}):e._e()}),0)],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"showTips"},[t("a",{staticClass:"tips_icon icon_edit ",attrs:{target:"_blank",href:"https://www.cnblogs.com/calamus"}},[this._v("\n                            B\n                          ")]),this._v(" "),t("a",{staticClass:"tips_icon icon_edit ",attrs:{target:"_blank",href:"https://www.calamus.xyz"}},[this._v("\n                            C\n                          ")]),this._v(" "),t("a",{staticClass:"tips_icon icon_edit ",attrs:{target:"_blank",href:"https://github.com/calamus0427"}},[this._v("\n                            G\n                          ")])])}]};var o=a("VU/8")(i,r,!1,function(e){a("ayXY")},null,null);t.a=o.exports},xeEF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5c5463d855fa5c7c0f66.js.map