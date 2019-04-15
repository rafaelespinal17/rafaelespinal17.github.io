(function(e){function t(t){for(var n,i,l=t[0],c=t[1],u=t[2],p=0,d=[];p<l.length;p++)i=l[p],r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,l=1;l<o.length;l++){var c=o[l];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v(e._s(e.title))]),e._l(e.Evaluaciones,function(t,n){return o("div",{key:n},[o("v-form",[o("v-container",[o("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[t.porcentaje>0?o("h2",[e._v(e._s(t.nombre)+" ("+e._s(t.porcentaje)+"%)")]):e._e(),o("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[o("v-text-field",{attrs:{type:"text",label:"Tipo de Evaluación"},model:{value:t.nombre,callback:function(o){e.$set(t,"nombre",o)},expression:"evaluacion.nombre"}})],1),o("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[o("v-text-field",{attrs:{type:"number",label:"Promedio de Notas",hint:"Ingrese un valor entre 1-100"},model:{value:t.promedioNotas,callback:function(o){e.$set(t,"promedioNotas",o)},expression:"evaluacion.promedioNotas"}})],1),o("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[o("v-text-field",{attrs:{type:"number",label:"Porcentaje total de Notas (%)",hint:[[e.porcentajeActual]]+"/100%"},model:{value:t.porcentaje,callback:function(o){e.$set(t,"porcentaje",o)},expression:"evaluacion.porcentaje"}})],1)],1)],1)],1)],1)}),o("v-layout",{attrs:{column:"",wrap:"","align-center":""}},[100==e.porcentajeActual?o("v-btn",{attrs:{round:"",color:"blue",dark:""},on:{click:e.calcularPromedio}},[e._v("Calcular Mi Promedio Final")]):e._e(),e.Evaluaciones.length>0?o("v-btn",{attrs:{round:"",outline:"",color:"red"},on:{click:e.removerEvaluacion}},[e._v("Remover Evaluación")]):e._e(),o("v-btn",{attrs:{round:"",outline:"",color:"indigo"},on:{click:e.agregarEvaluacion}},[e._v("Agregar Evaluación")]),e.seCalculoUnPromedio?o("v-btn",{attrs:{round:"",outline:"",color:"green"},on:{click:e.calcularNextMateria}},[e._v("Calcular otra Materia")]):e._e(),100==e.porcentajeTotal?o("h1",[e._v("Promedio Final: "+e._s(e.promedioFinal)+"/100")]):o("h3",[e._v("Es requerido que el porcentaje total sea 100%")]),o("h1",[e._v(e._s(e.msg))])],1)],2)},a=[],i=(o("c5f6"),o("e814")),l=o.n(i),c={name:"app",data:function(){return{title:"Programación 2: Proyecto Final",promedioFinal:0,promedioPonderado:0,porcentajeTotal:0,porcentajeAcumulado:0,msg:"",Evaluaciones:[],seCalculoUnPromedio:!1}},computed:{porcentajeActual:function(){for(var e=0,t=0;t<this.Evaluaciones.length;t++)e+=l()(this.Evaluaciones[t].porcentaje);return isNaN(e)?0:e}},methods:{agregarEvaluacion:function(){this.Evaluaciones.push({nombre:"",promedioNotas:0,porcentaje:0})},removerEvaluacion:function(){this.Evaluaciones.pop()},calcularNextMateria:function(){this.seCalculoUnPromedio=!1,this.porcentajeTotal=0,this.Evaluaciones=[],this.Evaluaciones.push({nombre:"",promedioNotas:0,porcentaje:0})},calcularPromedio:function(){this.seCalculoUnPromedio=!0;for(var e=0,t=0,o=0;o<this.Evaluaciones.length;o++)e+=Number(this.Evaluaciones[o].promedioNotas)*Number(this.Evaluaciones[o].porcentaje)/100,t+=Number(this.Evaluaciones[o].porcentaje);this.promedioFinal=Math.round(100*e)/100,this.porcentajeTotal=t}}},u=c,s=(o("034f"),o("2877")),p=Object(s["a"])(u,r,a,!1,null,null,null),d=p.exports,v=o("ce5b"),f=o.n(v);o("bf40");n["default"].use(f.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,t,o){}});
//# sourceMappingURL=app.6cd6bb81.js.map