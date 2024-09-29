"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9217],{22315:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var s=a(65043),l=a(53519),n=a(73216),o=a(92157),i=a.n(o);const r=a.p+"static/media/travel-type-details.e6c6423f041d8f2e8690.xlsx";var c=a(93946),d=a(72450),h=a(11238),p=a(73023),m=a.n(p),u=a(54168),x=a(84217),v=a(14282),y=a(70579);const j=()=>{var e,t,a,o;const p=(0,n.Zp)(),[j,b]=(0,s.useState)([]),[g]=(0,s.useState)(10),[_,f]=(0,s.useState)(0),[N,C]=(0,s.useState)(1),[S,T]=(0,s.useState)(""),[w,k]=(0,s.useState)([]),[A,E]=(0,s.useState)(null),[D,L]=(0,s.useState)(""),[F,O]=(0,s.useState)(""),[V,P]=(0,s.useState)(""),[B,H]=(0,s.useState)(!1),[J,R]=(0,s.useState)(!1),[z,I]=(0,s.useState)(!1),[q,G]=(0,s.useState)([]),[M,U]=(0,s.useState)([]);(0,s.useEffect)((()=>{const e=localStorage.getItem("token");if(null===e||void 0===e||""===e)p("/login");else{var t;W(N,g),X(),Z();const e=JSON.parse(localStorage.getItem("user")),a=(null===e||void 0===e||null===(t=e.travel_permission)||void 0===t?void 0:t[0])||{};G(a)}}),[]);const W=async(e,t)=>{b([]);const a={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}};await fetch(`https://insuranceapi-3o5t.onrender.com/api/get_travel_type/?page=${e}&limit=${t}`,a).then((e=>e.json())).then((e=>{const a=e.total/t,s=Math.ceil(a);f(s);const l=e.data;b(l),console.log(l,">>>>>>>>>>>>>>>travel type data")}))},[$,Q]=(0,s.useState)([]),Z=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_travel_type",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{Q(e.data),console.log(e.data,">>>>>>>>>>>export list")}))},K=async(e,t)=>{await fetch("https://insuranceapi-3o5t.onrender.com/api/update_travel_type_status",{method:"post",body:JSON.stringify({id:e,travel_type_status:t}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200==e.status?(m()({text:e.message,icon:"success",button:!1}),W(N,g),setTimeout((()=>{m().close()}),1e3)):m()({text:e.message,type:"error",icon:"error"}).then((function(){W(N,g)}))}))},X=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,a=t.length,s=[];for(let l=0;l<a;l++){const e={label:t[l].location_name,value:t[l]._id};s.push(e)}k(s),Y(s)}))},Y=e=>{U(e)},ee=(N-1)*g;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.A,{children:(0,y.jsxs)("div",{className:"card mb-4",children:[(0,y.jsx)("div",{className:"card-header",children:(0,y.jsxs)("div",{className:"row",children:[(0,y.jsx)("div",{className:"col-md-6",children:(0,y.jsx)("h4",{className:"card-title",children:"Travel Type Details"})}),(0,y.jsx)("div",{className:"col-md-6",children:null!==(e=q.travel_type)&&void 0!==e&&e.includes("create")?(0,y.jsx)("button",{className:"btn btn-primary",style:{float:"right"},onClick:()=>{p("/Addtravelplantype")},children:"Add Travel Type"}):""})]})}),(0,y.jsxs)("div",{className:"card-header",style:{textAlign:"right"},children:[null!==(t=q.travel_type)&&void 0!==t&&t.includes("download")?(0,y.jsxs)("a",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginRight:"15px"},href:r,download:!0,children:[(0,y.jsx)("i",{className:"fa fa-cloud-download","aria-hidden":"true"})," Download Sample File"]}):"",null!==(a=q.travel_type)&&void 0!==a&&a.includes("upload")?(0,y.jsxs)("button",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginRight:"15px"},onClick:()=>H(!B),children:[(0,y.jsx)("i",{className:"fa fa-file-excel","aria-hidden":"true"})," Upload Excel"]}):"",null!==(o=q.travel_type)&&void 0!==o&&o.includes("export")?(0,y.jsxs)("button",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green"},onClick:()=>{const e=$.map(((e,t)=>{var a;return{travel_type:e.travel_type,travel_type_location:null===(a=e.travel_type_location)||void 0===a?void 0:a.map((e=>e.location_name)).join(", ")}}));console.log(e,">>>>>this is updated data");const t={Sheets:{data:h.Wp.json_to_sheet(e)},SheetNames:["data"]},a=h.M9(t,{booktype:"xlsx",type:"array"}),s=new Blob([a],{type:"xlsx"});d.saveAs(s,"Travel-Type.xlsx")},children:[(0,y.jsx)("i",{className:"fa fa-file-excel","aria-hidden":"true"})," Export Data to excel"]}):""]}),(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsxs)("table",{className:"table table-bordered",children:[(0,y.jsx)("thead",{className:"thead-dark",children:(0,y.jsxs)("tr",{className:"table-info",children:[(0,y.jsx)("th",{scope:"col",children:"#"}),(0,y.jsx)("th",{scope:"col",children:"Type"}),(0,y.jsx)("th",{scope:"col",children:"Location"}),(0,y.jsx)("th",{scope:"col",children:"Action"})]})}),(0,y.jsx)("tbody",{children:(null===j||void 0===j?void 0:j.length)>0?j.map(((e,t)=>{var a,s,l;return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:ee+t+1}),(0,y.jsx)("td",{children:e.travel_type}),(0,y.jsx)("td",{children:null===(a=e.travel_type_location)||void 0===a?void 0:a.map((e=>e.location_name)).join(", ")}),(0,y.jsxs)("td",{children:[(null===(s=q.travel_type)||void 0===s?void 0:s.includes("edit"))&&(0,y.jsx)("button",{className:"btn btn-primary",onClick:()=>{(async e=>{P(e);const t={method:"post",body:JSON.stringify({ParamValue:e}),headers:{"Content-Type":"application/json"}};let a=await fetch("https://insuranceapi-3o5t.onrender.com/api/get_travel_type_by_id",t);a=await a.json(),console.log(a.data);const s=a.data[0];L(s.travel_type),O(s.travel_type_status);const l=s.travel_type_location.map((e=>({label:e.location_name,value:e._id})));E(l),Y(l),I(!0)})(e._id)},children:"Edit"})," ",(null===(l=q.travel_type)||void 0===l?void 0:l.includes("delete"))&&(0,y.jsxs)(y.Fragment,{children:[1===e.travel_type_status?(0,y.jsx)("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Are you sure you wish to deactivate this item?")&&K(e._id,0)},children:"Deactivate"}):(0,y.jsx)("button",{className:"btn btn-success",onClick:()=>{window.confirm("Are you sure you wish to activate this item?")&&K(e._id,1)},children:"Activate"}),(0,y.jsx)("button",{className:"btn btn-warning mx-1",onClick:()=>{var t;window.confirm("Are you sure you wish to delete this item?")&&(t=e._id,fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteTravelMaster/?id=${t}&type=traveltype`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200===e.status?(m()({text:e.message,icon:"success",button:!1}),W(N,g),setTimeout((()=>{m().close()}),1e3)):(m()({title:"Error!",text:e.message,icon:"error",button:!1}),W(N,g),setTimeout((()=>{m().close()}),1e3))})))},children:"Delete"})]})]})]},t)})):(0,y.jsx)("tr",{children:(0,y.jsx)("td",{colSpan:"6",children:"No Data Found"})})})]}),(0,y.jsx)(i(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:_,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const t=e.selected;C(t+1),W(t+1,g)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})]})}),(0,y.jsxs)(c.zS,{alignment:"center",visible:B,onClose:()=>H(!1),children:[(0,y.jsx)(c.E4,{onClose:()=>H(!1),children:(0,y.jsx)(c.lb,{children:"Upload Excel File"})}),(0,y.jsx)(c.Tc,{children:(0,y.jsx)("div",{children:(0,y.jsx)("input",{type:"file",className:"form-control",id:"DHA",defaultValue:"",required:!0,onChange:e=>T(e.target.files[0])})})}),(0,y.jsxs)(c.If,{children:[(0,y.jsx)(c.Q_,{color:"secondary",onClick:()=>H(!1),children:"Close"}),(0,y.jsx)(c.Q_,{color:"primary",onClick:async e=>{e.preventDefault();const t=new FormData;t.append("file",S),await fetch("https://insuranceapi-3o5t.onrender.com/api/read_travel_type_excel ",{method:"post",body:t}).then((e=>e.json())).then((e=>{200===e.status?(H(!B),m()({text:e.message,type:"success",icon:"success",button:!1}),W(N,g),setTimeout((()=>{m().close()}),1e3)):(H(!B),m()({title:"Error!",text:e.message,type:"error",icon:"error"}).then((function(){W(N,g)})))}))},href:"/Viewtraveltype",children:"Upload"})]})]}),(0,y.jsxs)(x.A,{size:"lg",show:J,onHide:()=>R(!1),children:[(0,y.jsx)(x.A.Header,{closeButton:!0,children:(0,y.jsx)(x.A.Title,{children:"Add Travel Type"})}),(0,y.jsx)(x.A.Body,{children:(0,y.jsx)("div",{className:"container",children:(0,y.jsx)("div",{className:"row",children:(0,y.jsx)("div",{className:"col-md-12",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsx)("div",{className:"card-body",children:(0,y.jsxs)("form",{action:"/",method:"POST",onSubmit:async e=>{e.preventDefault();const t=new FormData(e.target).get("travel_type"),a=A,s=a.length,l=[];for(let n=0;n<s;n++)l.push(a[n].value);await fetch("https://insuranceapi-3o5t.onrender.com/api/add_travel_type",{method:"post",body:JSON.stringify({travel_type:t,travel_type_location:l}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200==e.status?(R(!1),m()({title:"Wow!",text:e.message,type:"success",icon:"success"}).then((function(){W(N,g)}))):(R(!1),m()({title:"Error!",text:e.message,type:"error",icon:"error"}).then((function(){W(N,g)})))}))},children:[(0,y.jsxs)("div",{className:"row",children:[(0,y.jsxs)("div",{className:"col-md-6",children:[(0,y.jsx)("label",{className:"form-label",children:(0,y.jsx)("strong",{children:"Travel Type"})}),(0,y.jsx)("input",{type:"text",className:"form-control",name:"travel_type",placeholder:"Enter Travel Type",defaultValue:"",autoComplete:"off",required:!0})]}),(0,y.jsxs)("div",{className:"col-md-6",children:[(0,y.jsx)("label",{className:"form-label",children:(0,y.jsx)("strong",{children:"Select Location"})}),(0,y.jsx)(u.default,{options:w,selectedValues:w,displayValue:"label",onSelect:E,onRemove:E,placeholder:"Select Location",showCheckbox:!0})]})]}),(0,y.jsx)("div",{className:"row",children:(0,y.jsx)("div",{className:"col-md-12",children:(0,y.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Submit"})})})]})})})})})})}),(0,y.jsx)(x.A.Footer,{children:(0,y.jsx)(v.A,{variant:"secondary",onClick:()=>R(!1),children:"Close"})})]}),(0,y.jsxs)(x.A,{size:"lg",show:z,onHide:()=>I(!1),children:[(0,y.jsx)(x.A.Header,{closeButton:!0,children:(0,y.jsx)(x.A.Title,{children:"Edit Travel Type"})}),(0,y.jsx)(x.A.Body,{children:(0,y.jsx)("div",{className:"container",children:(0,y.jsx)("div",{className:"row",children:(0,y.jsx)("div",{className:"col-md-12",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsx)("div",{className:"card-body",children:(0,y.jsxs)("form",{action:"/",method:"POST",onSubmit:async e=>{try{e.preventDefault();const t=new FormData(e.target).get("travel_type"),a=M.map((e=>e.value));if(0==M.length)return m()({title:"Warning!",text:"Please select location",type:"warning",icon:"warning"}),!1;await fetch("https://insuranceapi-3o5t.onrender.com/api/update_travel_type_details",{method:"POST",body:JSON.stringify({ParamValue:V,travel_type:t,location:a}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200==e.status?(m()({text:e.message,icon:"success",button:!1}),W(N,g),setTimeout((()=>{m().close()}),1e3)):m()({title:"Error!",text:e.message,type:"error",icon:"error"}).then((function(){W(N,g)}))})),I(!1),W(N,g)}catch(t){console.log(t)}},children:[(0,y.jsxs)("div",{className:"row",children:[(0,y.jsxs)("div",{className:"col-md-6",children:[(0,y.jsx)("label",{className:"form-label",children:(0,y.jsx)("strong",{children:"Travel Type"})}),(0,y.jsx)("input",{type:"text",className:"form-control",name:"travel_type",placeholder:"Enter Travel Type",autoComplete:"off",defaultValue:D,required:!0})]}),(0,y.jsxs)("div",{className:"col-md-6",children:[(0,y.jsx)("label",{className:"form-label",children:(0,y.jsx)("strong",{children:"Select Location"})}),(0,y.jsx)(u.default,{options:w,selectedValues:A,onSelect:Y,onRemove:Y,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}}})]})]}),(0,y.jsx)("div",{className:"row",children:(0,y.jsx)("div",{className:"col-md-12",children:(0,y.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Submit"})})})]})})})})})})}),(0,y.jsx)(x.A.Footer,{children:(0,y.jsx)(v.A,{variant:"secondary",onClick:()=>I(!1),children:"Close"})})]})]})}}}]);
//# sourceMappingURL=9217.374de794.chunk.js.map