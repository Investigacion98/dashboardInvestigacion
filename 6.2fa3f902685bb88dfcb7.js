(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SmKv:function(e,t,n){"use strict";n.r(t),n.d(t,"PlatformModule",function(){return q});var o=n("tyNb"),s=n("fXoL"),i=n("ofXK"),c=n("NFeN");const r=function(e){return[e]};function a(e,t){if(1&e&&(s.Sb(0,"li"),s.Sb(1,"mat-icon",1),s.nc(2),s.Rb(),s.Sb(3,"div",2),s.nc(4),s.Rb(),s.Rb()),2&e){const e=t.$implicit;s.Cb(2),s.oc(e.icon),s.Cb(1),s.ec("routerLink",s.gc(3,r,"/platform"+e.link)),s.Cb(1),s.oc(e.title)}}let l=(()=>{class e{constructor(){this.tabs=[{link:"/scales/create",title:"Escalas",icon:"assessment"},{link:"/institutions/add",title:"Instituciones",icon:"store"}],this.generatetabs=[]}ngOnInit(){"6465asd7#asd-1"===localStorage.getItem("admissibleness")&&(this.generatetabs=this.tabs)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["app-toolbar"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],["aria-hidden","false","aria-label","Example home icon"],[1,"title-toolbar-platform",3,"routerLink"]],template:function(e,t){1&e&&(s.Sb(0,"ul"),s.mc(1,a,5,5,"li",0),s.Rb()),2&e&&(s.Cb(1),s.ec("ngForOf",t.generatetabs))},directives:[i.h,c.a,o.b],styles:["ul[_ngcontent-%COMP%]{background-color:var(--color-background-toolbar);align-items:center;justify-content:center;margin:0}li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{display:flex}li[_ngcontent-%COMP%]{list-style:none;margin:5px 10px;padding:5px 10px;border-radius:10px;cursor:pointer;color:var(--color-icons);-webkit-user-select:none;user-select:none}li[_ngcontent-%COMP%]:hover{background-color:var(--color-button-hover)}.title-toolbar-platform[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-left:5px}"]}),e})();const u=function(e){return[e]};function d(e,t){if(1&e&&(s.Sb(0,"li",3),s.Sb(1,"mat-icon",4),s.nc(2),s.Rb(),s.Sb(3,"p",5),s.nc(4),s.Rb(),s.Rb()),2&e){const e=t.$implicit;s.ec("routerLink",s.gc(3,u,"/platform"+e.link)),s.Cb(2),s.oc(e.icon),s.Cb(2),s.pc(" ",e.title," ")}}let b=(()=>{class e{constructor(e){this.router=e,this.itemsScales=[{link:"/scales/create",title:"Crear",icon:"add_circle"},{link:"/scales/edit",title:"Editar",icon:"edit"},{link:"/scales/results",title:"Resultados",icon:"search"}],this.itemsInstitutions=[{link:"/scales/create",title:"A\xf1adir",icon:"add_circle"},{link:"/scales/edit",title:"Editar",icon:"edit"},{link:"/scales/results",title:"Resultados",icon:"search"}],this.itemsApproved=[],this.router.events.subscribe(e=>{this.change((e.url+"")[10])})}ngOnInit(){this.change("s")}change(e){"6465asd7#asd-1"===localStorage.getItem("admissibleness")&&("s"===e?this.itemsApproved=this.itemsScales:"i"===e&&(this.itemsApproved=this.itemsInstitutions))}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(o.a))},e.\u0275cmp=s.Hb({type:e,selectors:[["app-menu-side"]],decls:3,vars:1,consts:[[1,"container-menu"],[1,"ul-container-menu"],["class","li-container-menu",3,"routerLink",4,"ngFor","ngForOf"],[1,"li-container-menu",3,"routerLink"],["aria-hidden","false","aria-label","Example home icon"],[1,"text-menu-side-item"]],template:function(e,t){1&e&&(s.Sb(0,"div",0),s.Sb(1,"ul",1),s.mc(2,d,5,5,"li",2),s.Rb(),s.Rb()),2&e&&(s.Cb(2),s.ec("ngForOf",t.itemsApproved))},directives:[i.h,o.b,c.a],styles:[".container-menu[_ngcontent-%COMP%]{background-color:var(--color-background-toolbar-variant);width:100%;display:flex;height:calc(100vh - 44px)}.ul-container-menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0;margin:0;width:100%}.li-container-menu[_ngcontent-%COMP%]{list-style:none;display:flex;-webkit-user-select:none;user-select:none;border-radius:10px;padding:5px 10px;margin:10px;align-items:center;color:#fff}.li-container-menu[_ngcontent-%COMP%]:hover{background-color:var(--color-button-hover)}.text-menu-side-item[_ngcontent-%COMP%]{padding:0;margin:0 0 0 5px}"]}),e})(),p=(()=>{class e{constructor(){this.updateText="Escalas"}ngOnInit(){}update(e){this.updateText=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["app-home"]],decls:5,vars:0,consts:[[1,"container-platform-options"],[1,"size-menu-side"],[1,"size-component-routing"]],template:function(e,t){1&e&&(s.Ob(0,"app-toolbar"),s.Sb(1,"div",0),s.Ob(2,"app-menu-side",1),s.Sb(3,"div",2),s.Ob(4,"router-outlet"),s.Rb(),s.Rb())},directives:[l,b,o.e],styles:[".container-platform-options[_ngcontent-%COMP%]{display:flex}.size-menu-side[_ngcontent-%COMP%]{width:10%;min-width:150px}.size-component-routing[_ngcontent-%COMP%]{width:90%}"]}),e})(),g=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["app-institutions"]],decls:2,vars:0,template:function(e,t){1&e&&(s.Sb(0,"p"),s.nc(1,"institutions works!"),s.Rb())},styles:[""]}),e})();var m=n("tk/3"),h=n("AytR");let f=(()=>{class e{constructor(e){this.http=e}sendScale(e,t){const n=localStorage.getItem("auth"),o=new m.c({auth:n});return this.http.post(`${h.a.baseURL}/platform/createScale/${t}`,e,{headers:o})}getScales(){const e=localStorage.getItem("auth"),t=new m.c({auth:e});return this.http.get(`${h.a.baseURL}/platform/scales`,{headers:t})}getScale(e){const t=localStorage.getItem("auth"),n=new m.c({auth:t});return this.http.get(`${h.a.baseURL}/platform/scale/${e}`,{headers:n})}}return e.\u0275fac=function(t){return new(t||e)(s.Wb(m.a))},e.\u0275prov=s.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=n("3Pt+");let S=(()=>{class e{constructor(){this.jsonSend=new s.n,this.textQuestion="",this.typeOfQuestion=""}ngOnInit(){this.textQuestion=this.pruebaIn.question.textQuestion,this.typeOfQuestion=this.pruebaIn.question.typeOfQuestion}send(){this.jsonSend.emit({index:this.pruebaIn.index,question:{textQuestion:this.textQuestion,typeOfQuestion:this.typeOfQuestion}})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["app-pregunta"]],inputs:{pruebaIn:"pruebaIn"},outputs:{jsonSend:"jsonSend"},decls:14,vars:3,consts:[[1,"container-question"],[1,"response-types"],[1,"container-response-type-item"],[1,"select-question-direct",3,"ngModel","ngModelChange","change"],["value","D"],["value","I"],["type","text",1,"input-question",3,"ngModel","ngModelChange","change"]],template:function(e,t){1&e&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"div",2),s.Sb(3,"label"),s.nc(4),s.Rb(),s.Rb(),s.Sb(5,"div",2),s.Sb(6,"label"),s.nc(7,"Tipo de pregunta: "),s.Rb(),s.Sb(8,"select",3),s.Zb("ngModelChange",function(e){return t.typeOfQuestion=e})("change",function(){return t.send()}),s.Sb(9,"option",4),s.nc(10,"Directa"),s.Rb(),s.Sb(11,"option",5),s.nc(12,"Inversa"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(13,"textarea",6),s.Zb("ngModelChange",function(e){return t.textQuestion=e})("change",function(){return t.send()}),s.Rb(),s.Rb()),2&e&&(s.Cb(4),s.pc("Pregunta ",t.pruebaIn.index+1,""),s.Cb(4),s.ec("ngModel",t.typeOfQuestion),s.Cb(5),s.ec("ngModel",t.textQuestion))},directives:[v.h,v.c,v.f,v.g,v.j,v.a],styles:[".container-question[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:var(--color-background-light-green);justify-content:center;align-items:center;gap:10px;padding:20px 0;border-radius:10px;font-size:1.2em}.response-types[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-evenly;align-items:center}.select-question-direct[_ngcontent-%COMP%]{align-items:center;border:2.5px solid var(--color-background-dark-green);padding:6px;border-radius:10px;margin:0 10px;font-size:.9em}.select-question-direct[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--warn)}.input-question[_ngcontent-%COMP%]{width:90%;padding:10px;border-radius:10px;border:2.5px solid var(--color-background-dark-green);font-size:1em;font-family:var(--font-robot)}.input-question[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--warn)}.container-response-type-item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),e})();const x=function(e,t){return{index:e,question:t}};function C(e,t){if(1&e){const e=s.Tb();s.Sb(0,"div"),s.Sb(1,"app-pregunta",14),s.Zb("jsonSend",function(t){return s.jc(e),s.bc().responseQuestionComponent(t)}),s.Rb(),s.Rb()}if(2&e){const e=t.$implicit,n=t.index;s.Cb(1),s.ec("pruebaIn",s.hc(1,x,n,e))}}function y(e,t){if(1&e){const e=s.Tb();s.Sb(0,"button",17),s.Zb("click",function(){return s.jc(e),s.bc(2).closeAlert()}),s.nc(1,"Aceptar"),s.Rb()}}function O(e,t){if(1&e&&(s.Sb(0,"div",15),s.Sb(1,"div"),s.Sb(2,"h2"),s.nc(3),s.Rb(),s.Sb(4,"h3"),s.nc(5),s.Rb(),s.mc(6,y,2,0,"button",16),s.Rb(),s.Rb()),2&e){const e=s.bc();s.Cb(3),s.oc(e.messageTitle),s.Cb(2),s.oc(e.messageInfo),s.Cb(1),s.ec("ngIf",e.messageButton)}}let M=(()=>{class e{constructor(e,t){this.platformServices=e,this.router=t,this.code="1",this.title="",this.description="",this.answerForm="",this.questions=[],this.messageActivate=!1,this.messageTitle="",this.messageInfo="",this.messageButton=!1}ngOnInit(){if(void 0===this.scale){const e=localStorage.getItem("scaleTemp");if(e){const t=JSON.parse(e);this.title=t.title,this.description=t.description,this.answerForm=t.answerForm,this.questions=t.questions,localStorage.removeItem("scaleTemp")}}else this.code=this.scale.code,this.title=this.scale.title,this.description=this.scale.description,this.answerForm=this.scale.answerForm,this.questions=this.scale.questions}addQuestion(){this.questions.push({textQuestion:"",typeOfQuestion:""})}responseQuestionComponent(e){const t=parseInt(e.index);this.questions[t]=e.question}clearAll(){this.title="",this.description="",this.answerForm="",this.questions=[]}sendScale(){if(this.validate()){const e={title:this.title,description:this.description,answerForm:this.answerForm,questions:this.questions};this.messageActivate=!0,this.messageTitle="Enviando informaci\xf3n",this.messageInfo="Espere un momento ...",this.platformServices.sendScale(e,this.code).subscribe(e=>{"\xa1\xa1\xa1 Creaci\xf3n exitosa !!!"===e.info&&(this.messageActivate=!0,this.messageButton=!0,this.messageTitle="\xa1\xa1\xa1 Creaci\xf3n exitosa !!!",this.messageInfo="")},t=>{if(500===t.status){var n="";try{n=t.error.error.message}catch(o){n=""}"invalid token"===n?(localStorage.setItem("scaleTemp",`${JSON.stringify(e)}`),localStorage.removeItem("auth"),localStorage.removeItem("admissibleness"),localStorage.removeItem("name"),this.messageActivate=!0,this.messageTitle="Usuario incorrecto !!!",this.messageInfo="Vuelva a iniciar sesi\xf3n",setInterval(()=>{this.router.navigate(["./account"])},4e3)):(localStorage.setItem("scaleTemp",`${JSON.stringify(e)}`),this.messageActivate=!0,this.messageTitle="Error del servidor",this.messageInfo=t.error,setInterval(()=>{this.router.navigate(["/"])},5e3))}else localStorage.removeItem("auth"),localStorage.removeItem("admissibleness"),localStorage.removeItem("name"),this.messageActivate=!0,this.messageTitle="Usuario no autorizado !!!",this.messageInfo="Vuelva a iniciar sesi\xf3n",setInterval(()=>{this.router.navigate(["./account"])},4e3)})}else this.messageActivate=!0,this.messageTitle="Espacios sin llenar",this.messageInfo="Verifique que todos los espacios est\xe9n llenos",setInterval(()=>{this.messageActivate=!1,this.messageButton=!1},5e3)}validate(){return""!==this.title&&""!==this.description&&""!==this.answerForm&&this.questions.length>0}closeAlert(){this.messageActivate=!1,this.messageButton=!1,this.clearAll(),this.router.navigate(["./platform/scales/edit"])}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(f),s.Nb(o.a))},e.\u0275cmp=s.Hb({type:e,selectors:[["app-scales-create"]],inputs:{scale:"scale"},decls:32,vars:6,consts:[[1,"container-scales-create"],[1,"container-input"],["type","text",1,"size-input-scales",3,"ngModel","ngModelChange"],["name","","id","","rows","5",1,"size-input-scales",3,"ngModel","ngModelChange"],[1,"size-input-scales",2,"width","100%",3,"ngModel","ngModelChange"],["value","0"],["value","1"],["value","2"],[4,"ngFor","ngForOf"],[1,"add-question",3,"click"],[1,"container-buttons-scales-create"],[1,"button-scales","color-red",3,"click"],[1,"button-scales","color-green",3,"click"],["class","floating-messaje",4,"ngIf"],[3,"pruebaIn","jsonSend"],[1,"floating-messaje"],["class","button-primary color-azul",3,"click",4,"ngIf"],[1,"button-primary","color-azul",3,"click"]],template:function(e,t){1&e&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"h3"),s.nc(3,"T\xedtulo"),s.Rb(),s.Sb(4,"input",2),s.Zb("ngModelChange",function(e){return t.title=e}),s.Rb(),s.Rb(),s.Sb(5,"div",1),s.Sb(6,"h3"),s.nc(7,"Descripci\xf3n"),s.Rb(),s.Sb(8,"textarea",3),s.Zb("ngModelChange",function(e){return t.description=e}),s.Rb(),s.Rb(),s.Sb(9,"div",1),s.Sb(10,"h3"),s.nc(11,"Forma de respuesta"),s.Rb(),s.Sb(12,"select",4),s.Zb("ngModelChange",function(e){return t.answerForm=e}),s.Ob(13,"option"),s.Sb(14,"option",5),s.nc(15,"Escala: Totalmente en desacuerdo, ..., Totalmente de acuerdo (0,1,2,3)"),s.Rb(),s.Sb(16,"option",6),s.nc(17,"Escala: Nunca, ..., Siempre (0,1,2,3,4)"),s.Rb(),s.Sb(18,"option",7),s.nc(19,"Escala: Muy de acuerdo, ..., Muy en desacuerdo (0,1,2,3,4)"),s.Rb(),s.Rb(),s.Rb(),s.Sb(20,"div",1),s.Sb(21,"h3"),s.nc(22,"Preguntas"),s.Rb(),s.mc(23,C,2,4,"div",8),s.Sb(24,"button",9),s.Zb("click",function(){return t.addQuestion()}),s.nc(25,"+"),s.Rb(),s.Rb(),s.Sb(26,"div",10),s.Sb(27,"button",11),s.Zb("click",function(){return t.clearAll()}),s.nc(28,"Limpiar"),s.Rb(),s.Sb(29,"button",12),s.Zb("click",function(){return t.sendScale()}),s.nc(30),s.Rb(),s.Rb(),s.Rb(),s.mc(31,O,7,3,"div",13)),2&e&&(s.Cb(4),s.ec("ngModel",t.title),s.Cb(4),s.ec("ngModel",t.description),s.Cb(4),s.ec("ngModel",t.answerForm),s.Cb(11),s.ec("ngForOf",t.questions),s.Cb(7),s.oc(t.scale?"Editar":"Crear"),s.Cb(1),s.ec("ngIf",t.messageActivate))},directives:[v.a,v.c,v.f,v.h,v.g,v.j,i.h,i.i,S],styles:[".container-scales-create[_ngcontent-%COMP%]{margin:20px;width:calc(100% - 40px);font-family:Roboto}.size-input-scales[_ngcontent-%COMP%]{font-family:Roboto;display:flex;width:calc(100% - 25px);border-radius:10px;padding:10px;border-color:var(--color-background-toolbar);border:2.5px solid var(--color-background-toolbar);font-size:1.2em}.size-input-scales[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--warn)}h3[_ngcontent-%COMP%]{margin:0;padding:0}.container-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-bottom:15px}.add-question[_ngcontent-%COMP%]{font-size:3em;border-radius:10px;background-color:var(--color-background-toolbar);color:#fff;cursor:pointer}.add-question[_ngcontent-%COMP%]:hover{background-color:var(--color-background-toolbar-variant)}.add-question[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--warn)}.container-buttons-scales-create[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.button-scales[_ngcontent-%COMP%]{display:flex;border:none;padding:10px 20px;border-radius:10px;cursor:pointer;color:#fff}.button-scales[_ngcontent-%COMP%]:hover{box-shadow:1px 1px 5px 1px rgba(90,85,85,.568)}.button-scales[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--warn)}.color-red[_ngcontent-%COMP%]{background-color:var(--warn)}.color-green[_ngcontent-%COMP%]{background-color:var(--color-background-dark-green-1)}.color-azul[_ngcontent-%COMP%]{background-color:rgba(2,2,124,.884);color:#fff}"]}),e})();function k(e,t){if(1&e&&(s.Sb(0,"option",7),s.nc(1),s.Rb()),2&e){const e=t.$implicit;s.ec("value",e.code),s.Cb(1),s.oc(e.name)}}function R(e,t){if(1&e){const e=s.Tb();s.Sb(0,"div",2),s.Sb(1,"select",3),s.Zb("ngModelChange",function(t){return s.jc(e),s.bc().scaleSelect=t}),s.Sb(2,"option"),s.nc(3,"-- Seleccione una escala --"),s.Rb(),s.mc(4,k,2,2,"option",4),s.Rb(),s.Sb(5,"div",5),s.Sb(6,"button",6),s.Zb("click",function(){return s.jc(e),s.bc().edit()}),s.nc(7,"Editar"),s.Rb(),s.Rb(),s.Rb()}if(2&e){const e=s.bc();s.Cb(1),s.ec("ngModel",e.scaleSelect),s.Cb(3),s.ec("ngForOf",e.listScales)}}function w(e,t){if(1&e&&s.Ob(0,"app-scales-create",8),2&e){const e=s.bc();s.ec("scale",e.scale)}}const I=[{path:"",component:p,children:[{path:"scales/create",component:M},{path:"scales/edit",component:(()=>{class e{constructor(e,t){this.platformServices=e,this.platformService=t,this.listScales=[],this.scaleSelect="-- Seleccione una escala --",this.activate=!0}ngOnInit(){this.platformServices.getScales().subscribe(e=>this.listScales=e.scales)}edit(){"-- Seleccione una escala --"!==this.scaleSelect&&this.platformServices.getScale(this.scaleSelect).subscribe(e=>{this.scale=e.scale,this.activate=!1})}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(f),s.Nb(f))},e.\u0275cmp=s.Hb({type:e,selectors:[["app-scales-edit"]],decls:2,vars:2,consts:[["class","container-scales-edit",4,"ngIf"],[3,"scale",4,"ngIf"],[1,"container-scales-edit"],[1,"size-input-scales",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"container-button-scales-edit"],[1,"button-primary","button-secundary","color-blue",3,"click"],[3,"value"],[3,"scale"]],template:function(e,t){1&e&&(s.mc(0,R,8,2,"div",0),s.mc(1,w,1,1,"app-scales-create",1)),2&e&&(s.ec("ngIf",t.activate),s.Cb(1),s.ec("ngIf",!t.activate))},directives:[i.i,v.h,v.c,v.f,v.g,v.j,i.h,M],styles:[".container-scales-edit[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px}.size-input-scales[_ngcontent-%COMP%]{font-family:Roboto;display:flex;width:calc(100% - 50px);border-radius:10px;padding:10px;border-color:var(--color-background-toolbar);border:2.5px solid var(--color-background-toolbar);font-size:1.2em}.size-input-scales[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--warn)}.container-button-scales-edit[_ngcontent-%COMP%]{display:flex;width:96%;margin:20px 0;justify-content:flex-end}.color-blue[_ngcontent-%COMP%]{background-color:var(--color-background-toolbar-variant);color:#fff}.color-blue[_ngcontent-%COMP%]:hover{background-color:var(--color-background-toolbar)}"]}),e})()},{path:"scales/results",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["app-scales-results"]],decls:2,vars:0,template:function(e,t){1&e&&(s.Sb(0,"p"),s.nc(1,"scales-results works!"),s.Rb())},styles:[""]}),e})()},{path:"institutions/add",component:g},{path:"**",redirectTo:"scales/create"}]}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({imports:[[o.d.forChild(I)],o.d]}),e})();var _=n("hctd");let q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({imports:[[P,i.b,_.a,v.b]]}),e})()}}]);