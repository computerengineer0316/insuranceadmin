"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1121],{81121:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});var l=t(65043),o=t(73216),n=t(73023),s=t.n(n),i=t(54168),c=t(70579);const r=()=>{const e=(0,o.Zp)(),[a,t]=(0,l.useState)(""),[n,r]=(0,l.useState)([]),[d,h]=(0,l.useState)([]),[p,m]=(0,l.useState)([]),[u,v]=(0,l.useState)([]),[j,g]=(0,l.useState)([]),[x,f]=(0,l.useState)([]),[y,_]=(0,l.useState)([]),[N,T]=(0,l.useState)("");(0,l.useEffect)((()=>{const a=localStorage.getItem("token");if(null===a||void 0===a||""===a)e("/login");else{let e=window.location.href;e=e.split("?")[1];let a=e.split("&")[0],l=e.split("&")[1];a=a.split("=")[1],l=l.split("=")[1],console.log("rateId",a,"planId",l),t(a),T(l),k(),P(),S(),G(a),E(),A()}}),[]);const[b,w]=(0,l.useState)({}),C=e=>{const{name:a,value:t}=e.target;"TPA"===a&&fetch(`https://insuranceapi-3o5t.onrender.com/api/getTpaLinkNetwork?tpaId=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{_(e.data)})).catch((e=>console.log("error",e))),b[a]=t,w(b),console.log("valuelllllllllllllllllllllllrowsData",b)},P=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getGroupMedicalCategory",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{r(e.data)}))},S=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{let a=e.data;const t=[];for(let l=0;l<(null===a||void 0===a?void 0:a.length);l++){const e={label:a[l].location_name,value:a[l]._id};t.push(e)}m(t)}))},k=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getAreaOfRegistrations",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{let a=e.data;const t=[];for(let l=0;l<a.length;l++){const e={label:a[l].area_of_registration_name,value:a[l]._id};t.push(e)}h(t)})).catch((e=>console.log("error",e)))},A=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/activeMedicalTPA",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{f(e.data)}))},E=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/activeMedicalNetwork",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{_(e.data)}))},G=e=>{console.log("planRatesDeltails..................................insede");fetch(`https://insuranceapi-3o5t.onrender.com/api/get_group_med_single_rate?id=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{var a,t,l,o,n,s,i;v(e.data[0]),console.log(e.data[0],"this is data>>>>>>>>>>>>>>>>>>>>>>>>>> ");let c=null===(a=e.data[0])||void 0===a?void 0:a.locationData,r=[];for(let h=0;h<(null===c||void 0===c?void 0:c.length);h++)r.push({label:c[h].location_name,value:c[h]._id});g(r);let d={};d.policy_name=null===(t=e.data[0])||void 0===t?void 0:t.policy_name,d.TPA=null===(l=e.data[0])||void 0===l?void 0:l.TPA,d.coPayments=null===(o=e.data[0])||void 0===o?void 0:o.primiumArray,d.network=null===(n=e.data[0])||void 0===n?void 0:n.network,d.planCatagoryId=null===(s=e.data[0])||void 0===s?void 0:s.planCatagoryId,d.locationArray=null===(i=e.data[0])||void 0===i?void 0:i.locationArray,w(d)}))};return(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card-header",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("h4",{className:"card-title",children:"Edit TPA/Network"})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("a",{href:`/ViewGroupMedicalPlanPrice?id=${N}`,className:"btn btn-primary",style:{float:"right"},children:"Back"})})]})}),(0,c.jsx)("div",{className:"card-body",children:(0,c.jsxs)("form",{action:"/",method:"POST",onSubmit:t=>{t.preventDefault();const l=new FormData(t.target),o=l.get("policy_name"),n=l.get("TPA"),i=l.get("network"),c=l.get("planCatagoryId"),r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({policy_name:o,TPA:n,network:i,planCatagoryId:c,locationArray:j})};fetch(`https://insuranceapi-3o5t.onrender.com/api/update_group_medicalplan_rates?id=${a}`,r).then((e=>e.json())).then((a=>{200===a.status?s()({title:"Success!",text:a.message,type:"success",icon:"success"}).then((function(){e(`/ViewGroupMedicalPlanPrice?id=${N}`)})):s()({title:"Error!",text:a.message,type:"error",icon:"error"}).then((function(){e(`/ViewGroupMedicalPlanPrice?id=${N}`)}))}))},children:[(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Policy Name"}),(0,c.jsx)("input",{type:"text",name:"policy_name",className:"form-control",onChange:e=>C(e),placeholder:"Enter Age Range",defaultValue:null===u||void 0===u?void 0:u.policy_name})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"TPA"}),(0,c.jsxs)("select",{className:"form-control",name:"TPA",onChange:e=>C(e),children:[(0,c.jsx)("option",{hidden:!0,value:"",children:"Select TPA"}),x.map(((e,a)=>(0,c.jsx)("option",{value:e._id,selected:(null===b||void 0===b?void 0:b.TPA)==e._id,children:e.name},a)))]})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Plan Category"}),(0,c.jsxs)("select",{required:!0,className:"form-control",name:"planCatagoryId",defaultValue:u.planCatagoryId,children:[(0,c.jsx)("option",{hidden:!0,value:"",children:"Select Plan Category"}),n.map(((e,a)=>(0,c.jsx)("option",{value:e._id,children:e.category_name},a)))]})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Network"}),(0,c.jsxs)("select",{className:"form-control",name:"network",onChange:e=>C(e),children:[(0,c.jsx)("option",{hidden:!0,value:"",children:"Select network"}),y.map(((e,a)=>(0,c.jsx)("option",{value:e._id,selected:(null===b||void 0===b?void 0:b.network)==e._id||0==a,children:e.name},a)))]})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Location"}),(0,c.jsx)(i.default,{options:p,selectedValues:j,onSelect:e=>g(e),onRemove:e=>g(e),displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,showArrow:!0,style:{chips:{background:"#007bff"}}})]})})]}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Update"})})})]})})]})})})})}}}]);
//# sourceMappingURL=1121.78c8b9d3.chunk.js.map