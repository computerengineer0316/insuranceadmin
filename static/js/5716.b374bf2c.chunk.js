"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5716],{45716:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s(65043),n=s(73216),c=s(73023),o=s.n(c),r=s(54168),l=s(70579);const i=()=>{const e=(0,n.Zp)();(0,a.useEffect)((()=>{d()}),[]);const[t,s]=(0,a.useState)(),[c,i]=(0,a.useState)(""),d=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,s=t.length,a=[];for(let n=0;n<s;n++){const e={label:t[n].location_name,value:t[n]._id};a.push(e)}y(a)}))},[h,p]=(0,a.useState)([]),[u,m]=(0,a.useState)({}),[x,j]=(0,a.useState)(""),[b,y]=(0,a.useState)([]),_=(e,t,s)=>{const a=[...h];a[e][s]=t,p(a)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"card-header",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("h4",{className:"card-title",children:"Add Repair Type"})})})}),(0,l.jsx)("div",{className:"card-body addmotorplans",style:{overflowX:"scroll"},children:(0,l.jsxs)("table",{className:"table table-bordered",style:{width:"auto"},children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:(0,l.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{const e={repair_type_name:"",location:b};p([...h,e])},children:"+"})}),(0,l.jsx)("th",{children:"Repair Type Name"}),(0,l.jsx)("th",{children:"Location"})]})}),(0,l.jsx)("tbody",{children:h.map(((e,t)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>(e=>{const t=[...h];t.splice(e,1),p(t)})(t),children:"x"})}),(0,l.jsx)("td",{children:(0,l.jsx)("input",{type:"text",onChange:e=>((e,t)=>{const{name:s,value:a}=t.target;""===a.trim()?m((e=>({...e,[s]:"This is required"}))):m((e=>({...e,[s]:""})));const n=[...h];n[e][s]=a,p(n)})(t,e),className:"form-control",name:"repair_type_name",placeholder:"Repair Type Name",autoComplete:"off",required:!0})}),(0,l.jsx)("td",{children:(0,l.jsx)(r.default,{options:b,selectedValues:b,displayValue:"label",onSelect:e=>_(t,e,"location"),onRemove:e=>_(t,e,"location"),placeholder:"Select Location",showCheckbox:!0,required:!0})})]},t)))})]})}),(0,l.jsx)("div",{className:"card-footer",children:(0,l.jsx)("button",{className:"btn btn-outline-success",onClick:async t=>{t.preventDefault();try{if(h.some((e=>""===e.repair_type_name||!e.location)))return o()({title:"Warning!",text:"Please fill in all fields for each row.",type:"warning",icon:"warning"}),!1;console.log(h,"rowsData");const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)};fetch("https://insuranceapi-3o5t.onrender.com/api/add_repair_type",t).then((e=>e.json())).then((t=>{200==t.status?(o()({text:t.message,type:"success",icon:"success",button:!1}),e("/ViewRepairtype"),setTimeout((()=>{o().close()}),1e3)):(o()({title:"Error!",text:t.message,type:"error",icon:"error",button:!1}),e("/ViewRepairtype"),setTimeout((()=>{o().close()}),1e3))}))}catch(s){console.log(s)}},children:"Submit"})})]})})})})})}}}]);
//# sourceMappingURL=5716.b374bf2c.chunk.js.map