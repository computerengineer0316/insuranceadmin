"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7523],{77523:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var o=a(65043),s=a(73216),n=a(30064),l=a.n(n),c=a(54168),r=a(70579);const i=()=>{(0,o.useEffect)((()=>{if(null==localStorage.getItem("token")||""==localStorage.getItem("token")||void 0==localStorage.getItem("token"))e("/login");else{const e=window.location.href.split("/")[3].split("?")[1].split("=")[1];_(e),j(e),f()}}),[]);const e=(0,s.Zp)(),[t,a]=(0,o.useState)([]),[n,i]=(0,o.useState)(null),[m,d]=(0,o.useState)(""),[h,u]=(0,o.useState)(""),[p,_]=(0,o.useState)(""),f=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,o=t.length,s=[];for(let a=0;a<o;a++){const e={label:t[a].location_name,value:t[a]._id};s.push(e)}a(s)}))},j=e=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/get_make_motor_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data;d(t.make_motor_name);const a=t.make_motor_location.split(","),o=a.length,s=[];for(let n=0;n<o;n++){const e={method:"GET",headers:{"Content-Type":"application/json"}};fetch(`https://insuranceapi-3o5t.onrender.com/api/get_location_by_id/${a[n]}`,e).then((e=>e.json())).then((e=>{s.push(e.data.location_name);if(s.length===o){const e=s.join(",").split(","),t=e.length,o=[];for(let s=0;s<t;s++){const t={label:e[s],value:a[s]};o.push(t)}i(o)}}))}u(t.make_motor_status)}))},x=e=>{i(e)};return(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsx)("h4",{className:"card-title",children:"Edit Make Motor"})}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("form",{action:"/",method:"POST",onSubmit:t=>{t.preventDefault();const a=new FormData(t.target),o=a.get("make_motor_name"),s=n,c=s.length,r=[];for(let e=0;e<c;e++)r.push(s[e].value);const i=a.get("make_motor_status"),m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({make_motor_name:o,make_motor_location:r.toString(),make_motor_status:i,make_motor_id:p})};fetch("https://insuranceapi-3o5t.onrender.com/api/update_make_motor",m).then((e=>e.json())).then((t=>{200===t.status?l().fire({title:"Success!",text:t.message,icon:"success",confirmButtonText:"Ok"}).then((t=>{t.isConfirmed&&e("/motor-make")})):l().fire({title:"Error!",text:t.message,icon:"error",confirmButtonText:"Ok"}).then((t=>{t.isConfirmed&&e("/motor-make")}))}))},children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"form-label",children:"Make Motor Name"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"make_motor_name",placeholder:"Make Motor Name",defaultValue:m,autoComplete:"off",required:!0})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"form-label",children:"Location"}),(0,r.jsx)(c.default,{options:t,selectedValues:n,onSelect:x,onRemove:x,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]})})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"form-label",children:"Status"}),(0,r.jsxs)("select",{className:"form-control",name:"make_motor_status",required:!0,children:[(0,r.jsx)("option",{value:"",children:"Select Status"}),(0,r.jsx)("option",{value:"1",selected:1==h,children:"Active"}),(0,r.jsx)("option",{value:"0",selected:0==h,children:"Inactive"})]})]})})}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Update"})})})]})})]})})})})}}}]);
//# sourceMappingURL=7523.b1a29996.chunk.js.map