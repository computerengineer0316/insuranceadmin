"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9212],{59212:(e,i,s)=>{s.r(i),s.d(i,{default:()=>p});var a=s(54168),l=s(65043),t=s(84217),n=s(14282),c=s(92157),o=s.n(c),r=s(73023),d=s.n(r),m=s(70579);const p=()=>{const[e]=(0,l.useState)(10),[i,s]=(0,l.useState)(0),[c,r]=(0,l.useState)(1),[p,h]=(0,l.useState)(!1),[u,x]=(0,l.useState)([]),[j,v]=(0,l.useState)([]),[b,g]=(0,l.useState)([]),[y,N]=(0,l.useState)(!1),[_,C]=(0,l.useState)({}),[f,S]=(0,l.useState)([]),[T,w]=(0,l.useState)("");(0,l.useEffect)((()=>{const i=localStorage.getItem("token");null==i||void 0==i||""==i?window.location="/login":(A(c,e),D(),k())}),[]);const k=async()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getActiveGroupMedicalClaimType",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const i=e.data;console.log(i,"claim Type"),S(i)}))},D=async()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const i=e.data,s=[];for(let a=0;a<i.length;a++)s.push({label:i[a].location_name,value:i[a]._id});x(s),v(s)}))},A=async(e,i)=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/getGroupMedicalClaimDescription?page=${e}&limit=${i}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{g(e.data),console.log(e.data)}))},E=(i,s)=>{const a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:s})};fetch(`https://insuranceapi-3o5t.onrender.com/api/updateGroupMedicalClaimDescription?id=${i}`,a).then((e=>e.json())).then((i=>{200==i.status?(d()({type:"Success",text:i.message,icon:"success",button:!1}),setTimeout((()=>{A(c,e),d().close()}),1e3)):(d()({type:"Error",text:i.message,icon:"error",button:!1}),setTimeout((()=>{A(c,e),d().close()}),1e3))}))};return(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-4",children:(0,m.jsx)("h4",{children:"Group Medical Claim Descriptions"})}),(0,m.jsx)("div",{className:"col-md-8",children:(0,m.jsx)("button",{className:"btn btn-primary",onClick:()=>h(!0),style:{float:"right"},children:"Add Description"})})]})}),(0,m.jsx)("div",{className:"card-body",children:(0,m.jsxs)("div",{className:"table-responsive",children:[(0,m.jsxs)("table",{className:"table table-bordered",children:[(0,m.jsx)("thead",{className:"thead-dark",children:(0,m.jsxs)("tr",{className:"table-info",children:[(0,m.jsx)("th",{children:"Sr No."}),(0,m.jsx)("th",{}),(0,m.jsx)("th",{children:"Claim Implication"}),(0,m.jsx)("th",{children:"Claim Type"}),(0,m.jsx)("th",{children:"Location"}),(0,m.jsx)("th",{children:"Action"})]})}),(0,m.jsx)("tbody",{children:null!==b&&void 0!==b&&b.length?null===b||void 0===b?void 0:b.map(((i,s)=>{var a,l;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:s+1}),(0,m.jsx)("td",{children:(0,m.jsx)("p",{className:"text-wrap",children:i.claim_description})}),(0,m.jsx)("td",{children:(0,m.jsx)("p",{className:"text-wrap",children:i.claim_implication})}),(0,m.jsx)("td",{children:null===(a=i.claim_type_id[0])||void 0===a?void 0:a.claim_type_name}),(0,m.jsx)("td",{children:null===(l=i.locationData)||void 0===l?void 0:l.map((e=>e.location_name)).join(",")}),(0,m.jsxs)("td",{children:[(0,m.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,m.jsx)("button",{className:"btn btn-info",onClick:()=>{return e=i._id,void fetch(`https://insuranceapi-3o5t.onrender.com/api/getGroupMedicalClaimDescriptionById?id=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{var i,s,a,l;const t=e.data;console.log(t,"edit data>>>>"),w(null===(i=t[0])||void 0===i||null===(s=i.claim_type_id[0])||void 0===s?void 0:s._id),C(t[0]);const n=null===(a=t[0])||void 0===a||null===(l=a.locationData)||void 0===l?void 0:l.map((e=>({label:e.location_name,value:e._id})));v(n),N(!0)}));var e},children:"Edit"})}),"\xa0\xa0",1==i.status?(0,m.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,m.jsx)("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Are you sure you wish to deactivate this item?")&&E(i._id,0)},children:"Deactivate"})}):(0,m.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,m.jsx)("button",{className:"btn btn-success",onClick:()=>{window.confirm("Are you sure you wish to activate this item?")&&E(i._id,1)},children:"Activate"})}),"\xa0\xa0",(0,m.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,m.jsx)("button",{className:"btn btn-warning",onClick:()=>{var s;window.confirm("Are you sure you wish to delete this item?")&&(s=i._id,fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteGroupMedicalMaster?id=${s}&type=groupmedicalClaimDescription`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((i=>{200==i.status?(d()({type:"Success",text:i.message,icon:"success",button:!1}),setTimeout((()=>{A(c,e),d().close()}),1e3)):(d()({type:"Error",text:i.message,icon:"error",button:!1}),setTimeout((()=>{A(c,e),d().close()}),1e3))})))},children:"Delete"})})]})]},s)})):(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:"5",children:"No Data Found"})})})]}),(0,m.jsx)(o(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:i,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:i=>{const s=i.selected;r(s+1),A(s+1,e)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})}),(0,m.jsxs)(t.A,{size:"lg",show:p,onHide:()=>h(!1),children:[(0,m.jsx)(t.A.Header,{closeButton:!0,children:(0,m.jsx)(t.A.Title,{children:"Add Group Medical Claim Description"})}),(0,m.jsx)(t.A.Body,{children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("div",{className:"card-body",children:(0,m.jsxs)("form",{method:"POST",onSubmit:async i=>{var s,a,l,t,n,o;i.preventDefault();const r=null===(s=i.target)||void 0===s||null===(a=s.claim_description)||void 0===a?void 0:a.value,m=null===(l=i.target)||void 0===l||null===(t=l.claim_implication)||void 0===t?void 0:t.value,p=null===(n=i.target)||void 0===n||null===(o=n.claim_type_id)||void 0===o?void 0:o.value,u=j.map((e=>e.value)),x={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({claim_description:r,claim_implication:m,claim_type_id:p,location:u})};fetch("https://insuranceapi-3o5t.onrender.com/api/addgroupmedicalClaimDescription",x).then((e=>e.json())).then((i=>{201==i.status?(h(!1),d()({type:"Success",text:i.message,icon:"success",button:!1}),setTimeout((()=>{A(c,e),d().close()}),1e3)):(h(!1),d()({type:"Error",text:i.message,icon:"error",button:!1}),setTimeout((()=>{A(c,e),d().close()}),1e3))}))},children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-lg-4",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Claim Type"})}),(0,m.jsx)("br",{}),(0,m.jsxs)("select",{className:"form-control",name:"claim_type_id",children:[(0,m.jsx)("option",{value:"",children:"Select Claim Type"}),f.map(((e,i)=>(0,m.jsx)("option",{value:e._id,children:e.claim_type_name},i)))]})]}),(0,m.jsxs)("div",{className:"col-lg-12",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Claim Description"})}),(0,m.jsx)("br",{}),(0,m.jsx)("textarea",{type:"text",className:"form-control",name:"claim_description"})]}),(0,m.jsxs)("div",{className:"col-lg-112",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Claim Implication"})}),(0,m.jsx)("br",{}),(0,m.jsx)("textarea",{type:"text",className:"form-control",name:"claim_implication"})]})]}),(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col-lg-6",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Location"})}),(0,m.jsx)("br",{}),(0,m.jsx)(a.default,{options:u,selectedValues:u,onSelect:e=>v(e),onRemove:e=>v(e),displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}}})]})}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Submit"})})})]})})})})})})}),(0,m.jsx)(t.A.Footer,{children:(0,m.jsx)(n.A,{variant:"secondary",onClick:()=>h(!1),children:"Close"})})]}),(0,m.jsxs)(t.A,{size:"lg",show:y,onHide:()=>N(!1),children:[(0,m.jsx)(t.A.Header,{closeButton:!0,children:(0,m.jsx)(t.A.Title,{children:"Edit Group Medical Claim Descriptions"})}),(0,m.jsx)(t.A.Body,{children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("div",{className:"card-body",children:(0,m.jsxs)("form",{method:"POST",onSubmit:async i=>{var s,a,l,t,n,o;i.preventDefault();const r=null===(s=i.target)||void 0===s||null===(a=s.claim_description)||void 0===a?void 0:a.value,m=null===(l=i.target)||void 0===l||null===(t=l.claim_implication)||void 0===t?void 0:t.value,p=null===(n=i.target)||void 0===n||null===(o=n.claim_type_id)||void 0===o?void 0:o.value,h=j.map((e=>e.value)),u={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({claim_description:r,claim_implication:m,claim_type_id:p,location:h})};fetch(`https://insuranceapi-3o5t.onrender.com/api/updateGroupMedicalClaimDescription?id=${null===_||void 0===_?void 0:_._id}`,u).then((e=>e.json())).then((i=>{200==i.status?(N(!1),d()({type:"Success",text:i.message,icon:"success",button:!1}),setTimeout((()=>{A(c,e),d().close()}),1e3)):(N(!1),d()({type:"Error",text:i.message,icon:"error",button:!1}),setTimeout((()=>{A(c,e),d().close()}),1e3))}))},children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-lg-4",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Claim Type"})}),(0,m.jsx)("br",{}),(0,m.jsxs)("select",{className:"form-control",name:"claim_type_id",children:[(0,m.jsx)("option",{value:"",children:"Select Claim Type"}),f.map(((e,i)=>(0,m.jsx)("option",{selected:e._id==T,value:e._id,children:e.claim_type_name},i)))]})]}),(0,m.jsxs)("div",{className:"col-lg-12",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Group Medical Claim Description"})}),(0,m.jsx)("br",{}),(0,m.jsx)("textarea",{type:"text",rows:4,className:"form-control",defaultValue:null===_||void 0===_?void 0:_.claim_description,name:"claim_description"})]}),(0,m.jsxs)("div",{className:"col-lg-12",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Claim Implication"})}),(0,m.jsx)("br",{}),(0,m.jsx)("textarea",{type:"text",rows:4,className:"form-control",defaultValue:null===_||void 0===_?void 0:_.claim_implication,name:"claim_implication"})]})]}),(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col-lg-6",children:[(0,m.jsx)("label",{children:(0,m.jsx)("strong",{children:"Location"})}),(0,m.jsx)("br",{}),(0,m.jsx)(a.default,{options:u,selectedValues:j,onSelect:e=>v(e),onRemove:e=>v(e),displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}}})]})}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Submit"})})})]})})})})})})}),(0,m.jsx)(t.A.Footer,{children:(0,m.jsx)(n.A,{variant:"secondary",onClick:()=>N(!1),children:"Close"})})]})]})})})})}}}]);
//# sourceMappingURL=9212.db3ccb0e.chunk.js.map