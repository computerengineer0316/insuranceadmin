"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[28],{90028:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(65043),n=s(1177),l=s(92157),i=s.n(l),c=s(73216),d=s(73023),o=s.n(d),r=s(87960),h=s(70579);const m=()=>{var e;const a=(0,c.Zp)(),[s,l]=(0,t.useState)([]),[d]=(0,t.useState)(10),[m,p]=(0,t.useState)(0),[j,u]=(0,t.useState)(1),[x,v]=(0,t.useState)(""),[N,g]=(0,t.useState)([]),[b,f]=(0,t.useState)(""),[y,k]=(0,t.useState)([]),[C,S]=(0,t.useState)(""),[w,_]=(0,t.useState)([]),[A,T]=(0,t.useState)(""),[L,$]=(0,t.useState)(""),[P,D]=(0,t.useState)([]),[E,G]=(0,t.useState)(""),[M,B]=(0,t.useState)(""),[I,F]=(0,t.useState)({}),[H,R]=(0,t.useState)(!1);(0,t.useEffect)((()=>{var e,a;const s=window.location.href.split("?")[1].split("&"),t=null===(e=s[0])||void 0===e?void 0:e.split("=")[1],n=null===(a=s[1])||void 0===a?void 0:a.split("=")[1];U(n),G(t),B(M),console.log(t," : company",n," :plan id"),V(j,d,t,n),O(),z(),K()}),[]),(0,t.useEffect)((()=>{var e,a;const s=window.location.href.split("?")[1].split("&"),t=null===(e=s[0])||void 0===e?void 0:e.split("=")[1],n=null===(a=s[1])||void 0===a?void 0:a.split("=")[1];V(j,d,t,n)}),[x,b,C,A,L]);const U=e=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/GetPlanAndCompanyName?id=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log("company and name data ",e.data),F(e.data[0])}))},z=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/activeMedicalTPA",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{k(e.data)}))},K=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/medicalNetwork",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json().then((e=>{_(e.data)}))))},O=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/company_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{g(e.data)}))},V=(e,a,s,t)=>{R(!0);const n={method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}};fetch(`https://insuranceapi-3o5t.onrender.com/api/getAdminHrUserLeads?page=${e}&limit=${a}&leadType=Active&company=${x}&email=${b}&tpa=${C}&network=${A}&policyNumber=${L}&planId=${t}`,n).then((e=>e.json())).then((e=>{R(!1);const a=e.total/d,s=Math.ceil(a);p(s),l(e.data)}))},q=(j-1)*d;return(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-md-12",children:(0,h.jsxs)("div",{className:"card",children:[(0,h.jsxs)("div",{className:"card-header",children:[(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-md-4",children:(0,h.jsx)("h4",{className:"card-title",children:"Addition Member List"})}),(0,h.jsx)("div",{className:"col-md-4",children:(0,h.jsx)("button",{disabled:!(P.length>0),className:"btn btn-danger",onClick:()=>(()=>{const e={method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({leadId:P})};fetch("https://insuranceapi-3o5t.onrender.com/api/deleteGroupMedicalLeads",e).then((e=>e.json())).then((e=>{200===e.status?(o()("Members Added Successfully",{icon:"success"}),D([]),V(j,d,E,M)):o()("Something went wrong",{icon:"error"})}))})(),children:"Delete Members"})}),(0,h.jsx)("div",{className:"col-md-4",children:(0,h.jsx)("button",{className:"btn btn-primary",onClick:()=>a("/ViewGroupMedicalPlans"),style:{float:"right"},children:"Back"})})]}),(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("label",{children:(0,h.jsxs)("h6",{children:[(0,h.jsx)("strong",{children:"Company Name "}),": ",null===I||void 0===I||null===(e=I.companyData)||void 0===e?void 0:e.company_name]})}),(0,h.jsx)("label",{children:(0,h.jsxs)("h6",{children:[(0,h.jsx)("strong",{children:"Customer Name "}),": ",null===I||void 0===I?void 0:I.plan_name]})})]})]}),(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsx)(n.A,{defaultActiveKey:"0",children:(0,h.jsxs)(n.A.Item,{eventKey:"0",children:[(0,h.jsx)(n.A.Header,{className:"modifyaccordian",children:"Filters "}),(0,h.jsx)(n.A.Body,{children:(0,h.jsx)("div",{className:"card-header",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-lg-3",children:[(0,h.jsx)("label",{children:(0,h.jsx)("strong",{children:"Filter By TPA"})}),(0,h.jsxs)("select",{className:"form-control",onChange:e=>S(e.target.value),children:[(0,h.jsx)("option",{value:"",children:"-- All --"}),null===y||void 0===y?void 0:y.map(((e,a)=>(0,h.jsx)("option",{value:e._id,children:e.name},a)))]})]}),(0,h.jsxs)("div",{className:"col-lg-3",children:[(0,h.jsx)("label",{children:(0,h.jsx)("strong",{children:"Filter By Network List"})}),(0,h.jsxs)("select",{className:"form-control",onChange:e=>T(e.target.value),children:[(0,h.jsx)("option",{value:"",children:"-- All --"}),null===w||void 0===w?void 0:w.map(((e,a)=>(0,h.jsx)("option",{value:e._id,children:e.name},a)))]})]}),(0,h.jsxs)("div",{className:"col-lg-3",children:[(0,h.jsx)("label",{children:(0,h.jsx)("strong",{children:"Filter By Policy No."})}),(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Policy No.",onChange:e=>$(e.target.value)})]})]})})})]})}),(0,h.jsx)("div",{className:"card-body",children:(0,h.jsxs)("div",{className:"table-responsive",children:[H?(0,h.jsx)("div",{className:"row d-flex justify-content-center",children:(0,h.jsx)(r.ul,{visible:!0,height:"80",width:"80",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#e70808","#003399","#e70808","#e70808","#fff"]})}):"",(0,h.jsxs)("table",{className:"table table-bordered",children:[(0,h.jsx)("thead",{className:"thead-dark",children:(0,h.jsxs)("tr",{className:"table-info",children:[(0,h.jsx)("th",{children:"Employee No."}),(0,h.jsx)("th",{children:"Tick"}),(0,h.jsx)("th",{children:"Name"}),(0,h.jsx)("th",{children:"Email ID"}),(0,h.jsx)("th",{children:"Phone No."}),(0,h.jsx)("th",{children:"HR"}),(0,h.jsx)("th",{children:"Request Date"}),(0,h.jsx)("th",{children:"Approval Date"}),(0,h.jsx)("th",{children:"Action"})]})}),(0,h.jsx)("tbody",{children:s&&s.length>0?s.map(((e,s)=>{var t,n,l;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:q+s+1}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{className:"checkboxs",children:(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",defaultChecked:!!P.includes(e._id),onChange:a=>((e,a)=>{const s=[...P];if(!0===e.target.checked)s.push(a);else if(!1===e.target.checked){const e=s.indexOf(a);console.log(e),s.splice(e,1)}console.log(s,"state value"),D(s)})(a,e._id)})})},e._id),(0,h.jsx)("td",{children:e.firstName+" "+e.middleName+" "+e.lastnName}),(0,h.jsx)("td",{children:e.email}),(0,h.jsx)("td",{children:e.phoneno}),(0,h.jsx)("td",{children:null===(t=e.HRUser[0])||void 0===t?void 0:t.name}),(0,h.jsx)("td",{children:null===(n=e.createdAt)||void 0===n?void 0:n.slice(0,10)}),(0,h.jsx)("td",{children:null===(l=e.updatedAt)||void 0===l?void 0:l.slice(0,10)}),(0,h.jsx)("td",{children:(0,h.jsx)("button",{className:"btn btn-warning",onClick:()=>a(`/MemberDetails?id=${e._id}`),children:"View"})})]},s)})):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:"5",children:"No data found"})})})]}),(0,h.jsx)(i(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:m,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const a=e.selected;u(a+1),V(a+1,d,E,M)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})})]})]})})})})}}}]);
//# sourceMappingURL=28.80dfd284.chunk.js.map