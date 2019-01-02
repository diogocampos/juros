(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(44)},30:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"CalendarAltIcon",function(){return C.a}),n.d(a,"DollarSignIcon",function(){return I.a}),n.d(a,"PercentageIcon",function(){return R.a});var r={};n.r(r),n.d(r,"setMode",function(){return Q}),n.d(r,"default",function(){return W});var l={};n.r(l),n.d(l,"clearValues",function(){return X}),n.d(l,"setValue",function(){return Y}),n.d(l,"default",function(){return _});var c={};n.r(c),n.d(c,"calculateResults",function(){return ae}),n.d(c,"default",function(){return le});var o=n(0),u=n.n(o),i=n(21),s=n.n(i),d=(n(30),n(6)),f=n(7),m=n(11),v=n(8),p=n(12),b=n(2),h=(n(36),n(38),n(24)),g=",",O=".";function j(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.toFixed(t).split("."),a=Object(h.a)(n,2),r=a[0],l=a[1],c=r.length%3,o=c?[r.slice(0,c)]:[],u=c;u<r.length;u+=3)o.push(r.slice(u,u+3));return o.join(O)+(l?g+l:"")}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.replace(/[^\d]/g,"");n.length<t&&(n=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ",a="";a.length+e.length<t;)a+=n;return a.slice(0,t-e.length)+e}(n,t,"0"));var a=n.length-t;return+(n.slice(0,a)+"."+n.slice(a))}var E,N,w,C=n(18),I=n(19),R=n(20),F=16,S=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).inputRef=u.a.createRef(),n.handleChange=function(e){var t=e.target.value.replace(/[^\d]/g,"");if(!(t.length>F)){var a=y(t,n.props.decimals);n.props.onChange(n.props.name,a)}},n.handleFocus=function(){setTimeout(function(){var e=n.inputRef.current,t=e.value.length;e.setSelectionRange(t,t)},0)},n.handleKeyDown=function(e){33<=e.keyCode&&e.keyCode<=40&&e.preventDefault(),27===e.keyCode&&n.props.onChange(n.props.name)},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.label,r=e.icon,l=e.value,c=e.decimals,o=a[r];return u.a.createElement("label",{className:"NumberField"},u.a.createElement("span",{className:"NumberField-label"},n),u.a.createElement("div",{className:"NumberField-control"},u.a.createElement("input",{className:"NumberField-input",type:"text",pattern:"[0-9]*",inputMode:"decimal",placeholder:j(0,c),name:t,value:l?j(l,c):"",onChange:this.handleChange,onClick:this.handleFocus,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,ref:this.inputRef}),o&&u.a.createElement(o,{className:"NumberField-icon"})))}}]),t}(u.a.Component),k=n(1),x="deposit",D="installment",M="interest",V="length",A="price",J="total",T=(E={},Object(k.a)(E,D,[A,x,V,M]),Object(k.a)(E,M,[A,x,V,D]),E),$=(N={},Object(k.a)(N,x,{label:"Entrada",prefix:"$",icon:"DollarSignIcon"}),Object(k.a)(N,D,{label:"Valor da parcela",prefix:"$",icon:"DollarSignIcon"}),Object(k.a)(N,M,{label:"Taxa de juros",suffix:"%",icon:"PercentageIcon"}),Object(k.a)(N,V,{label:"N\xfamero de parcelas",decimals:0,icon:"CalendarAltIcon"}),Object(k.a)(N,A,{label:"Valor \xe0 vista",prefix:"$",icon:"DollarSignIcon"}),Object(k.a)(N,J,{label:"Total a prazo",prefix:"$",icon:"DollarSignIcon"}),N),K=n(9),P=n(4),q=n(23),z="mode/set-mode",B="results/set-results",L="values/clear-values",G="values/set-value",H=[D,M],Q=function(e){return{type:z,mode:e}},U=M;function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return H.indexOf(t.mode)<0?e:t.mode;default:return e}}var X=function(){return{type:L}},Y=function(e,t){return{type:G,name:e,value:t}},Z=(w={},Object(k.a)(w,x,0),Object(k.a)(w,D,0),Object(k.a)(w,M,0),Object(k.a)(w,V,0),Object(k.a)(w,A,0),w);function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Z;case G:var n=t.name,a=t.value;return Object.keys(Z).indexOf(n)<0?e:Object(K.a)({},e,Object(k.a)({},n,a||Z[n]));default:return e}}function ee(e,t){var n,a,r=t[x],l=t[D],c=t[M],o=t[V],u=t[A];switch(e){case D:return l=function(e,t,n,a){var r=ne(e-t,a/100,n);if(isNaN(r))throw new Error("Installment calculation failed");return r}(u,r,o,c),n={},Object(k.a)(n,D,l),Object(k.a)(n,J,te(r,o,l)),n;case M:return a={},Object(k.a)(a,M,function(e,t,n,a){var r=e-t,l=0,c=0,o=1e6;for(;++l<=1e3;){var u=(c+o)/2,i=ne(r,u,n)-a;if(Math.abs(i)<1e-6)return 100*u;i>0?o=u:c=u}throw new Error("Interest calculation did not converge")}(u,r,o,l)),Object(k.a)(a,J,te(r,o,l)),a;default:throw new Error("Invalid mode: '".concat(e,"'"))}}function te(e,t,n){return e+t*+n.toFixed(2)}function ne(e,t,n){return t>0?e*t/(1-1/Math.pow(1+t,n)):e/n}var ae=function(){return function(e,t){var n=t(),a=n.mode,r=n.values;try{var l=ee(a,r)}catch(c){l="error"}e(function(e){return{type:B,results:e}}(l))}},re=null;function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return t.results;case L:case z:case G:return re;default:return e}}var ce=Object(K.a)({},r,l,c),oe=Object(P.c)({mode:W,values:_,results:le});function ue(e,t){var n=oe(e,t);return n!==e&&se(n),n}var ie="state",se=function(e,t){var n=null;return function(){for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];n&&clearTimeout(n),n=setTimeout(function(){e.apply(void 0,r),n=null},t)}}(function(e){localStorage.setItem(ie,JSON.stringify(e))},1e3);var de=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleReset=function(e){e.preventDefault(),n.props.onReset()},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit()},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.values,a=e.onChange,r=T[t];return u.a.createElement("form",{className:"Fields",onReset:this.handleReset,onSubmit:this.handleSubmit,noValidate:!0},u.a.createElement("div",{className:"Fields-inputs"},r.map(function(e){return u.a.createElement(S,Object.assign({key:e,name:e,value:n[e],onChange:a},$[e]))})),u.a.createElement("div",{className:"Fields-buttons"},u.a.createElement("button",{className:"Fields-button",type:"reset"},"Limpar"),u.a.createElement("button",{className:"Fields-button primary",type:"submit"},"Calcular")))}}]),t}(u.a.Component),fe=Object(b.b)(function(e){return{mode:e.mode,values:e.values}},function(e){return{onChange:function(t,n){return e(ce.setValue(t,n))},onReset:function(){return e(ce.clearValues())},onSubmit:function(){return e(ce.calculateResults())}}})(de),me=n(10),ve=n.n(me),pe=(n(40),[{mode:M,label:"Juros",Icon:R.a},{mode:D,label:"Parcela",Icon:I.a}]);var be=Object(b.b)(function(e){return{mode:e.mode}},function(e){return{onChange:function(t){return e(ce.setMode(t))}}})(function(e){var t=e.mode,n=e.onChange;return u.a.createElement("div",{className:"Modes"},pe.map(function(e){var a=e.mode,r=e.label,l=e.Icon;return u.a.createElement("button",{key:a,className:ve()("Modes-mode",a===t&&"active"),onClick:function(){return a!==t&&n(a)}},u.a.createElement(l,{className:"Modes-icon"}),r)}))});n(42);function he(e){var t=e.label,n=e.prefix,a=e.value,r=e.decimals,l=e.suffix;return u.a.createElement("div",{className:"Results-result"},u.a.createElement("h3",{className:"Results-label"},t),u.a.createElement("p",{className:"Results-value"},n&&u.a.createElement("span",{className:"Results-unit"},n),"number"===typeof a?j(a,r):a,l&&u.a.createElement("span",{className:"Results-unit"},l)))}var ge=Object(b.b)(function(e){return{results:e.results}})(function(e){var t=e.results;return t?u.a.createElement("div",{className:ve()("Results","error"===t&&"error")},"error"!==t?Object.keys(t).map(function(e){return u.a.createElement(he,Object.assign({key:e},$[e],{value:t[e]}))}):u.a.createElement(he,{label:"Erro",value:"Verifique os valores preenchidos."})):null});var Oe=function(){return u.a.createElement("div",{className:"App"},u.a.createElement(be,null),u.a.createElement(fe,null),u.a.createElement(ge,null))};s.a.render(function(e){var t=function(){try{return JSON.parse(localStorage.getItem(ie)||"")}catch(e){}}()||{},n=Object(P.d)(ue,t,Object(P.a)(q.a));return u.a.createElement(b.a,{store:n},e)}(u.a.createElement(Oe,null)),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.d5ebaa83.chunk.js.map