"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6968],{56968:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(65043),i=s(73216),n=s(92157),l=s.n(n),r=s(73023),c=s.n(r),o=s(93946),d=s(70579);const m=()=>{var e;const a=(0,i.Zp)(),[s,n]=(0,t.useState)([]),[r]=(0,t.useState)(10),[m,h]=(0,t.useState)(0),[p,x]=(0,t.useState)(1),[g,u]=(0,t.useState)([]),[j,v]=(0,t.useState)(""),[N,b]=(0,t.useState)(!1);(0,t.useEffect)((()=>{const e=localStorage.getItem("token");if(null===e||void 0===e||""===e)a("/login");else{var s;C(p,r);const e=JSON.parse(localStorage.getItem("user")),a=(null===e||void 0===e||null===(s=e.motor_permission)||void 0===s?void 0:s[0])||{};u(a)}}),[]);const C=(e,a)=>{n([]);const s={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}};fetch(`https://insuranceapi-3o5t.onrender.com/api/getYearData?page=${e}&limit=${a}`,s).then((e=>e.json())).then((e=>{v(e.message);const s=e.total/a,t=Math.ceil(s);h(t);const i=e.data;console.log(i,">>>>>>>>>this is list"),n(i)}))},k=(p-1)*r;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-md-12",children:(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)("h4",{className:"card-title",children:"Year Code"})}),(0,d.jsx)("div",{className:"col-md-6"})]})}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("div",{className:"row card-header",style:{marginLeft:"10px",marginRight:"10px",alignItems:"center",paddingTop:"5px",paddingBottom:"5px"},children:(0,d.jsx)("div",{className:"col-lg-6",style:{textAlign:"right"},children:null!==(e=g.body_type)&&void 0!==e&&e.includes("upload")?(0,d.jsx)("button",{className:"btn btn-primary btn-sm btn-icon-text m-r-10",onClick:()=>(b(!0),void fetch("https://insuranceapi-3o5t.onrender.com/api/addKatarMotorYearData",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{b(!1),200===e.status?(c()({text:e.message,type:"success",icon:"success",button:!1}),C(p,r),setTimeout((()=>{c().close()}),1e3)):(c()({title:"Error!",text:e.message,type:"error",icon:"error",button:!1}),C(p,r),setTimeout((()=>{c().close()}),1e3))}))),children:"Upload Year Code"}):""})})}),(0,d.jsxs)("div",{className:"card-body",children:[N&&(0,d.jsx)("div",{className:"overlay",children:(0,d.jsxs)("div",{className:"loader-container",children:[(0,d.jsx)(o.fZ,{color:"primary",variant:"striped",animated:!0,value:100}),(0,d.jsx)("div",{children:"Uploading, please wait..."}),(0,d.jsx)("div",{className:"loader-text",children:"Do Not Refresh The Page"})]})}),(0,d.jsxs)("table",{className:"table table-bordered",children:[(0,d.jsx)("thead",{className:"thead-dark",children:(0,d.jsxs)("tr",{className:"table-info",children:[(0,d.jsx)("th",{children:"#"}),(0,d.jsx)("th",{children:"Year Code"}),(0,d.jsx)("th",{children:"QIC Code"}),(0,d.jsx)("th",{children:"Location"})]})}),(0,d.jsx)("tbody",{children:s&&s.length>0?(0,d.jsx)(d.Fragment,{children:null===s||void 0===s?void 0:s.map(((e,a)=>{var s;return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:k+a+1}),(0,d.jsx)("td",{children:e.yearDesc}),(0,d.jsx)("td",{children:e.qic_Code}),(0,d.jsx)("td",{children:null===(s=e.locations)||void 0===s?void 0:s.map((e=>e.location_name)).join(", ")})]},a)}))}):(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:"17",style:{textAlign:"center"},children:(0,d.jsx)("strong",{children:j})})})})]}),(0,d.jsx)(l(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:m,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const a=e.selected;x(a+1),C(a+1,r)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})]})})})})})}}}]);
//# sourceMappingURL=6968.fdf47f7e.chunk.js.map