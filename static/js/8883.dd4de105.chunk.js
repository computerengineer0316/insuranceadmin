"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8883],{58883:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var o=s(65043),n=s(73216),l=s(73023),c=s.n(l),a=s(54168),i=s(70579);const r=()=>{const e=(0,n.Zp)(),[t,s]=(0,o.useState)([]),[l,r]=(0,o.useState)(null),[d,h]=(0,o.useState)([]),[m,u]=(0,o.useState)({});(0,o.useEffect)((()=>{const t=localStorage.getItem("token");null===t||void 0===t||""===t?e("/login"):p()}),[]);const p=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data;s(t.map((e=>({label:e.location_name,value:e._id}))))}))},x=(e,t,s)=>{console.log(t,"multiselect value");const o=[...d];o[e][s]=t,h(o)};return(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-header",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("h4",{className:"card-title",children:"Home Ownership Details "})})})}),(0,i.jsx)("div",{className:"card-body addmotorplans",style:{overflowX:"scroll"},children:(0,i.jsxs)("table",{className:"table table-bordered",style:{width:"auto"},children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{const e={home_owner_type:"",location:t};h([...d,e])},children:"+"})}),(0,i.jsx)("th",{children:"Home Ownership Type "}),(0,i.jsx)("th",{children:"Location"})]})}),(0,i.jsx)("tbody",{children:d.map(((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>(e=>{const t=[...d];t.splice(e,1),h(t)})(s),children:"x"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"text",onChange:e=>((e,t)=>{const{name:s,value:o}=t.target;""===o.trim()?u((e=>({...e,[s]:"This is required"}))):u((e=>({...e,[s]:""})));const n=[...d];n[e][s]=o,h(n)})(s,e),className:"form-control",name:"home_owner_type",placeholder:"Home Ownership Type",autoComplete:"off",required:!0})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.default,{options:t,selectedValues:t,displayValue:"label",onSelect:e=>x(s,e,"location"),onRemove:e=>x(s,e,"location"),placeholder:"Select Location",showCheckbox:!0,closeOnSelect:!1,required:!0})})]},s)))})]})}),(0,i.jsx)("div",{className:"card-footer",children:(0,i.jsx)("button",{className:"btn btn-outline-success",onClick:t=>{t.preventDefault(),console.log(d,"rowsData");try{if(d.some((e=>""===e.home_owner_type.trim()||0==e.location)))return c()({title:"Warning!",text:"Please fill in all fields for each row.",type:"warning",icon:"warning"}),!1;{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)};fetch("https://insuranceapi-3o5t.onrender.com/api/add_home_owner_type",t).then((e=>e.json())).then((t=>{200==t.status?(c()({text:t.message,type:"success",icon:"success",button:!1}),setTimeout((()=>{c().close(),e("/Viewhomeownership")}),1e3)):200!=t.status&&(c()({title:"Error!",text:t.message,type:"error",icon:"error",button:!1}),setTimeout((()=>{c().close()}),1e3))}))}}catch(s){console.log(s)}},children:"Submit"})})]})})})})}}}]);
//# sourceMappingURL=8883.dd4de105.chunk.js.map