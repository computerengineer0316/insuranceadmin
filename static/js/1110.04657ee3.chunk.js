"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1110],{11110:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a(65043),n=a(73216),c=a(73023),l=a.n(c),i=a(35475),r=a(54168),o=a(70579);const d=()=>{const e=(0,n.Zp)(),[t,a]=(0,s.useState)([]),[c,d]=(0,s.useState)([]);(0,s.useEffect)((()=>{h()}),[]);const h=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location").then((e=>e.json())).then((e=>{const t=e.data.map((e=>({label:e.location_name,value:e._id})));d(t)})).catch((e=>console.error("Error fetching locations:",e)))},m=(e,s,n)=>{console.log("index:",e,"fieldName:",s,"value:",n);const c=[...t];c[e][s]=n,a(c)};return(0,o.jsx)("div",{className:"container mb-5",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("h4",{className:"card-title",children:"Add Tat dats"})}),(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)(i.N_,{to:"/TatView",className:"btn btn-primary",style:{float:"right"},children:"Back"})})]})}),(0,o.jsx)("div",{className:"card-body addmotorplans",children:(0,o.jsxs)("table",{className:"table table-bordered",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{a([...t,{tatdays:"",location:[]}])},children:"+"})}),(0,o.jsx)("th",{children:"TAT Days"}),(0,o.jsx)("th",{children:"Location"}),(0,o.jsx)("th",{children:"Claim Type"})]})}),(0,o.jsx)("tbody",{children:t.map(((e,s)=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>(e=>{const s=[...t];s.splice(e,1),a(s)})(s),children:"x"})}),(0,o.jsx)("td",{children:(0,o.jsx)("input",{type:"text",className:"form-control",name:"tatdays",placeholder:"Enter Tat Days",required:!0,onChange:e=>m(s,"tatdays",e.target.value)})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.default,{options:c,selectedValues:e.location,displayValue:"label",onSelect:e=>m(s,"location",e),onRemove:e=>m(s,"location",e),placeholder:"Select Location",showCheckbox:!0,required:!0})}),(0,o.jsx)("td",{children:(0,o.jsxs)("select",{className:"form-control",name:"claimtype",required:!0,onChange:e=>m(s,"claimtype",e.target.value),children:[(0,o.jsx)("option",{value:"",hidden:!0,children:"Select Claim Type"}),(0,o.jsx)("option",{value:"cashless",children:"Cashless"}),(0,o.jsx)("option",{value:"reimbursement",children:"Reimbursement"})]})})]},s)))})]})}),(0,o.jsx)("div",{className:"card-footer",children:(0,o.jsx)("button",{className:"btn btn-outline-success",style:{float:"right"},onClick:async a=>{a.preventDefault(),console.log("rowsData:",t);if(t.some((e=>""===e.tatdays.trim()||0===e.location.length)))l()({title:"Warning!",text:"Please fill in all fields for each row.",type:"warning",icon:"warning"});else try{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},s=await fetch("https://insuranceapi-3o5t.onrender.com/api/createtatdays",a),n=await s.json();201==n.status?(l()({text:n.message,icon:"success"}),e("/TatView")):403==n.status?l()({text:n.message,icon:"warning"}):l()({text:n.message,icon:"error"})}catch(s){console.error("Error:",s)}},children:"Submit"})})]})})})})}}}]);
//# sourceMappingURL=1110.04657ee3.chunk.js.map