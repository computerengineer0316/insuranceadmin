"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9050],{9050:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(65043),n=s(73216),i=s(92157),l=s.n(i),o=s(73023),c=s.n(o),r=s(93946),d=s(72450),h=s(11238),m=s(54168),u=s(84217),x=s(14282),p=s(70579);const g=()=>{var e,t,s;const i=(0,n.Zp)(),[o,g]=(0,a.useState)([]),[j]=(0,a.useState)(10),[b,v]=(0,a.useState)(0),[f,N]=(0,a.useState)(1),[y,S]=(0,a.useState)(""),[C,_]=(0,a.useState)(""),[k,w]=(0,a.useState)([]),[E,T]=(0,a.useState)([]),[A,D]=(0,a.useState)(""),[L,Y]=(0,a.useState)(""),[F,P]=(0,a.useState)(!1),[O,U]=(0,a.useState)(!1),[$,B]=(0,a.useState)(!1),[H,I]=(0,a.useState)(!1),[R,V]=(0,a.useState)([]),[q,M]=(0,a.useState)(""),[z,Q]=(0,a.useState)(""),[G,J]=(0,a.useState)(null),[W,Z]=(0,a.useState)(""),[K,X]=(0,a.useState)([]),[ee,te]=(0,a.useState)(""),[se,ae]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=localStorage.getItem("token");if(null===e||void 0===e||""===e)i("/login");else{var t;ne(f,j),ie(),ce();const e=JSON.parse(localStorage.getItem("user")),s=(null===e||void 0===e||null===(t=e.motor_permission)||void 0===t?void 0:t[0])||{};V(s)}}),[]),(0,a.useEffect)((()=>{ne(f,j)}),[q,G]);const ne=(e,t)=>{g([]);const s={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}};fetch(`https://insuranceapi-3o5t.onrender.com/api/getYachtEngine?page=${e}&limit=${t}&name=${q}&status=${G}`,s).then((e=>e.json())).then((e=>{Q(e.message);const s=e.total/t,a=Math.ceil(s);v(a);const n=e.data;g(n)}))},ie=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/get_location",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data,s=t.length,a=[];for(let n=0;n<s;n++){const e={label:t[n].location_name,value:t[n]._id};a.push(e)}w(a)}))},[le,oe]=(0,a.useState)([]),ce=()=>{fetch("https://insuranceapi-3o5t.onrender.com/api/getYachtEngine",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{oe(e.data)}))},re=(e,t)=>{const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({engine_status:t})};fetch(`https://insuranceapi-3o5t.onrender.com/api/UpdateYachtEngineStatus?id=${e}&status=${t}`,s).then((e=>e.json())).then((e=>{200===e.status?(c()({text:e.message,icon:"success",button:!1}),ne(f,j),setTimeout((()=>{c().close()}),"1000")):(c()({title:"Error!",text:e.message,icon:"error",button:!1}),ne(f,j),setTimeout((()=>{c().close()}),"1000"))}))},de=e=>{X(e)},he=(f-1)*j;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsxs)("div",{className:"card",children:[(0,p.jsx)("div",{className:"card-header",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-6",children:(0,p.jsx)("h4",{className:"card-title",children:"Yacht Engine"})}),(0,p.jsx)("div",{className:"col-md-6",children:(0,p.jsx)("button",{className:"btn btn-primary",style:{float:"right"},onClick:()=>{i("/AddYachtEngine")},children:"Add Yacht Engine"})})]})}),(0,p.jsx)("div",{className:"card-body",children:(0,p.jsxs)("div",{className:"row card-header",style:{marginLeft:"10px",marginRight:"10px",alignItems:"center",paddingTop:"5px",paddingBottom:"5px"},children:[(0,p.jsxs)("div",{className:"col-lg-3",children:[(0,p.jsx)("label",{children:(0,p.jsx)("strong",{children:"Search"})}),(0,p.jsx)("br",{}),(0,p.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",onChange:e=>M(e.target.value)})]}),(0,p.jsxs)("div",{className:"col-lg-3",children:[(0,p.jsx)("label",{children:(0,p.jsx)("strong",{children:"Status"})}),(0,p.jsx)("br",{}),(0,p.jsxs)("select",{className:"form-control",value:G,onChange:e=>J(e.target.value),children:[(0,p.jsx)("option",{value:null,children:"-- All --"}),(0,p.jsx)("option",{value:!0,children:"Active"}),(0,p.jsx)("option",{value:!1,children:"Inactive"})]})]}),(0,p.jsxs)("div",{className:"col-lg-6",style:{textAlign:"right"},children:[null!==(e=R.make_motor)&&void 0!==e&&e.includes("download")?(0,p.jsxs)("a",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginRight:"15px"},href:"filePath",download:!0,children:[(0,p.jsx)("i",{className:"fa fa-cloud-download","aria-hidden":"true"})," Download Sample File"]}):"",null!==(t=R.make_motor)&&void 0!==t&&t.includes("upload")?(0,p.jsxs)("button",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green",marginRight:"15px"},onClick:()=>P(!F),children:[(0,p.jsx)("i",{className:"fa fa-file-excel","aria-hidden":"true"})," Upload Excel"]}):"",null!==(s=R.make_motor)&&void 0!==s&&s.includes("export")?(0,p.jsxs)("button",{className:"btn btn-dark btn-sm btn-icon-text m-r-10",style:{backgroundColor:"green"},onClick:()=>{const e=le.map(((e,t)=>({engine_name:e.engine_name,engine_location:e.engine_location.map((e=>e.location_name)).join(", ")}))),t={Sheets:{data:h.Wp.json_to_sheet(e)},SheetNames:["data"]},s=h.M9(t,{booktype:"xlsx",type:"array"}),a=new Blob([s],{type:"xlsx"});d.saveAs(a,"Engine.xlsx")},children:[(0,p.jsx)("i",{className:"fa fa-file-excel","aria-hidden":"true"})," Export Data to excel"]}):""]})]})}),(0,p.jsx)("div",{className:"card-body",children:(0,p.jsxs)("div",{className:"table-responsive",children:[se&&(0,p.jsx)("div",{className:"overlay",children:(0,p.jsxs)("div",{className:"loader-container",children:[(0,p.jsx)(r.fZ,{color:"info",variant:"striped",animated:!0,value:100}),(0,p.jsx)("div",{children:"Uploading, please wait..."}),(0,p.jsx)("div",{className:"loader-text",children:"Do Not Refresh The Page"})]})}),(0,p.jsxs)("table",{className:"table table-bordered",children:[(0,p.jsx)("thead",{className:" text-primary",children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"#"}),(0,p.jsx)("th",{children:"Yacht Engine Name"}),(0,p.jsx)("th",{children:"Location"}),(0,p.jsx)("th",{children:"Logo"}),(0,p.jsx)("th",{children:"Action"})]})}),(0,p.jsx)("tbody",{children:o&&o.length>0?(0,p.jsx)(p.Fragment,{children:o.map(((e,t)=>{var s,a;return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:he+t+1}),(0,p.jsx)("td",{children:e.name}),(0,p.jsx)("td",{children:e.location.map((e=>e.location_name)).join(", ")}),(0,p.jsx)("td",{children:(0,p.jsx)("img",{src:`https://insuranceapi-3o5t.onrender.com/YachtEngineLogos/${e.logo}`,alt:"image",height:100,width:100})}),(0,p.jsxs)("td",{children:[(null===(s=R.make_motor)||void 0===s?void 0:s.includes("edit"))&&(0,p.jsx)("button",{className:"btn btn-primary",onClick:()=>{return t=e._id,Y(t),void fetch(`https://insuranceapi-3o5t.onrender.com/api/getYachtEngine_details?id=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=e.data;D(t[0].name),te(t[0].logo);const s=t[0].location.map((e=>({label:e.location_name,value:e._id})));T(s),de(s),I(!0)}));var t},children:"Edit"})," ",(null===(a=R.make_motor)||void 0===a?void 0:a.includes("delete"))&&(0,p.jsxs)(p.Fragment,{children:[!0===e.status?(0,p.jsx)("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Are you sure you wish to deactivate this item?")&&re(e._id,!1)},children:"Deactivate"}):(0,p.jsx)("button",{className:"btn btn-success",onClick:()=>{window.confirm("Are you sure you wish to activate this item?")&&re(e._id,!0)},children:"Activate"}),(0,p.jsx)("button",{className:"btn btn-warning mx-1",onClick:()=>{var t;window.confirm("Are you sure you wish to delete this item?")&&(t=e._id,fetch(`https://insuranceapi-3o5t.onrender.com/api/deleteYachtMaster/?id=${t}&type=YachtEngine`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{200===e.status?(c()({title:"Success!",text:e.message,icon:"success",button:!1}),ne(f,j),setTimeout((()=>{c().close()}),1e3)):(c()({title:"Error!",text:e.message,icon:"error",button:!1}),ne(f,j),setTimeout((()=>{c().close()}),1e3))})))},children:"Delete"})]})]})]},t)}))}):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:"17",style:{textAlign:"center"},children:(0,p.jsx)("strong",{children:z})})})})]}),(0,p.jsx)(l(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:b,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e=>{const t=e.selected;N(t+1),ne(t+1,j)},containerClassName:"pagination justify-content-end",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})})]})})})}),(0,p.jsxs)(r.zS,{alignment:"center",visible:F,onClose:()=>P(!1),children:[(0,p.jsx)(r.E4,{onClose:()=>P(!1),children:(0,p.jsx)(r.lb,{children:"Upload Excel File"})}),(0,p.jsx)(r.Tc,{children:(0,p.jsx)("div",{children:(0,p.jsx)("input",{type:"file",className:"form-control",id:"DHA",defaultValue:"",required:!0,onChange:e=>S(e.target.files[0])})})}),(0,p.jsxs)(r.If,{children:[(0,p.jsx)(r.Q_,{color:"secondary",onClick:()=>P(!1),children:"Close"}),(0,p.jsx)(r.Q_,{color:"primary",onClick:async e=>{e.preventDefault(),P(!F),ae(!0);const t=new FormData;t.append("file",y);let s=await fetch("https://insuranceapi-3o5t.onrender.com/api/read_engine_excel ",{method:"post",body:t});s=await s.json(),ae(!1),200===s.status?c()("Uploaded Succesfully","","success"):c()("Something went wrong","","danger"),ne(f,j)},href:"/motor-Engine",children:"Upload"})]})]}),(0,p.jsxs)(r.zS,{alignment:"center",visible:O,onClose:()=>U(!1),children:[(0,p.jsx)(r.E4,{onClose:()=>U(!1),children:(0,p.jsx)(r.lb,{children:"Upload Qatar Engine Excel File"})}),(0,p.jsx)(r.Tc,{children:(0,p.jsx)("div",{children:(0,p.jsx)("input",{type:"file",className:"form-control",id:"DHA",defaultValue:"",required:!0,onChange:e=>_(e.target.files[0])})})}),(0,p.jsxs)(r.If,{children:[(0,p.jsx)(r.Q_,{color:"secondary",onClick:()=>U(!1),children:"Close"}),(0,p.jsx)(r.Q_,{color:"primary",onClick:async e=>{U(!1),ae(!0),e.preventDefault();const t=new FormData;t.append("file",C);let s=await fetch("https://insuranceapi-3o5t.onrender.com/api/addKatarEngineData ",{method:"post",body:t});for(s=await s.json();!s;);ae(!1),200===s.status?c()("Uploaded Succesfully","","success"):c()("Something went wrong","","danger"),ne(f,j)},href:"/motor-Engine",children:"Upload"})]})]}),(0,p.jsxs)(u.A,{size:"lg",show:$,onHide:()=>B(!1),children:[(0,p.jsx)(u.A.Header,{closeButton:!0,children:(0,p.jsx)(u.A.Title,{children:"Add Yacht Engine"})}),(0,p.jsx)(u.A.Body,{children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("div",{className:"card-body",children:(0,p.jsxs)("form",{action:"/",method:"POST",onSubmit:e=>{e.preventDefault();const t=new FormData(e.target).get("engine_name"),s=E,a=s.length,n=[];for(let l=0;l<a;l++)n.push(s[l].value);const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({engine_name:t,engine_location:n.toString()})};fetch("https://insuranceapi-3o5t.onrender.com/api/add_engine",i).then((e=>e.json())).then((e=>{200==e.status?(B(!1),c()({text:e.message,type:"success",icon:"success",button:!1}),ne(f,j),setTimeout((()=>{c().close()}),1e3)):(B(!1),c()({text:e.message,type:"error",icon:"error",button:!1}),ne(f,j),setTimeout((()=>{c().close()}),1e3))}))},children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-6",children:(0,p.jsxs)("div",{className:"form-group",children:[(0,p.jsx)("label",{className:"form-label",children:"Engine Motor Name"}),(0,p.jsx)("input",{type:"text",className:"form-control",name:"Engine_name",placeholder:"Engine Motor Name",autoComplete:"off",required:!0})]})}),(0,p.jsx)("div",{className:"col-md-6",children:(0,p.jsxs)("div",{className:"form-group",children:[(0,p.jsx)("label",{className:"form-label",children:"Location"}),(0,p.jsx)(m.default,{options:k,selectedValues:k,displayValue:"label",onSelect:T,onRemove:T,placeholder:"Select Location",showCheckbox:!0,required:!0})]})})]}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Submit"})})})]})})})})})})}),(0,p.jsx)(u.A.Footer,{children:(0,p.jsx)(x.A,{variant:"secondary",onClick:()=>B(!1),children:"Close"})})]}),(0,p.jsxs)(u.A,{size:"lg",show:H,onHide:()=>I(!1),children:[(0,p.jsx)(u.A.Header,{closeButton:!0,children:(0,p.jsx)(u.A.Title,{children:"Edit Yacht Engine"})}),(0,p.jsx)(u.A.Body,{children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("div",{className:"card-body",children:(0,p.jsxs)("form",{action:"/",method:"POST",onSubmit:e=>{e.preventDefault();const t=new FormData(e.target),s=(t.get("Engine_name"),K.map((e=>e.value)));if(t.append("location",s),0==s.length)return c()({title:"Warning!",text:"Please Select Location",icon:"warning"}),!1;fetch(`https://insuranceapi-3o5t.onrender.com/api/updateYachtEngine?id=${L}`,{method:"POST",body:t}).then((e=>e.json())).then((e=>{200===e.status?(I(!1),c()({text:e.message,icon:"success",button:!1}),ne(f,j),setTimeout((()=>{c().close()}),1e3)):(I(!1),c()({title:"Error!",text:e.message,icon:"error",button:!1}),ne(f,j),setTimeout((()=>{c().close()}),1e3))}))},children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-4",children:(0,p.jsxs)("div",{className:"form-group",children:[(0,p.jsx)("label",{className:"form-label",children:"Engine Motor Name"}),(0,p.jsx)("input",{type:"text",className:"form-control",name:"Engine_name",placeholder:"Engine Name",defaultValue:A,autoComplete:"off",required:!0})]})}),(0,p.jsxs)("div",{className:"col-md-4",children:[(0,p.jsx)("strong",{children:"Logo:"}),(0,p.jsx)("input",{className:"form-control ",type:"file",onChange:e=>(e=>{Z(e.target.file)})(e),name:"file"})]}),(0,p.jsx)("div",{className:"col-md-4",children:(0,p.jsxs)("div",{className:"form-group",children:[(0,p.jsx)("label",{className:"form-label",children:"Location"}),(0,p.jsx)(m.default,{options:k,selectedValues:E,onSelect:de,onRemove:de,displayValue:"label",placeholder:"Select Location",closeOnSelect:!1,avoidHighlightFirstOption:!0,showCheckbox:!0,style:{chips:{background:"#007bff"}},required:!0})]})})]}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 submit_all",style:{float:"right"},children:"Update"})})})]})})})})})})}),(0,p.jsx)(u.A.Footer,{children:(0,p.jsx)(x.A,{variant:"secondary",onClick:()=>I(!1),children:"Close"})})]})]})}}}]);
//# sourceMappingURL=9050.7b920484.chunk.js.map