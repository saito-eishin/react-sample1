(this["webpackJsonpreact-samplex"]=this["webpackJsonpreact-samplex"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(21),r=n.n(i),s=(n(29),n(10)),l=n(11),u=n(7),h=n(14),j=n(13),o=n(12),b=n(2),d=(n(30),n(23)),O=n(1),v=Object(d.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return e+1;default:return e}})),x=function(){var e=v.getState().toString();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"container",children:"\u81e8\u6642\u30b5\u30a4\u30c8"}),Object(O.jsxs)("p",{className:"container",children:["\u9077\u79fb\u56de\u6570\uff1a",e]}),Object(O.jsx)("p",{children:Object(O.jsx)(o.b,{to:"/",children:"\u9077\u79fb\u30ab\u30a6\u30f3\u30bf\u30fc"})}),Object(O.jsx)("buton",{className:"container btn btn-default",children:Object(O.jsx)("a",{href:"./time",children:"\u6642\u8a08\u8868\u793a\u30b5\u30a4\u30c8\u3078"})}),Object(O.jsx)("buton",{className:"container btn btn-default",children:Object(O.jsx)("a",{href:"https://webrage.jp/",children:"WR\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u3078"})}),Object(O.jsx)(p,{}),Object(O.jsx)("br",{}),Object(O.jsx)(f,{})]})},p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("\u6c0f\u540d\u304c\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\uff1a".concat(this.state.value)),e.preventDefault()}},{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{children:["\u6c0f\u540d:",Object(O.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange})]}),Object(O.jsx)("input",{id:"input1",type:"submit",value:"\u9001\u4fe1"})]})}}]),n}(c.a.Component),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={value:"coconut"},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("\u597d\u304d\u306a\u679c\u7269\uff1a"+this.state.value+"\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f"),e.preventDefault()}},{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{children:["Pick your favorite flavor:",Object(O.jsxs)("select",{value:this.state.value,onChange:this.handleChange,children:[Object(O.jsx)("option",{value:"apple",children:"\u308a\u3093\u3054"}),Object(O.jsx)("option",{value:"banana",children:"\u3070\u306a\u306a"}),Object(O.jsx)("option",{value:"orange",children:"\u307f\u304b\u3093"}),Object(O.jsx)("option",{value:"grape",children:"\u3076\u3069\u3046"})]})]}),Object(O.jsx)("input",{type:"submit",value:"Submit"})]})}}]),n}(c.a.Component);function m(){var e=v.getState().toString();return v.dispatch({type:"ADD"}),Object(O.jsxs)("div",{className:"container text-center",children:[Object(O.jsx)("h1",{children:"\u6642\u8a08"}),Object(O.jsx)(g,{}),Object(O.jsxs)("p",{children:["\u9077\u79fb\u56de\u6570\uff1a",e]}),Object(O.jsx)("p",{children:Object(O.jsx)(o.b,{to:"/",children:"\u9077\u79fb\u30ab\u30a6\u30f3\u30bf\u30fc"})}),Object(O.jsx)("buton",{className:"container btn btn-default",children:Object(O.jsx)("a",{href:"/react-samplex",children:"\u30db\u30fc\u30e0\u3078"})})]})}var g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).now=new Date,a.state={time:"".concat(a.now.getHours(),":").concat(a.now.getMinutes(),":").concat(a.now.getSeconds())},a.refresh=a.refresh.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"refresh",value:function(){var e=this;this.now=new Date,this.setState((function(t){return{time:"".concat(e.now.getHours(),":").concat(e.now.getMinutes(),":").concat(e.now.getSeconds())}}))}},{key:"render",value:function(){return Object(O.jsx)("p",{onClick:this.refresh,children:this.state.time})}}]),n}(c.a.Component),S=function(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(b.a,{exact:!0,path:"/react-samplex",component:x}),Object(O.jsx)(b.a,{path:"/react-samplex/time",component:m})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),C()}},[[40,1,2]]]);
//# sourceMappingURL=main.d1af234d.chunk.js.map