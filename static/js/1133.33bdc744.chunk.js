"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1133],{67386:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var s=a(65043),o=a(73216),n=a(92157),i=a.n(n),r=a(73023),l=a.n(r);const c=a.p+"static/media/area-of-registration.9ce59f68a4771e80dcb6.xlsx";var d=a(93946),m=a(72450),h=a(11238),u=a(54168),p=a(84217),g=a(14282),x=a(70579);const _=()=>{var e,t,a,n;const r=(0,o.Zp)(),[_,f]=(0,s.useState)([]),[j]=(0,s.useState)(10),[b,v]=(0,s.useState)(0),[N,y]=(0,s.useState)(1),[C,S]=(0,s.useState)(""),[k,w]=(0,s.useState)([]),[A,T]=(0,s.useState)(null),[O,E]=(0,s.useState)(""),[R,D]=(0,s.useState)(""),[L,F]=(0,s.useState)(""),[P,V]=(0,s.useState)(!1),[B,H]=(0,s.useState)(!1),[q,U]=(0,s.useState)(!1),[$,z]=(0,s.useState)([]),[G,I]=(0,s.useState)([]);(0,s.useEffect)((()=>{const e=localStorage.getItem("token");if(null===e||void 0===e||""===e)r("/login");else{var t;W(N,j),J();const e=JSON.parse(localStorage.getItem("user")),a=(null===e||void 0===e||null===(t=e.motor_permission)||void 0===t?void 0:t[0])||{};z(a),K()}}),[]);const J=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,a=t.length,s=[];for(let o=0;o<a;o++){const e={label:t[o].location_name,value:t[o]._id};s.push(e)}w(s)}))},M=e=>{I(e)},W=(e,t)=>{f([]);const a={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}};fetch(`https://insuranceapi-3o5t.onrender.com/api/get_area_of_registration?page=${e}&limit=${t}`,a).then((e=>e.json())).then((e=>{const a=e.total/t,s=Math.ceil(a);v(s);const o=e.data;f(o)}))},[Q,Z]=(0,s.useState)([]),K=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_area_of_registration",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{Z(e.data)}))};console.log(Q);const X=(e,t)=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({area_of_registration_status:t})};fetch(`https://insuranceapi-3o5t.onrender.com/api/update_area_of_registration_status/${e}`,a).then((e=>e.json())).then((e=>{200===e.status?(l()({text:e.message,icon:"success",button:!1}),W(N,j),setTimeout((()=>{l().close()}),1e3)):(l()({title:"Error!",text:e.message,icon:"error",button:!1}),W(N,j),setTimeout((()=>{l().close()}),1e3))}))},Y=(N-1)*j;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("h4",{className:"card-title",children:"Area Of Registration"})}),(0,x.jsx)("div",{className:"col-md-6",children:null!==(e=$.area_of_registration)&&void 0!==e&&e.includes("create")?(0,x.jsx)("button",{className:"btn btn-primary",style:{float:"right"},onClick:()=>r("/AddAreaOfRegistration"),children:"Add Area Of Registration"}):""})]})}),(0,x.jsxs)("div",{className:"card-header",style:{textAlign:"right"},children:[null!==(t=$.area_of_registration)&&void 0!==t&&t.includes("download")?(0,x.jsxs)("a",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginRight:"15px"},href:c,download:!0,children:[(0,x.jsx)("i",{className:"fa fa-cloud-download","aria-hidden":"true"})," Download Sample File"]}):"",null!==(a=$.area_of_registration)&&void 0!==a&&a.includes("upload")?(0,x.jsxs)("button",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginRight:"15px"},onClick:()=>V(!P),children:[(0,x.jsx)("i",{className:"fa fa-file-excel","aria-hidden":"true"})," Upload Excel"]}):"",null!==(n=$.area_of_registration)&&void 0!==n&&n.includes("export")?(0,x.jsxs)("button",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green"},onClick:()=>{const e=Q.map(((e,t)=>({area_of_registration_name:e.area_of_registration_name,area_of_registration_location:e.area_of_registration_location.map((e=>e.location_name)).join(", ")}))),t={Sheets:{data:h.Wp.json_to_sheet(e)},SheetNames:["data"]},a=h.M9(t,{booktype:"xlsx",type:"array"}),s=new Blob([a],{type:"xlsx"});m.saveAs(s,"Area_of_Registration.xlsx")},children:[(0,x.jsx)("i",{className:"fa fa-file-excel","aria-hidden":"true"})," Export Data to excel"]}):""]}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("table",{className:"table table-bordered",children:[(0,x.jsx)("thead",{className:"thead-dark",children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"#"}),(0,x.jsx)("th",{children:"Area Of Registration Name"}),(0,x.jsx)("th",{children:"Area Of Registration Location"}),(0,x.jsx)("th",{children:"Action"})]})}),(0,x.jsx)("tbody",{children:_.map(((e,t)=>{var a,s;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:Y+t+1}),(0,x.jsx)("td",{children:e.area_of_registration_name}),(0,x.jsx)("td",{children:e.area_of_registration_location.map((e=>e.location_name)).join(", ")}),(0,x.jsxs)("td",{children:[(null===(a=$.area_of_registration)||void 0===a?void 0:a.includes("edit"))&&(0,x.jsx)("button",{className:"btn btn-primary",onClick:()=>{var t;t=e._id,F(t),fetch(`https://insuranceapi-3o5t.onrender.com/api/get_area_of_registration_details/${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data[0];E(null===t||void 0===t?void 0:t.area_of_registration_name);const a=(null===t||void 0===t?void 0:t.area_of_registration_location).map((e=>({label:e.location_name,value:e._id})));T(a),M(a),D(t.area_of_registration_status),U(!0)}))},children:"Edit"})," ",(null===(s=$.area_of_registration)||void 0===s?void 0:s.includes("delete"))&&(0,x.jsxs)(x.Fragment,{children:[1===e.area_of_registration_status?(0,x.jsx)("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Are you sure you wish to deactivate this item?")&&X(e._id,0)},children:"Deactivate"}):(0,x.jsx)("button",{className:"btn btn-success",onClick:()=>{window.confirm("Are you sure you wish to activate this item?")&&X(e._id,1)},children:"Activate"}),(0,x.jsx)("button",{className:"btn btn-warning mx-1",onClick:()=>{var t;window.confirm("Are you sure you wish to delete this item?")&&(t=e._id,fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteMotorMaster/?id=${t}&type=areaOfResitration`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200===e.status?(l()({title:"Success!",text:e.message,icon:"success",button:!1}),W(N,j),setTimeout((()=>{l().close()}),1e3)):(l()({title:"Error!",text:e.message,icon:"error",button:!1}),W(N,j),setTimeout((()=>{l().close()}),1e3))})))},children:"Delete"})]})]})]},t)}))})]}),(0,x.jsx)(i(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:b,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const t=e.selected;y(t+1),W(t+1,j)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})]})})})}),(0,x.jsxs)(d.zS,{alignment:"center",visible:P,onClose:()=>V(!1),children:[(0,x.jsx)(d.E4,{onClose:()=>V(!1),children:(0,x.jsx)(d.lb,{children:"Upload Excel File"})}),(0,x.jsx)(d.Tc,{children:(0,x.jsx)("div",{children:(0,x.jsx)("input",{type:"file",className:"form-control",id:"DHA",defaultValue:"",required:!0,onChange:e=>S(e.target.files[0])})})}),(0,x.jsxs)(d.If,{children:[(0,x.jsx)(d.Q_,{color:"secondary",onClick:()=>V(!1),children:"Close"}),(0,x.jsx)(d.Q_,{color:"primary",onClick:async e=>{e.preventDefault();const t=new FormData;t.append("file",C);let a=await fetch("https://insuranceapi-3o5t.onrender.com/api/read_area_of_registeration_excel",{method:"post",body:t});a=await a.json(),V(!P),200===a.status?l()("Uploaded Succesfully","","success"):l()("Something went wrong","","failed"),W(N,j)},href:"/Viewtraveltype",children:"Upload"})]})]}),(0,x.jsxs)(p.A,{size:"lg",show:B,onHide:()=>H(!1),children:[(0,x.jsx)(p.A.Header,{closeButton:!0,children:(0,x.jsx)(p.A.Title,{children:"Add Area Of Registration"})}),(0,x.jsx)(p.A.Body,{children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)("form",{action:"/",method:"POST",onSubmit:e=>{try{e.preventDefault();const t=new FormData(e.target).get("area_of_registeration_name"),a=A,s=a.length,o=[];for(let e=0;e<s;e++)o.push(a[e].value);if(0===o.length)return l()({title:"Warning!",text:"Please select location",icon:"warning"}),!1;const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({area_of_registration_name:t,area_of_registration_location:o.toString()})};fetch("https://insuranceapi-3o5t.onrender.com/api/add_area_of_registeration",n).then((e=>e.json())).then((e=>{200===e.status?(H(!1),l()({text:e.message,icon:"success",button:!1}),W(N,j),setTimeout((()=>{l().close()}),1e3)):(H(!1),l()({title:"Error!",text:e.message,icon:"error",button:!1}),W(N,j),setTimeout((()=>{l().close()}),1e3))}))}catch(t){console.log(t)}},children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{className:"form-label",children:"Area Of Registration Name"}),(0,x.jsx)("input",{type:"text",className:"form-control",placeholder:"Area Of Registration Name",name:"area_of_registeration_name",autoComplete:"off",required:!0})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{className:"form-label",children:"Location"}),(0,x.jsx)(u.default,{options:k,selectedValues:k,displayValue:"label",onSelect:T,onRemove:T,placeholder:"Select Location",showCheckbox:!0,required:!0})]})})]}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Submit"})})})]})})})})})})}),(0,x.jsx)(p.A.Footer,{children:(0,x.jsx)(g.A,{variant:"secondary",onClick:()=>H(!1),children:"Close"})})]}),(0,x.jsxs)(p.A,{size:"lg",show:q,onHide:()=>U(!1),children:[(0,x.jsx)(p.A.Header,{closeButton:!0,children:(0,x.jsx)(p.A.Title,{children:"Edit Area Of Registration"})}),(0,x.jsx)(p.A.Body,{children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)("form",{action:"/",method:"POST",onSubmit:e=>{try{e.preventDefault();const t=new FormData(e.target).get("area_of_registeration_name"),a=null===G||void 0===G?void 0:G.map((e=>e.value));if(console.log(a),0===a.length)return l()({title:"Warning!",text:"Please select location",icon:"warning"}),!1;{const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({area_of_registration_name:t,area_of_registration_location:a,area_of_registration_id:L})};fetch("https://insuranceapi-3o5t.onrender.com/api/update_area_of_registration",e).then((e=>e.json())).then((e=>{200===e.status?(U(!1),l()({text:e.message,icon:"success",button:!1}),W(N,j),setTimeout((()=>{l().close()}),1e3)):(U(!1),l()({title:"Error!",text:e.message,icon:"error",button:!1}),W(N,j),setTimeout((()=>{l().close()}),1e3))}))}}catch(t){console.log(t)}},children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{className:"form-label",children:"Area Of Registration Name"}),(0,x.jsx)("input",{type:"text",className:"form-control",placeholder:"Area Of Registration Name",name:"area_of_registeration_name",autoComplete:"off",defaultValue:O,required:!0})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{className:"form-label",children:"Location"}),(0,x.jsx)(u.default,{options:k,selectedValues:A,onSelect:M,onRemove:M,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]})})]}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Update"})})})]})})})})})})}),(0,x.jsx)(p.A.Footer,{children:(0,x.jsx)(g.A,{variant:"secondary",onClick:()=>U(!1),children:"Close"})})]})]})}}}]);
//# sourceMappingURL=1133.33bdc744.chunk.js.map