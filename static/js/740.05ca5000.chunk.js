"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[740,1072,8691,6310],{6459:(e,a,l)=>{l.r(a),l.d(a,{default:()=>j});var n=l(65043),s=l(73216),t=(l(92157),l(73023)),o=l.n(t),i=l(1177),r=l(84217),c=l(53519),d=l(61072),m=l(14282),u=l(93946);const p=l.p+"static/media/travel-plans.16d80a74387d6655dbc7.xlsx";var v=l(72450),h=l(11238),x=l(70579);const j=()=>{var e,a,l,t;const j=(0,s.Zp)(),[_,b]=(0,n.useState)([]),[g]=(0,n.useState)(10),[f,N]=(0,n.useState)(0),[y,C]=(0,n.useState)(1),[w,S]=(0,n.useState)(!1),[T,k]=(0,n.useState)(""),[A,P]=(0,n.useState)(""),[E,$]=(0,n.useState)(""),[D,B]=(0,n.useState)(!1),[I,F]=(0,n.useState)(""),[O,U]=(0,n.useState)([]),[V,G]=(0,n.useState)([]),[L,z]=(0,n.useState)(""),[W,H]=(0,n.useState)(2),[J,M]=(0,n.useState)(""),[Q,R]=(0,n.useState)([]),[K,q]=(0,n.useState)(""),[Z,X]=(0,n.useState)(""),[Y,ee]=(0,n.useState)({}),[ae,le]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=localStorage.getItem("token");if(null===e||void 0===e||""===e)j("/login");else{var a,l;ne(y,g),oe(),ce();const e=JSON.parse(localStorage.getItem("user"));let n=null===e||void 0===e||null===(a=e.location)||void 0===a?void 0:a.map((e=>e.loc_id)).join(",");X(n);const s=(null===e||void 0===e||null===(l=e.travel_permission)||void 0===l?void 0:l[0])||{};U(s),re()}}),[]),(0,n.useEffect)((()=>{ne(y,g),ce()}),[L,W,J]);const ne=(e,a)=>{b([]);const l={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}};fetch(`https://insuranceapi-3o5t.onrender.com/api/getTravelPlan?page=${e}&limit=${a}&name=${L}&status=${W}&companyid=${J}`,l).then((e=>e.json())).then((e=>{const l=e.total/a,n=Math.ceil(l);N(n),b(e.data)}))},[se,te]=(0,n.useState)([]),oe=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getTravelPlan",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{te(e.data)}))};console.log(se);const ie=(e,a)=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/updatestatusTravelPlan/${e}/${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200===e.status?(o()({title:"Success!",text:e.message,icon:"success",button:!1}),ne(y,g),setTimeout((()=>{o().close()}),1e3)):o()({title:"Error!",text:e.message,icon:"error",button:"Ok"}).then((()=>{ne(y,g)}))}))},re=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getCompany",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{G(e.data)}))},ce=()=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/getplansAccordingToCompanies?lob=travel&name=${L}&companyId=${J}&status=${W}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const a=e.data;R(a),console.log("Companies travel plans >>>>>>>",a)}))};return(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-4",children:(0,x.jsx)("h4",{className:"card-title",children:"Travel Plans"})}),(0,x.jsx)("div",{className:"col-md-8",children:null!==(e=O.travel_plan)&&void 0!==e&&e.includes("create")?(0,x.jsx)("a",{onClick:()=>j("/AddTravelPlan"),className:"btn btn-primary",style:{float:"right"},children:"Add Travel Plan"}):""})]})}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsxs)("div",{className:"col-md-12",style:{textAlign:"right"},children:[null!==(a=O.travel_plan)&&void 0!==a&&a.includes("download")?(0,x.jsxs)("a",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginLeft:"4px"},href:p,download:!0,children:[(0,x.jsx)("i",{className:"fa fa-cloud-download","aria-hidden":"true"})," Download Sample File"]}):"",null!==(l=O.travel_plan)&&void 0!==l&&l.includes("upload")?(0,x.jsxs)("button",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginLeft:"4px"},onClick:()=>B(!D),children:[(0,x.jsx)("i",{className:"fa fa-file-excel","aria-hidden":"true"})," Upload Excel"]}):"",null!==(t=O.travel_plan)&&void 0!==t&&t.includes("export")?(0,x.jsxs)("button",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginLeft:"4px"},onClick:()=>{const e=se.map(((e,a)=>({"Company Name":e.company[0].company_name,"Plan Name":e.plan_name,"Travel Insurance For":e.travel_insurance_for[0].travel_insurance_for,"Travel Type":e.travel_type[0].travel_type,"Plan Category":e.plan_category[0].plan_category_name,"Nature Of Plan":e.nature_of_plan[0].nature_of_plan_name,Country:e.country_or_topup.map((e=>e.country_name)),"Country (Topup)":e.country_or_topup.map((e=>e.countrytopup)),"Add Option Condition Description":e.add_op_con_desc.map((e=>e.add_op_con_desc)),"Topup (Add Option Condition Description)":e.add_op_con_desc.map((e=>e.add_op_con_desc_topup)),"Vat Able":e.add_op_con_desc.map((e=>e.vat)),"JDV Commision":e.jdv_comm,"Sales Person Commision":e.sale_person_comm})));console.log(e);const a={Sheets:{data:h.Wp.json_to_sheet(e)},SheetNames:["data"]},l=h.M9(a,{booktype:"xlsx",type:"array"}),n=new Blob([l],{type:"xlsx"});v.saveAs(n,"Travel-Plan.xlsx")},children:[(0,x.jsx)("i",{className:"fa fa-file-excel","aria-hidden":"true"})," Export Data to Excel"]}):""]})}),(0,x.jsx)(i.A,{defaultActiveKey:"0",children:(0,x.jsxs)(i.A.Item,{eventKey:"0",children:[(0,x.jsx)(i.A.Header,{className:"modifyaccordian",children:"Filters "}),(0,x.jsx)(i.A.Body,{children:(0,x.jsx)("div",{className:"card-header",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-lg-3",children:[(0,x.jsx)("label",{children:(0,x.jsx)("strong",{children:"Plan Name"})}),(0,x.jsx)("br",{}),(0,x.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Plan",onChange:e=>z(e.target.value)})]}),(0,x.jsxs)("div",{className:"col-lg-3",children:[(0,x.jsx)("label",{children:(0,x.jsx)("strong",{children:"Select Insurance co."})}),(0,x.jsx)("br",{}),(0,x.jsxs)("select",{className:"form-control",onChange:e=>M(e.target.value),children:[(0,x.jsx)("option",{value:"",hidden:!0,children:"Select Insurance co."}),(0,x.jsx)("option",{value:"",children:"-- All --"}),V.map(((e,a)=>(0,x.jsx)("option",{value:e._id,children:e.company_name},a)))]})]}),(0,x.jsxs)("div",{className:"col-lg-3",children:[(0,x.jsx)("label",{children:(0,x.jsx)("strong",{children:"Select Status"})}),(0,x.jsx)("br",{}),(0,x.jsxs)("select",{className:"form-control",onChange:e=>H(e.target.value),children:[(0,x.jsx)("option",{value:2,children:"-- All --"}),(0,x.jsx)("option",{value:1,children:"Active"}),(0,x.jsx)("option",{value:0,children:"Inactive"})]})]})]})})})]})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsx)("div",{className:"table-responsive",children:null===Q||void 0===Q?void 0:Q.map(((e,a)=>{var l,n,s,t;return(0,x.jsxs)("div",{className:"col-md-12",children:[(0,x.jsxs)("h6",{className:"text-danger",children:[" ",(null===e||void 0===e||null===(l=e._id)||void 0===l?void 0:l._id)!=K?(0,x.jsx)("button",{onClick:()=>{var a;return q(null===e||void 0===e||null===(a=e._id)||void 0===a?void 0:a._id)},className:"btn btn-success text-light",children:(0,x.jsx)("i",{className:"fa fa-angle-right"})}):(0,x.jsx)("button",{className:"btn btn-success text-light",onClick:()=>q(""),children:(0,x.jsx)("i",{className:"fa fa-angle-down"})})," ",null===e||void 0===e||null===(n=e._id)||void 0===n?void 0:n.company_name]}),(null===e||void 0===e||null===(s=e._id)||void 0===s?void 0:s._id)==K&&(null===e||void 0===e||null===(t=e.plans)||void 0===t?void 0:t.map(((a,l)=>{var n,s,t,i,r,c,d,m,u,p,v;return(0,x.jsx)("tr",{children:Z.includes(null===a||void 0===a?void 0:a.plan_created_by)||Z.includes("64116415591c2f02bcddf51e")?(0,x.jsxs)("div",{className:"d-flex my-1",style:{marginLeft:"30px"},children:[(0,x.jsx)("div",{className:"mx-3",children:(0,x.jsx)("button",{className:"btn btn-success btn-sm text-white",children:(0,x.jsx)("i",{className:"fa fa-check"})})}),(0,x.jsxs)("div",{className:" col-md-1 mx-1 my-1",style:{fontWeight:"700",color:"red"},children:[null===a||void 0===a||null===(n=a.plan_name)||void 0===n?void 0:n.slice(0,15),(null===a||void 0===a||null===(s=a.plan_name)||void 0===s?void 0:s.length)>15?"....":""]}),(0,x.jsxs)("div",{className:"col-md-12 table-responsive",children:[(null===(t=O.travel_plan)||void 0===t?void 0:t.includes("edit"))&&(0,x.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,x.jsx)("a",{href:`/EdittravelPlan?id=${a._id}`,className:"btn btn-primary",children:"Edit"})})," ",(null===(i=O.travel_plan)||void 0===i?void 0:i.includes("delete"))&&(0,x.jsx)(x.Fragment,{children:1===a.status?(0,x.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,x.jsx)("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Are you sure you wish to deactivate this item?")&&ie(a._id,0)},children:"Deactivate"})}):(0,x.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,x.jsx)("button",{className:"btn btn-success",onClick:()=>{window.confirm("Are you sure you wish to activate this item?")&&ie(a._id,1)},children:"Activate"})})})," ",(null===(r=O.travel_plan)||void 0===r?void 0:r.includes("edit"))&&(0,x.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,x.jsx)("a",{href:`/ViewPlanPrice?id=${a._id}`,className:"btn btn-dark",children:"Add Plan Price"})})," ",(null===(c=O.travel_plan)||void 0===c?void 0:c.includes("edit"))&&(0,x.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,x.jsx)("button",{className:"btn btn-success",onClick:()=>{return e=a._id,l=a.policywordings_file,S(!0),k(e),void P(l);var e,l},children:"T & C"})})," ",(null===(d=O.travel_plan)||void 0===d?void 0:d.includes("edit"))&&(0,x.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,x.jsx)("a",{href:`/ViewStandardCover?id=${a._id}&type=travel`,className:"btn btn-info",children:"Standard Cover"})})," ",(null===(m=O.travel_plan)||void 0===m?void 0:m.includes("edit"))&&(0,x.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,x.jsx)("a",{href:`/ViewAdditionalCover?id=${a._id}&type=travel`,className:"btn btn-warning",children:"Additional Cover"})})," ",(null===(u=O.travel_plan)||void 0===u?void 0:u.includes("delete"))&&(0,x.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:(0,x.jsx)("button",{className:"btn btn-danger",onClick:()=>{var e;window.confirm("Are you sure you wish to deactivate this item?")&&(e=a._id,fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteTravelMaster/?id=${e}&type=deleteTravelPlan`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200===e.status?(o()({text:e.message,icon:"success",button:!1}),ce(),setTimeout((()=>{o().close()}),1e3)):o()({title:"Error!",text:e.message,icon:"error",button:"Ok"}).then((()=>{ce()}))})))},children:"Delete"})})]})]}):(0,x.jsxs)("div",{className:"d-flex col-md-12 my-1",style:{marginLeft:"30px"},children:[(0,x.jsx)("div",{className:"mx-3",children:(0,x.jsx)("button",{className:"btn btn-success btn-sm text-white",children:(0,x.jsx)("i",{className:"fa fa-check"})})}),(0,x.jsxs)("div",{className:" col-md-3 mx-1 my-1",style:{fontWeight:"700",color:"red"},children:[null===a||void 0===a||null===(p=a.plan_name)||void 0===p?void 0:p.slice(0,15),(null===a||void 0===a||null===(v=a.plan_name)||void 0===v?void 0:v.length)>15?"....":""]}),(0,x.jsx)("div",{className:"col-md-3",children:(0,x.jsx)("button",{className:"btn btn-primary",onClick:()=>{var l;return((e,a)=>{fetch(`https://insuranceapi-3o5t.onrender.com/api/getPlanPriceAndTravelPlan?id=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{var l,n,s,t;function o(e,a){const l=new Set;return e.filter((e=>{const n=e[a];return!l.has(n)&&(l.add(n),!0)}))}console.log(e.data,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> dataaaa");const i=e.data[0],r=null===i||void 0===i?void 0:i.travel_plan_prices,c=[];for(let a=0;a<(null===r||void 0===r?void 0:r.length);a++)c.push(r[a].region_id[0]);const d=o(r,"travel_cover_type"),m=o(r,"price_name"),u=o(c,"label"),p=o(r,"no_of_days_strings"),v={insurancecompany:a,plan_name:null===i||void 0===i?void 0:i.plan_name,travel_insurance_for:null===i||void 0===i?void 0:i.travel_insurance_for,cover_type:null===d||void 0===d||null===(l=d.map((e=>e.travel_cover_type)))||void 0===l?void 0:l.join(", "),plan_price:null===m||void 0===m||null===(n=m.map((e=>e.price_name)))||void 0===n?void 0:n.join(", "),travel_region:null===u||void 0===u||null===(s=u.map((e=>e.label)))||void 0===s?void 0:s.join(", "),number_of_days:null===p||void 0===p||null===(t=p.map((e=>e.no_of_days_strings)))||void 0===t?void 0:t.join(", ")};ee(v)})),le(!0)})(a._id,null===e||void 0===e||null===(l=e._id)||void 0===l?void 0:l.company_name)},children:"View"})})]})},l)}))),(0,x.jsx)("hr",{})]},a)}))})})]})]})})}),(0,x.jsxs)(r.A,{size:"lg",show:w,onHide:()=>S(!1),children:[(0,x.jsx)(r.A.Header,{closeButton:!0,children:(0,x.jsx)(r.A.Title,{children:"Upload "})}),(0,x.jsx)(r.A.Body,{children:(0,x.jsx)(c.A,{children:(0,x.jsxs)(d.A,{children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{htmlFor:"name",children:"Policy Wordings/T&C"}),(0,x.jsx)("input",{type:"file",className:"form-control",id:"file",name:"file",onChange:e=>$(e.target.files[0])})]})}),""==A||null==A||void 0==A||"undefined"==A||0==A.length?"":(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("a",{className:"btn btn-warning",href:`https://insuranceapi-3o5t.onrender.com/uploads/${A}`,style:{position:"relative",top:"23px"},rel:"noreferrer",target:"_blank",children:"view"})})]})})}),(0,x.jsxs)(r.A.Footer,{children:[(0,x.jsx)(m.A,{variant:"primary",onClick:async e=>{e.preventDefault();const a=new FormData;a.append("policywordings_file",E),a.append("id",T),console.log(Array.from(a));const l={method:"POST",body:a};await fetch("https://insuranceapi-3o5t.onrender.com/api/upload_travel_plan_policywordings_file",l).then((e=>e.text())).then((e=>console.log(e))).catch((e=>console.log("error",e))),S(!1),o()({title:"Success!",text:"Policy Wordings File Uploaded Successfully",icon:"success",button:"Ok"})},children:"Upload"}),(0,x.jsx)(m.A,{variant:"secondary",onClick:()=>S(!1),children:"Close"})]})]}),(0,x.jsxs)(u.zS,{alignment:"center",visible:D,onClose:()=>B(!1),children:[(0,x.jsx)(u.E4,{onClose:()=>B(!1),children:(0,x.jsx)(u.lb,{children:"Upload Excel File"})}),(0,x.jsx)(u.Tc,{children:(0,x.jsx)("div",{children:(0,x.jsx)("input",{type:"file",className:"form-control",id:"DHA",defaultValue:"",required:!0,onChange:e=>F(e.target.files[0])})})}),(0,x.jsxs)(u.If,{children:[(0,x.jsx)(u.Q_,{color:"secondary",onClick:()=>B(!1),children:"Close"}),(0,x.jsx)(u.Q_,{color:"primary",onClick:async e=>{e.preventDefault();const a=new FormData;a.append("xlFile",I);let l=await fetch("https://insuranceapi-3o5t.onrender.com/api/addBulkTravelPlan",{method:"post",body:a});l=await l.json(),B(!D),o()("Uploaded Succesfully","","success"),ne(y,g)},href:"/motor-make",children:"Upload"})]})]}),(0,x.jsxs)(u.zS,{size:"lg",alignment:"center",visible:ae,onClose:()=>le(!1),children:[(0,x.jsx)(u.E4,{onClose:()=>le(!1),children:(0,x.jsx)(u.lb,{children:"Travel Plan Details"})}),(0,x.jsx)(u.Tc,{children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{className:"text-danger",children:"Insurance Company Name"}),(0,x.jsx)("input",{type:"text",className:"form-control",value:null===Y||void 0===Y?void 0:Y.insurancecompany})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{className:"text-danger",children:"Travel Insurance For"}),(0,x.jsx)("input",{type:"text",className:"form-control",value:null===Y||void 0===Y?void 0:Y.travel_insurance_for})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{className:"text-danger",children:"Plan Name"}),(0,x.jsx)("input",{type:"text",className:"form-control",value:null===Y||void 0===Y?void 0:Y.plan_name})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{className:"text-danger",children:"Cover Type"}),(0,x.jsx)("input",{type:"text",className:"form-control",value:null===Y||void 0===Y?void 0:Y.cover_type})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{className:"text-danger",children:"Plan Price"}),(0,x.jsx)("textarea",{rows:2,type:"text",className:"form-control",value:null===Y||void 0===Y?void 0:Y.plan_price})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{className:"text-danger",children:"Travel Region"}),(0,x.jsx)("input",{type:"text",className:"form-control",value:null===Y||void 0===Y?void 0:Y.travel_region})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"form-group mb-3",children:[(0,x.jsx)("label",{className:"text-danger",children:"Number Of Days"}),(0,x.jsx)("textarea",{rows:2,type:"text",className:"form-control",value:null===Y||void 0===Y?void 0:Y.number_of_days})]})})]})}),(0,x.jsx)(u.If,{children:(0,x.jsx)(u.Q_,{color:"secondary",onClick:()=>le(!1),children:"Close"})})]})]})}},61072:(e,a,l)=>{l.d(a,{A:()=>c});var n=l(98139),s=l.n(n),t=l(65043),o=l(67852),i=l(70579);const r=t.forwardRef(((e,a)=>{let{bsPrefix:l,className:n,as:t="div",...r}=e;const c=(0,o.oU)(l,"row"),d=(0,o.gy)(),m=(0,o.Jm)(),u=`${c}-cols`,p=[];return d.forEach((e=>{const a=r[e];let l;delete r[e],null!=a&&"object"===typeof a?({cols:l}=a):l=a;const n=e!==m?`-${e}`:"";null!=l&&p.push(`${u}${n}-${l}`)})),(0,i.jsx)(t,{ref:a,...r,className:s()(n,c,...p)})}));r.displayName="Row";const c=r}}]);
//# sourceMappingURL=740.05ca5000.chunk.js.map