"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4688],{24688:(e,a,l)=>{l.r(a),l.d(a,{default:()=>c});var t=l(54168),o=l(65043),s=l(73216),n=l(30064),i=l.n(n),r=l(70579);const c=()=>{const e=(0,s.Zp)(),[a,l]=(0,o.useState)([]),[n,c]=(0,o.useState)([]),[d,m]=(0,o.useState)([]),[p,u]=(0,o.useState)([]),[h,x]=(0,o.useState)([]),[f,j]=(0,o.useState)([]),[_,v]=(0,o.useState)([]),[g,N]=(0,o.useState)(""),[b,y]=(0,o.useState)(""),[V,C]=(0,o.useState)(""),[S,E]=(0,o.useState)(""),[P,T]=(0,o.useState)(""),[B,w]=(0,o.useState)(""),[M,O]=(0,o.useState)(""),[q,R]=(0,o.useState)(""),[k,D]=(0,o.useState)(""),[G,H]=(0,o.useState)(""),[A,F]=(0,o.useState)(""),[I,J]=(0,o.useState)(""),[L,Z]=(0,o.useState)(""),[$,z]=(0,o.useState)(""),[Y,U]=(0,o.useState)(""),[K,Q]=(0,o.useState)([]),[W,X]=(0,o.useState)([]),[ee,ae]=(0,o.useState)([]),[le,te]=(0,o.useState)(""),[oe,se]=(0,o.useState)(""),[ne,ie]=(0,o.useState)(""),[re,ce]=(0,o.useState)({status:!1,name:""}),[de,me]=(0,o.useState)(""),[pe,ue]=(0,o.useState)(""),[he,xe]=(0,o.useState)(""),[fe,je]=(0,o.useState)("");(0,o.useEffect)((()=>{const a=localStorage.getItem("token");if(null===a||void 0===a||""===a)e("/login");else{const e=window.location.href.split("/")[3].split("?")[1].split("=")[1];z(e),ve(),ge(),Ne(),be(),ye(),Ve(),_e(e),Se()}}),[]);const _e=e=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/home_plan_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{var a,l,t,o,s,n,i;if(v(e.data),console.log(e.data,"rowsdata"),X(null===(a=e.data)||void 0===a?void 0:a.location),Z(null===(l=e.data)||void 0===l?void 0:l.plan_type_id),ae(null===(t=e.data)||void 0===t?void 0:t.property_type_id),null!==(o=e.data)&&void 0!==o&&o.content_value_or_topup){const a=e.data.content_value_or_topup,l=[],t=[],o=[],s=[];for(let e=0;e<a.length;e++){const n=a[e].conMin,i=a[e].conMax,r=a[e].content_topup,c=a[e].rate,d=a[e].minmumPrimium;l.push(n+"-"+i),t.push(r),o.push(c),s.push(d)}var r=l.join(","),c=t.join(","),d=o.join(","),m=null===s||void 0===s?void 0:s.join(",");N(r),y(c),te(d),me(m)}if(null!==(s=e.data)&&void 0!==s&&s.pbvalue_or_topup){const a=e.data.pbvalue_or_topup,l=[],t=[],o=[],s=[];for(let e=0;e<a.length;e++){const n=a[e].pbvMin,i=a[e].pbvMax,r=a[e].pbv_topup,c=a[e].rate,d=a[e].minmumPrimium;l.push(n+"-"+i),t.push(r),o.push(c),s.push(d)}var p=l.join(","),u=null===t||void 0===t?void 0:t.join(","),h=null===o||void 0===o?void 0:o.join(","),x=null===s||void 0===s?void 0:s.join(",");C(p),E(u),se(h),ue(x)}if(null!==(n=e.data)&&void 0!==n&&n.building_value_or_topup){const a=e.data.building_value_or_topup,l=[],t=[],o=[],s=[];for(let e=0;e<a.length;e++){const n=a[e].bvMin,i=a[e].bvMax,r=a[e].bv_topup,c=a[e].rate,d=a[e].minmumPrimium;l.push(n+"-"+i),t.push(r),o.push(c),s.push(d)}var f=l.join(","),j=t.join(","),_=o.join(","),g=null===s||void 0===s?void 0:s.join(",");T(f),w(j),ie(_),xe(g)}const b=e.data.claimyears_or_topup,V=b.length,S=[],P=[];for(let v=0;v<V;v++){const e=b[v].claimyears;S.push(e);const a=b[v].claimyeardisc;P.push(a)}var B=S.join(","),M=P.join(",");D(B),H(M);const q=e.data.domestic_helper_or_topup,k=[],G=[];for(let v=0;v<q.length;v++){q[v].domMin,q[v].domMax;const e=q[v].dom_topup;let a;a=q[v].domMin==q[v].domMax?q[v].domMin:q[v].domMin+"-"+q[v].domMax,k.push(a),G.push(e)}var A=k.join(","),I=G.join(",");O(A),R(I);const L=null===(i=e.data)||void 0===i?void 0:i.add_op_con_desc_or_topup,$=L.length,z=[],Y=[],K=[];for(let v=0;v<$;v++){const e=L[v].add_op_con_desc;z.push(e);const a=L[v].add_op_con_desc_topup;Y.push(a);const l=L[v].vat;K.push(l)}var Q=z.join(",");je(Q);var W=Y.join(","),ee=K.join(",");F(Q),J(W),U(ee)}))},ve=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/company_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{u(e.data)}))},ge=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_home_property_type_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data.map(((e,a)=>({label:e.home_property_type,value:e._id})));m(a)}))},Ne=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getPlanCategory",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{l(e.data)}))},be=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getNatureOfPlan",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{c(e.data)}))},ye=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_home_owner_type_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{x(e.data),console.log(e.data)}))},Ve=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_all_home_plan_type",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{j(e.data),console.log(e.data,"homeplanlist")}))},Ce=e=>{X(e)},Se=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data,l=[];for(let t=0;t<a.length;t++)l.push({label:a[t].location_name,value:a[t]._id});Q(l)}))},Ee=e=>{const a=e.target.value;je(e.target.value);/^[A-Za-z,]*$/.test(a)?ce({status:!1,name:e.target.name}):(ce({status:!0,name:e.target.name}),e.target.value=a.replace(/[^a-zA-Z\s,]/g,""))};return(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"card",style:{marginTop:"20px"},children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("h4",{className:"card-title",children:"Edit Home Plan"})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("button",{onClick:()=>e(-1),className:"btn btn-primary",style:{float:"right"},children:"Back"})})]})}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("form",{action:"/",method:"POST",onSubmit:a=>{a.preventDefault();const l=new FormData(a.target),t=l.get("company_id"),o=l.get("plan_name"),s=l.get("plan_category_id"),n=l.get("nature_of_plan_id"),r=(l.get("property_type_id"),l.get("ownership_type_id")),c=l.get("plan_type_id"),d=l.get("excess"),m=l.get("content_value"),p=l.get("cv_topup"),u=l.get("cv_rate"),h=l.get("cv_min_premium"),x=l.get("pb_value"),f=l.get("pbv_topup"),j=l.get("pbv_rate"),_=l.get("pbv_min_premium"),v=l.get("building_value"),g=l.get("bv_topup"),N=l.get("bv_rate"),b=l.get("bv_min_premium"),y=l.get("no_claim_year"),V=l.get("no_claim_discount"),C=l.get("domestic_helper"),S=l.get("dom_topup"),E=l.get("add_op_con_desc"),P=l.get("op_con_desc_topup"),T=l.get("vat"),B=l.get("jdv_comm"),w={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company_id:t,plan_name:o,plan_category_id:s,nature_of_plan_id:n,property_type:ee,ownership_status:r,plan_type:c,excess:d,content_value:m,content_value_topup:p,cv_rate:u,cv_premium:h,personal_belonging_value:x,personal_belonging_value_topup:f,pbv_premium:_,building_value:v,pbv_rate:j,building_value_topup:g,bv_rate:N,bv_premium:b,no_claim_year:y,no_claim_discount:V,domestic_helper:C,dom_topup:S,add_op_con_desc:E,add_op_con_desc_topup:P,vat:T,jdv_comm:B,location:W})};fetch(`https://insuranceapi-3o5t.onrender.com/api/updateHomePlan/${$}`,w).then((e=>e.json())).then((a=>{200===a.status?i().fire({title:"Success",text:a.message,icon:"success",confirmButtonText:"Ok"}).then((a=>{a.isConfirmed&&e("/homeplan")})):i().fire({title:"Error!",text:a.message,icon:"error",confirmButtonText:"Ok"}).then((a=>{a.isConfirmed&&e("/homeplan")}))}))},children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{className:"text-danger",children:"Company Name"}),(0,r.jsxs)("select",{required:!0,className:"form-control",name:"company_id",children:[(0,r.jsx)("option",{value:"",children:"Select Company"}),p.map(((e,a)=>(0,r.jsx)("option",{value:e._id,selected:_.company_id==e._id,children:e.company_name},a)))]})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{className:"text-danger",children:"Plan Name"}),(0,r.jsx)("input",{required:!0,type:"text",className:"form-control",name:"plan_name",autoComplete:"off",defaultValue:_.plan_name})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{className:"text-danger",children:"Plan Category"}),(0,r.jsxs)("select",{required:!0,className:"form-control",name:"plan_category_id",children:[(0,r.jsx)("option",{value:"",children:"Select Plan Category"}),a.map(((e,a)=>(0,r.jsx)("option",{value:e._id,selected:_.plan_category_id==e._id,children:e.plan_category_name},a)))]})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{className:"text-danger",children:"Ownership Status"}),(0,r.jsxs)("select",{required:!0,className:"form-control",name:"ownership_type_id",children:[(0,r.jsx)("option",{value:"",children:"Select Ownership Status"}),h.map(((e,a)=>(0,r.jsx)("option",{value:e._id,selected:(null===_||void 0===_?void 0:_.ownership_status_id)===e._id,children:e.home_owner_type},a)))]})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{className:"text-danger",children:"Nature Of Plan"}),(0,r.jsxs)("select",{required:!0,className:"form-control",name:"nature_of_plan_id",children:[(0,r.jsx)("option",{value:"",children:"Select Nature Of Plan"}),n.map(((e,a)=>(0,r.jsx)("option",{value:e._id,selected:_.nature_of_plan_id==e._id,children:e.nature_of_plan_name},a)))]})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{className:"text-danger",children:"Property Type"}),(0,r.jsx)(t.default,{options:d,selectedValues:ee,onSelect:e=>ae(e),onRemove:e=>ae(e),displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Excess"}),(0,r.jsx)("input",{required:!0,type:"text",className:"form-control",placeholder:"Enter Excess",name:"excess",autoComplete:"off",defaultValue:_.excess})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{className:"text-danger",children:"Plan Type"}),(0,r.jsxs)("select",{required:!0,className:"form-control",onChange:e=>(e=>{const a=e.target.value;console.log(a,"plan_type_id"),Z(a)})(e),name:"plan_type_id",children:[(0,r.jsx)("option",{value:"",children:"Select Plan Type"}),null===f||void 0===f?void 0:f.map(((e,a)=>(0,r.jsx)("option",{value:e._id,selected:_.plan_type_id==e._id,children:e.home_plan_type},a)))]})]})})]}),(0,r.jsxs)("div",{className:"row",children:["642279d4fb67d39380fef82d"==L?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Building Value"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Building Value",name:"building_value",autoComplete:"off",defaultValue:P})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Building Value Topup"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Building Value Topup",name:"bv_topup",autoComplete:"off",defaultValue:B})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Building Value Rate %"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Building Value Rate %",name:"bv_rate",autoComplete:"off",defaultValue:ne})]})})]}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Building Value Minumum Premium"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Building Value Minimum Premium",name:"bv_min_premium",autoComplete:"off",defaultValue:he})]})})]}):"642279f2fb67d39380fef834"==L?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Content Value"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Content Value",name:"content_value",autoComplete:"off",defaultValue:g})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Content Value Topup"}),(0,r.jsx)("input",{required:!0,type:"text",className:"form-control",placeholder:"Enter Content Value Topup",name:"cv_topup",autoComplete:"off",defaultValue:b})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Content Value Rate %"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Content Value Rate %",name:"cv_rate",autoComplete:"off",defaultValue:le})]})})]}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Content Value Minumum Premium"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Minimum Premium",name:"cv_min_premium",autoComplete:"off",defaultValue:de})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Personal Belonging Value"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Personal Belonging Value",name:"pb_value",autoComplete:"off",defaultValue:V})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Personal Belonging Value Topup"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Personal Belonging Topup",name:"pbv_topup",autoComplete:"off",defaultValue:S})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Personal Belonging Value Rate %"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Personal Belonging Value Rate %",name:"pbv_rate",autoComplete:"off",defaultValue:oe})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Personal Belonging Value Minumum Premium"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Minimum Premium",name:"pbv_min_premium",autoComplete:"off",defaultValue:pe})]})})]}):"64227a65fb67d39380fef842"==L||"64227a40fb67d39380fef83b"==L?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Content Value"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Content Value",name:"content_value",autoComplete:"off",defaultValue:g})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Content Value Topup"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Content Value Topup",name:"cv_topup",autoComplete:"off",defaultValue:b})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Content Value Rate %"}),(0,r.jsx)("input",{required:!0,type:"text",className:"form-control",placeholder:"Enter Content Value Rate %",name:"cv_rate",autoComplete:"off",defaultValue:le})]})})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Content Value Minumum Premium"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Content Value Minimum Premium",name:"cv_min_premium",autoComplete:"off",defaultValue:de})]})})}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Personal Belonging Value"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Personal Belonging Value",name:"pb_value",autoComplete:"off",defaultValue:V})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Personal Belonging Value Topup"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Personal Belonging Topup",name:"pbv_topup",autoComplete:"off",defaultValue:S})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Personal Belonging Value Rate %"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Personal Belonging Rate %",name:"pbv_rate",autoComplete:"off",defaultValue:oe})]})})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Personal Belonging Value Minumum Premium"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Personal Belonging Value Minimum Premium",name:"pbv_min_premium",autoComplete:"off",defaultValue:pe})]})})}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Building Value"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Building Value",name:"building_value",autoComplete:"off",defaultValue:P})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Building Value Topup"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Building Value Topup",name:"bv_topup",autoComplete:"off",defaultValue:B})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Building Value Rate %"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Building Value Rate %",name:"bv_rate",autoComplete:"off",defaultValue:ne})]})})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Building Value Minumum Premium"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Building Value Minimum Premium",name:"bv_min_premium",autoComplete:"off",defaultValue:he})]})})})]}):"",(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"No Claim Year"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter No Claim Year",name:"no_claim_year",autoComplete:"off",defaultValue:k})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"No Claim Discount"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter No Claim Discount",name:"no_claim_discount",autoComplete:"off",defaultValue:G})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Domestic Helper"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Domestic Helper",name:"domestic_helper",autoComplete:"off",defaultValue:M})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Domestic Helper Topup"}),(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Domestic Helper Topup",name:"dom_topup",autoComplete:"off",defaultValue:q})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Add Option Condition Description"}),(0,r.jsx)("input",{type:"text",name:"add_op_con_desc",onInput:e=>Ee(e),className:"form-control",placeholder:"Enter Add Option Condition Description",autoComplete:"off",defaultValue:A}),1==re.status&&"add_op_con_desc"==re.name?(0,r.jsx)("span",{style:{color:"red"},children:"Text Only"}):""]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Topup"}),(0,r.jsx)("input",{type:"text",required:""!=fe,className:"form-control",placeholder:"Enter Option Condition Description Topup",name:"op_con_desc_topup",autoComplete:"off",defaultValue:I})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Vat Able"}),(0,r.jsx)("input",{required:""!=fe,type:"text",name:"vat",onInput:e=>Ee(e),className:"form-control",placeholder:"Enter Vat Able",autoComplete:"off",defaultValue:Y}),1==re.status&&"vat"==re.name?(0,r.jsx)("span",{style:{color:"red"},children:"Text Only"}):""]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{className:"text-danger",children:"JDV Commission"}),(0,r.jsx)("input",{required:!0,type:"text",name:"jdv_comm",className:"form-control",placeholder:"Enter JDV Commission",autoComplete:"off",defaultValue:_.jdv_comm})]})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("div",{className:"form-group mb-3",children:[(0,r.jsx)("label",{children:"Location"}),(0,r.jsx)(t.default,{options:K,selectedValues:W,onSelect:e=>Ce(e),onRemove:e=>Ce(e),displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]})})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Update"})})})]})})]})})})})}}}]);
//# sourceMappingURL=4688.b8819003.chunk.js.map