"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5474],{25474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(65043),s=a(54168),n=a(73216),o=a(73023),c=a.n(o),r=a(70579);const i=()=>{const e=(0,n.Zp)();(0,l.useEffect)((()=>{f(),x()}),[]);const t=window.location.href,a=new URLSearchParams(t.split("?")[1]).get("id"),[o,i]=(0,l.useState)([]),[d,h]=(0,l.useState)(),[p,u]=(0,l.useState)(""),[m,v]=(0,l.useState)([]),[_,j]=(0,l.useState)(""),f=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,a=t.length,l=[];for(let s=0;s<a;s++){const e={label:t[s].location_name,value:t[s]._id};l.push(e)}i(l)}))},y=e=>{h(e)},x=async()=>{const e={method:"post",body:JSON.stringify({ParamValue:a}),headers:{"Content-Type":"application/json"}};let t=await fetch("https://insuranceapi-3o5t.onrender.com/api/get_travel_cover_type_list_id",e);t=await t.json(),console.log(t),u(t.travel_cover_type),j(t.travel_cover_type_status);const l=t.travel_cover_type_location.toString().split(","),s=l.length,n=[];for(let a=0;a<s;a++){const e={method:"GET",headers:{"Content-Type":"application/json"}};fetch(`https://insuranceapi-3o5t.onrender.com/api/get_location_by_id/${l[a]}`,e).then((e=>e.json())).then((e=>{n.push(e.data.location_name);if(n.length===s){const e=n.join(",").split(","),t=e.length,a=[];for(let s=0;s<t;s++){const t={label:e[s],value:l[s]};a.push(t)}h(a),v(a)}}))}f()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsx)("h4",{className:"card-title",children:"Update Travel Cover Type"})}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("form",{action:"/",method:"POST",onSubmit:async t=>{if(t.preventDefault(),""===p||null===p)return c()("Please Enter Travel Cover Type","","warning"),!1;if(void 0===d||""===d||null===d)return c()("Please Select Travel Cover Type Location","","warning"),!1;if(""===_||null===_)return c()("Please Select Travel Cover Type Status","","warning"),!1;{const t=d,l=t.length,s=[];for(let e=0;e<l;e++)s.push(t[e].value);let n=await fetch("https://insuranceapi-3o5t.onrender.com/api/update_travel_cover_type_list_details",{method:"POST",body:JSON.stringify({ParamValue:a,travel_cover_type:p,travel_cover_type_location:s.toString(),travel_cover_type_status:_}),headers:{"Content-Type":"application/json"}});n=await n.json(),c()("Updated Succesfully","","success"),e("/Viewtravelcovertypelist")}},children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{className:"form-label",children:(0,r.jsx)("strong",{children:"Edit Travel Cover Type"})}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"name",placeholder:"Name",defaultValue:p,onChange:e=>u(e.target.value)})]}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{className:"form-label",children:(0,r.jsx)("strong",{children:"Select Location"})}),(0,r.jsx)(s.default,{options:o,selectedValues:d,onSelect:y,onRemove:y,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{className:"form-label",children:(0,r.jsx)("strong",{children:"Status"})}),".",(0,r.jsxs)("select",{className:"form-control",name:"status",onChange:e=>j(e.target.value),children:[(0,r.jsx)("option",{defaultValue:_,hidden:!0,children:1==_?"Active":"InActive"}),(0,r.jsx)("option",{value:"1",children:"Active"}),(0,r.jsx)("option",{value:"0",children:"InActive"})]})]})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Submit"})})})]})})]})})})})})}}}]);
//# sourceMappingURL=5474.5a76dc45.chunk.js.map