"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1530],{1530:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var n=t(65043),a=t(73216),c=t(73023),o=t.n(c),l=t(54168),i=t(70579);const r=()=>{const e=(0,a.Zp)();(0,n.useEffect)((()=>{s()}),[]);const s=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const s=e.data,t=s.length,n=[];for(let a=0;a<t;a++){const e={label:s[a].location_name,value:s[a]._id};n.push(e)}d(n)}))},[t,c]=(0,n.useState)(""),[r,d]=(0,n.useState)([]),[h,u]=(0,n.useState)(),[m,p]=(0,n.useState)([]),[x,j]=(0,n.useState)({}),b=(e,s,t)=>{console.log(s,"multiselect value");const n=[...m];n[e][t]=s,p(n)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-header",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("h4",{className:"card-title",children:"Add Business Type"})})})}),(0,i.jsx)("div",{className:"card-body addmotorplans",style:{overflowX:"scroll"},children:(0,i.jsxs)("table",{className:"table table-bordered",style:{width:"auto"},children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{const e={business_type_name:"",location:r};p([...m,e])},children:"+"})}),(0,i.jsx)("th",{children:"Business Type Name"}),(0,i.jsx)("th",{children:"Location"})]})}),(0,i.jsx)("tbody",{children:m.map(((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>(e=>{const s=[...m];s.splice(e,1),p(s)})(s),children:"x"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"text",onChange:e=>((e,s)=>{const{name:t,value:n}=s.target;""===n.trim()?j((e=>({...e,[t]:"This is required"}))):j((e=>({...e,[t]:""})));const a=[...m];a[e][t]=n,p(a)})(s,e),className:"form-control",name:"business_type_name",placeholder:"Business Type Name",autoComplete:"off",required:!0})}),(0,i.jsx)("td",{children:(0,i.jsx)(l.default,{options:r,selectedValues:r,displayValue:"label",onSelect:e=>b(s,e,"location"),onRemove:e=>b(s,e,"location"),placeholder:"Select Location",showCheckbox:!0,required:!0})})]},s)))})]})}),(0,i.jsx)("div",{className:"card-footer",children:(0,i.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{try{if(m.some((e=>""===e.business_type_name.trim()||0==e.location.length)))return void o()({title:"Warning!",text:"Please fill in all fields for each row.",type:"warning",icon:"warning"});console.log(m);const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)};fetch("https://insuranceapi-3o5t.onrender.com/api/add_business_type",s).then((e=>e.json())).then((s=>{200==s.status?(o()({text:s.message,type:"success",icon:"success",button:!1}),e("/ViewBusinesstype"),setTimeout((()=>{o().close()}),1e3)):(o()({title:"Error!",text:s.message,type:"error",icon:"error",button:!1}),e("/ViewBusinesstype"),setTimeout((()=>{o().close()}),1e3))}))}catch(s){console.log(s)}},children:"Submit"})})]})})})})})}}}]);
//# sourceMappingURL=1530.430d73ca.chunk.js.map