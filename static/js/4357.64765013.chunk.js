"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4357],{84357:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var s=o(65043),a=o(73216),l=o(30064),n=o.n(l),c=o(54168),i=o(70579);const r=()=>{const e=(0,a.Zp)(),[t,o]=(0,s.useState)([]),[l,r]=(0,s.useState)([]),[d,m]=(0,s.useState)(null),[h,u]=(0,s.useState)(""),[p,j]=(0,s.useState)(""),[_,f]=(0,s.useState)(""),[x,v]=(0,s.useState)("");(0,s.useEffect)((()=>{const t=localStorage.getItem("token");if(null===t||void 0===t||""===t)e("/login");else{const e=window.location.href.split("/")[3].split("?")[1].split("=")[1];u(e),b(e),N(),g()}}),[]);const N=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getlistMakeMotor",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log(e.data),o(e.data)}))},g=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,o=t.length,s=[];for(let a=0;a<o;a++){const e={label:t[a].location_name,value:t[a]._id};s.push(e)}r(s)}))},b=e=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/getModelMotorDetails/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{j(e.data.motor_model_name),f(e.data.motor_model_make_id);const t=e.data.motor_model_location.split(","),o=t.length,s=[];for(let a=0;a<o;a++){const e={method:"GET",headers:{"Content-Type":"application/json"}};fetch(`https://insuranceapi-3o5t.onrender.com/api/get_location_by_id/${t[a]}`,e).then((e=>e.json())).then((e=>{s.push(e.data.location_name);if(s.length===o){const e=s.join(",").split(","),o=e.length,a=[];for(let s=0;s<o;s++){const o={label:e[s],value:t[s]};a.push(o)}m(a)}}))}v(e.data.motor_model_status)}))},S=e=>{m(e)};return(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)("div",{className:"card-header",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("h4",{className:"card-title",children:"Edit Model Motor"})})}),(0,i.jsx)("div",{className:"card-body",children:(0,i.jsxs)("form",{action:"/",method:"POST",onSubmit:t=>{t.preventDefault();const o=new FormData(t.target),s=o.get("model_motor_name"),a=o.get("make_motor"),l=d,c=l.length,i=[];for(let e=0;e<c;e++)i.push(l[e].value);const r=i.join(","),m=o.get("status"),u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model_motor_name:s,make_motor:a,model_motor_location:r.toString(),model_motor_status:m,model_motor_id:h})};fetch("/updateModelMotor",u).then((e=>e.json())).then((t=>{200===t.status?n().fire({title:"Success!",text:t.message,icon:"success",confirmButtonText:"Ok"}).then((t=>{t.isConfirmed&&e("/motor-model")})):n().fire({title:"Error!",text:t.message,icon:"error",confirmButtonText:"Ok"}).then((t=>{t.isConfirmed&&e("/motor-model")}))}))},children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"form-label",children:"Model Motor Name"}),(0,i.jsx)("input",{type:"text",className:"form-control",placeholder:"Model Motor Name",name:"model_motor_name",defaultValue:p,autoComplete:"off",required:!0})]})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"form-label",children:"Make Motor"}),(0,i.jsxs)("select",{className:"form-control",name:"make_motor",required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select Make Motor"}),t.map(((e,t)=>(0,i.jsx)("option",{value:e._id,selected:_==e._id,children:e.make_motor_name},t)))]})]})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"form-label",children:"Location"}),(0,i.jsx)(c.default,{options:l,selectedValues:d,onSelect:S,onRemove:S,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"form-label",children:"Status"}),(0,i.jsxs)("select",{className:"form-control",name:"status",required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select Status"}),(0,i.jsx)("option",{value:"1",selected:1==x,children:"Active"}),(0,i.jsx)("option",{value:"0",selected:0==x,children:"Inactive"})]})]})})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Submit"})})})]})})]})})})})})}}}]);
//# sourceMappingURL=4357.64765013.chunk.js.map