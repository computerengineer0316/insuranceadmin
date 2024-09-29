"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4715],{4715:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(65043),l=a(73216),n=a(92157),i=a.n(n),o=a(73023),r=a.n(o),c=a(84217),d=a(14282),h=a(54168),m=a(70579);const u=()=>{var e;(0,l.Zp)();const[s,a]=(0,t.useState)([]),[n]=(0,t.useState)(15),[o,u]=(0,t.useState)(0),[p,j]=(0,t.useState)(1),[x,v]=(0,t.useState)(!1),[g,b]=(0,t.useState)([]),[f,N]=(0,t.useState)([]),[C,_]=(0,t.useState)(""),[y,S]=(0,t.useState)(""),[k,U]=(0,t.useState)(""),[A,E]=(0,t.useState)([]);(0,t.useEffect)((()=>{T(p,n),w()}),[]);const w=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_line_of_business_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log(e);const s=null===e||void 0===e?void 0:e.data,a=null===s||void 0===s?void 0:s.map((e=>({label:null===e||void 0===e?void 0:e.line_of_business_name,value:null===e||void 0===e?void 0:e._id})));N(a)}))},T=async(e,s)=>{const t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")||0}};await fetch(`https://insuranceapi-3o5t.onrender.com/api/getRequestForUserCreate?page=${e}&limit=${s}`,t).then((e=>e.json())).then((e=>{console.log(e.data);const t=e.total/s,l=Math.ceil(t);u(l),a(e.data);let n=0;const i=e.data;console.log(i.filter((e=>0==e.agentApprovalStatus))),n=null===i||void 0===i?void 0:i.length,console.log(n),localStorage.setItem("request",n)}))},L=(p-1)*n,F=async e=>{e.preventDefault();const s=C||g.name,a=y||g.email,t=k||g.mobile,l=A.length?A:g.line_of_business;console.log(s,a,t,l);const i={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:a,mobile:t,line_of_business:l})};await fetch(`https://insuranceapi-3o5t.onrender.com/api/editRequestForUserCreate/${g._id}`,i).then((e=>e.json())).then((e=>{console.log(e),200==e.status?(r()("Success","User Updated Successfully","success"),v(!1),T(p,n)):r()("Error","Failed to Update User","error")}))};return(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("div",{className:"card-header",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-6",children:(0,m.jsx)("h4",{className:"card-title",children:"Users List"})}),(0,m.jsx)("div",{className:"card-body",children:(0,m.jsxs)("div",{className:"table-responsive",children:[(0,m.jsxs)("table",{className:"table table-bordered",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Sr No."}),(0,m.jsx)("th",{children:"Name"}),(0,m.jsx)("th",{children:"Email"}),(0,m.jsx)("th",{children:"Phone"}),(0,m.jsx)("th",{children:"Line Of Business"}),(0,m.jsx)("th",{children:"Company Name"}),(0,m.jsx)("th",{children:"Approval Status"}),(0,m.jsx)("th",{children:"Action"})]})}),(0,m.jsx)("tbody",{children:s.map(((e,s)=>{var a,t;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:L+s+1}),(0,m.jsx)("td",{children:e.name}),(0,m.jsx)("td",{children:e.email}),(0,m.jsx)("td",{children:e.mobile}),(0,m.jsx)("td",{children:null===e||void 0===e||null===(a=e.line_of_business)||void 0===a?void 0:a.map((e=>e.label)).join(", ")}),(0,m.jsx)("td",{children:null===e||void 0===e||null===(t=e.insurance_companys)||void 0===t?void 0:t.map((e=>e.company_name))}),(0,m.jsx)("td",{children:0==e.agentApprovalStatus?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{className:" badge-success badge-table",onClick:()=>(async e=>{await fetch(`https://insuranceapi-3o5t.onrender.com/api/editRequestForUserCreate/${e}`,{method:"put",headers:{"Content-Type":"application"}}).then((e=>e.json())).then((e=>{console.log(e),200==e.status?(r()("Success","User Status Updated Successfully","success"),T(p,n)):r()("Error","Failed to Update User Status","error")}))})(e._id),children:"Approve"}),"\xa0",(0,m.jsx)("span",{className:" badge-danger badge-table",onClick:()=>(async e=>{const s={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")||0}};await fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteRequestForUserCreate/${e}`,s).then((e=>e.json())).then((e=>{console.log(e),200==e.status?(r()("Success","User Deleted Successfully","success"),T(p,n)):r()("Error","Failed to Delete User","error")}))})(e._id),children:"Reject"})]}):(0,m.jsx)("span",{className:"badge badge-success",children:"Active"})}),(0,m.jsxs)("td",{children:[(0,m.jsx)("button",{className:"btn btn-primary",onClick:()=>{(async e=>{const s={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")||0}};await fetch(`https://insuranceapi-3o5t.onrender.com/api/getRequestForUserCreatebyid/${e}`,s).then((e=>e.json())).then((e=>{console.log(e.data),b(e.data),v(!0)}))})(e._id)},children:"Edit"}),"\xa0"]})]},s)}))})]}),(0,m.jsx)(i(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:o,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const s=e.selected+1;j(s),T(s,n)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})})]})})})})}),(0,m.jsxs)(c.A,{size:"lg",show:x,onHide:()=>v(!1),children:[(0,m.jsx)(c.A.Header,{closeButton:!0,children:(0,m.jsx)(c.A.Title,{children:"Edit User"})}),(0,m.jsx)(c.A.Body,{children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("div",{className:"card-body",children:(0,m.jsx)("form",{action:"/",method:"POST",onSubmit:F,children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-md-6 mb-3",children:[(0,m.jsx)("label",{className:"form-label",children:(0,m.jsx)("strong",{children:"Name"})}),(0,m.jsx)("input",{type:"text",className:"form-control",name:"business_type_name",placeholder:"Name",autoComplete:"off",required:!0,defaultValue:g.name,onChange:e=>_(e.target.value)})]}),(0,m.jsxs)("div",{className:"col-md-6 mb-3",children:[(0,m.jsx)("label",{className:"form-label",children:(0,m.jsx)("strong",{children:"Email"})}),(0,m.jsx)("input",{type:"email",className:"form-control",name:"staff_email",placeholder:"Enter Email",autoComplete:"off",required:!0,defaultValue:g.email,onChange:e=>S(e.target.value)})]}),(0,m.jsx)("div",{className:"col-md-6 mb-3",children:(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Mobile"})}),(0,m.jsx)("input",{type:"text",className:"form-control",name:"staff_mobile",placeholder:"Enter Mobile",autoComplete:"off",required:!0,defaultValue:g.mobile,onChange:e=>U(e.target.value)})]})}),(0,m.jsx)("div",{className:"col-md-6 mb-3",children:(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Line Of Business"})}),(0,m.jsx)(h.default,{options:f,displayValue:"label",selectedValues:null===g||void 0===g||null===(e=g.line_of_business)||void 0===e?void 0:e.map((e=>({label:e.label,value:e.value}))),onSelect:E,onRemove:E,placeholder:"Select LOB",showCheckbox:!0,showArrow:!0})]})})]})})})})})})})}),(0,m.jsxs)(c.A.Footer,{children:[(0,m.jsx)(d.A,{variant:"primary",onClick:F,children:"Update"}),(0,m.jsx)(d.A,{variant:"secondary",onClick:()=>v(!1),children:"Close"})]})]})]})}}}]);
//# sourceMappingURL=4715.d28a5006.chunk.js.map