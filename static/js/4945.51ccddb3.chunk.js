"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4945],{74945:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(65043),l=a(54168),s=a(73216),i=a(73023),o=a.n(i),c=a(70579);const r=()=>{const e=(0,s.Zp)();(0,n.useEffect)((()=>{_(),g()}),[]);const t=window.location.href,a=new URLSearchParams(t.split("?")[1]).get("id"),[i,r]=(0,n.useState)([]),[d,h]=(0,n.useState)(),[m,u]=(0,n.useState)(""),[p,j]=(0,n.useState)([]),[f,y]=(0,n.useState)(""),_=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,a=t.length,n=[];for(let l=0;l<a;l++){const e={label:t[l].location_name,value:t[l]._id};n.push(e)}r(n)}))},x=e=>{h(e)},g=async()=>{const e={method:"post",body:JSON.stringify({ParamValue:a}),headers:{"Content-Type":"application/json"}};let t=await fetch("https://insuranceapi-3o5t.onrender.com/api/get_nationality_list_id",e);t=await t.json(),console.log(t),u(t.nationality_name),y(t.nationality_status);const n=t.nationality_location.toString().split(","),l=n.length,s=[];for(let a=0;a<l;a++){const e={method:"GET",headers:{"Content-Type":"application/json"}};fetch(`https://insuranceapi-3o5t.onrender.com/api/get_location_by_id/${n[a]}`,e).then((e=>e.json())).then((e=>{s.push(e.data.location_name);if(s.length===l){const e=s.join(",").split(","),t=e.length,a=[];for(let l=0;l<t;l++){const t={label:e[l],value:n[l]};a.push(t)}h(a),j(a)}}))}_()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card-header",children:(0,c.jsx)("h4",{className:"card-title",children:"Update Nationality"})}),(0,c.jsx)("div",{className:"card-body",children:(0,c.jsxs)("form",{action:"/",method:"POST",onSubmit:async t=>{if(t.preventDefault(),""===m||null===m)return o()("Please Enter Nationality name","","warning"),!1;if(void 0===d||""===d||null===d)return o()("Please Select Nationality Location","","warning"),!1;if(""===f||null===f)return o()("Please Select Nationality Status","","warning"),!1;{const t=d,n=t.length,l=[];for(let e=0;e<n;e++)l.push(t[e].value);let s=await fetch("https://insuranceapi-3o5t.onrender.com/api/update_nationality_list_details",{method:"POST",body:JSON.stringify({ParamValue:a,nationality_name:m,nationality_location:l.toString(),nationality_status:f}),headers:{"Content-Type":"application/json"}});s=await s.json(),o()("Updated Succesfully","","success"),e("/ViewNationality")}},children:[(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("label",{className:"form-label",children:(0,c.jsx)("strong",{children:"Edit Nationality Name"})}),(0,c.jsx)("input",{type:"text",className:"form-control",name:"name",placeholder:"Name",defaultValue:m,onChange:e=>u(e.target.value)})]}),(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("label",{className:"form-label",children:(0,c.jsx)("strong",{children:"Select Location"})}),(0,c.jsx)(l.default,{options:i,selectedValues:d,onSelect:x,onRemove:x,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]}),(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("label",{className:"form-label",children:(0,c.jsx)("strong",{children:"Status"})}),".",(0,c.jsxs)("select",{className:"form-control",name:"status",onChange:e=>y(e.target.value),children:[(0,c.jsx)("option",{defaultValue:f,hidden:!0,children:1==f?"Active":"InActive"}),(0,c.jsx)("option",{value:"1",children:"Active"}),(0,c.jsx)("option",{value:"0",children:"InActive"})]})]})]}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Submit"})})})]})})]})})})})})}}}]);
//# sourceMappingURL=4945.51ccddb3.chunk.js.map