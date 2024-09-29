"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5773],{65773:(e,l,a)=>{a.r(l),a.d(l,{default:()=>o});var s=a(65043),r=a(73216),i=(a(30064),a(54168),a(73023),a(84217)),d=a(14282),n=a(70579);const o=()=>{var e,l,a,o,c,m;(0,r.Zp)();const t=new URLSearchParams(window.location.search).get("id");(0,s.useEffect)((()=>{y()}),[]);const[x,h]=(0,s.useState)([]),[j,u]=(0,s.useState)(""),[v,p]=(0,s.useState)(!1),[N,f]=(0,s.useState)(!1),[b,_]=(0,s.useState)(!1),y=async()=>{await fetch(`https://insuranceapi-3o5t.onrender.com/api/getMedicalNewLeadDetails?leadId=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log(e),h(e.data),u(e.data.model_year)}))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsxs)("div",{className:"card",style:{marginTop:"20px"},children:[(0,n.jsx)("div",{className:"card-header",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("h4",{className:"card-title",children:"Details"})})})}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("form",{action:"/",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("div",{className:"card",children:(0,n.jsx)("div",{className:"card-body",children:(0,n.jsx)("form",{action:"/",method:"POST",children:(0,n.jsxs)("div",{className:"row",children:[x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Name"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"dep",autoComplete:"off",required:!0,readOnly:!0,value:e.name})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Email Address"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"min",autoComplete:"off",required:!0,readOnly:!0,value:e.email})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Date of Birth"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"max",autoComplete:"off",required:!0,readOnly:!0,value:e.date_of_birth?new Date(e.date_of_birth).toLocaleDateString("en-GB"):""})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Mobile Number"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"min_dep",autoComplete:"off",required:!0,readOnly:!0,value:e.phoneno})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"LOB"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.policy_type[0].line_of_business_name})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Lead Location"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.lead_location.map(((e,l)=>e.location_name)).join(", ")})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Do you have an active medical policy in UAE ?"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:1==e.medical_policy_active?"Yes":"No"})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Nationality"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.nationality})]})},l))),x.map(((e,l)=>{var a;return(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Emirate Issuing Visa"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:null!==e&&void 0!==e&&e.emirate_issuing_visa?null===e||void 0===e||null===(a=e.emirate_issuing_visa[0])||void 0===a?void 0:a.area_of_registration_name:""})]})},l)})),x.map(((e,l)=>{var a;return(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Visa Type"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.visa_type?null===(a=e.visa_type[0])||void 0===a?void 0:a.medical_plan_condition:""})]})},l)})),x.map(((e,l)=>{var a;return(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Salary"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:null===(a=e.salaryData[0])||void 0===a?void 0:a.medical_salary_range})]})},l)})),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Height"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.hight})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Weight"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.weight})]})},l))),(0,n.jsx)("label",{style:{fontSize:"18px"},children:(0,n.jsx)("strong",{children:"Health Questionnaire:"})}),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"General Questions"})}),(0,n.jsx)("div",{className:"btn btn-warning mx-2",onClick:()=>p(!0),children:"View"})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Underwriting Condition"})}),(0,n.jsx)("div",{className:"btn btn-warning mx-2",onClick:()=>f(!0),children:"View"})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Additional Conditions"})}),(0,n.jsx)("div",{className:"btn btn-warning mx-2",onClick:()=>_(!0),children:"View"})]})},l))),x.map(((e,l)=>{var a;return(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Plan Company"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:null===(a=e.insuranceompanyData[0])||void 0===a?void 0:a.company_name})]})},l)})),x.map(((e,l)=>{var a;return(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Plan Name"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:null===(a=e.medicalPlanData[0])||void 0===a?void 0:a.plan_name})]})},l)})),x.map(((e,l)=>{var a;return(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Policy Issued Date"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:null===(a=e.policy_issued_date)||void 0===a?void 0:a.slice(0,10)})]})},l)})),x.map(((e,l)=>{var a;return(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Policy Expiry Date"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:null===(a=e.policy_expiry_date)||void 0===a?void 0:a.slice(0,10)})]})},l)})),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Payment Status"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.paymentStatus})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Premium"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.final_price})]})},l))),x.map(((e,l)=>(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Nationality"})}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"model_motor_detail_name",autoComplete:"off",required:!0,readOnly:!0,value:e.nationality})]})},l))),(0,n.jsxs)("div",{className:"col-md-12",children:[(0,n.jsx)("div",{className:"form-group mb-3",children:(0,n.jsx)("label",{className:"form-label",children:(0,n.jsx)("strong",{children:"Documents"})})}),(0,n.jsx)("div",{className:"ksndfksk",children:x.map(((e,l)=>(0,n.jsx)("div",{className:"row form-group md-4",children:null===e||void 0===e?void 0:e.documents.map(((e,a)=>(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("a",{href:`https://insuranceapi-3o5t.onrender.com/documents/${null===e||void 0===e?void 0:e.file}`,download:!0,target:"_blank",rel:"noreferrer",children:[(0,n.jsx)("img",{src:`https://insuranceapi-3o5t.onrender.com/documents/${null===e||void 0===e?void 0:e.file}`,alt:"license_front",className:"img_abcd1234"}),(0,n.jsx)("p",{className:"form-label",children:(0,n.jsx)("strong",{children:null===e||void 0===e?void 0:e.name})})]})},l)))},l)))})]})]})})})})})})})}),(0,n.jsxs)(i.A,{size:"lg",show:v,onHide:()=>p(!1),children:[(0,n.jsx)(i.A.Header,{closeButton:!0,children:(0,n.jsx)(i.A.Title,{children:"Medical General Questions"})}),(0,n.jsx)(i.A.Body,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("div",{className:"card",style:{overflow:"scroll"},children:(0,n.jsxs)("table",{className:"table table-bordered",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"No."}),(0,n.jsx)("th",{children:"Condition"}),(0,n.jsx)("th",{children:"Value"})]})}),(0,n.jsx)("tbody",{children:null===(e=x[0])||void 0===e||null===(l=e.medical_general_condition)||void 0===l?void 0:l.map(((e,l)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:l+1}),(0,n.jsx)("td",{style:{width:"300px"},children:e.name}),(0,n.jsx)("td",{children:1==e.value?"YES":"NO"})]},l)))})]})})})})})}),(0,n.jsx)(i.A.Footer,{children:(0,n.jsx)(d.A,{variant:"secondary",onClick:()=>p(!1),children:"Close"})})]}),(0,n.jsxs)(i.A,{size:"lg",show:N,onHide:()=>f(!1),children:[(0,n.jsx)(i.A.Header,{closeButton:!0,children:(0,n.jsx)(i.A.Title,{children:"Underwriting Conditions"})}),(0,n.jsx)(i.A.Body,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("div",{className:"card",children:(0,n.jsx)("div",{children:(0,n.jsxs)("table",{className:"table table-bordered",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"No."}),(0,n.jsx)("th",{children:"Condition"}),(0,n.jsx)("th",{children:"Value"})]})}),(0,n.jsx)("tbody",{children:null===(a=x[0])||void 0===a||null===(o=a.medical_under_condition)||void 0===o?void 0:o.map(((e,l)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:l+1}),(0,n.jsx)("td",{children:e.name}),(0,n.jsx)("td",{children:1==e.value?"YES":"NO"})]},l)))})]})})})})})})}),(0,n.jsx)(i.A.Footer,{children:(0,n.jsx)(d.A,{variant:"secondary",onClick:()=>f(!1),children:"Close"})})]}),(0,n.jsxs)(i.A,{size:"lg",show:b,onHide:()=>_(!1),children:[(0,n.jsx)(i.A.Header,{closeButton:!0,children:(0,n.jsx)(i.A.Title,{children:"Additional Conditions"})}),(0,n.jsx)(i.A.Body,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("div",{className:"card",children:(0,n.jsx)("div",{children:(0,n.jsxs)("table",{className:"table table-bordered",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"No."}),(0,n.jsx)("th",{children:"Condition"}),(0,n.jsx)("th",{children:"Value"})]})}),(0,n.jsx)("tbody",{children:null===(c=x[0])||void 0===c||null===(m=c.medical_additional_condition)||void 0===m?void 0:m.map(((e,l)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:l+1}),(0,n.jsx)("td",{children:e.benefit}),(0,n.jsx)("td",{children:1==e.value?"YES":"NO"})]},l)))})]})})})})})})}),(0,n.jsx)(i.A.Footer,{children:(0,n.jsx)(d.A,{variant:"secondary",onClick:()=>_(!1),children:"Close"})})]})]})]})})})})})}}}]);
//# sourceMappingURL=5773.8e89ab62.chunk.js.map