"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2508],{82508:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(65043),s=n(54168),o=n(70579);const c=function(e){let{rowsData:t,deleteTableRows:n,handleChange:c,handleChange1:l}=e;const[i,r]=(0,a.useState)([]),[d,h]=(0,a.useState)([]);(0,a.useEffect)((()=>{p(),m()}),[]);const m=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,n=t.length,a=[];for(let s=0;s<n;s++){const e={label:t[s].location_name,value:t[s]._id};a.push(e)}h(a)}))},p=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/company_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{r(e.data)}))};return t.map(((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>n(t),children:"x"})}),(0,o.jsx)("td",{children:(0,o.jsx)("input",{type:"text",name:"plan_name",value:e.plan_name,onChange:e=>c(e,t),className:"form-control"})}),(0,o.jsx)("td",{children:(0,o.jsxs)("select",{className:"form-control",name:"company_id",onChange:e=>c(e,t),children:[(0,o.jsx)("option",{hidden:!0,value:"",children:"Select Insurance Company"}),i.map(((e,t)=>(0,o.jsx)("option",{value:e._id,children:e.company_name},t)))]})}),(0,o.jsx)("td",{children:(0,o.jsx)("input",{type:"date",className:"form-control",name:"from_date",onChange:e=>c(e,t)})}),(0,o.jsx)("td",{children:(0,o.jsx)("input",{type:"date",className:"form-control",name:"to_date",onChange:e=>c(e,t)})}),(0,o.jsx)("td",{children:(0,o.jsx)(s.default,{options:d,selectedValues:d,onSelect:e=>l(t,e,"location"),onRemove:e=>l(t,e,"location"),displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})})]},t)))};var l=n(73216),i=n(73023),r=n.n(i);const d=()=>{const e=(0,l.Zp)(),[t,n]=(0,a.useState)([]),[s,i]=(0,a.useState)([]),d={plan_name:"Plan Name ",company_id:"Company",from_date:"From Date",to_date:"To Date",location:"Location"};(0,a.useEffect)((()=>{const t=localStorage.getItem("token");null===t||void 0===t||""===t?e("/login"):h()}),[]);const h=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,n=t.length,a=[];for(let s=0;s<n;s++){const e={label:t[s].location_name,value:t[s]._id};a.push(e)}i(a)}))};return(0,o.jsx)("div",{className:"container mb-5",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("h4",{className:"card-title",children:"Add Group Medical Plan"})}),(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("button",{className:"btn btn-primary",onClick:()=>e("/ViewGroupMedicalPlans"),style:{float:"right"},children:"Back"})})]})}),(0,o.jsx)("div",{className:"card-body addmotorplans ",style:{overflowX:"scroll"},children:(0,o.jsxs)("table",{className:"table table-bordered table-responsive",style:{width:"1500px"},children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{n([...t,{plan_name:"",company_id:"",from_date:"",to_date:"",location:s}])},children:"+"})}),(0,o.jsx)("th",{className:"text-danger ",children:"Customer Name"}),(0,o.jsx)("th",{className:"text-danger",children:"Insurance Company"}),(0,o.jsx)("th",{className:"text-danger",children:"From Date"}),(0,o.jsx)("th",{className:"text-danger",children:"To Date"}),(0,o.jsx)("th",{className:"text-danger",children:"Location"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsx)(c,{rowsData:t,deleteTableRows:e=>{const a=[...t];a.splice(e,1),n(a)},handleChange:(e,a)=>{const{name:s,value:o}=e.target,c=[...t];c[a][s]=o,n(c)},handleChange1:(e,a,s)=>{const o=[...t];o[e][s]=a,n(o)}})})]})}),(0,o.jsx)("div",{className:"card-footer",children:(0,o.jsx)("button",{disabled:!t.length,className:"btn btn-outline-success",style:{float:"right"},onClick:async()=>{const n=[];if(t.forEach(((e,t)=>{const a=Object.keys(e).filter((t=>{const n=e[t];if("string"===typeof n&&""===n.trim()){if("plan_name"==t||"company_id"==t||"tpa"==t||"network"==t)return!0}else if(("location"==t||"network_list"==t)&&!n.length)return!0;return!1}));a.length>0&&(console.log(a,">> emptyKeys"),n.push({index:t,emptyKeys:a}))})),n.length>0)n.forEach((e=>{const t=e.emptyKeys[0];r()({title:"warning!",text:`${d[t]}`,type:"warning",icon:"warning"}).then((function(){return!1}))}));else{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rowsData:t})};await fetch("https://insuranceapi-3o5t.onrender.com/api/addgroupmedicalplan",n).then((e=>e.json())).then((t=>{200===t.status?r()({title:"Success!",text:t.message,type:"success",icon:"success"}).then((function(){e("/ViewGroupMedicalPlans")})):r()({title:"Error!",text:t.message,type:"error",icon:"error"}).then((function(){e("/ViewGroupMedicalPlans")}))})).catch((e=>console.log(e)))}},children:"Submit"})})]})})})})}}}]);
//# sourceMappingURL=2508.44b2e009.chunk.js.map