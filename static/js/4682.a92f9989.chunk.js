"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4682],{24682:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});a(93946);var l=a(65043),n=a(54168),s=a(73023),o=a.n(s),c=a(73216),i=a(70579);const r=function(){const e=(0,c.Zp)(),t=window.location.href,a=new URLSearchParams(t.split("?")[1]).get("id");(0,l.useEffect)((()=>{y(),S()}),[]);const[s,r]=(0,l.useState)([]),[d,h]=(0,l.useState)(),[p,u]=(0,l.useState)([]),[m,v]=(0,l.useState)(""),[f,j]=(0,l.useState)([]),[_,g]=(0,l.useState)(),y=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,a=t.length,l=[];for(let n=0;n<a;n++){const e={label:t[n].location_name,value:t[n]._id};l.push(e)}r(l)}))},x=e=>{h(e)},S=async()=>{const e={method:"post",body:JSON.stringify({ParamValue:a}),headers:{"Content-Type":"application/json"}};let t=await fetch("https://insuranceapi-3o5t.onrender.com/api/get_travel_type_by_id",e);t=await t.json(),v(t.travel_type),g(t.travel_type_status);const l=t.travel_type_location.toString().split(","),n=l.length,s=[];for(let a=0;a<n;a++){const e={method:"GET",headers:{"Content-Type":"application/json"}};fetch(`https://insuranceapi-3o5t.onrender.com/api/get_location_by_id/${l[a]}`,e).then((e=>e.json())).then((e=>{s.push(e.data.location_name);if(s.length===n){const e=s.join(",").split(","),t=e.length,a=[];for(let n=0;n<t;n++){const t={label:e[n],value:l[n]};a.push(t)}h(a),j(a)}}))}y()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-header",children:(0,i.jsx)("h4",{className:"card-title",children:"Update Travel Type"})}),(0,i.jsx)("div",{className:"card-body",children:(0,i.jsxs)("form",{action:"/",method:"POST",onSubmit:async t=>{if(t.preventDefault(),""===m||null===m)return o()("Please Enter Travel Type","","warning"),!1;if(void 0==f||null==f)return o()("Please Select Travel Type Location","","warning"),!1;if(""===_||null===_)return o()("Please Select Travel Type Status","","warning"),!1;{const t=d,l=t.length,n=[];for(let e=0;e<l;e++)n.push(t[e].value);console.log(n.toString()),console.log(a),console.log(m),console.log(n.toString()),console.log(_);let s=await fetch("https://insuranceapi-3o5t.onrender.com/api/update_travel_type_details",{method:"POST",body:JSON.stringify({ParamValue:a,travel_type:m,travel_type_location:n.toString(),travel_type_status:_}),headers:{"Content-Type":"application/json"}});s=await s.json(),o()("Updated Succesfully","","success"),e("/Viewtraveltype")}},children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)("label",{className:"form-label",children:(0,i.jsx)("strong",{children:"Edit Travel Type"})}),(0,i.jsx)("input",{type:"text",className:"form-control",name:"name",placeholder:"Name",defaultValue:m,onChange:e=>v(e.target.value)})]}),(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)("label",{className:"form-label",children:(0,i.jsx)("strong",{children:"Select Location"})}),(0,i.jsx)(n.default,{options:s,selectedValues:d,onSelect:x,onRemove:x,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]}),(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)("label",{className:"form-label",children:(0,i.jsx)("strong",{children:"Status"})}),".",(0,i.jsxs)("select",{className:"form-control",name:"status",onChange:e=>g(e.target.value),children:[(0,i.jsx)("option",{defaultValue:_,hidden:!0,children:1==_?"Active":"InActive"}),(0,i.jsx)("option",{value:"1",children:"Active"}),(0,i.jsx)("option",{value:"0",children:"InActive"})]})]})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Submit"})})})]})})]})})})})})}}}]);
//# sourceMappingURL=4682.a92f9989.chunk.js.map