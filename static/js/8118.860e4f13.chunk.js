"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8118],{98118:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s(65043),l=s(73216),c=s(73023),n=s.n(c),o=s(54168),r=s(70579);const i=function(){const e=(0,l.Zp)();(0,a.useEffect)((()=>{_()}),[]);const[t,s]=(0,a.useState)(""),[c,i]=(0,a.useState)([]),[d,h]=(0,a.useState)(),[u,m]=(0,a.useState)(),[p,x]=(0,a.useState)([]),[j,v]=(0,a.useState)({}),_=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,s=t.length,a=[];for(let l=0;l<s;l++){const e={label:t[l].location_name,value:t[l]._id};a.push(e)}i(a)}))},b=(e,t,s)=>{console.log(t,"multiselect value");const a=[...p];a[e][s]=t,x(a)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("h4",{className:"card-title",children:"Add Travel Plan Type "})})})}),(0,r.jsx)("div",{className:"card-body addmotorplans",style:{overflowX:"scroll"},children:(0,r.jsxs)("table",{className:"table table-bordered",style:{width:"auto"},children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)("button",{className:"btn btn-outline-success",onClick:()=>{const e={travel_cover_type:"",location:c};x([...p,e])},children:"+"})}),(0,r.jsx)("th",{children:"Travel Cover Type "}),(0,r.jsx)("th",{children:"Location"})]})}),(0,r.jsx)("tbody",{children:p.map(((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>(e=>{const t=[...p];t.splice(e,1),x(t)})(t),children:"x"})}),(0,r.jsx)("td",{children:(0,r.jsx)("input",{type:"text",onChange:e=>((e,t)=>{const{name:s,value:a}=t.target;""===a.trim()?v((e=>({...e,[s]:"This is required"}))):v((e=>({...e,[s]:""})));const l=[...p];l[e][s]=a,x(l)})(t,e),className:"form-control",name:"travel_cover_type",placeholder:"Travel Cover Type",autoComplete:"off",required:!0})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.default,{options:c,selectedValues:c,displayValue:"label",onSelect:e=>b(t,e,"location"),onRemove:e=>b(t,e,"location"),placeholder:"Select Location",showCheckbox:!0,closeOnSelect:!1,required:!0})})]},t)))})]})}),(0,r.jsx)("div",{className:"card-footer",children:(0,r.jsx)("button",{className:"btn btn-outline-success",onClick:t=>{t.preventDefault();try{if(p.some((e=>""===e.travel_cover_type.trim()||0==e.location)))return n()({title:"Warning!",text:"Please fill in all fields for each row.",type:"warning",icon:"warning"}),!1;{console.log(p,"rowsData");const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)};fetch("https://insuranceapi-3o5t.onrender.com/api/add_travel_cover_type_list",t).then((e=>e.json())).then((t=>{200==t.status?(n()({text:t.message,type:"success",icon:"success",button:!1}),setTimeout((()=>{n().close(),e("/Viewtravelcovertypelist")}),1e3)):200!=t.status&&(n()({title:"Error!",text:t.message,type:"error",icon:"error",button:!1}),setTimeout((()=>{n().close()}),1e3))}))}}catch(s){console.log(s)}},children:"Submit"})})]})})})})})}}}]);
//# sourceMappingURL=8118.860e4f13.chunk.js.map