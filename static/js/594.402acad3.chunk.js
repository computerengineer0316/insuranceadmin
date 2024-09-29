"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[594],{50594:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});var s=l(65043),t=l(73216),i=l(73023),r=l.n(i),c=l(70579);const n=()=>{const e=(0,t.Zp)(),[a,l]=(0,s.useState)(""),[i,n]=(0,s.useState)({}),[d,o]=(0,s.useState)(""),[m,h]=(0,s.useState)(""),[u,p]=(0,s.useState)([]),[x,j]=(0,s.useState)(""),[v,g]=(0,s.useState)("");(0,s.useEffect)((()=>{const a=localStorage.getItem("token");if(null===a||void 0===a||""===a)e("/login");else{const e=window.location.href.split("/")[3].split("?")[1].split("&"),a=e[0].split("=")[1];l(a);const s=e[1].split("=")[1];j(s),N(a),f()}}),[]);const f=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_medical_weight_type_list",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{p(e.data)}))},N=e=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/medicalplan_bmi_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{var a;const l=e.data.BMIArray[0];n(l),g(null===(a=e.data)||void 0===a?void 0:a.weight_type),o(l.minAge+"-"+l.maxAge),h(l.minBmi+"-"+l.maxBmi)}))};return(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card-header",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("h4",{className:"card-title",children:"Edit BMI"})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("a",{href:`/viewBMI?id=${x}`,className:"btn btn-primary",style:{float:"right"},children:"Back"})})]})}),(0,c.jsx)("div",{className:"card-body",children:(0,c.jsxs)("form",{action:"/",method:"POST",onSubmit:l=>{l.preventDefault();const s=new FormData(l.target),t=s.get("weight_type"),i=s.get("age_range"),c=s.get("bmi_range"),n=s.get("Malevalue"),d=s.get("Femalevalue"),o=s.get("FemaleMarridvalue"),m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({weight_type:t,age_range:i,bmi_range:c,Malevalue:n,fmalevalue:d,fmaleMarridevalue:o})};fetch(`https://insuranceapi-3o5t.onrender.com/api/update_medicalplan_bmi?id=${a}`,m).then((e=>e.json())).then((a=>{200===a.status?r()({title:"Success!",text:a.message,type:"success",icon:"success"}).then((function(){e("/viewBMI?id="+x)})):r()({title:"Error!",text:a.message,type:"error",icon:"error"}).then((function(){e("/viewBMI?id="+x)}))}))},children:[(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Weight Type"}),(0,c.jsxs)("select",{className:"form-control",name:"weight_type",children:[(0,c.jsx)("option",{value:"",children:"Select Weight Type"}),u.map(((e,a)=>(0,c.jsx)("option",{value:e._id,selected:v==e._id,children:e.medical_weight_type},a)))]})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"Age Range"}),(0,c.jsx)("input",{type:"text",name:"age_range",className:"form-control",placeholder:"Enter Age Range",defaultValue:d})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:"BMI Range"}),(0,c.jsx)("input",{type:"text",name:"bmi_range",className:"form-control",placeholder:"Enter BMI Range",defaultValue:m})]})})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:" Male Value"}),(0,c.jsx)("input",{type:"text",name:"Malevalue",className:"form-control",placeholder:"Enter Value",defaultValue:i.Malevalue,required:!0})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:" female Value"}),(0,c.jsx)("input",{type:"text",name:"Femalevalue",className:"form-control",defaultValue:i.fmalevalue,placeholder:"Enter Value",required:!0})]})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("div",{className:"form-group mb-3",children:[(0,c.jsx)("label",{children:" Female(Marride)Value"}),(0,c.jsx)("input",{type:"text",name:"FemaleMarridvalue",className:"form-control",placeholder:"Enter Value",defaultValue:i.fmaleMarridevalue,required:!0})]})})]}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",style:{float:"right"},children:"Update"})})})]})})]})})})})}}}]);
//# sourceMappingURL=594.402acad3.chunk.js.map