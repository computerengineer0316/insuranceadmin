"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7307],{47307:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});var o=t(65043),s=t(73216),l=t(30064),n=t.n(l),i=t(54168),c=(t(73023),t(70579));const r=()=>{const e=(0,s.Zp)(),[a,t]=(0,o.useState)([]),[l,r]=(0,o.useState)([]),[d,p]=(0,o.useState)([]),[m,u]=(0,o.useState)([]),[_,h]=(0,o.useState)([]),[x,f]=(0,o.useState)([]),[g,v]=(0,o.useState)([]),[j,y]=(0,o.useState)([]),[N,b]=(0,o.useState)([]),[C,S]=(0,o.useState)([]),[E,T]=(0,o.useState)([]),[V,P]=(0,o.useState)([]),[w,R]=(0,o.useState)(""),[D,k]=(0,o.useState)(""),[M,F]=(0,o.useState)(""),[O,A]=(0,o.useState)(""),[G,B]=(0,o.useState)(""),[Y,H]=(0,o.useState)(""),[L,q]=(0,o.useState)(""),[J,$]=(0,o.useState)(""),[I,Z]=(0,o.useState)(""),[z,U]=(0,o.useState)([]),[K,Q]=(0,o.useState)(""),[W,X]=(0,o.useState)(""),[ee,ae]=(0,o.useState)(""),[te,oe]=(0,o.useState)(""),[se,le]=(0,o.useState)(""),[ne,ie]=(0,o.useState)(""),[ce,re]=(0,o.useState)(""),[de,pe]=(0,o.useState)(""),[me,ue]=(0,o.useState)(""),[_e,he]=(0,o.useState)(""),[xe,fe]=(0,o.useState)(""),[ge,ve]=(0,o.useState)(""),[je,ye]=(0,o.useState)(""),[Ne,be]=(0,o.useState)([]),[Ce,Se]=(0,o.useState)([]),[Ee,Te]=(0,o.useState)([]),[Ve,Pe]=(0,o.useState)([]),[we,Re]=(0,o.useState)(""),[De,ke]=(0,o.useState)(""),[Me,Fe]=(0,o.useState)(""),[Oe,Ae]=(0,o.useState)(""),[Ge,Be]=(0,o.useState)(""),[Ye,He]=(0,o.useState)([]),[Le,qe]=(0,o.useState)([]),[Je,$e]=(0,o.useState)([]),[Ie,Ze]=(0,o.useState)(""),[ze,Ue]=(0,o.useState)(""),[Ke,Qe]=(0,o.useState)(""),[We,Xe]=(0,o.useState)({status:!1,name:""}),ea={company_id:"Company Name",plan_name:"Plan Name",plan_category_id:"Plan Category",plan_label:"Plan Label",nature_of_plan_id:"Nature of Plan",electric_vehicle:"Electric Vehicle",car_value:"Car Value",car_value_topup:"Car Value Topup",rate:"Rate",min_premium:"Minimum Premium",excess:"Excess",age:" Driver Age",agetopup:"Age Topup",drivingexp:"Driving Experience",drivingexptopup:"Driving Experience Topup",homedrivingexp:"Home Driving Experience",homedrivingexptopup:"Home Driving Experience Topup",claimyears:"Claim Years",claimyeardisc:"Claim Years Discount",last_year_policy_type_topup:"Last Years Policy Type Topup",gccspecstopup:"GCC Spec Topup",nationalitytopup:"Nationality Topup",age_of_the_car:"Age of The Car",age_of_the_car_topup:"Age of The Car",add_op_con_desc:"Additionial Option Condition Description",add_op_con_desc_topup:"Additionial Option Condition Description Topup",vat:"Vat",jdv_comm:"JDV Commission",sales_person_comm:"Sales Person Commissioin",body_type_name:"Body Type",repair_type_name:"Repair Type",business_type_name:"Buisness Type",plan_for_name:"Plan For"};(0,o.useEffect)((()=>{const a=localStorage.getItem("token");if(null===a||void 0===a||""===a)e("/login");else{const e=window.location.href.split("/")[3].split("?")[1].split("=")[1];R(e),ma(),oa(),sa(),la(),na(),ia(),ca(),ra(),da(),pa(),ta(),ua(e),aa();be([{id:12,cylinder:"12"},{id:10,cylinder:"10"},{id:8,cylinder:"8"},{id:6,cylinder:"6"},{id:4,cylinder:"4"},{id:2,cylinder:"2"}])}}),[]);const aa=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data,t=[];for(let o=0;o<a.length;o++)t.push({label:a[o].location_name,value:a[o]._id});He(t)}))},ta=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getPolicyTypes",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data,t=a.length,o=[];for(let s=0;s<t;s++){const e={_id:a[s]._id,policy_type_name:a[s].policy_type_name};o.push(e)}Te(o)}))},oa=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getPlanCategory",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t(e.data)}))},sa=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getNatureOfPlan",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{r(e.data)}))},la=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getBodyType",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data,t=a.length,o=[];for(let s=0;s<t;s++){const e={_id:a[s]._id,body_type_name:a[s].body_type_name};o.push(e)}p(o)}))},na=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getRepairCondition",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data,t=a.length,o=[];for(let s=0;s<t;s++){const e={_id:a[s]._id,repair_type_name:a[s].repair_type_name};o.push(e)}u(o)}))},ia=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getPlanFor",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{let a=e.data;h(a)}))},ca=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getBusinessType",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data;console.log(a,">>>>>>>>> busness types options");const t=null===a||void 0===a?void 0:a.length,o=[];for(let s=0;s<t;s++){const e={_id:a[s]._id,business_type_name:a[s].business_type_name};o.push(e)}f(o)}))},ra=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getGccSpecs",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{y(e.data)}))},da=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getNationality",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data;b(a)}))},pa=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getModelMotor",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{S(e.data)}))},ma=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/company_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{T(e.data)}))},ua=e=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/motor_plan_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{var a,t,o,s,l,n;P(e.data),console.log("data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",e.data),$e(null===(a=e.data)||void 0===a?void 0:a.plan_for);const i=null===(t=e.data)||void 0===t?void 0:t.plan_for;if(i.length){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].plan_for_topup);const a=e.join(",");Qe(a)}Pe(null===(o=e.data)||void 0===o?void 0:o.repair_type_id),qe(null===(s=e.data)||void 0===s?void 0:s.location),Be(null===(l=e.data)||void 0===l?void 0:l.policy_type_id);const c=e.data.body_type;console.log(c,">>>>>> body type");const r=c.length,d=[],p=[];if(c[0].min_premium){for(let a=0;a<r;a++)p.push(c[a].min_premium),d.push({id:c[a].cylinder,cylinder:c[a].cylinder});let e=p.length>1?p.join(","):p[0];Ue(e),Se(d)}ye(c);const m=e.data.repair_type_id,u=m.length,_=[];for(let v=0;v<u;v++){const e={_id:m[v]._id,repair_type_name:m[v].repair_type_name};_.push(e)}const h=e.data.business_type_id;console.log(h,">>>>>>>>>> this is business type");const x=null===h||void 0===h?void 0:h.length,f=[];for(let v=0;v<x;v++){const e={_id:h[v]._id,business_type_name:h[v].business_type_name};f.push(e)}v(f);const g=e.data.age_or_topup,j=g.length,y=[],N=[];for(let v=0;v<j;v++){let e;e=g[v].ageMin==g[v].ageMax?g[v].ageMin:g[v].ageMin+"-"+g[v].ageMax,y.push(e);const a=g[v].agetopup;N.push(a)}var b=y.join(","),C=N.join(",");k(b),F(C);const S=e.data.car_value,E=S.length,T=[],V=[],w=[],R=[],D=[];for(let v=0;v<E;v++){let e;e=S[v].car_valueMin==S[v].car_valueMax?S[v].car_value_topup:S[v].car_valueMin+"-"+S[v].car_valueMax,T.push(e);const a=S[v].car_value_topup;V.push(a),S[v].excess&&(w.push(S[v].excess),R.push(S[v].rate),D.push(S[v].min_premium))}var M=T.length>1?T.join(","):T[0],O=V.join(",");ke(O);let G=R.length>1?R.join(","):R[0];if(Ze(G),Re(M),null!==(n=S[0])&&void 0!==n&&n.excess){let e=w.length>1?w.join(","):w[0],a=D.length>1?D.join(","):D[0];Ue(a),Fe(e)}const Y=e.data.drivingexp_or_topup,L=Y.length,J=[],I=[];for(let v=0;v<L;v++){let e;e=Y[v].drivingExpMin==Y[v].drivingExpMax?Y[v].drivingExpMin:Y[v].drivingExpMin+"-"+Y[v].drivingExpMax,J.push(e);const a=Y[v].drivingexptopup;I.push(a)}var z=J.join(","),K=I.join(",");A(z),B(K);const W=e.data.homedrivingexp_or_topup,ee=W.length,te=[],se=[];for(let v=0;v<ee;v++){let e;e=W[v].homeDrivingExpMin==W[v].homeDrivingExpMax?W[v].homeDrivingExpMin:W[v].homeDrivingExpMin+"-"+W[v].homeDrivingExpMax,te.push(e);const a=W[v].homedrivingexptopup;se.push(a)}var ne=te.join(","),ce=se.join(",");H(ne),q(ce);const de=e.data.claimyears_or_topup,me=de.length,_e=[],xe=[];for(let v=0;v<me;v++){const e=de[v].claimyears;_e.push(e);const a=de[v].claimyeardisc;xe.push(a)}var ge=_e.join(","),je=xe.join(",");$(ge),Z(je);const Ne=e.data.plan_for_gcc_spec_name_or_topup,be=Ne.length,Ce=[],Ee=[];for(let v=0;v<be;v++){const e={_id:Ne[v]._id,plan_for_gcc_spec_name:Ne[v].plan_for_gcc_spec_name};Ce.push(e);const a=Ne[v].gccspecstopup;Ee.push(a)}var Te=Ee.join(",");X(Ce),ae(Te);const Ve=e.data.nationality_or_topup;console.log(Ve,">>>>>>>>>>>>>>>>>>>>>nationality obj");const we=Ve.length,De=[],Me=[];for(let v=0;v<we;v++){const e={_id:Ve[v]._id,nationality_name:Ve[v].nationality_name};De.push(e);const a=Ve[v].nationalitytopup;Me.push(a)}var Oe=Me.join(",");oe(De),le(Oe);const Ae=e.data.last_year_policy_type_or_topup,Ge=Ae.length,Ye=[],He=[];for(let v=0;v<Ge;v++){const e={_id:Ae[v].last_year_policy_type_id,policy_type_name:Ae[v].last_year_policy_type};Ye.push(e);const a=Ae[v].last_year_policy_type_topup;He.push(a)}var Le=Ye,Je=He.join(",");U(Le),Q(Je);const Ie=e.data.age_of_the_car_or_topup,ze=Ie.length,Ke=[],We=[];for(let v=0;v<ze;v++){let e;e=Ie[v].age_of_the_car_min==Ie[v].age_of_the_car_max?Ie[v].age_of_the_car_min:Ie[v].age_of_the_car_min+"-"+Ie[v].age_of_the_car_max,Ke.push(e);const a=Ie[v].age_of_the_car_or_topup;We.push(a)}var Xe=Ke.join(","),ea=We.join(",");pe(Xe),ue(ea);const aa=e.data.add_op_con_desc,ta=aa.length,oa=[],sa=[],la=[];for(let v=0;v<ta;v++){const e=aa[v].add_op_con_desc;oa.push(e);const a=aa[v].add_op_con_desc_topup;sa.push(a);const t=aa[v].vat;la.push(t)}var na=oa.join(","),ia=sa.join(","),ca=la.join(",");he(na),fe(ia),ve(ca);const ra=e.data.make_motor,da=ra.length,pa=[],ma=[];for(let v=0;v<da;v++){const e={_id:ra[v]._id,make_motor_name:ra[v].make_motor_name};pa.push(e),ma.push(ra[v].make_motor_topup?ra[v].make_motor_topup:0)}let ua=ma.join(",");re(ua),ie(pa)}))},_a=e=>{console.log(e,">>>>>>>>>>>>plan for edit"),$e(e)},ha=e=>{X(e)},xa=e=>{qe(e)},fa=e=>{oe(e)},ga=e=>{ie(e)},va=e=>{v(e)},ja=e=>{ye(e)},ya=e=>{Pe(e)},Na=e=>{U(e)},ba=e=>{const a=e.target.value;/^[A-Za-z,]*$/.test(a)?Xe({status:!1,name:e.target.name}):(Xe({status:!0,name:e.target.name}),e.target.value=a.replace(/[^a-zA-Z\s,]/g,""))};return(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsxs)("div",{className:"card",style:{marginTop:"20px"},children:[(0,c.jsx)("div",{className:"card-header",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("h4",{className:"card-title",children:"Edit Motor Plan"})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("button",{onClick:()=>e(-1),className:"btn btn-primary",style:{float:"right"},children:"Back"})})]})}),(0,c.jsx)("div",{className:"card-body",children:(0,c.jsxs)("form",{action:"/",method:"POST",onSubmit:a=>{a.preventDefault();const t=new FormData(a.target);if(je.length!=Ce.length&&"641161a4591c2f02bcddf51c"!=V.policy_type_id)return void n().fire({title:"warning",text:"Number of Body Types and Cylinders Must be equal",icon:"warning",confirmButtonText:"Ok"});for(const[e,g]of t.entries())if(!g){if("search_name_input"==e||"plan_label"==e||"electric_vehicle"==e||"homedrivingexp"==e||"homedrivingexptopup"==e||"nationality_name"==e||"agetopup"==e||"claimyear"==e||"claimyeardisc"==e||"gccspecstopup"==e||"nationalitytopup"==e||"age_of_the_car"==e||"age_of_the_car_topup"==e||"add_op_con_desc"==e||"add_op_con_desc_topup"==e||"drivingexptopup"==e||"vat"==e||"jdv_comm"==e||"car_value_topup"==e||"car_model_topup"==e||"last_year_policy_type_topup"==e||"plan_for_topup"==e||"business_type_name"==e)continue;return console.log(e,">>>>>>>>>> empty key"),void n().fire({title:"warning",text:`${ea[e]} is required`,icon:"warning",confirmButtonText:"Ok"})}if(!je.length)return void n().fire({title:"warning",text:"Body Types is required",icon:"warning",confirmButtonText:"Ok"});if(!Ve.length)return void n().fire({title:"warning",text:"Repair Types is required",icon:"warning",confirmButtonText:"Ok"});if(!Je.length)return void n().fire({title:"warning",text:"Plan For is required",icon:"warning",confirmButtonText:"Ok"});const o=t.get("company_id"),s=t.get("plan_name"),l=t.get("plan_category_id"),i=t.get("plan_label"),c=t.get("nature_of_plan_id"),r=je,d=t.get("electric_vehicle"),p=t.get("plan_for_topup"),m=t.get("car_value"),u=t.get("car_value_topup"),_=t.get("rate"),h=t.get("min_premium"),x=t.get("excess"),f=t.get("age"),v=t.get("agetopup"),j=t.get("drivingexp"),y=t.get("drivingexptopup"),N=t.get("homedrivingexp"),b=t.get("homedrivingexptopup"),C=t.get("claimyear"),S=t.get("claimyeardisc"),E=z,T=t.get("last_year_policy_type_topup"),P=W,R=t.get("gccspecstopup"),D=te,k=t.get("nationalitytopup"),M=ne,F=t.get("car_model_topup"),O=t.get("age_of_the_car"),A=t.get("age_of_the_car_topup"),G=t.get("add_op_con_desc"),B=t.get("add_op_con_desc_topup"),Y=t.get("vat"),H=t.get("jdv_comm"),L={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company_id:o,form_type:"Comprehensive",policy_type_id:Ge,plan_name:s,plan_category_id:l,plan_label:i,nature_of_plan_id:c,body_types:r,repair_condition_id:Ve,electric_vehicle:d,plan_for:Je,plan_for_topup:p,business_type_id:g,car_value:m,car_value_topup:u,rate:_,min_premium:h,excess:x,age:f,age_topup:v,drivingexp:j,drivingexptopup:y,homedrivingexp:N,homedrivingexptopup:b,claimyears:C,claimyeardisc:S,last_year_policy_type:E,last_year_policy_type_topup:T,gcc_spec:P,gccspecstopup:R,nationality:D,NationalTopup:k,make_motor:M,car_model_topup:F,age_of_the_car:O,age_of_the_car_topup:A,add_op_con_desc:G,add_op_con_desc_topup:B,vat:Y,jdv_comm:H,location:Le})};fetch(`https://insuranceapi-3o5t.onrender.com/api/updateMotorPlan/${w}`,L).then((e=>e.json())).then((a=>{200===a.status?(n().fire({text:a.message,icon:"success",button:!1}),e("/motor-plan"),setTimeout((()=>{n().close()}),1e3)):(n().fire({title:"Error!",text:a.message,icon:"error",button:!1}),e(0),setTimeout((()=>{n().close()}),1e3))}))},children:[(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Company Name"}),(0,c.jsxs)("select",{className:"form-control",name:"company_id",children:[(0,c.jsx)("option",{value:"",children:"Select Company"}),E.map(((e,a)=>(0,c.jsx)("option",{value:e._id,selected:V.company_id==e._id,children:e.company_name},a)))]})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Plan Name"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Plan Name",name:"plan_name",autoComplete:"off",defaultValue:V.plan_name})]})})]}),(0,c.jsxs)("div",{className:"row",children:["641161a4591c2f02bcddf51c"==V.policy_type_id?(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Plan Category"}),(0,c.jsxs)("select",{className:"form-control",name:"plan_category_id",children:[(0,c.jsx)("option",{value:"",children:"Select Plan Category"}),a.map(((e,a)=>(0,c.jsx)("option",{value:e._id,selected:V.plan_category_id==e._id,children:e.plan_category_name},a)))]})]})}):"","641161a4591c2f02bcddf51c"==V.policy_type_id?(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Plan Label"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Plan Label",name:"plan_label",autoComplete:"off",defaultValue:V.plan_label})]})}):""]}),(0,c.jsxs)("div",{className:"row",children:["641161a4591c2f02bcddf51c"==V.policy_type_id?(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Repair Condition"}),(0,c.jsx)(i.default,{options:m,selectedValues:Ve,displayValue:"repair_type_name",showCheckbox:!0,onSelect:ya,onRemove:ya})]})}):"","641161a4591c2f02bcddf51c"==V.policy_type_id?(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Nature Of Plan"}),(0,c.jsxs)("select",{className:"form-control",name:"nature_of_plan_id",children:[(0,c.jsx)("option",{value:"",children:"Select Nature Of Plan"}),l.map(((e,a)=>(0,c.jsx)("option",{value:e._id,selected:V.nature_of_plan_id==e._id,children:e.nature_of_plan_name},a)))]})]})}):""]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Electric Vehicle"}),(0,c.jsxs)("select",{className:"form-control",name:"electric_vehicle",children:[(0,c.jsx)("option",{value:"0",children:"Select"}),(0,c.jsx)("option",{value:"1",selected:1==V.electric_vehicle,children:"Yes"}),(0,c.jsx)("option",{value:"0",selected:0==V.electric_vehicle,children:"No"})]})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Body Type"}),(0,c.jsx)(i.default,{options:d,selectedValues:je,displayValue:"body_type_name",showCheckbox:!0,onSelect:ja,onRemove:ja})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Plan For"}),(0,c.jsx)(i.default,{options:_,selectedValues:Je,displayValue:"plan_for_name",showCheckbox:!0,onSelect:_a,onRemove:_a})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Plan For)"}),(0,c.jsx)("input",{type:"text",name:"plan_for_topup",className:"form-control",placeholder:"Enter Fixed/Percentage/Reffered (Plan For)",defaultValue:Ke})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Business Type"}),(0,c.jsx)(i.default,{options:x,selectedValues:g,displayValue:"business_type_name",showCheckbox:!0,onSelect:va,onRemove:va})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Car Model"}),(0,c.jsx)(i.default,{options:C,selectedValues:ne,displayValue:"make_motor_name",showCheckbox:!0,onSelect:ga,onRemove:ga})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Car Model)"}),(0,c.jsx)("input",{type:"text",defaultValue:ce,name:"car_model_topup",className:"form-control",placeholder:"Enter Fixed/Percentage/Reffered (Car Model Topup)"})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:(V.policy_type_id,"col-md-4"),children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Car Value"}),(0,c.jsx)("input",{onChange:e=>(e=>{e.preventDefault(),Ae("");let a=[];const t=e.target.value;if(null!==t&&void 0!==t&&t.includes("-")&&null!==t&&void 0!==t&&t.includes(",")){const e=null===t||void 0===t?void 0:t.split(",");for(let t=0;t<(null===e||void 0===e?void 0:e.length);t++)if(e[t].includes("-")){var o;const s=null===(o=e[t])||void 0===o?void 0:o.split("-");s[1]<=5e4?a.push(250):5e4<s[1]&&s[1]<=1e5?a.push(350):(1e5<s[1]&&s[1]<15e5||!s[0]<1e6&&s[1]>=15e5)&&a.push(500)}Fe(a.join(","))}else if(t.includes("-")&&!t.includes(",")){const e=t.split("-");e[1]<=5e4?a.push(250):5e4<e[1]&&e[1]<=1e5?a.push(350):(1e5<e[1]&&e[1]<15e5||!e[0]<1e6&&e[1]>=15e5)&&a.push(500),Fe(a[0])}else t<=5e4?a.push(250):5e4<t&&t<=1e5?a.push(350):(1e5<t&&t<15e5||t>=15e5)&&a.push(500),Fe(a[0])})(e),type:"text",name:"car_value",className:"form-control",placeholder:"Enter Car Value",autoComplete:"off",defaultValue:we})]})}),"641161a4591c2f02bcddf51c"==V.policy_type_id?(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Excess"}),(0,c.jsx)("input",{type:"text",name:"excess",className:"form-control",id:"excesstag",placeholder:"Enter Excess",autoComplete:"off",onChange:e=>Fe(e.target.value),value:Me})]})}):"",(0,c.jsx)("div",{className:(V.policy_type_id,"col-md-4"),children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Car Value)"}),(0,c.jsx)("input",{type:"text",name:"car_value_topup",className:"form-control",placeholder:"Enter Car Value",autoComplete:"off",defaultValue:De})]})})]}),(0,c.jsxs)("div",{className:"row",children:["641161a4591c2f02bcddf51c"==V.policy_type_id?(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Rate"}),(0,c.jsx)("input",{type:"text",name:"rate",className:"form-control",placeholder:"Enter Rate",autoComplete:"off",defaultValue:Ie})]})}):"",(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Min Premium"}),(0,c.jsx)("input",{type:"text",name:"min_premium",className:"form-control",placeholder:"Enter Min Premium",autoComplete:"off",defaultValue:ze})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Driver Age"}),(0,c.jsx)("input",{type:"text",name:"age",className:"form-control",placeholder:"Enter Driver Age",autoComplete:"off",defaultValue:D})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Driver Age)"}),(0,c.jsx)("input",{type:"text",name:"agetopup",className:"form-control",placeholder:"Enter Age Fixed/Percentage/Reffered",autoComplete:"off",defaultValue:M})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Nationality"}),(0,c.jsx)(i.default,{options:N,selectedValues:te,displayValue:"nationality_name",showCheckbox:!0,onSelect:fa,onRemove:fa})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Nationality)"}),(0,c.jsx)("input",{type:"text",name:"nationalitytopup",className:"form-control",placeholder:"Enter Fixed/Percentage/Reffered (Nationality)",autoComplete:"off",defaultValue:se})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"Driving Experiance"}),(0,c.jsx)("input",{type:"text",name:"drivingexp",className:"form-control",placeholder:"Enter Driving Experience",autoComplete:"off",defaultValue:O})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Driving Experiance)"}),(0,c.jsx)("input",{type:"text",name:"drivingexptopup",className:"form-control",placeholder:"Enter Driving Experience Fixed/Percentage/Reffered",autoComplete:"off",defaultValue:G})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Home Country Driving Experiance"}),(0,c.jsx)("input",{type:"text",name:"homedrivingexp",className:"form-control",placeholder:"Enter Home Country Driving Experience",autoComplete:"off",defaultValue:Y})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Home Country Driving Experiance)"}),(0,c.jsx)("input",{type:"text",name:"homedrivingexptopup",className:"form-control",placeholder:"Enter Home Country Driving Experience Fixed/Percentage/Reffered",autoComplete:"off",defaultValue:L})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"No Claim Year"}),(0,c.jsx)("input",{type:"text",name:"claimyear",className:"form-control",placeholder:"Enter Claim Year",autoComplete:"off",defaultValue:J})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"No Claim Discount"}),(0,c.jsx)("input",{type:"text",name:"claimyeardisc",className:"form-control",placeholder:"Enter Claim Year Discount",autoComplete:"off",defaultValue:I})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"GCC / NON-GCC"}),(0,c.jsx)(i.default,{options:j,selectedValues:W,displayValue:"plan_for_gcc_spec_name",showCheckbox:!0,onSelect:ha,onRemove:ha})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (GCC / No-GCC)"}),(0,c.jsx)("input",{type:"text",name:"gccspecstopup",className:"form-control",placeholder:"Enter Fixed/Percentage/Reffered (GCC / No-GCC)",autoComplete:"off",defaultValue:ee})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Age Of The Car"}),(0,c.jsx)("input",{type:"text",name:"age_of_the_car",className:"form-control",placeholder:"Enter Age Of The Car",autoComplete:"off",defaultValue:de})]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Age Of The Car)"}),(0,c.jsx)("input",{type:"text",name:"age_of_the_car_topup",className:"form-control",placeholder:"Enter Fixed/Percentage/Reffered (Age Of The Car)",autoComplete:"off",defaultValue:me})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{className:"text-danger",children:"last year policy type"}),(0,c.jsx)(i.default,{options:Ee,selectedValues:z,displayValue:"policy_type_name",showCheckbox:!0,onSelect:Na,onRemove:Na})]})}),"641161a4591c2f02bcddf51c"==V.policy_type_id?(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (last year policy type)"}),(0,c.jsx)("input",{type:"text",name:"last_year_policy_type_topup",className:"form-control",placeholder:"Enter Last Year Policy Type Fixed/Percentage/Reffered",autoComplete:"off",defaultValue:K})]})}):""]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Add Option Condition Description"}),(0,c.jsx)("input",{type:"text",onInput:e=>ba(e),name:"add_op_con_desc",className:"form-control",placeholder:"Enter Add Option Condition Description",autoComplete:"off",defaultValue:_e}),1==We.status&&"add_op_con_desc"==We.name?(0,c.jsx)("span",{style:{color:"red"},children:"Text Only"}):""]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Fixed/Percentage/Reffered (Add Option Condition Description)"}),(0,c.jsx)("input",{type:"text",name:"add_op_con_desc_topup",className:"form-control",placeholder:"Enter Fixed/Percentage/Reffered (Add Option Condition Description)",autoComplete:"off",defaultValue:xe})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Vat Able"}),(0,c.jsx)("input",{type:"text",onInput:e=>ba(e),name:"vat",className:"form-control",placeholder:"Enter Vat Able",autoComplete:"off",defaultValue:ge}),1==We.status&&"vat"==We.name?(0,c.jsx)("span",{style:{color:"red"},children:"Text Only"}):""]})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"JDV Commission"}),(0,c.jsx)("input",{type:"text",name:"jdv_comm",className:"form-control",placeholder:"Enter JDV Commission",autoComplete:"off",defaultValue:V.jdv_comm})]})})]}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Location"}),(0,c.jsx)(i.default,{options:Ye,selectedValues:Le,onSelect:e=>xa(e),onRemove:e=>xa(e),displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]})})}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Update"})})})]})})]})})})})}}}]);
//# sourceMappingURL=7307.7222ea42.chunk.js.map