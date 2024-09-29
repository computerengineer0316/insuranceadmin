"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3983],{73983:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var i=a(65043),l=a(73216),c=a(84217),d=a(14282),r=a(73023),n=a.n(r),t=a(70579);const o=()=>{const e=(0,l.Zp)(),[s,a]=(0,i.useState)([]),[r,o]=(0,i.useState)(!1),[h,m]=(0,i.useState)(!1),[x,j]=(0,i.useState)({}),[u,p]=(0,i.useState)(""),[N,v]=(0,i.useState)([{description:"",link:"",point_no:""}]),[b,g]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const s=localStorage.getItem("token");null===s||void 0===s||""===s?e("/login"):y()}),[]);const y=async()=>{const e=await fetch("https://insuranceapi-3o5t.onrender.com/api/getClaimProcedure",{method:"GET",headers:{"Content-Type":"application/json"}}),s=await e.json();console.log("procedure data",s),a(s.data)};return(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card-header",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("h4",{className:"card-title",children:"Claim Procedure"})}),(0,t.jsx)("div",{className:"col-md-8",children:(0,t.jsx)("button",{className:"btn btn-primary",onClick:()=>e("/AddGroupMedicalClaim"),style:{float:"right"},children:"Add Claim Procesude"})})]})}),(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("div",{className:"table-responsive",children:(0,t.jsxs)("table",{className:"table table-bordered",children:[(0,t.jsx)("thead",{className:"thead-dark",children:(0,t.jsx)("tr",{className:"table-info"})}),(0,t.jsx)("tbody",{children:s&&s.length>0?s.map(((e,s)=>{var a,i;return(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("th",{children:(0,t.jsx)("h5",{className:"text-danger",children:(0,t.jsx)("b",{children:null===(a=e.companydata)||void 0===a?void 0:a.company_name})})}),(0,t.jsxs)("table",{className:"table table-bordered",children:[(0,t.jsx)("thead",{className:"thead-dark",children:(0,t.jsxs)("tr",{className:"table-info",children:[(0,t.jsx)("th",{children:(0,t.jsx)("strong",{children:"Heading"})}),(0,t.jsx)("th",{children:(0,t.jsx)("strong",{children:"Description"})}),(0,t.jsx)("th",{children:(0,t.jsx)("strong",{children:"Link "})})]})}),(0,t.jsx)("tbody",{children:null===(i=e.documents)||void 0===i?void 0:i.map(((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.heading}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{className:"text-wrap",children:e.procedure_description})}),(0,t.jsx)("td",{children:e.link}),(0,t.jsxs)("td",{children:[(0,t.jsx)("button",{onClick:()=>n()({text:e.procedure_description}),className:"btn btn-info mx-1",children:(0,t.jsx)("i",{className:"fa fa-eye","aria-hidden":"true"})}),(0,t.jsx)("button",{onClick:()=>(e=>{j(e),o(!0)})(e),className:"btn btn-primary mx-1",children:(0,t.jsx)("i",{className:"fa fa-edit","aria-hidden":"true"})}),(0,t.jsx)("button",{onClick:()=>{window.confirm("Are you sure you wish to delete this item?")&&(e=>{try{fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteGroupMedicalMaster?id=${e}&type=ClaimProcedure`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200==e.status?(n()({title:"Success!",text:e.message,type:"success",icon:"success",button:!1}),y(),setTimeout((()=>{n().close()}),2e3)):(n()({title:"Error!",text:e.message,type:"error",icon:"error",button:!1}),y(),setTimeout((()=>{n().close()}),2e3))}))}catch(s){console.log(s)}})(e._id)},className:"btn btn-danger mx-1",children:(0,t.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})})]})]},s)))})]})]})},s)})):(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"5",children:"No data found"})})})]})})}),(0,t.jsxs)(c.A,{size:"lg",show:b,onHide:()=>g(!1),children:[(0,t.jsx)(c.A.Header,{closeButton:!0,children:(0,t.jsx)(c.A.Title,{children:"Add Group Medical Claim Status"})}),(0,t.jsx)(c.A.Body,{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("form",{method:"POST",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:null===N||void 0===N?void 0:N.map(((e,s)=>(0,t.jsxs)("div",{className:"container col-lg-12",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:(0,t.jsx)("strong",{children:"Heading"})}),(0,t.jsx)("input",{type:"text",name:"point_no",className:"form-control"})]})}),(0,t.jsx)("div",{className:"col-md-8",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:(0,t.jsx)("strong",{children:"Link"})}),(0,t.jsx)("input",{type:"text",name:"link",className:"form-control"})]})})]}),(0,t.jsxs)("div",{className:"col-md-12",children:[(0,t.jsx)("label",{children:(0,t.jsx)("strong",{children:"Description"})}),(0,t.jsx)("textarea",{rows:4,type:"text",className:"form-control",name:"description"})]})]},s)))})})})})})})})})}),(0,t.jsx)(c.A.Footer,{children:(0,t.jsx)(d.A,{variant:"secondary",onHide:()=>g(!1),children:"Close"})})]}),(0,t.jsxs)(c.A,{size:"lg",show:r,onHide:()=>o(!1),children:[(0,t.jsx)(c.A.Header,{closeButton:!0,children:(0,t.jsx)(c.A.Title,{children:"Edit Group Medical Claim Status"})}),(0,t.jsx)(c.A.Body,{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsx)("div",{className:"card-body",children:(0,t.jsxs)("form",{method:"POST",onSubmit:async e=>{e.preventDefault();const s=new FormData(e.target),a=s.get("claim_procedure"),i=s.get("link"),l=s.get("heading"),c=await fetch(`https://insuranceapi-3o5t.onrender.com/api/updateClaimProcedure?id=${x._id}`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({claim_procedure:a,link:i,heading:l})}),d=await c.json();200===d.status&&(o(!1),n()({title:"Success!",text:d.message,type:"success",icon:"success",button:!1}),y(),setTimeout((()=>{n().close()}),2e3))},children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-lg-12",children:[(0,t.jsx)("label",{children:(0,t.jsx)("strong",{children:"Description"})}),(0,t.jsx)("br",{}),(0,t.jsx)("textarea",{type:"text",className:"form-control",rows:"4",cols:"10",defaultValue:null===x||void 0===x?void 0:x.procedure_description,name:"claim_procedure"})]}),(0,t.jsxs)("div",{className:"col-lg-6",children:[(0,t.jsx)("label",{children:(0,t.jsx)("strong",{children:"Heading"})}),(0,t.jsx)("br",{}),(0,t.jsx)("input",{type:"text",className:"form-control",defaultValue:null===x||void 0===x?void 0:x.heading,name:"heading"})]}),(0,t.jsxs)("div",{className:"col-lg-6",children:[(0,t.jsx)("label",{children:(0,t.jsx)("strong",{children:"Link"})}),(0,t.jsx)("br",{}),(0,t.jsx)("input",{type:"text",className:"form-control",defaultValue:null===x||void 0===x?void 0:x.link,name:"link"})]})]}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Submit"})})})]})})})})})})}),(0,t.jsx)(c.A.Footer,{children:(0,t.jsx)(d.A,{variant:"secondary",onClick:()=>o(!1),children:"Close"})})]}),(0,t.jsxs)(c.A,{size:"lg",show:h,onHide:()=>m(!1),children:[(0,t.jsx)(c.A.Header,{closeButton:!0,children:(0,t.jsx)(c.A.Title,{children:"View File"})}),(0,t.jsx)(c.A.Body,{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("img",{src:`https://insuranceapi-3o5t.onrender.com/uploads/${u}`,style:{width:"100%",height:"100%"}})})})})})})})})}),(0,t.jsx)(c.A.Footer,{children:(0,t.jsx)(d.A,{variant:"secondary",onClick:()=>m(!1),children:"Close"})})]})]})})})})}}}]);
//# sourceMappingURL=3983.b43aa6db.chunk.js.map