"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8888],{8888:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(65043),n=a(73216),i=a(92157),o=a.n(i),l=a(73023),c=a.n(l),r=a(93946),d=a(84217),h=a(14282),m=a(54168),u=a(70579);const p=()=>{var e;const t=(0,n.Zp)(),[a,i]=(0,s.useState)([]),[l]=(0,s.useState)(10),[p,x]=(0,s.useState)(0),[j,g]=(0,s.useState)(1),[v,b]=(0,s.useState)([]),[N,y]=(0,s.useState)(""),[C,f]=(0,s.useState)(!1),[k,S]=(0,s.useState)(!1),[w,_]=(0,s.useState)([]),[T,Y]=(0,s.useState)([]),[A,E]=(0,s.useState)(""),[L,D]=(0,s.useState)("");(0,s.useEffect)((()=>{const e=localStorage.getItem("token");if(null===e||void 0===e||""===e)t("/login");else{var a;$(j,l),P();const e=JSON.parse(localStorage.getItem("user")),t=(null===e||void 0===e||null===(a=e.motor_permission)||void 0===a?void 0:a[0])||{};b(t)}}),[]);const P=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,a=t.length,s=[];for(let n=0;n<a;n++){const e={label:t[n].location_name,value:t[n]._id};s.push(e)}_(s)}))},O=()=>{const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({yearCode:A,location:T})};fetch(`https://insuranceapi-3o5t.onrender.com/api/updateYatchYear?id=${L}`,e).then((e=>e.json())).then((e=>{200===e.status?(S(!1),c()({text:e.message,type:"success",icon:"success",button:!1}),$(j,l),setTimeout((()=>{c().close()}),1e3)):(S(!1),c()({title:"Error!",text:e.message,type:"error",icon:"error",button:!1}),$(j,l),setTimeout((()=>{c().close()}),1e3))}))},$=(e,t)=>{i([]);const a={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}};fetch(`https://insuranceapi-3o5t.onrender.com/api/getYatchYear?page=${e}&limit=${t}`,a).then((e=>e.json())).then((e=>{var a;y(e.message);const s=e.total/t,n=Math.ceil(s);x(n);const o=null===(a=e.data)||void 0===a?void 0:a.data;i(o)}))},B=(e,t)=>{const a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:t,id:e})};fetch(`https://insuranceapi-3o5t.onrender.com/api/updateYatchYear?id=${e}`,a).then((e=>e.json())).then((e=>{200===e.status?(c()("Success!",e.message,{icon:"success",button:!1}),$(j,l),setTimeout((()=>{c().close()}),1e3)):(c()("Error !",e.message,{icon:"error",button:!1}),$(j,l),setTimeout((()=>{c().close()}),1e3))}))},I=(j-1)*l;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsxs)("div",{className:"card",children:[(0,u.jsx)("div",{className:"card-header",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-md-6",children:(0,u.jsx)("h4",{className:"card-title",children:"Year Code"})}),(0,u.jsx)("div",{className:"col-md-6"})]})}),(0,u.jsx)("div",{className:"card-body",children:(0,u.jsx)("div",{className:"row card-header",style:{marginLeft:"10px",marginRight:"10px",alignItems:"center",paddingTop:"5px",paddingBottom:"5px"},children:(0,u.jsx)("div",{className:"col-lg-6",style:{textAlign:"right"},children:null!==(e=v.body_type)&&void 0!==e&&e.includes("upload")?(0,u.jsx)("button",{className:"btn btn-primary btn-sm btn-icon-text m-r-10",onClick:()=>{t("/AddYachtYearCode")},children:"Add Year Code"}):""})})}),(0,u.jsxs)("div",{className:"card-body",children:[C&&(0,u.jsx)("div",{className:"overlay",children:(0,u.jsxs)("div",{className:"loader-container",children:[(0,u.jsx)(r.fZ,{color:"primary",variant:"striped",animated:!0,value:100}),(0,u.jsx)("div",{children:"Uploading, please wait..."}),(0,u.jsx)("div",{className:"loader-text",children:"Do Not Refresh The Page"})]})}),(0,u.jsxs)("table",{className:"table table-bordered",children:[(0,u.jsx)("thead",{className:"thead-dark",children:(0,u.jsxs)("tr",{className:"table-info",children:[(0,u.jsx)("th",{children:"#"}),(0,u.jsx)("th",{children:"Year Code"}),(0,u.jsx)("th",{children:"Location"}),(0,u.jsx)("th",{children:"Action"})]})}),(0,u.jsx)("tbody",{children:a&&a.length>0?(0,u.jsx)(u.Fragment,{children:null===a||void 0===a?void 0:a.map(((e,t)=>{var a;return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:I+t+1}),(0,u.jsx)("td",{children:e.yearDesc}),(0,u.jsx)("td",{children:null===(a=e.location)||void 0===a?void 0:a.map((e=>e.location_name)).join(", ")}),(0,u.jsxs)("td",{children:[(0,u.jsx)("button",{className:"btn btn-primary",onClick:()=>{(async e=>{D(e);let t=await fetch(`https://insuranceapi-3o5t.onrender.com/api/getYatchYearById?id=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});t=await t.json(),E(t.data[0].yearDesc);const a=t.data[0].location,s=[];for(let n=0;n<(null===a||void 0===a?void 0:a.length);n++){const e={label:a[n].location_name,value:a[n]._id};s.push(e)}Y(s),S(!0)})(e._id)},children:"Edit"}),!0===e.status?(0,u.jsx)("button",{className:"btn btn-danger mx-1",onClick:()=>{window.confirm("Are you sure you wish to deactivate this item?")&&B(e._id,!1)},children:"Deactivate"}):(0,u.jsx)("button",{className:"btn btn-success mx-1",onClick:()=>{window.confirm("Are you sure you wish to activate this item?")&&B(e._id,!0)},children:"Activate"}),(0,u.jsx)("button",{className:"btn btn-warning mx-1",onClick:()=>{var t;window.confirm("Are you sure you wish to delete this item?")&&(t=e._id,fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteYachtMaster?id=${t}&type=yachtYearCode`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200===e.status?(c()("Poof! Your plan price has been deleted!",{icon:"success",button:!1}),$(j,l),setTimeout((()=>{c().close()}),1e3)):(c()("Oops! Something went wrong.",{icon:"error",button:!1}),$(j,l),setTimeout((()=>{c().close()}),1e3))})))},children:"Delete"})]})]},t)}))}):(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:"17",style:{textAlign:"center"},children:(0,u.jsx)("strong",{children:N})})})})]}),(0,u.jsx)(o(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:p,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const t=e.selected;g(t+1),$(t+1,l)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})]})})})}),(0,u.jsxs)(d.A,{size:"lg",show:k,onHide:()=>S(!1),children:[(0,u.jsx)(d.A.Header,{closeButton:!0,children:(0,u.jsx)(d.A.Title,{children:"Edit Yacht Year Code"})}),(0,u.jsx)(d.A.Body,{children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("div",{className:"card-body",children:(0,u.jsxs)("form",{action:"/",method:"PUT",onSubmit:O,children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:(0,u.jsx)("strong",{children:"Year Code"})}),(0,u.jsx)("input",{type:"text",className:"form-control",name:"YearCode",onChange:e=>E(e.target.value),placeholder:"Enter Travel Type",autoComplete:"off",defaultValue:A,required:!0})]}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:(0,u.jsx)("strong",{children:"Select Location"})}),(0,u.jsx)(m.default,{options:w,selectedValues:T,onSelect:Y,onRemove:Y,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}}})]})]}),(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsx)("div",{onClick:O,className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Submit"})})})]})})})})})})}),(0,u.jsx)(d.A.Footer,{children:(0,u.jsx)(h.A,{variant:"secondary",onClick:()=>S(!1),children:"Close"})})]})]})}}}]);
//# sourceMappingURL=8888.83efc675.chunk.js.map