"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6241],{86241:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});var s=t(65043),l=t(73216),n=t(73023),i=t.n(n),c=t(54168),o=t(70579);const r=()=>{const e=(0,l.Zp)();(0,s.useEffect)((()=>{p()}),[]);const[a,t]=(0,s.useState)(""),[n,r]=(0,s.useState)([]),[d,h]=(0,s.useState)(),[m,u]=(0,s.useState)(""),p=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data,t=a.length,s=[];for(let l=0;l<t;l++){const e={label:a[l].location_name,value:a[l]._id};s.push(e)}r(s)}))};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsx)("h4",{className:"card-title",children:"Add Nationality"})}),(0,o.jsx)("div",{className:"card-body",children:(0,o.jsxs)("form",{action:"/",method:"POST",onSubmit:async t=>{if(t.preventDefault(),""==a)return i()("Please Enter Nationality name","","warning"),!1;if(void 0==d)return i()("Please Select Location","","warning"),!1;if(""==m)return i()("Please Select Status","","warning"),!1;{const t=d,s=t.length,l=[];for(let e=0;e<s;e++)l.push(t[e].value);let n=await fetch("https://insuranceapi-3o5t.onrender.com/api/add_nationality_list",{method:"post",body:JSON.stringify({nationality_name:a,nationality_location:l.toString(),nationality_status:m}),headers:{"Content-Type":"application/json"}});n=await n.json(),i()("Added Succesfully","","success"),console.log(n),e("/ViewNationality")}},children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)("label",{className:"form-label",children:(0,o.jsx)("strong",{children:"Add Cover Type"})}),(0,o.jsx)("input",{type:"text",className:"form-control",name:"name",placeholder:"Enter Nationality Name",defaultValue:"",onChange:e=>t(e.target.value)})]}),(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)("label",{className:"form-label",children:(0,o.jsx)("strong",{children:"Select Location"})}),(0,o.jsx)(c.default,{options:n,displayValue:"label",onSelect:h,onRemove:h,placeholder:"Select Location",showCheckbox:!0,required:!0})]}),(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)("label",{className:"form-label",children:(0,o.jsx)("strong",{children:"Status"})}),".",(0,o.jsxs)("select",{className:"form-control",name:"status",onChange:e=>u(e.target.value),children:[(0,o.jsx)("option",{value:"",hidden:!0,children:"Select Status"}),(0,o.jsx)("option",{value:"1",children:"Active"}),(0,o.jsx)("option",{value:"0",children:"InActive"})]})]})]}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Submit"})})})]})})]})})})})})}}}]);
//# sourceMappingURL=6241.80e9176c.chunk.js.map