"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7298],{87298:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var l=s(65043),t=s(53519),i=s(14282),n=s(73216),c=s(92157),d=s.n(c),r=s(70579);const o=()=>{const e=(0,n.Zp)(),[a]=(0,l.useState)(10),[s,c]=(0,l.useState)(0),[o,h]=(0,l.useState)(1),[m,p]=(0,l.useState)([]);(0,l.useEffect)((()=>{j(o,a)}),[]);const j=async(e,s)=>{try{const l={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")||0}};await fetch(`https://insuranceapi-3o5t.onrender.com/api/getEmailTemplates?page=${e}&limit=${s}`,l).then((e=>e.json())).then((e=>{console.log(e);const s=(null===e||void 0===e?void 0:e.total)/a,l=Math.ceil(s);c(l);const t=e.data;console.log(t,"list"),p(t)}))}catch(l){console.log(l)}},u=e=>{const a=new Date(e);let s=""+(a.getMonth()+1),l=""+a.getDate(),t=a.getFullYear();return s.length<2&&(s="0"+s),l.length<2&&(l="0"+l),[l,s,t].join("/")};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.A,{children:(0,r.jsxs)("div",{className:"card mb-4",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("h4",{className:"card-title",children:"Email Templates"})}),(0,r.jsx)("div",{className:"col-md-6 text-right",style:{textAlign:"right"},children:(0,r.jsx)(i.A,{size:"md",className:"btn btn-success",onClick:()=>e("/AddEmailTemplate"),children:"Add Email Template"})})]})}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("div",{className:"table-responsive",children:[(0,r.jsxs)("table",{className:"table table-bordered",children:[(0,r.jsx)("thead",{className:"thead-dark",children:(0,r.jsxs)("tr",{className:"table-info",children:[(0,r.jsx)("th",{scope:"col",children:"#"}),(0,r.jsx)("th",{scope:"col",children:"Subject"}),(0,r.jsx)("th",{scope:"col",children:"Email"}),(0,r.jsx)("th",{scope:"col",children:"LOB"}),(0,r.jsx)("th",{scope:"col",children:"Business Type"}),(0,r.jsx)("th",{scope:"col",children:"Plan Type"}),(0,r.jsx)("th",{scope:"col",children:"Added By"}),(0,r.jsx)("th",{scope:"col",children:"Added Date"}),(0,r.jsx)("th",{scope:"col",children:"Action"})]})}),(0,r.jsx)("tbody",{children:m.map(((e,a)=>{var s,l,t,i;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:a+1}),(0,r.jsx)("td",{children:e.subject}),(0,r.jsx)("td",{dangerouslySetInnerHTML:{__html:e.body}}),(0,r.jsx)("td",{children:null===e||void 0===e||null===(s=e.LOB)||void 0===s?void 0:s.line_of_business_name}),(0,r.jsx)("td",{children:null===e||void 0===e?void 0:e.business_type}),(0,r.jsx)("td",{children:"6418643bf42eaf5ba1c9e0ef"==(null===e||void 0===e||null===(l=e.LOB)||void 0===l?void 0:l._id)||"641bf0bbcbfce023c8c76739"==(null===e||void 0===e||null===(t=e.LOB)||void 0===t?void 0:t._id)?null===e||void 0===e||null===(i=e.plan_type)||void 0===i?void 0:i.policy_type_name:"-"}),(0,r.jsx)("td",{children:e.created_by.name}),(0,r.jsx)("td",{children:u(e.createdAt)}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:`/EditEmailTemplate?id=${e._id}`,className:"btn btn-primary",children:"Edit"}),"\xa0",(0,r.jsx)("a",{href:`/DeleteEmailTemplate/${e.id}`,className:"btn btn-danger",children:"Delete"})]})]},a)}))})]}),(0,r.jsx)(d(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:s,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const s=e.selected;h(s+1),j(s+1,a)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})})]})})})}}}]);
//# sourceMappingURL=7298.e638ee02.chunk.js.map