!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueSvgtree",[],e):"object"==typeof exports?exports.VueSvgtree=e():t.VueSvgtree=e()}("undefined"!=typeof self?self:this,function(){return webpackJsonpVueSvgtree([1],{fl6T:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),o=n.n(i),r={name:"VueSvgTree",data:function(){return{rules:{min:200,max:350},delayRules:{min:10,max:300},root:null,list:null,levels:null}},props:{treeData:{type:Array},direction:{type:String,default:"row"},svgId:{type:String,default:"svg"},curveness:{type:Boolean,default:!1}},mounted:function(){this.treeData&&this.treeData.length>0&&this.initData(JSON.parse(o()(this.treeData)))},watch:{treeData:function(t){t&&t.length>0&&this.initData(JSON.parse(o()(t)))}},methods:{compare:function(t,e){return t.deep!==e.deep?t.deep-e.deep:t.parent===e.parent?t.id-e.id:this.compare(t.parent,e.parent)},initData:function(t){var e=this;console.log("data",t);var n={},i=null,o=[];(t||t.length>0)&&(t.forEach(function(t){n[t.id]=t,t.deep=0,t.top=0,t.height=0,t.width=0,t.path="",t.left=0,t.prev=null}),t.forEach(function(t){if(t.fatherId||t.fatherId>0){var o=n[t.fatherId];o.children=o.children||[],o.children.push(t),t.parent=o,t.deep=o.deep+1,t.left="col"==e.direction?300*t.deep+10:0,t.top="row"==e.direction?250*t.deep+5:0,t.open=t.deep<1,t.show=t.deep<2}else i=t,t.open=!0,t.show=!0}),t.sort(this.compare),t.forEach(function(t){o[t.deep]=o[t.deep]||[],o[t.deep].push(t),t.prev=o[t.deep][o[t.deep].length-2]}),this.root=i,this.list=t,console.log("daya",t),this.levels=o,"col"==this.direction?(this.calcHeight(i),this.calcTop(),this.calSvg()):(this.calWidth(i),this.calcLeft(),this.calSvgVer()))},calcHeight:function(t){var e=this,n=0;t.parent&&!t.parent.open?(t.height=0,t.open=!1):t.open||(t.height=50),t.children&&t.children.length>0&&t.children.forEach(function(t){e.calcHeight(t),n+=t.height}),t.open&&(t.height=n||50)},calWidth:function(t){var e=this,n=0;t.parent&&!t.parent.open?(t.height=0,t.width=0,t.open=!1):t.open||(t.width=300),t.children&&t.children.length>0&&t.children.forEach(function(t){e.calWidth(t),n+=t.width}),t.open&&(t.width=n||300)},calSvg:function(){var t=this;this.$nextTick(function(){t.levels.flat(1/0).filter(function(t){return t.show}).sort(function(t,e){return e.top-t.top})[0].top;var e=document.getElementById(t.svgId);console.log("svg",e),e.setAttribute("height",500),e.setAttribute("width",700),t.$emit("toggle",t.$refs.treeContent.scrollWidth,t.root.height)})},calSvgVer:function(){var t=this;this.$nextTick(function(){t.levels.flat(1/0).filter(function(t){return t.show}).sort(function(t,e){return e.top-t.top})[0].top;var e=document.getElementById(t.svgId);e.setAttribute("height",t.$refs.treeContent.scrollHeight),e.setAttribute("width",t.root.width),t.$emit("toggle",{width:t.root.width,height:t.$refs.treeContent.scrollHeight})})},calcTop:function(t,e){if(t||(t=this.root),e=e||0,t.top=e+t.height/2,t.children&&t.children.length>0)for(var n=0;n<t.children.length;n++){var i=t.children[n].height;this.calcTop(t.children[n],e),e+=i}if(t.parent){var o=t.parent.left+300-40,r=t.parent.top,s=(t.left+o)/2;t.top;t.path="M"+t.left+","+t.top+" C "+s+" "+t.top+","+s+" "+r+","+o+" "+r+"L "+(t.parent.left+10)+","+r}},calcLeft:function(t,e){if(t||(t=this.root),e=e||0,t.left=e+t.width/2,t.children&&t.children.length>0)for(var n=0;n<t.children.length;n++){var i=t.children[n].width;this.calcLeft(t.children[n],e),e+=i}if(t.parent){var o=t.parent.left+115,r=t.parent.top+150,s=t.left+115,l=t.top,a=(o+s)/2,c=s>o?s+5:s-5;t.path=s==o?"M"+s+","+l+"  L "+o+","+r:"M"+s+","+l+" Q "+c+","+(l-30)+" "+a+","+(l-30)+" T "+o+","+r}},toggle:function(t){t.open=!t.open,console.log("vnode",t),t.children&&t.children.map(function(t){t.show=!t.show}),"col"==this.direction?(this.calcHeight(this.root),this.calcTop(),this.calSvg()):(this.calWidth(this.root),this.calcLeft(),this.calSvgVer()),console.log("toggle:",t,t.open)},showDetail:function(t){delete t.children,this.$emit("detail",t)},addTarget:function(t){delete t.children,console.log("1111111",t),this.$emit("add",t)},editTarget:function(t){delete t.children,console.log("2222222",t),this.$emit("edit",t)},detailTarget:function(t){delete t.children,this.$emit("detail",t)},refreshTarget:function(t){delete t.children,console.log("3333333",t),this.$emit("refresh",t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{ref:"treeContent",staticClass:"draw-area",attrs:{id:"treeContent"}},[t._l(t.levels,function(e,i){return n("div",{key:i},t._l(e,function(e,i){return!e.parent||e.parent.open?n("div",{key:i,staticClass:"vnode",class:{pnode:e.children&&e.children.length>0},style:"left:"+e.left+"px; top:"+e.top+"px",on:{click:function(n){return t.toggle(e)}}},[n("div",{staticClass:"text"},[n("div",{staticClass:"node_title"},[n("span",{staticClass:"OKR",class:"0"==e.tlevel?"pink":"blue"},[t._v("\n                          "+t._s("0"==e.tlevel?"C":"L")+"\n                        ")]),t._v(" "),n("span",{staticClass:"label"},[t._v("\n                          "+t._s(e.name)+"\n                        ")])]),t._v(" "),n("div",{staticClass:"node_des"},[n("div",[t._v(t._s(e.content))])]),t._v(" "),n("div",{staticClass:"node_progress"},[t._v("\n                        "+t._s(e.des)+"\n                      ")]),t._v(" "),t._m(0,!0)])]):t._e()}),0)}),t._v(" "),t.curveness?n("svg",{attrs:{id:t.svgId}},t._l(t.list,function(e,i){return e.deep>0&&e.parent.open?n("line",{staticClass:"link",attrs:{x1:e.left+90,y1:e.top,x2:e.parent.left+105,y2:e.parent.top+150,stroke:e.color?e.color:"#aaa","stroke-width":e.strokeWidth?e.strokeWidth:"1px"}}):t._e()}),0):t._e(),t._v(" "),t.curveness?t._e():n("svg",{attrs:{id:t.svgId}},t._l(t.list,function(e,i){return e.deep>0&&e.parent.open?n("path",{staticClass:"link",attrs:{d:e.path,stroke:e.color?e.color:"#aaa","stroke-width":e.strokeWidth?e.strokeWidth:"1px"}}):t._e()}),0)],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"showTips"},[e("a",{staticClass:"tips_icon icon_edit ",attrs:{target:"_blank",href:"https://www.cnblogs.com/calamus"}},[this._v("\n                            B\n                          ")]),this._v(" "),e("a",{staticClass:"tips_icon icon_edit ",attrs:{target:"_blank",href:"https://www.calamus.xyz"}},[this._v("\n                            C\n                          ")]),this._v(" "),e("a",{staticClass:"tips_icon icon_edit ",attrs:{target:"_blank",href:"https://github.com/calamus0427"}},[this._v("\n                            G\n                          ")])])}]};var l=n("VU/8")(r,s,!1,function(t){n("gH1I")},null,null).exports;e.default=l;"undefined"!=typeof window&&window.Vue&&window.Vue.component(l.name,l)},gH1I:function(t,e){}},["fl6T"])});
//# sourceMappingURL=app.c5d489d7531359a95ae4.js.map