"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8265],{58265:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(65043),n=a(54168),i=a(73216),l=a(73023),c=a.n(l),o=a(70579);const r=()=>{const e=(0,i.Zp)();(0,s.useEffect)((()=>{v(),x()}),[]);const t=window.location.href,a=new URLSearchParams(t.split("?")[1]).get("id"),[l,r]=(0,s.useState)([]),[d,u]=(0,s.useState)(),[h,m]=(0,s.useState)(""),[p,_]=(0,s.useState)([]),[j,f]=(0,s.useState)(),v=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,a=t.length,s=[];for(let n=0;n<a;n++){const e={label:t[n].location_name,value:t[n]._id};s.push(e)}r(s)}))},y=e=>{u(e)},x=async()=>{const e={method:"post",body:JSON.stringify({ParamValue:a}),headers:{"Content-Type":"application/json"}};let t=await fetch("https://insuranceapi-3o5t.onrender.com/api/get_medical_visa_country_detailsbyid",e);t=await t.json(),m(t.medical_visa_country),f(t.medical_visa_country_status);const s=t.medical_visa_country_location.toString().split(","),n=s.length,i=[];for(let a=0;a<n;a++){const e={method:"GET",headers:{"Content-Type":"application/json"}};fetch(`https://insuranceapi-3o5t.onrender.com/api/get_location_by_id/${s[a]}`,e).then((e=>e.json())).then((e=>{i.push(e.data.location_name);if(i.length===n){const e=i.join(",").split(","),t=e.length,a=[];for(let n=0;n<t;n++){const t={label:e[n],value:s[n]};a.push(t)}u(a),_(a)}}))}v()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsx)("h4",{className:"card-title",children:"Emirates issuing Visa Countries"})}),(0,o.jsx)("div",{className:"card-body",children:(0,o.jsxs)("form",{action:"/",method:"POST",onSubmit:async t=>{if(t.preventDefault(),""===h||null===h)return c()("Please Enter Medical Visa Country","","error"),!1;if(""===p||null===p)return c()("Please Select Medical Visa Country Location","","error"),!1;if(""===j||null===j)return c()("Please Select Medical Visa Country Status","","error"),!1;{const t=d,s=t.length,n=[];for(let e=0;e<s;e++)n.push(t[e].value);let i=await fetch("https://insuranceapi-3o5t.onrender.com/api/update_medical_visa_country_details",{method:"POST",body:JSON.stringify({ParamValue:a,medical_visa_country:h,medical_visa_country_location:n.toString(),medical_visa_country_status:j}),headers:{"Content-Type":"application/json"}});i=await i.json(),c()("Updated Succesfully","","success"),e("/Viewmedicalvisacountries")}},children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)("label",{className:"form-label",children:(0,o.jsx)("strong",{children:"Edit Emirates issuing Visa Countries"})}),(0,o.jsx)("input",{type:"text",className:"form-control",name:"name",placeholder:"Name",defaultValue:h,onChange:e=>m(e.target.value)})]}),(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)("label",{className:"form-label",children:(0,o.jsx)("strong",{children:"Select Location"})}),(0,o.jsx)(n.default,{options:l,selectedValues:d,onSelect:y,onRemove:y,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]}),(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)("label",{className:"form-label",children:(0,o.jsx)("strong",{children:"Status"})}),".",(0,o.jsxs)("select",{className:"form-control",name:"status",onChange:e=>f(e.target.value),children:[(0,o.jsx)("option",{defaultValue:j,hidden:!0,children:1==j?"Active":"InActive"}),(0,o.jsx)("option",{value:"1",children:"Active"}),(0,o.jsx)("option",{value:"0",children:"InActive"})]})]})]}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Submit"})})})]})})]})})})})})}}}]);
//# sourceMappingURL=8265.8913e83c.chunk.js.map