"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1528],{21528:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});var o=e(93946),n=e(90504),u=e(65043),s=e(73216),r=e(1177),d=e(78602),c=e(70579);const l=function(t){let{filterOptions:a,defaultOptions:e,lobdata:l}=t;const m=(0,s.Zp)();(0,u.useEffect)((()=>{const t=localStorage.getItem("token");null===t||void 0===t||""===t?m("/login"):C()}),[l]);const[h,i]=(0,u.useState)(),C=async()=>{let t=l.map((t=>t.value));const a={method:"POST",body:JSON.stringify({lob:t}),headers:{"Content-Type":"application/json"}};await fetch("https://insuranceapi-3o5t.onrender.com/api/get_new_leads_count",a).then((t=>t.json())).then((t=>{i(t)}))};let y={labels:[],datasets:[]};h&&Array.isArray(h.data)&&(y={labels:h.data.map((t=>t.line_of_business_name)),datasets:h.data.map((t=>({label:t.line_of_business_name,data:[t.total],backgroundColor:"Motor"===t.line_of_business_name?"#0D2F92":"#f87979",hoverBackgroundColor:"Motor"===t.line_of_business_name?"#0D2F92":"#f87979"})))});const[p,S]=(0,u.useState)(0),[b,g]=(0,u.useState)(0),[f,v]=(0,u.useState)(0),[_,j]=(0,u.useState)(0),[A,J]=(0,u.useState)(0),[O,F]=(0,u.useState)(0);(0,u.useEffect)((()=>{const t=localStorage.getItem("token");null===t||void 0===t||""===t?m("/login"):(M(),me())}),[a]);const M=async()=>{const t=JSON.parse(localStorage.getItem("user"));let o=a.location,n=a.lob,u=a.businessType,s=a.agent,r=a.dateRange,d=e.startdate,c=e.enddate,l=t.assign_staff,m=e.userType;o=null!=o&&void 0!=o&&Array.isArray(o)&&0!==o.length?o.map((t=>t.value)):[],n=null!=n&&void 0!=n&&Array.isArray(n)&&0!==n.length?n.map((t=>t.value)):[],u=null!=u&&void 0!=u&&Array.isArray(u)&&0!==u.length?u.map((t=>t.value)):[],s=null!=s&&void 0!=s&&Array.isArray(s)&&0!==s.length?s.map((t=>t.value)):e.defaultagent.map((t=>t.value));const h=localStorage.getItem("token"),i=JSON.parse(localStorage.getItem("user")).usertype;console.log("loginusertype",i);const C={method:"POST",body:JSON.stringify({location:o,lob:n,business_type:u,newagent:s,dateRange:r,startdate:d,enddate:c,assign_staff:l,userType:m}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+h}};"646224eab201a6f07b2dff36"==i&&await fetch("https://insuranceapi-3o5t.onrender.com/api/topLeagentCount",C).then((t=>t.json())).then((t=>{console.log("data",t.data),S(t.data.motorCount),g(t.data.travelCount),v(t.data.homeCount),j(t.data.medicalCount),J(t.data.yatchCount),F(t.data.ortherInsuranceCount)})).catch((t=>{console.log(t)})),"64622470b201a6f07b2dff22"==i&&await fetch("https://insuranceapi-3o5t.onrender.com/api/topLeagentCount?dashboardType=salesAdvisorDashboard",C).then((t=>t.json())).then((t=>{console.log("data",t.data),S(t.data.motorCount),g(t.data.travelCount),v(t.data.homeCount),j(t.data.medicalCount),J(t.data.yatchCount),F(t.data.ortherInsuranceCount)})).catch((t=>{console.log(t)}))},[x,N]=(0,u.useState)(0),[T,k]=(0,u.useState)(0),[w,B]=(0,u.useState)(0),[I,E]=(0,u.useState)(0),[D,H]=(0,u.useState)(0),[L,R]=(0,u.useState)(0),[G,P]=(0,u.useState)(0),[V,Y]=(0,u.useState)(0),[$,z]=(0,u.useState)(0),[K,W]=(0,u.useState)(0),[U,Z]=(0,u.useState)(0),[q,Q]=(0,u.useState)(0),[X,tt]=(0,u.useState)(0),[at,et]=(0,u.useState)(0),[ot,nt]=(0,u.useState)(0),[ut,st]=(0,u.useState)(0),[rt,dt]=(0,u.useState)(0),[ct,lt]=(0,u.useState)(0),[mt,ht]=(0,u.useState)(0),[it,Ct]=(0,u.useState)(0),[yt,pt]=(0,u.useState)(0),[St,bt]=(0,u.useState)(0),[gt,ft]=(0,u.useState)(0),[vt,_t]=(0,u.useState)(0),[jt,At]=(0,u.useState)(0),[Jt,Ot]=(0,u.useState)(0),[Ft,Mt]=(0,u.useState)(0),[xt,Nt]=(0,u.useState)(0),[Tt,kt]=(0,u.useState)(0),[wt,Bt]=(0,u.useState)(0),[It,Et]=(0,u.useState)(0),[Dt,Ht]=(0,u.useState)(0),[Lt,Rt]=(0,u.useState)(0),[Gt,Pt]=(0,u.useState)(0),[Vt,Yt]=(0,u.useState)(0),[$t,zt]=(0,u.useState)(0),[Kt,Wt]=(0,u.useState)(0),[Ut,Zt]=(0,u.useState)(0),[qt,Qt]=(0,u.useState)(0),[Xt,ta]=(0,u.useState)(0),[aa,ea]=(0,u.useState)(0),[oa,na]=(0,u.useState)(0),[ua,sa]=(0,u.useState)(0),[ra,da]=(0,u.useState)(0),[ca,la]=(0,u.useState)(0),[ma,ha]=(0,u.useState)(0),[ia,Ca]=(0,u.useState)(0),[ya,pa]=(0,u.useState)(0),[Sa,ba]=(0,u.useState)(0),[ga,fa]=(0,u.useState)(0),[va,_a]=(0,u.useState)(0),[ja,Aa]=(0,u.useState)(0),[Ja,Oa]=(0,u.useState)(0),[Fa,Ma]=(0,u.useState)(0),[xa,Na]=(0,u.useState)(0),[Ta,ka]=(0,u.useState)(0),[wa,Ba]=(0,u.useState)(0),[Ia,Ea]=(0,u.useState)(0),[Da,Ha]=(0,u.useState)(0),[La,Ra]=(0,u.useState)(0),[Ga,Pa]=(0,u.useState)(0),[Va,Ya]=(0,u.useState)(0),[$a,za]=(0,u.useState)(0),[Ka,Wa]=(0,u.useState)(0),[Ua,Za]=(0,u.useState)(0),[qa,Qa]=(0,u.useState)(0),[Xa,te]=(0,u.useState)(0),[ae,ee]=(0,u.useState)(0),[oe,ne]=(0,u.useState)(0),[ue,se]=(0,u.useState)(0),[re,de]=(0,u.useState)(0),[ce,le]=(0,u.useState)(0),me=async()=>{console.log("inside filterOptions",a),console.log("inside defaultOptions",e);const t=JSON.parse(localStorage.getItem("user"));let o=a.location,n=a.lob,u=a.businessType,s=a.agent,r=a.dateRange,d=e.startdate,c=e.enddate,l=t.assign_staff,m=e.userType;o=null!=o&&void 0!=o&&Array.isArray(o)&&0!==o.length?o.map((t=>t.value)):[],n=null!=n&&void 0!=n&&Array.isArray(n)&&0!==n.length?n.map((t=>t.value)):[],u=null!=u&&void 0!=u&&Array.isArray(u)&&0!==u.length?u.map((t=>t.value)):[],s=null!=s&&void 0!=s&&Array.isArray(s)&&0!==s.length?s.map((t=>t.value)):e.defaultagent.map((t=>t.value));const h=localStorage.getItem("token"),i=JSON.parse(localStorage.getItem("user")).usertype;console.log("loginusertype",i);const C={method:"POST",body:JSON.stringify({location:o,lob:n,business_type:u,newagent:s,dateRange:r,startdate:d,enddate:c,assign_staff:l,userType:m}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+h}};"646224eab201a6f07b2dff36"==i&&await fetch("https://insuranceapi-3o5t.onrender.com/api/getAllGraphCount",C).then((t=>t.json())).then((t=>{console.log("data",t.data.sepmotorCount),N(t.data.janmotorCount),k(t.data.febmotorCount),B(t.data.marmotorCount),E(t.data.aprmotorCount),H(t.data.maymotorCount),R(t.data.junmotorCount),P(t.data.julmotorCount),Y(t.data.augmotorCount),z(t.data.sepmotorCount),W(t.data.octmotorCount),Z(t.data.novmotorCount),Q(t.data.decmotorCount),tt(t.data.jantravelCount),et(t.data.febtravelCount),nt(t.data.martravelCount),st(t.data.aprtravelCount),dt(t.data.maytravelCount),lt(t.data.juntravelCount),ht(t.data.jultravelCount),Ct(t.data.augtravelCount),pt(t.data.septravelCount),bt(t.data.octtravelCount),ft(t.data.novtravelCount),_t(t.data.dectravelCount),At(t.data.janhomeCount),Ot(t.data.febhomeCount),Mt(t.data.marhomeCount),Nt(t.data.aprhomeCount),kt(t.data.mayhomeCount),Bt(t.data.junhomeCount),Et(t.data.julhomeCount),Ht(t.data.aughomeCount),Rt(t.data.sephomeCount),Pt(t.data.octhomeCount),Yt(t.data.novhomeCount),zt(t.data.dechomeCount),Wt(t.data.janmedicalCount),Zt(t.data.febmedicalCount),Qt(t.data.marmedicalCount),ta(t.data.aprmedicalCount),ea(t.data.maymedicalCount),na(t.data.junmedicalCount),sa(t.data.julmedicalCount),da(t.data.augmedicalCount),la(t.data.sepmedicalCount),ha(t.data.octmedicalCount),Ca(t.data.novmedicalCount),pa(t.data.decmedicalCount),ba(t.data.janyachtCount),fa(t.data.febyachtCount),_a(t.data.maryachtCount),Aa(t.data.apryachtCount),Oa(t.data.mayyachtCount),Ma(t.data.junyachtCount),Na(t.data.julyachtCount),ka(t.data.augyachtCount),Ba(t.data.sepyachtCount),Ea(t.data.octyachtCount),Ha(t.data.novyachtCount),Ra(t.data.decyachtCount),Pa(t.data.janotherCount),Ya(t.data.febotherCount),za(t.data.marotherCount),Wa(t.data.aprotherCount),Za(t.data.mayotherCount),Qa(t.data.junotherCount),te(t.data.julotherCount),ee(t.data.augotherCount),ne(t.data.sepotherCount),se(t.data.octotherCount),de(t.data.novotherCount),le(t.data.decotherCount)})).catch((t=>{console.log(t)})),"64622470b201a6f07b2dff22"==i&&await fetch("https://insuranceapi-3o5t.onrender.com/api/getAllGraphCount?dashboardType=salesAdvisorDashboard",C).then((t=>t.json())).then((t=>{console.log("data",t.data.sepmotorCount),N(t.data.janmotorCount),k(t.data.febmotorCount),B(t.data.marmotorCount),E(t.data.aprmotorCount),H(t.data.maymotorCount),R(t.data.junmotorCount),P(t.data.julmotorCount),Y(t.data.augmotorCount),z(t.data.sepmotorCount),W(t.data.octmotorCount),Z(t.data.novmotorCount),Q(t.data.decmotorCount),tt(t.data.jantravelCount),et(t.data.febtravelCount),nt(t.data.martravelCount),st(t.data.aprtravelCount),dt(t.data.maytravelCount),lt(t.data.juntravelCount),ht(t.data.jultravelCount),Ct(t.data.augtravelCount),pt(t.data.septravelCount),bt(t.data.octtravelCount),ft(t.data.novtravelCount),_t(t.data.dectravelCount),At(t.data.janhomeCount),Ot(t.data.febhomeCount),Mt(t.data.marhomeCount),Nt(t.data.aprhomeCount),kt(t.data.mayhomeCount),Bt(t.data.junhomeCount),Et(t.data.julhomeCount),Ht(t.data.aughomeCount),Rt(t.data.sephomeCount),Pt(t.data.octhomeCount),Yt(t.data.novhomeCount),zt(t.data.dechomeCount),Wt(t.data.janmedicalCount),Zt(t.data.febmedicalCount),Qt(t.data.marmedicalCount),ta(t.data.aprmedicalCount),ea(t.data.maymedicalCount),na(t.data.junmedicalCount),sa(t.data.julmedicalCount),da(t.data.augmedicalCount),la(t.data.sepmedicalCount),ha(t.data.octmedicalCount),Ca(t.data.novmedicalCount),pa(t.data.decmedicalCount),ba(t.data.janyachtCount),fa(t.data.febyachtCount),_a(t.data.maryachtCount),Aa(t.data.apryachtCount),Oa(t.data.mayyachtCount),Ma(t.data.junyachtCount),Na(t.data.julyachtCount),ka(t.data.augyachtCount),Ba(t.data.sepyachtCount),Ea(t.data.octyachtCount),Ha(t.data.novyachtCount),Ra(t.data.decyachtCount),Pa(t.data.janotherCount),Ya(t.data.febotherCount),za(t.data.marotherCount),Wa(t.data.aprotherCount),Za(t.data.mayotherCount),Qa(t.data.junotherCount),te(t.data.julotherCount),ee(t.data.augotherCount),ne(t.data.sepotherCount),se(t.data.octotherCount),de(t.data.novotherCount),le(t.data.decotherCount)})).catch((t=>{console.log(t)}))},he=[{line_of_business_name:"Motor",monthlydata:[{month:"January",count:x},{month:"February",count:T},{month:"March",count:w},{month:"April",count:I},{month:"May",count:D},{month:"June",count:L},{month:"July",count:G},{month:"August",count:V},{month:"September",count:$},{month:"October",count:K},{month:"November",count:U},{month:"December",count:q}]},{line_of_business_name:"Travel",monthlydata:[{month:"January",count:X},{month:"February",count:at},{month:"March",count:ot},{month:"April",count:ut},{month:"May",count:rt},{month:"June",count:ct},{month:"July",count:mt},{month:"August",count:it},{month:"September",count:yt},{month:"October",count:St},{month:"November",count:gt},{month:"December",count:vt}]},{line_of_business_name:"Home",monthlydata:[{month:"January",count:jt},{month:"February",count:Jt},{month:"March",count:Ft},{month:"April",count:xt},{month:"May",count:Tt},{month:"June",count:wt},{month:"July",count:It},{month:"August",count:Dt},{month:"September",count:Lt},{month:"October",count:Gt},{month:"November",count:Vt},{month:"December",count:$t}]},{line_of_business_name:"Medical",monthlydata:[{month:"January",count:Kt},{month:"February",count:Ut},{month:"March",count:qt},{month:"April",count:Xt},{month:"May",count:aa},{month:"June",count:oa},{month:"July",count:ua},{month:"August",count:ra},{month:"September",count:ca},{month:"October",count:ma},{month:"November",count:ia},{month:"December",count:ya}]},{line_of_business_name:"Yacht",monthlydata:[{month:"January",count:Sa},{month:"February",count:ga},{month:"March",count:va},{month:"April",count:ja},{month:"May",count:Ja},{month:"June",count:Fa},{month:"July",count:xa},{month:"August",count:Ta},{month:"September",count:wa},{month:"October",count:Ia},{month:"November",count:Da},{month:"December",count:La}]},{line_of_business_name:"Other Insurance",monthlydata:[{month:"January",count:Ga},{month:"February",count:Va},{month:"March",count:$a},{month:"April",count:Ka},{month:"May",count:Ua},{month:"June",count:qa},{month:"July",count:Xa},{month:"August",count:ae},{month:"September",count:oe},{month:"October",count:ue},{month:"November",count:re},{month:"December",count:ce}]}];let ie={labels:[],datasets:[]};return ie={labels:Array.from(new Set(he.flatMap((t=>t.monthlydata.map((t=>t.month)))))),datasets:he.map((t=>({label:t.line_of_business_name,backgroundColor:"Motor"===t.line_of_business_name?"#FF6384":"Travel"===t.line_of_business_name?"#007500":"Home"===t.line_of_business_name?"#FFCE56":"Medical"===t.line_of_business_name?"#36A2EB":"Yacht"===t.line_of_business_name?"#5742f5":"#da42f5",data:t.monthlydata.map((t=>t.count))})))},(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.A,{children:(0,c.jsxs)(r.A.Item,{eventKey:"1",children:[(0,c.jsx)(r.A.Header,{children:(0,c.jsx)("div",{className:"card-header new_leads",children:(0,c.jsx)("strong",{children:"Graphical View "})})}),(0,c.jsx)(r.A.Body,{style:{padding:"2px"},children:(0,c.jsx)(o.E$,{className:"mb-4",children:(0,c.jsxs)(o.sK,{children:[(0,c.jsx)(o.UF,{lg:8,children:(0,c.jsxs)(o.E$,{className:"mb-4",children:[(0,c.jsx)(o.V0,{children:"Bar Chart"}),(0,c.jsx)(o.W6,{children:(0,c.jsx)(n.BB,{data:ie})})]})}),(0,c.jsx)(d.A,{className:"",lg:4,children:(0,c.jsxs)(o.E$,{className:"mb-4",children:[(0,c.jsx)(o.V0,{children:"Total Leads"}),(0,c.jsx)(o.W6,{children:(0,c.jsx)(n.kp,{data:{labels:["Motor","Travel","Home","Medical","Yacht","Other LOB"],datasets:[{data:[p,b,f,_,A,O],backgroundColor:["#FF6384","#007500","#FFCE56","#36A2EB","#5742f5","#da42f5"],hoverBackgroundColor:["#FF6384","#007500","#FFCE56","#36A2EB","#5742f5","#da42f5"]}]}})})]})})]})})})]})})})}}}]);
//# sourceMappingURL=1528.c360bdbd.chunk.js.map