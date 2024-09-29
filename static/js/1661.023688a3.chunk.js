"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1661],{51661:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var n=s(65043),t=s(73216),i=s(92157),l=s.n(i),c=s(73023),o=s.n(c),r=s(70579);const d=()=>{const e=(0,t.Zp)(),[a,s]=(0,n.useState)([]),[i]=(0,n.useState)(10),[c,d]=(0,n.useState)(0),[h,m]=(0,n.useState)(1);(0,n.useEffect)((()=>{const a=localStorage.getItem("token");null===a||void 0===a||""===a?e("/login"):p(h,i)}),[]);const p=async(e,a)=>{s([]);await fetch(`https://insuranceapi-3o5t.onrender.com/api/getCompany?page=${e}&limit=${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const s=e.total/a,n=Math.ceil(s);d(n);const t=e.data,i=t.length;for(let a=0;a<i;a++)u(t[a])}))},u=e=>{const a=e.company_line_of_business_id,n=null===a||void 0===a?void 0:a.split(","),t=null===n||void 0===n?void 0:n.length,i=[];for(let l=0;l<t;l++){const a={method:"GET",headers:{"Content-Type":"application/json"}};fetch(`https://insuranceapi-3o5t.onrender.com/api/get_line_of_business_by_id/${n[l]}`,a).then((e=>e.json())).then((a=>{var n;console.log(">>>>>>>>>>>data>>>>>>>>",a.data),i.push(null===(n=a.data[0])||void 0===n?void 0:n.line_of_business_name);if(i.length===t){const a=i.join(","),n={...e,company_line_of_business_id:a};s((e=>[...e,n]))}}))}},b=(e,a)=>{const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company_status:a})};fetch(`https://insuranceapi-3o5t.onrender.com/api/update_company_status/${e}`,s).then((e=>e.json())).then((e=>{200===e.status?o()({title:"Success!",text:e.message,icon:"success",button:"Ok"}).then((()=>{p(h,i)})):o()({title:"Error!",text:e.message,icon:"error",button:"Ok"}).then((()=>{p(h,i)}))}))},x=(h-1)*i;return(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("h4",{className:"card-title",children:"Insurance Company"})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("a",{href:"/AddCompany",className:"btn btn-primary",style:{float:"right"},children:"Add Insurance Company"})})]})}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("table",{className:"table table-bordered yatchplanss123",children:[(0,r.jsx)("thead",{className:"thead-dark",children:(0,r.jsxs)("tr",{className:"table-info",children:[(0,r.jsx)("th",{children:"#"}),(0,r.jsx)("th",{children:"Company Logo"}),(0,r.jsx)("th",{children:"Company Name"}),(0,r.jsx)("th",{children:"Line Of Business"}),(0,r.jsx)("th",{children:"Action"})]})}),(0,r.jsx)("tbody",{children:a.map(((e,a)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:x+a+1}),(0,r.jsx)("td",{children:(0,r.jsx)("img",{src:`https://insuranceapi-3o5t.onrender.com/uploads/${e.company_logo[0].filename}`,height:50,width:200,alt:"logo"})}),(0,r.jsx)("td",{children:e.company_name}),(0,r.jsx)("td",{children:e.company_line_of_business_id}),(0,r.jsxs)("td",{children:[(0,r.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,r.jsx)("a",{href:`/ViewPlans?id=${e._id}`,className:"btn btn-info",children:"Plans"})}),"\xa0\xa0",(0,r.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,r.jsx)("a",{href:`/ViewBlackListedVehicle?id=${e._id}`,className:"btn btn-secondary",children:"Black Listed Vehicle"})}),"\xa0\xa0",(0,r.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,r.jsx)("a",{href:`/ViewBlackListedYacht?id=${e._id}`,className:"btn btn-secondary",children:"Black Listed Yacht"})}),"\xa0\xa0",(0,r.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,r.jsx)("a",{href:`/ViewLob?id=${e._id}`,className:"btn btn-warning",children:"Line Of Business"})}),"\xa0\xa0",(0,r.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,r.jsx)("a",{href:`/ViewBank?id=${e._id}`,className:"btn btn-success",children:"Bank"})}),"\xa0\xa0",(0,r.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[(0,r.jsx)("a",{href:`/EditCompany?id=${e._id}`,className:"btn btn-primary",children:"Edit"}),"\xa0\xa0",1===e.company_status?(0,r.jsx)("button",{className:"btn btn-danger mx-1",onClick:()=>{window.confirm("Are you sure you wish to deactivate this item?")&&b(e._id,0)},children:"Deactivate"}):(0,r.jsx)("button",{className:"btn btn-success mx-1",onClick:()=>{window.confirm("Are you sure you wish to activate this item?")&&b(e._id,1)},children:"Activate"})]}),(0,r.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,r.jsx)("button",{className:"btn btn-warning mx-1",onClick:()=>{var a;window.confirm("Are you sure you wish to Delete this item?")&&(a=e._id,fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteMasterData/?id=${a}&type=insurance_company`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200===e.status?(o()({text:e.message,icon:"success",button:!1}),p(h,i),setTimeout((()=>{o().close()}),1e3)):(o()({title:"Error!",text:e.message,icon:"error",button:!1}),p(h,i),setTimeout((()=>{o().close()}),1e3))})))},children:"Delete"})})]})]},a)))})]}),(0,r.jsx)(l(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:c,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const a=e.selected;m(a+1),p(a+1,i)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})]})})})})}}}]);
//# sourceMappingURL=1661.023688a3.chunk.js.map