"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6888],{56888:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s(54168),i=s(65043),a=s(73216),l=s(73023),c=s.n(l),o=s(70579);const r=()=>{const e=(0,a.Zp)(),[t,s]=(0,i.useState)([]),[l,r]=(0,i.useState)({}),[d,h]=(0,i.useState)([]),u=window.location.href,m=new URLSearchParams(u.split("?")[1]),g=m.get("id"),f=m.get("type");(0,i.useEffect)((()=>{const t=localStorage.getItem("token");if(null===t||void 0===t||""===t)e("/login");else{const e=window.location.href.split("/")[3].split("?")[1].split("&")[0].split("=")[1];p(e)}}),[]);const p=async e=>{const t={method:"GET",headers:{"Content-Type":"application/json"}};await fetch("https://insuranceapi-3o5t.onrender.com/api/get_underwriting_conditions",t).then((e=>e.json())).then((n=>{const i=n.data;fetch(`https://insuranceapi-3o5t.onrender.com/api/single_medical_plan_details/${e}`,t).then((e=>e.json())).then((e=>{const t=e.data.underwriting_conditions_arr,n=[];for(let s=0;s<i.length;s++)for(let e=0;e<t.length;e++)t[e].itemId==i[s]._id&&(i[s].value=t[e].value,i[s].status=t[e].status,i[s].checked="checked",n.push(i[s]));console.log(i,">>>>>>>>>>>>>>>>>>>>>>> underwriting_conditionDetails"),s(i),h(n)}))}))},x=(e,t)=>{const s=new FormData,n=s.get("value"),i=s.get("status"),{name:a,value:l}=e.target;h((e=>{const s=[...e],c=s.findIndex((e=>e._id===t));return-1!==c?s[c]={...s[c],[a]:l}:s.push({itemId:t,status:i,value:n}),s}))};return(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsxs)("div",{className:"card ",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("h4",{children:"Underwriting Conditions"})}),(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("a",{href:"/medicalplan",className:"btn btn-primary",style:{float:"right"},children:"Back"})})]})}),(0,o.jsx)("div",{className:"card-body",children:(0,o.jsxs)("table",{className:"table table-bordered",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)("strong",{children:"#"})}),(0,o.jsx)("th",{children:(0,o.jsx)("strong",{children:"Condition"})}),(0,o.jsx)("th",{children:(0,o.jsx)("strong",{children:"Status"})}),(0,o.jsx)("th",{children:(0,o.jsx)("strong",{children:"value"})})]})}),(0,o.jsx)("tbody",{children:t.map((e=>{var t;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("div",{className:"checkboxs",children:(0,o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",defaultChecked:"checked"===e.checked,onChange:t=>((e,t)=>{const s=[...d];if(r((s=>({...s,[t._id]:e.target.checked}))),!0===e.target.checked)t.checked="checked",s.push(t);else if(!1===e.target.checked){const e=s.indexOf(t);console.log(e),s.splice(e,1)}h(s)})(t,e)})})}),(0,o.jsx)("td",{children:e.condition}),(0,o.jsx)("td",{children:(0,o.jsx)(n.default,{options:[{name:"Yes",id:"true"},{name:"No",id:"false"}],selectedValues:e.status,displayValue:"name",disable:!l[e._id]&&!(null!==e&&void 0!==e&&null!==(t=e.status)&&void 0!==t&&t.length),onSelect:t=>x({target:{name:"status",value:t}},e._id),onRemove:t=>x({target:{name:"status",value:t}},e._id),showArrow:!0})}),(0,o.jsx)("td",{children:(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{type:"text",name:"value",required:!0,className:"form-control",disabled:!e.checked,onChange:t=>x(t,e._id),defaultValue:e.value})})})]},e._id)}))})]})}),(0,o.jsx)("div",{className:"card-footer",children:(0,o.jsx)("button",{className:"btn btn-primary",onClick:e=>{e.preventDefault(),console.log(g),console.log(f),console.log(d);const t=d.map((e=>null===e||void 0===e?void 0:e.status.length)),s=d.map((e=>{var t;return null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.split(",").length}));console.log("numberscount "+typeof s+" "+s),console.log("options "+typeof t+" "+t);const n=JSON.stringify(s)===JSON.stringify(t);console.log("isMatch: "+n);const i=d.some((e=>!e.value));if(d.some((e=>!e.status||0===e.status.length)))return c()("Please select the status for all the conditions","","warning"),!1;if(i)return c()("Please fill in all the value fields","","warning"),!1;if(!1===n&&JSON.stringify(t)<JSON.stringify(s))return c()("Please select the values for all the status","","warning"),!1;if(!1===n&&JSON.stringify(t)>JSON.stringify(s))return c()("Please select the status for all the values","","warning"),!1;{const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:g,type:f,formData:d})};fetch("https://insuranceapi-3o5t.onrender.com/api/add_underwriting_conditions",e).then((e=>e.json())).then((e=>{window.location.href="/ViewUnderwritingConditions?id="+g}))}},style:{float:"right"},children:"Submit"})})]})})})})}}}]);
//# sourceMappingURL=6888.42d18ae3.chunk.js.map