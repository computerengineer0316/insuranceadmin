"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9444],{79444:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(65043),i=a(73216),n=a(92157),l=a.n(n),c=a(73023),r=a.n(c),o=a(70579);const d=()=>{var e;const s=(0,i.Zp)(),[a,n]=(0,t.useState)([]),[c]=(0,t.useState)(5),[d,u]=(0,t.useState)(0),[h,m]=(0,t.useState)(1),[p,x]=(0,t.useState)([]);(0,t.useEffect)((()=>{const e=localStorage.getItem("token");if(null===e||void 0===e||""===e)s("/login");else{var a;b(h,c);const e=JSON.parse(localStorage.getItem("user")),s=(null===e||void 0===e||null===(a=e.master_permission)||void 0===a?void 0:a[0])||{};x(s)}}),[]);const b=(e,s)=>{n([]);fetch("https://insuranceapi-3o5t.onrender.com/api/businessEntity?page="+e+"&limit="+s,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.total/s,t=Math.ceil(a);u(t);const i=e.data,l=i.length,c=[];for(let s=0;s<l;s++){const e=i[s].lob,a=e.length,t=[];for(let s=0;s<a;s++){const a=e[s].label;t.push(a)}var r=t.join(", ");const n={id:i[s]._id,business_entity_name:i[s].location_name,lob:r,business_entity_status:i[s].location_status};c.push(n)}n(c)}))},j=(e,s)=>{fetch("https://insuranceapi-3o5t.onrender.com/api/businessEntity?id="+e+"&status="+s,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200===e.status?r()({title:"Success",text:e.message,type:"success",icon:"success"}).then((function(){b(h,c)})):r()({title:"Error",text:e.message,type:"error",icon:"error"}).then((function(){b(h,c)}))}))},v=(h-1)*c;return(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("h4",{className:"card-title",children:"Location List"})}),null!==(e=p.location)&&void 0!==e&&e.includes("create")?(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("a",{href:"/AddBusinessEntity",className:"btn btn-primary",style:{float:"right"},children:"Add Location"})}):""]})}),(0,o.jsx)("div",{className:"card-body",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-md-12",children:[(0,o.jsxs)("table",{className:"table table-bordered",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Sr No."}),(0,o.jsx)("th",{children:"Location Name"}),(0,o.jsx)("th",{children:"Line Of Business"}),(0,o.jsx)("th",{children:"Action"})]})}),(0,o.jsx)("tbody",{children:a.map(((e,s)=>{var a,t,i;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:v+s+1}),(0,o.jsx)("td",{children:e.business_entity_name}),(0,o.jsx)("td",{children:e.lob}),(0,o.jsxs)("td",{children:[null!==(a=p.location)&&void 0!==a&&a.includes("edit")?(0,o.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,o.jsx)("a",{href:`/ViewBusinessEntityBank?id=${e.id}`,className:"btn btn-success",children:"Bank"})}):"","\xa0\xa0",null!==(t=p.location)&&void 0!==t&&t.includes("edit")?(0,o.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[(0,o.jsx)("a",{href:`/EditBusinessEntity?id=${e.id}`,className:"btn btn-primary",children:"Edit"}),"\xa0\xa0"]}):"",null!==(i=p.location)&&void 0!==i&&i.includes("delete")?1===e.business_entity_status?(0,o.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,o.jsx)("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Are you sure you wish to deactivate this item?")&&j(e.id,0)},children:"Deactivate"})}):(0,o.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,o.jsx)("button",{className:"btn btn-success",onClick:()=>{window.confirm("Are you sure you wish to activate this item?")&&j(e.id,1)},children:"Activate"})}):""]})]},s)}))})]}),(0,o.jsx)(l(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:d,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const s=e.selected+1;m(s),b(s,c)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})})})]})})})})})})}}}]);
//# sourceMappingURL=9444.0bc85b23.chunk.js.map