"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8469],{38469:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var s=n(65043),c=n(73216),a=n(73023),l=n.n(a),o=n(54168),i=n(70579);const r=()=>{const e=(0,c.Zp)(),[t,n]=(0,s.useState)([]),[a,r]=(0,s.useState)(null),[d,h]=(0,s.useState)([]),[u,m]=(0,s.useState)({});(0,s.useEffect)((()=>{const t=localStorage.getItem("token");null===t||void 0===t||""===t?e("/login"):p()}),[]);const p=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data;n(t.map((e=>({label:e.location_name,value:e._id}))))}))},x=(e,t,n)=>{console.log(t,"multiselect value");const s=[...d];s[e][n]=t,h(s)};return(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-header",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("h4",{className:"card-title",children:"Add Yacht Engine Type "})})})}),(0,i.jsx)("div",{className:"card-body addmotorplans",style:{overflowX:"scroll"},children:(0,i.jsxs)("table",{className:"table table-bordered",style:{width:"auto"},children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{const e={yacht_engine_type:"",location:t};h([...d,e])},children:"+"})}),(0,i.jsx)("th",{children:"Yacht Engine Type"}),(0,i.jsx)("th",{children:"Location"})]})}),(0,i.jsx)("tbody",{children:d.map(((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>(e=>{const t=[...d];t.splice(e,1),h(t)})(n),children:"x"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"text",onChange:e=>((e,t)=>{const{name:n,value:s}=t.target;""===s.trim()?m((e=>({...e,[n]:"This is required"}))):m((e=>({...e,[n]:""})));const c=[...d];c[e][n]=s,h(c)})(n,e),className:"form-control",name:"yacht_engine_type",placeholder:"Yacht Engine Type",autoComplete:"off",required:!0})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.default,{options:t,selectedValues:t,displayValue:"label",onSelect:e=>x(n,e,"location"),onRemove:e=>x(n,e,"location"),placeholder:"Select Location",showCheckbox:!0,closeOnSelect:!1,required:!0})})]},n)))})]})}),(0,i.jsx)("div",{className:"card-footer",children:(0,i.jsx)("button",{className:"btn btn-outline-success",onClick:t=>{t.preventDefault(),console.log(d,"rowsData");try{if(d.some((e=>""===e.yacht_engine_type.trim()||0==e.location)))return l()({title:"Warning!",text:"Please fill in all fields for each row.",type:"warning",icon:"warning"}),!1;{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)};fetch("https://insuranceapi-3o5t.onrender.com/api/add_Yacht_engine_type",t).then((e=>e.json())).then((t=>{200==t.status?(l()({text:t.message,type:"success",icon:"success",button:!1}),setTimeout((()=>{l().close(),e("/Viewyachtenginelist")}),1e3)):200!=t.status&&(l()({title:"Error!",text:t.message,type:"error",icon:"error",button:!1}),setTimeout((()=>{l().close()}),1e3))}))}}catch(n){console.log(n)}},children:"Submit"})})]})})})})}}}]);
//# sourceMappingURL=8469.06b2d780.chunk.js.map