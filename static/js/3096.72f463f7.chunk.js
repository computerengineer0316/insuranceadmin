"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3096,1072,8691,6310],{43096:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(65043),n=s(92157),l=s.n(n),o=s(73216),i=s(1177),d=s(84217),r=s(53519),c=s(61072),h=s(14282),m=s(86178),p=s.n(m),u=s(70579);const x=function(e){var a;let{filterOptions:s,defaultOptions:n,updateSharedData:m}=e;const x=(0,o.Zp)(),[j,g]=(0,t.useState)([]),[y,b]=(0,t.useState)([]),[f,v]=(0,t.useState)([]),[_,N]=(0,t.useState)([]),[w]=(0,t.useState)(5),[k,C]=(0,t.useState)(0),[S,A]=(0,t.useState)(1),[L,T]=(0,t.useState)(!1),[O,D]=(0,t.useState)(""),[F,I]=(0,t.useState)(""),[$,P]=(0,t.useState)(""),[J,B]=(0,t.useState)([]),[E,H]=(0,t.useState)(""),[M,R]=(0,t.useState)(0);(0,t.useEffect)((()=>{const e=localStorage.getItem("token");null===e||void 0===e||""===e?x("/login"):(q(S,w),G(),Z())}),[s]);const z=JSON.parse(localStorage.getItem("user")),U=(z.usertype,null===z||void 0===z?void 0:z.location);null===z||void 0===z||null===(a=z.dashboard_permission[0])||void 0===a||a.sa_dashboard;let Y="";U&&U.length>0&&U[0].loc_id&&(Y=U[0].loc_id);const q=async(e,a)=>{let t=s.location,l=s.lob,o=s.businessType,i=s.agent,d=s.dateRange,r=n.startdate,c=n.enddate;t=null!=t&&void 0!=t&&Array.isArray(t)&&0!==t.length?t.map((e=>e.value)):n.defaultlocation.map((e=>e.value)),l=null!=l&&void 0!=l&&Array.isArray(l)&&0!==l.length?l.map((e=>e.value)):n.defaultlob.map((e=>e.value)),o=null!=o&&void 0!=o&&Array.isArray(o)&&0!==o.length?o.map((e=>e.value)):n.defaultbusinessType.map((e=>e.value)),i=null!=i&&void 0!=i&&Array.isArray(i)&&0!==i.length?i.map((e=>e.value)):n.defaultagent.map((e=>e.value));const h=localStorage.getItem("token"),m=JSON.parse(localStorage.getItem("user")).usertype,p={method:"POST",body:JSON.stringify({page:e,limit:a,location:t,lob:l,business_type:o,newagent:i,dateRange:d,startdate:r,enddate:c}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+h}};"6462250eb201a6f07b2dff3a"!=m&&"646224eab201a6f07b2dff36"!=m&&"646224deb201a6f07b2dff32"!=m&&"64622526b201a6f07b2dff3e"!=m||await fetch("https://insuranceapi-3o5t.onrender.com/api/get_supervisor_leads?leadType=Cold&dashboardType=salesAdvisorDashboard",p).then((e=>e.json())).then((e=>{const s=e.total;R(s);const t=s/a,n=Math.ceil(t);C(n);const l=e.data;g(l)})).catch((e=>{console.log(e)})),"64622470b201a6f07b2dff22"==m&&await fetch("https://insuranceapi-3o5t.onrender.com/api/get_supervisor_leads?leadType=Cold&dashboardType=salesAdvisorDashboard",p).then((e=>e.json())).then((e=>{const s=e.total;R(s);const t=s/a,n=Math.ceil(t);C(n);const l=e.data;g(l)})).catch((e=>{console.log(e)}))},G=async()=>{const e=JSON.parse(localStorage.getItem("user")).usertype;let a=await fetch("https://insuranceapi-3o5t.onrender.com/api/get_lead_status_name?type=salesAdvisor",{method:"post",body:JSON.stringify({usertype:e}),headers:{"Content-Type":"application/json"}});a=await a.json(),b(a.data)},K=(S-1)*w,Z=()=>{const e={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}};fetch("https://insuranceapi-3o5t.onrender.com/api/getUserAccordingUserType?userType=dacumentsChaser",e).then((e=>e.json())).then((e=>{const a=e.data,s=a.length,t=[];for(let n=0;n<s;n++){const e={label:a[n].name,value:a[n]._id};t.push(e)}B(t)}))},Q=e=>{const a=J.find((a=>a.value===e));return a?a.label:""},[V,W]=(0,t.useState)({}),[X,ee]=(0,t.useState)(!1),[ae,se]=(0,t.useState)("");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.A,{children:(0,u.jsxs)(i.A.Item,{eventKey:"1",children:[(0,u.jsx)(i.A.Header,{children:(0,u.jsxs)("div",{style:{position:"relative"},className:"card-header new_leads",children:[(0,u.jsx)("strong",{children:"Cold Leads"}),M>0?(0,u.jsx)("div",{className:"dashboardNotify",children:(0,u.jsx)("h6",{children:M})}):""]})}),(0,u.jsxs)(i.A.Body,{className:"scrollavcds",style:{padding:"2px"},children:[(0,u.jsxs)("table",{className:"table table-bordered",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{className:"table-info",children:[(0,u.jsx)("th",{scope:"col",children:"Sr"}),(0,u.jsx)("th",{scope:"col",children:"Name"}),(0,u.jsx)("th",{scope:"col",children:"Phone No."}),(0,u.jsx)("th",{scope:"col",children:"Email-ID"}),(0,u.jsx)("th",{scope:"col",children:"Nationality"}),(0,u.jsx)("th",{scope:"col",children:"Assigned Date & Time"}),(0,u.jsx)("th",{scope:"col",children:"Aging (as of today)"}),(0,u.jsx)("th",{scope:"col",children:"Type of Policy"}),(0,u.jsx)("th",{scope:"col",children:"Link"}),(0,u.jsx)("th",{scope:"col",children:"Direct Payment"}),(0,u.jsx)("th",{scope:"col",children:"Lead Status"}),(0,u.jsx)("th",{scope:"col",children:"Forward To"}),(0,u.jsx)("th",{scope:"col",children:"Action"})]})}),(0,u.jsx)("tbody",{children:j.length>0?j.map(((e,a)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:K+a+1}),(0,u.jsxs)("td",{onClick:()=>(e=>{try{console.log(e),window.open(e,"_blank")}catch(a){console.log(a)}})(e.buisnessEntityCostomerLink),children:[" ",e.name]}),(0,u.jsx)("td",{children:(0,u.jsx)("a",{href:"#",onClick:()=>(e=>{const a=`https://wa.me/${e}`;window.open(a)})(e.phoneno),children:e.phoneno})}),(0,u.jsx)("td",{children:(0,u.jsx)("a",{href:"#",onClick:()=>(e=>{const a=`mailto:${e}`;window.open(a)})(e.email),children:e.email})}),(0,u.jsx)("td",{children:e.nationality}),(0,u.jsx)("td",{children:e.assign_salesadvisor_timestamp?new Date(e.assign_salesadvisor_timestamp).toString():new Date(e.new_lead_timestamp).toString()}),(0,u.jsx)("td",{children:e.assign_salesadvisor_timestamp?p()(e.assign_salesadvisor_timestamp).fromNow():p()(e.new_lead_timestamp).fromNow()}),(0,u.jsx)("td",{children:e.policy_type[0].line_of_business_name}),(0,u.jsx)("td",{className:"buttons_icons",children:(0,u.jsx)("button",{type:"button",className:"btn btn-primary btn-sm ",onClick:()=>(e=>{console.log(e),se(e),ee(!0)})(e.buisnessEntityCostomerLink),children:(0,u.jsx)("i",{className:"fa-solid fa-link"})})}),(0,u.jsx)("td",{children:(0,u.jsx)("input",{type:"checkbox",name:"direct_payment",id:"direct_payment",defaultChecked:"true"==e.direct_payment,onChange:a=>{return s=e._id,t=a.target.checked,void P((e=>({...e,[s]:t})));var s,t},required:!0})}),(0,u.jsx)("td",{children:(0,u.jsxs)("select",{name:"lead_status",id:"lead_status",onChange:a=>((e,a)=>{"Forward"!=a&&(H(""),document.getElementById(e).value="");I((s=>({...s,[e]:a}))),W((s=>({...s,[e]:a})))})(e._id,a.target.value),children:[(0,u.jsx)("option",{value:"",hidden:!0,children:e.lead_status}),y.map(((e,a)=>(0,u.jsx)("option",{value:e.lead_status,children:e.lead_status},a)))]})}),(0,u.jsx)("td",{children:(0,u.jsxs)("select",{name:"lead_status",id:e._id,onChange:a=>{return s=e._id,t=a.target.value,void H((e=>({...e,[s]:t})));var s,t},disabled:"Forward"!==V[e._id],children:[(0,u.jsx)("option",{value:"",hidden:!0,children:void 0==e.forward_to||""==e.forward_to||null==e.forward_to?"Document Chaser":Q(e.forward_to)}),J.map(((e,a)=>(0,u.jsx)("option",{value:e.value,children:e.label},a)))]})}),(0,u.jsx)("td",{className:"buttons_icons",children:(0,u.jsx)("button",{type:"button",className:"btn btn-primary btn-sm ",onClick:()=>((e,a)=>{"Motor"===a&&window.open(`/MotorLeaddetails?id=${e}`,"_blank"),"Travel"===a&&window.open(`/TravelLeaddetails?id=${e}`,"_blank"),"Medical"===a&&window.open(`/MedicalLeaddetails?id=${e}`,"_blank"),"Home"===a&&window.open(`/HomeLeaddetails?id=${e}`,"_blank"),"Yacht"===a&&window.open(`/YachtLeaddetails?id=${e}`,"_blank"),"Other Insurance"===a&&window.open(`/OtherInsuranceLeaddetails?id=${e}`,"_blank")})(e._id,e.policy_type[0].line_of_business_name),children:(0,u.jsx)("i",{className:"fa-solid fa-eye"})})})]},a))):(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:"12",className:"text-center",children:(0,u.jsx)("strong",{children:"No Records Found"})})})})]}),(0,u.jsxs)("section",{children:[(0,u.jsx)("button",{className:"save-btn",onClick:e=>{e.preventDefault();const a=JSON.parse(localStorage.getItem("user"))._id,s="{}"===JSON.stringify($)?null:$,t="{}"===JSON.stringify(F)?null:F,n=""===E?null:E,l=new Set(Object.keys(s||{}).concat(Object.keys(t||{}),Object.keys(n||{})));for(const o of l){const e=$[o],s=F[o],t=E[o];if("Forward"===s&&(""===t||null===t||void 0===t))return alert("Please select DC agent"),!1;const n={method:"POST",body:JSON.stringify({id:o,direct_payment:e,lead_status:s,forward_to:t,assigningagent:a}),headers:{"Content-Type":"application/json"}};fetch("https://insuranceapi-3o5t.onrender.com/api/update_new_lead_details",n).then((e=>e.json())).then((e=>{q(S,w),m(q(S,w))}))}},children:"Save "}),(0,u.jsx)(l(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:k,marginPagesDisplayed:1,pageRangeDisplayed:1,onPageChange:e=>{const a=e.selected;A(a+1),q(a+1,w,localStorage.getItem("lob"))},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})]})]})}),(0,u.jsxs)(d.A,{size:"lg",show:L,onHide:()=>T(!1),children:[(0,u.jsx)(d.A.Header,{closeButton:!0,children:(0,u.jsx)(d.A.Title,{children:"Lead Detail"})}),(0,u.jsx)(d.A.Body,{children:(0,u.jsxs)(r.A,{children:[(0,u.jsxs)(c.A,{children:[(0,u.jsx)("div",{className:"col-md-6",children:(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{htmlFor:"name",children:"Name"}),(0,u.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:f.name})]})}),(0,u.jsx)("div",{className:"col-md-6",children:(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{htmlFor:"email",children:"Email"}),(0,u.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",value:f.email})]})})]}),(0,u.jsxs)(c.A,{children:[(0,u.jsx)("div",{className:"col-md-6",children:(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{htmlFor:"phoneno",children:"Phone No."}),(0,u.jsx)("input",{type:"text",className:"form-control",id:"phoneno",name:"phoneno",value:f.phoneno})]})}),(0,u.jsx)("div",{className:"col-md-6",children:(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{htmlFor:"dob",children:"Line Of Business"}),(0,u.jsx)("input",{type:"text",className:"form-control",id:"lob",name:"lob",value:_})]})})]})]})}),(0,u.jsx)(d.A.Footer,{children:(0,u.jsx)(h.A,{variant:"secondary",onClick:()=>T(!1),children:"Close"})})]}),(0,u.jsxs)(d.A,{size:"lg",show:X,onHide:()=>ee(!1),children:[(0,u.jsx)(d.A.Header,{closeButton:!0,children:(0,u.jsx)(d.A.Title,{children:"Link"})}),(0,u.jsx)(d.A.Body,{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(c.A,{children:(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{htmlFor:"name"}),(0,u.jsx)("textarea",{className:"form-control",id:"address",name:"address",value:ae,readOnly:!0,children:ae&&(0,u.jsx)("a",{href:ae,target:"_blank",rel:"noopener noreferrer",children:ae})})]})})})})}),(0,u.jsxs)(d.A.Footer,{children:[(0,u.jsx)(h.A,{variant:"primary",onClick:()=>{const e=document.createElement("textarea");e.value=ae,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Link copied to clipboard!")},children:"Copy Link"}),(0,u.jsx)(h.A,{variant:"secondary",onClick:()=>ee(!1),children:"Close"})]})]})]})}},61072:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(98139),n=s.n(t),l=s(65043),o=s(67852),i=s(70579);const d=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:l="div",...d}=e;const r=(0,o.oU)(s,"row"),c=(0,o.gy)(),h=(0,o.Jm)(),m=`${r}-cols`,p=[];return c.forEach((e=>{const a=d[e];let s;delete d[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const t=e!==h?`-${e}`:"";null!=s&&p.push(`${m}${t}-${s}`)})),(0,i.jsx)(l,{ref:a,...d,className:n()(t,r,...p)})}));d.displayName="Row";const r=d}}]);
//# sourceMappingURL=3096.72f463f7.chunk.js.map