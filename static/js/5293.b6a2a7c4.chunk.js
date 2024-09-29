"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5293],{85293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(65043),o=n(54168),s=n(70579);const c=function(e){let{rowsData:t,deleteTableRows:n,handleChange:c,handleChange123:l}=e;const[r,i]=(0,a.useState)([]),[d,p]=(0,a.useState)([]),[h,m]=(0,a.useState)([]),[u,_]=(0,a.useState)([]),[x,j]=(0,a.useState)([]),[y,v]=(0,a.useState)([]),[f,g]=(0,a.useState)([]),[C,T]=(0,a.useState)({status:!1,name:"",index:""});(0,a.useEffect)((()=>{N(),b(),S(),E(),w(),O(),k()}),[]);const N=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/company_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{j(e.data)}))},b=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/travelcovertype",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{i(e.data)}))},S=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getNatureOfPlan",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{p(e.data)}))},E=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getTravelType",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{m(e.data)}))},w=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getTravelInsuranceFor",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{_(e.data)}))},O=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getNationality",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{v(e.data)}))},k=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,n=t.length,a=[];for(let o=0;o<n;o++){const e={label:t[o].location_name,value:t[o]._id};a.push(e)}g(a)}))},P=(e,t,n)=>{l(e,t,n)},A=(e,t)=>{const n=e.target.value;/^[A-Za-z,]*$/.test(n)?T({status:!1,name:e.target.name,index:t}):(T({status:!0,name:e.target.name,index:t}),e.target.value=n.replace(/[^a-zA-Z\s,]/g,""))};return t.map(((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>n(t),children:"x"})}),(0,s.jsx)("td",{children:(0,s.jsxs)("select",{className:"form-control",name:"company_id",onChange:e=>c(t,e),children:[(0,s.jsx)("option",{value:"",hidden:!0,children:"Select Company"}),x.map(((e,t)=>(0,s.jsx)("option",{value:e._id,children:e.company_name},t)))]})}),(0,s.jsx)("td",{children:(0,s.jsxs)("select",{className:"form-control",name:"plan_type",onChange:e=>c(t,e),children:[(0,s.jsx)("option",{value:"",hidden:!0,children:"Select Plan Type"}),u.map(((e,t)=>(0,s.jsx)("option",{value:e._id,children:e.travel_insurance_for},t)))]})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",onChange:e=>c(t,e),name:"plan_name",className:"form-control",placeholder:"Enter Plan Name"})}),(0,s.jsx)("td",{children:(0,s.jsxs)("select",{className:"form-control",name:"plan_category_id",onChange:e=>c(t,e),children:[(0,s.jsx)("option",{value:"",hidden:!0,children:"Select Cover Type"}),r.map(((e,t)=>(0,s.jsx)("option",{value:e._id,children:e.travel_cover_type},t)))]})}),(0,s.jsx)("td",{children:(0,s.jsxs)("select",{className:"form-control",name:"nature_of_plan_id",onChange:e=>c(t,e),children:[(0,s.jsx)("option",{value:"",hidden:!0,children:"Select Nature Of Plan"}),d.map(((e,t)=>(0,s.jsx)("option",{value:e._id,children:e.nature_of_plan_name},t)))]})}),(0,s.jsx)("td",{children:(0,s.jsxs)("select",{className:"form-control",name:"travel_type_id",onChange:e=>c(t,e),children:[(0,s.jsx)("option",{value:"",hidden:!0,children:"Select Travel Type"}),h.map(((e,t)=>(0,s.jsx)("option",{value:e._id,children:e.travel_type},t)))]})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.default,{className:"form-control",options:y,onSelect:e=>P(t,e,"country_name"),onRemove:e=>P(t,e,"country_name"),displayValue:"nationality_name",showCheckbox:!0})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",onChange:e=>c(t,e),name:"country_topup",className:"form-control",placeholder:"Enter Country Topup"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("input",{type:"text",onChange:e=>c(t,e),onInput:e=>A(e,t),name:"add_op_con_desc",className:"form-control",placeholder:"Enter Add Option Condition Description"}),1==C.status&&"add_op_con_desc"==C.name&&C.index==t?(0,s.jsx)("span",{style:{color:"red"},children:"Text Only"}):""]}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",onChange:e=>c(t,e),name:"add_op_con_desc_topup",className:"form-control",placeholder:"Enter Topup (Add Option Condition Description)"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("input",{type:"text",onChange:e=>c(t,e),onInput:e=>A(e,t),name:"vat",className:"form-control",placeholder:"Enter Vat Able"}),1==C.status&&"vat"==C.name&&C.index==t?(0,s.jsx)("span",{style:{color:"red"},children:"Text Only"}):""]}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{type:"text",onChange:e=>c(t,e),name:"jdv_comm",className:"form-control",placeholder:"Enter JDV Commission"})}),(0,s.jsx)("td",{children:(0,s.jsx)("td",{children:(0,s.jsx)(o.default,{options:f,selectedValues:f,onSelect:e=>P(t,e,"location"),onRemove:e=>P(t,e,"location"),displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})})})]},t)))};var l=n(73216),r=n(73023),i=n.n(r);const d=function(){const e=(0,l.Zp)(),t={company_id:"Company Name",plan_name:"Plan Name",plan_type:"Travel Insurance For",plan_category_id:"Cover Type",nature_of_plan_id:"Nature Of Plan",travel_type_id:"Travel Type",country_topup:"Country Topup",add_op_con_desc:"Addition Option Condition Description",add_op_con_desc_topup:"Addition Option Condition Description Topup",vat:"Vat",jdv_comm:"JDV commission"};(0,a.useEffect)((()=>{const t=localStorage.getItem("token");null===t||void 0===t||""===t?e("/login"):m()}),[]);const[n,o]=(0,a.useState)([]),[r,d]=(0,a.useState)([]),[p,h]=(0,a.useState)(!1),m=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,n=t.length,a=[];for(let o=0;o<n;o++){const e={label:t[o].location_name,value:t[o]._id};a.push(e)}d(a)}))};return(0,s.jsx)("div",{className:"container mb-5",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-md-12",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card-header",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-6",children:(0,s.jsx)("h4",{className:"card-title",children:"Add Travel Plan"})}),(0,s.jsx)("div",{className:"col-md-6",children:(0,s.jsx)("a",{href:"/travel-plan",className:"btn btn-primary",style:{float:"right"},children:"Back"})})]})}),(0,s.jsx)("div",{className:"card-body addmotorplans",style:{overflowX:"scroll"},children:(0,s.jsxs)("table",{className:"table table-bordered",style:{width:"3500px"},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{const e={company_id:"",plan_type:"",plan_name:"",plan_category_id:"",nature_of_plan_id:"",travel_type_id:"",country_topup:"",add_op_con_desc:"",add_op_con_desc_topup:"",vat:"",jdv_comm:"",location:r};o([...n,e])},children:"+"})}),(0,s.jsx)("th",{children:"Company Name"}),(0,s.jsx)("th",{children:"Travel Insurance For"}),(0,s.jsx)("th",{children:"Plan Name"}),(0,s.jsx)("th",{children:"Cover Type"}),(0,s.jsx)("th",{children:"Nature Of Plan"}),(0,s.jsx)("th",{children:"Travel Type"}),(0,s.jsx)("th",{children:"Country"}),(0,s.jsx)("th",{children:"Fixed/Percentage/Reffered (Country)"}),(0,s.jsx)("th",{children:"Add Option Condition Description"}),(0,s.jsx)("th",{children:"Fixed/Percentage/Reffered (Add Option Condition Description)"}),(0,s.jsx)("th",{children:"Vat Able"}),(0,s.jsx)("th",{children:"JDV Commission"}),(0,s.jsx)("th",{children:"Location"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsx)(c,{rowsData:n,deleteTableRows:e=>{const t=[...n];t.splice(e,1),o(t)},handleChange:(e,t)=>{const{name:a,value:s}=t.target,c=[...n];c[e][a]=s,o(c)},handleChange123:(e,t,a)=>{const s=[...n];s[e][a]=t,o(s)}})})]})}),(0,s.jsx)("div",{className:"card-footer",children:(0,s.jsx)("button",{className:"btn btn-outline-success",style:{float:"right"},onClick:async()=>{const a=[];if(n.forEach(((e,t)=>{const n=Object.keys(e).filter((t=>{const n=e[t];var a;return"string"===typeof n&&""===n.trim()&&("country_topup"===t?!(!e.country_name||null===(a=e.country_name)||void 0===a||!a.length):"add_op_con_desc"!==t&&("add_op_con_desc_topup"!==t&&"vat"!==t||""!==e.add_op_con_desc))}));n.length>0&&a.push({index:t,emptyKeys:n})})),a.length>0)a.forEach((e=>{const n=e.emptyKeys[0];i()({title:"warning!",text:`${t[n]} is required`,type:"warning",icon:"warning"}).then((function(){return!1}))}));else{const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({rowsData:n})};await fetch("https://insuranceapi-3o5t.onrender.com/api/addTravelPlan",t).then((e=>e.json())).then((t=>{200===t.status?(i()({title:"Success!",text:t.message,type:"success",icon:"success",button:!1}),e("/travel-plan"),setTimeout((()=>{i().close()}),1e3)):(i()({title:"Error!",text:t.message,type:"error",icon:"error",button:!1}),e("/travel-plan"),setTimeout((()=>{i().close()}),1e3))})).catch((e=>console.log(e)))}},children:"Submit"})})]})})})})}}}]);
//# sourceMappingURL=5293.b6a2a7c4.chunk.js.map