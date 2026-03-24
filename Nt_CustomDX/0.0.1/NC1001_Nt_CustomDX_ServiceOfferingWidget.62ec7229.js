(self.webpackChunkamicorp=self.webpackChunkamicorp||[]).push([[18295163],{94:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var a=r(594),o=r(388),n=(r(957),r(267));const i="#1a2b4c",s="#e8edf3",l="#111827",c="#6b7280",d="#757575",p="#eceff2",f="#d1d5db",u="#d32f2f",x="24px",g=n.Ay.div(()=>n.AH`
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    padding: 0;
    color: ${l};
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* ——— Outer case card (white shell, rounded) ——— */
    .case-card {
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      box-shadow:
        0 4px 24px rgba(17, 24, 39, 0.06),
        0 1px 3px rgba(17, 24, 39, 0.04);
      overflow: hidden;
    }

    /* ——— Portal tabs ——— */
    .portal-tabs {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
      gap: 14px 18px;
      padding: 22px 24px 8px;
      background: #ffffff;
    }

    .portal-tab-group {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .portal-tab {
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      padding: 13px 36px;
      border-radius: 10px;
      color: #ffffff;
      transition:
        transform 0.12s,
        filter 0.12s;
    }

    .portal-tab:focus-visible {
      outline: 2px solid ${i};
      outline-offset: 3px;
    }

    .portal-tab--started {
      background: ${u};
      box-shadow: 0 2px 6px rgba(211, 47, 47, 0.35);
    }

    .portal-tab--started:hover,
    .portal-tab-group.is-active .portal-tab--started {
      background: ${u};
    }

    .portal-tab--started:hover {
      filter: brightness(1.05);
    }

    .portal-tab--callback {
      background: ${"#8d9aa8"};
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
    }

    .portal-tab--callback:hover {
      filter: brightness(1.06);
    }

    .portal-tab--callback.is-selected {
      background: #7a8795;
    }

    .portal-tab--started:not(.is-selected) {
      opacity: 0.88;
    }

    .portal-tab-caret {
      display: block;
      width: 0;
      height: 0;
      margin-top: 6px;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 10px solid ${u};
      filter: drop-shadow(0 2px 2px rgba(211, 47, 47, 0.25));
    }

    /* Stage strip: same left/right as steps column + main (search) — see ${x} */
    .stage-row {
      display: block;
      width: 100%;
      padding: 0 ${x};
      margin-bottom: 12px;
      background: #ffffff;
      box-sizing: border-box;
    }

    .stage-box {
      width: 100%;
      margin: 0;
      background: ${s};
      border: 1px solid #dce3ec;
      border-radius: 10px;
      padding: 10px 12px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Stepper occupies 70% of the stage box, centered */
    .top-stepper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 70%;
      max-width: 100%;
      min-width: 0;
      margin: 0 auto;
      padding: 0;
    }

    .top-stepper-segment {
      display: flex;
      align-items: center;
      flex: 1;
      min-width: 0;
    }

    .top-stepper-segment:last-child {
      flex: 0 0 auto;
    }

    .top-stepper-node {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 2px 4px;
      font: inherit;
      text-align: left;
      white-space: nowrap;
    }

    .top-stepper-circle {
      width: 28px;
      height: 28px;
      min-width: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 700;
      background: ${"#8b96a8"};
      color: #ffffff;
      border: none;
      transition:
        background 0.15s,
        color 0.15s;
    }

    .top-stepper-node.active .top-stepper-circle,
    .top-stepper-node.complete .top-stepper-circle {
      background: ${i};
      color: #ffffff;
    }

    .top-stepper-label {
      font-size: 13px;
      font-weight: 600;
      color: ${c};
    }

    .top-stepper-node.active .top-stepper-label {
      font-size: 14px;
      color: ${l};
      font-weight: 700;
    }

    .top-stepper-node.complete:not(.active) .top-stepper-label {
      font-size: 13px;
      color: ${d};
      font-weight: 600;
    }

    .top-stepper-line {
      flex: 1;
      height: 4px;
      background: ${"#b8c4d4"};
      margin: 0 8px;
      min-width: 8px;
      max-width: 100%;
      border-radius: 2px;
      align-self: center;
    }

    @media (max-width: 720px) {
      .top-stepper {
        width: 100%;
      }
    }

    /* ——— Split: only left steps = gray box; content = flat white ——— */
    .layout {
      display: grid;
      grid-template-columns: minmax(220px, 252px) 1fr;
      gap: 0 20px;
      align-items: stretch;
      min-height: 480px;
      background: #ffffff;
      padding: 0 ${x} 20px;
    }

    .left-nav {
      background-color: ${s};
      background-image: radial-gradient(circle, #cfd8e3 1px, transparent 1px);
      background-size: 12px 12px;
      padding: 18px 14px 20px 16px;
      border: 1px solid #dce3ec;
      border-radius: 8px;
      align-self: start;
    }

    .left-nav-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .left-nav-item {
      display: flex;
      width: 100%;
      text-align: left;
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 0 0 18px 0;
      margin: 0;
      font: inherit;
      color: inherit;
      align-items: flex-start;
      gap: 14px;
    }

    .left-nav-row:last-child .left-nav-item {
      padding-bottom: 0;
    }

    .left-nav-item:hover:not(.blocked) .left-nav-title {
      color: ${i};
    }

    .left-nav-item.blocked {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .left-nav-rail {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      width: 26px;
    }

    /* Active: rounded square + check; done: small circle + check; pending: empty ring */
    .left-nav-marker {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #ffffff;
    }

    .left-nav-marker--square {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      background: ${i};
      border: 2px solid ${i};
    }

    .left-nav-marker--circle {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid ${i};
    }

    .left-nav-marker--done {
      background: ${i};
      border-color: ${i};
    }

    .left-nav-marker--pending {
      background: #ffffff;
      border-color: #c5cdd8;
    }

    .icon-check {
      display: block;
    }

    .left-nav-connector {
      width: 2px;
      flex: 1;
      min-height: 14px;
      background: #c5cdd8;
      margin: 4px 0 0;
      border-radius: 2px;
    }

    .left-nav-connector.is-blue {
      background: ${i};
    }

    .left-nav-text {
      flex: 1;
      min-width: 0;
      padding-top: 1px;
    }

    .left-nav-title {
      display: block;
      font-size: 14px;
      font-weight: 700;
      color: ${l};
      line-height: 1.25;
      margin-bottom: 3px;
    }

    .left-nav-item:not(.active):not(.complete) .left-nav-title {
      color: ${d};
      font-weight: 700;
    }

    .left-nav-item.active .left-nav-title {
      color: ${l};
    }

    .left-nav-subtitle {
      display: block;
      font-size: 12px;
      color: ${c};
      line-height: 1.4;
      font-weight: 400;
    }

    .main-column {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      min-height: 0;
      border: none;
      box-shadow: none;
    }

    .content {
      flex: 1;
      padding: 4px 0 20px 0;
      background: #ffffff;
    }

    /* Portal: jurisdiction title = medium gray; casing comes from header text (e.g. JURISDICTION) */
    .content-heading {
      margin: 0 0 20px;
      font-size: 20px;
      font-weight: 600;
      color: ${i};
      letter-spacing: 0.02em;
    }

    .section-label {
      margin: 22px 0 12px;
      font-size: 15px;
      font-weight: 700;
      color: ${i};
    }

    .section-label:first-of-type {
      margin-top: 6px;
    }

    .nav-error {
      background: ${"#fef2f2"};
      color: ${"#b42318"};
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 14px;
      margin-bottom: 16px;
      border: 1px solid #fecaca;
    }

    .search-row {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      border: 1px solid ${f};
      border-radius: 6px;
      background: #fff;
      max-width: 100%;
      padding-right: 8px;
      gap: 4px;
    }

    .search-row input {
      flex: 1;
      width: 100%;
      padding: 12px 16px;
      border: 0;
      font-size: 15px;
      outline: none;
      color: ${l};
      min-width: 0;
    }

    .search-row input::placeholder {
      color: #9ca3af;
    }

    .search-addon {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      border: 2px solid ${i};
      border-radius: 5px;
      background: #ffffff;
    }

    .search-trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      border: none;
      background: transparent;
      color: ${i};
      cursor: pointer;
      border-radius: 3px;
    }

    .search-trigger:hover {
      background: rgba(26, 43, 76, 0.06);
    }

    .search-icon {
      display: block;
    }

    .countries-loading {
      margin: 0 0 12px;
      font-size: 14px;
      color: ${c};
    }

    .countries-fetch-error {
      margin-bottom: 12px;
    }

    .country-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 11px;
    }

    .country-grid-scroll {
      max-height: 280px;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 4px 6px 8px 2px;
      margin: 0 -2px;
      border: 1px solid ${f};
      border-radius: 8px;
      background: #fafbfc;
      -webkit-overflow-scrolling: touch;
    }

    .country-grid-scroll:focus-within {
      outline: none;
    }

    .country-grid--scroll-inner {
      margin: 0;
    }

    .country-btn {
      border: 1px solid #d1d5db;
      background: ${p};
      color: ${l};
      border-radius: 5px;
      padding: 10px 18px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      cursor: pointer;
      transition:
        border-color 0.15s,
        background 0.15s;
    }

    .country-btn:hover {
      border-color: #f97316;
      color: #f97316;
      background: #fff7ed;
    }

    .country-btn.selected:hover {
      border-color: #f97316;
      color: #f97316;
      background: #fff7ed;
    }

    .country-btn.selected {
      border: 2px solid #d32f2f;
      background: #ffffff;
      color: ${l};
      padding: 9px 17px;
    }

    .sample-screen {
      max-width: 560px;
    }

    .sample-screen-title {
      margin: 0 0 12px;
      font-size: 20px;
      font-weight: 700;
      color: ${l};
    }

    .sample-screen-body {
      margin: 0 0 16px;
      font-size: 15px;
      line-height: 1.55;
      color: ${c};
    }

    .sample-screen-meta {
      margin: 0;
      font-size: 14px;
      color: ${c};
    }

    .services-screen {
      padding-top: 2px;
      border-top: 1px solid #eceff3;
    }

    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
      gap: 12px;
      width: 100%;
      max-width: 740px;
    }

    .service-card {
      display: flex;
      align-items: center;
      gap: 14px;
      width: 100%;
      min-height: 70px;
      padding: 14px 16px;
      border: 1px solid #d8dee8;
      border-radius: 4px;
      background: #ffffff;
      cursor: pointer;
      text-align: left;
      color: ${l};
      transition:
        border-color 0.15s,
        box-shadow 0.15s;
    }

    .service-card:hover {
      border-color: #b8c4d4;
      box-shadow: 0 1px 3px rgba(17, 24, 39, 0.06);
    }

    .service-card.selected {
      border-color: #c56a79;
      box-shadow: inset 0 0 0 1px #c56a79;
    }

    .service-card-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      min-width: 36px;
      border-radius: 50%;
      background: #ececef;
      color: #6f7385;
      font-size: 16px;
    }

    .service-card.selected .service-card-icon {
      background: #e7e6f0;
      color: #5a5877;
    }

    .service-card-text {
      display: flex;
      flex-direction: column;
      min-width: 0;
      gap: 2px;
    }

    .service-card-title {
      font-size: 15px;
      line-height: 1.25;
      font-weight: 600;
      color: ${l};
    }

    .service-card.selected .service-card-title {
      color: #ac2d47;
    }

    .service-card-subtitle {
      font-size: 12px;
      line-height: 1.3;
      color: ${c};
    }

    .content-footer {
      padding: 16px 0 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      border-top: none;
      margin-top: auto;
      background: #ffffff;
    }

    .content-footer .btn-prev {
      margin-right: auto;
    }

    .btn-prev {
      background: #fff;
      color: ${i};
      border: 1px solid ${f};
      border-radius: 6px;
      padding: 11px 28px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      min-width: 112px;
      transition:
        background 0.15s,
        border-color 0.15s;
    }

    .btn-prev:hover {
      background: ${p};
      border-color: #9ca3af;
    }

    .btn-next {
      background: ${"#1a2b4c"};
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 12px 28px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      min-width: 120px;
      white-space: nowrap;
      transition: background 0.15s;
    }

    .btn-next:hover:not(:disabled) {
      background: #142340;
    }

    .btn-next:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
  `);var b=r(848);const h="D_ActiveCountryList",m="D_GetServiceByCountry",v=[{pyGUID:"fallback-company-management",serviceId:"CM",name:"Company Management",iconSource:"fa-solid fa-building-user",countryCode:"",isActive:!0},{pyGUID:"fallback-financial-markets",serviceId:"FM",name:"Financial Markets",iconSource:"fa-solid fa-sack-dollar",countryCode:"",isActive:!0},{pyGUID:"fallback-fund-administration",serviceId:"FA",name:"Fund Administration",iconSource:"fa-solid fa-circle-dollar-to-slot",countryCode:"",isActive:!0},{pyGUID:"fallback-trust-management",serviceId:"TM",name:"Trust Management",iconSource:"fa-solid fa-handshake-angle",countryCode:"",isActive:!0}],y={distinctResultsOnly:!0,select:[{field:"CountryCode"},{field:"Name"},{field:"IsMajor"},{field:"IsActive"},{field:"pyGUID"}]},k={distinctResultsOnly:!0,select:[{field:"CountryCode"},{field:"IsActive"},{field:"Name"},{field:"ServiceID"},{field:"IconSource"},{field:"pyGUID"}]};function w(){return"undefined"!=typeof globalThis?globalThis.PCore:void 0}const j=[{id:1,label:"Services"},{id:2,label:"Details"},{id:3,label:"Packages"},{id:4,label:"Payment"}],C=[{id:1,title:"Jurisdiction",subtitle:"Choose the jurisdiction."},{id:2,title:"Services",subtitle:"Select services to get started."},{id:3,title:"Products",subtitle:"Choose the products of your choice."},{id:4,title:"Add on Services",subtitle:"Find the additional services that fits your needs."}],N=e=>{const t=e.CountryCode??e.countryCode??e.pyCountryCode??e.code??"";return String(t).trim()},$=e=>String(e.pyGUID??e.pxObjClassGUID??e.guid??"").trim(),S=e=>e.name||e.countryName||e.country||e.pyLabel||e.pyCountry||e.Country||e.Name||"",A=e=>String(e.ServiceID??e.ServiceId??e.serviceId??e.ID??"").trim(),I=e=>String(e.Name??e.name??e.pyLabel??"").trim(),D=e=>String(e.IconSource??e.iconSource??e.Icon??"").trim(),z=e=>{const t=e.IsActive??e.isActive??e.pyIsActive;return"string"==typeof t?"true"===t.toLowerCase()||"Y"===t||"1"===t:Boolean(!0===t)},P=(e,t)=>{const r=t.trim().toLowerCase();return r?e.filter(e=>e.countryCode.trim().toLowerCase()===r):[]},M=e=>{const t=e.IsMajor??e.isMajor??e.pyIsMajor??e.major??e.isPrimary;return"string"==typeof t?"true"===t.toLowerCase()||"Y"===t||"1"===t:Boolean(!0===t)};function U(){return(0,b.jsx)("svg",{className:"search-icon",width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:(0,b.jsx)("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}function L(e){const t=new Set,r=[];for(const a of e){const e=S(a).trim();if(!e)continue;const o=N(a).trim(),n=(o||e).toLowerCase();t.has(n)||(t.add(n),r.push({pyGUID:$(a),name:e,countryCode:o||e,isMajor:M(a)}))}return r.sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"})),r}function G(e){const t=new Set,r=[];for(const a of e){if(!z(a))continue;const e=$(a),o=A(a),n=I(a),i=D(a),s=N(a),l=(e||o||n).toLowerCase();n&&!t.has(l)&&(t.add(l),r.push({pyGUID:e,serviceId:o,name:n,iconSource:i,countryCode:s,isActive:!0}))}return r.slice(0,10)}function R({small:e}){return(0,b.jsx)("svg",{className:e?"icon-check icon-check--sm":"icon-check",width:e?10:12,height:e?10:12,viewBox:"0 0 24 24","aria-hidden":!0,children:(0,b.jsx)("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}const _=(0,o.A)(function(e){const{datasource:t,serviceDatasource:r,header:o="Choose your JURISDICTION",countryDataPageName:n=h,serviceDataPageName:i=m,getPConnect:s}=e,l=(0,a.useRef)(s);l.current=s;const[c,d]=(0,a.useState)(""),[p,f]=(0,a.useState)(null),[u,x]=(0,a.useState)(""),[N,$]=(0,a.useState)(1),[S,A]=(0,a.useState)(1),[I,D]=(0,a.useState)(""),[z,M]=(0,a.useState)("started"),[_,T]=(0,a.useState)(null),[B,E]=(0,a.useState)(""),[F,O]=(0,a.useState)(null),[q,J]=(0,a.useState)(""),H=Boolean(p?.countryCode?.trim()||p?.name?.trim()),Y=Boolean(u),K=!w()?.getDataPageUtils?.()?.getDataAsync;(0,a.useEffect)(()=>{const e=w();if(!e?.getDataPageUtils?.()?.getDataAsync)return;let t=!1;return T("loading"),E(""),async function(e,t){const r=w(),a=r?.getDataPageUtils?.()?.getDataAsync;if("function"!=typeof a)return[];const o=(()=>{try{return l.current().getContextName()||""}catch{return""}})(),n=e=>Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.pxResults)?e.pxResults:[];try{const e=[];let r=1;for(;;){const i={pageNumber:r,pageSize:100},s=n(await a(t,o,{},i,{...y}));if(e.push(...s),s.length<100)break;r+=1}return e}catch(e){const r=[()=>a(t,o),()=>a(t),()=>a(t,o,{})];let i=e;for(const e of r)try{return n(await e())}catch(e){i=e}throw i}}(0,n).then(e=>{t||(E(""),T(L(e)))}).catch(e=>{console.error(e),t||(E("Could not load countries from the server."),T(null))}),()=>{t=!0}},[n]),(0,a.useEffect)(()=>{if(!p?.countryCode)return O(null),void J("");const e=w();if(!e?.getDataPageUtils?.()?.getDataAsync)return;let t=!1;return O("loading"),J(""),async function(e,t,r){const a=w(),o=a?.getDataPageUtils?.()?.getDataAsync;if("function"!=typeof o)return[];const n=(()=>{try{return l.current().getContextName()||""}catch{return""}})(),i=e=>Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.pxResults)?e.pxResults:[],s={CountryCode:r},c={pageNumber:1,pageSize:10};try{return i(await o(t,n,s,c,{...k}))}catch(e){const r=[()=>o(t,n,s),()=>o(t,s),()=>o(t)];let a=e;for(const e of r)try{return i(await e())}catch(e){a=e}throw a}}(0,i,p.countryCode).then(e=>{t||(O(G(e)),J(""))}).catch(e=>{console.error(e),t||(O(null),J("Could not load services from the server."))}),()=>{t=!0}},[p?.countryCode,i]);const Q=(0,a.useMemo)(()=>null!==_&&"loading"!==_?_:"loading"===_?[]:L(t?.source||[]),[t,_]),V=(0,a.useMemo)(()=>G(r?.source||[]),[r]),W=(0,a.useMemo)(()=>Q.filter(e=>e.isMajor),[Q]),X=(0,a.useMemo)(()=>{const e=c.trim().toLowerCase();return e?Q.filter(t=>t.name.toLowerCase().includes(e)):Q},[Q,c]),Z=(0,a.useCallback)(e=>{D(""),e>1&&!H?D("Please select a jurisdiction before continuing to the next stage."):e>1&&!Y?D("Please select a service before continuing to the next stage."):$(e)},[H,Y]),ee=(0,a.useCallback)(e=>{D(""),e>1&&!H?D("Please select a jurisdiction to access this step."):e>2&&!Y?D("Please select a service to access this step."):($(1),A(e))},[H,Y]),te=(0,a.useCallback)(e=>{f(e),x(""),D(""),$(1),A(e=>1===e?2:e)},[]),re=(0,a.useCallback)(()=>{if(D(""),1===N){if(1===S)return H?void A(2):void D("Please select a jurisdiction to continue.");if(2===S)return Y?void A(3):void D("Please select at least one service to continue.");if(3===S)return void A(4);if(4===S)return H?void $(2):void D("Please select a jurisdiction to continue.")}2!==N?3===N&&$(4):$(3)},[N,S,H,Y]),ae=(0,a.useCallback)(()=>{if(D(""),1!==N)return 2===N?($(1),void A(4)):void(3!==N?4===N&&$(3):$(2));S>1&&A(S-1)},[N,S]),oe=!(1===N&&1===S),ne=1===N&&1===S&&!H||4===N,ie=1===N&&4===S?"Move to Details":"Next";return(0,b.jsx)(g,{children:(0,b.jsxs)("div",{className:"case-card",children:[(0,b.jsxs)("div",{className:"portal-tabs",role:"tablist","aria-label":"Portal actions",children:[(0,b.jsxs)("div",{className:"portal-tab-group "+("started"===z?"is-active":""),children:[(0,b.jsx)("button",{type:"button",role:"tab","aria-selected":"started"===z,className:"portal-tab portal-tab--started "+("started"===z?"is-selected":""),onClick:()=>M("started"),children:"GET STARTED"}),"started"===z?(0,b.jsx)("span",{className:"portal-tab-caret","aria-hidden":!0}):null]}),(0,b.jsx)("button",{type:"button",role:"tab","aria-selected":"callback"===z,className:"portal-tab portal-tab--callback "+("callback"===z?"is-selected":""),onClick:()=>M("callback"),children:"REQUEST CALLBACK"})]}),(0,b.jsx)("div",{className:"stage-row",children:(0,b.jsx)("div",{className:"stage-box",children:(0,b.jsx)("nav",{className:"top-stepper","aria-label":"Checkout stages",children:j.map((e,t)=>(0,b.jsxs)("div",{className:"top-stepper-segment",children:[(0,b.jsxs)("button",{type:"button",className:`top-stepper-node ${N===e.id?"active":""} ${N>e.id?"complete":""}`,onClick:()=>Z(e.id),"aria-current":N===e.id?"step":void 0,"aria-label":`Step ${e.id}: ${e.label}`,children:[(0,b.jsx)("span",{className:"top-stepper-circle",children:e.id}),(0,b.jsx)("span",{className:"top-stepper-label",children:e.label})]}),t<j.length-1?(0,b.jsx)("div",{className:"top-stepper-line","aria-hidden":!0}):null]},e.id))})})}),(0,b.jsxs)("div",{className:"layout",children:[(0,b.jsx)("aside",{className:"left-nav","aria-label":"Service steps",children:(0,b.jsx)("ul",{className:"left-nav-list",children:C.map((e,t)=>{const r=1===N&&S===e.id,a=1===N&&S>e.id,o=e.id>1&&!H,n=a;return(0,b.jsx)("li",{className:"left-nav-row",children:(0,b.jsxs)("button",{type:"button",className:`left-nav-item ${r?"active":""} ${a?"complete":""} ${o?"blocked":""}`,onClick:()=>ee(e.id),"aria-current":r?"step":void 0,children:[(0,b.jsxs)("span",{className:"left-nav-rail",children:[r&&(0,b.jsx)("span",{className:"left-nav-marker left-nav-marker--square",children:(0,b.jsx)(R,{})}),!r&&a&&(0,b.jsx)("span",{className:"left-nav-marker left-nav-marker--circle left-nav-marker--done",children:(0,b.jsx)(R,{small:!0})}),!r&&!a&&(0,b.jsx)("span",{className:"left-nav-marker left-nav-marker--circle left-nav-marker--pending"}),t<C.length-1?(0,b.jsx)("span",{className:"left-nav-connector "+(n?"is-blue":"")}):null]}),(0,b.jsxs)("span",{className:"left-nav-text",children:[(0,b.jsx)("span",{className:"left-nav-title",children:e.title}),(0,b.jsx)("span",{className:"left-nav-subtitle",children:e.subtitle})]})]})},e.id)})})}),(0,b.jsxs)("div",{className:"main-column",children:[(0,b.jsxs)("section",{className:"content",children:[1===N&&1===S||!I?null:(0,b.jsx)("div",{className:"nav-error",role:"alert",children:I}),(()=>{if(1===N&&1===S)return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h3",{className:"content-heading",children:o}),I?(0,b.jsx)("div",{className:"nav-error",role:"alert",children:I}):null,(0,b.jsxs)("div",{className:"search-row",children:[(0,b.jsx)("input",{type:"text",value:c,onChange:e=>d(e.target.value),placeholder:"Search","aria-label":"Search country"}),(0,b.jsx)("div",{className:"search-addon",children:(0,b.jsx)("button",{type:"button",className:"search-trigger","aria-label":"Search",children:(0,b.jsx)(U,{})})})]}),"loading"===_?(0,b.jsx)("p",{className:"countries-loading",role:"status",children:"Loading countries…"}):null,B&&0===Q.length?(0,b.jsxs)("div",{className:"nav-error countries-fetch-error",role:"alert",children:[B," Showing the configured list if available."]}):null,(0,b.jsx)("h4",{className:"section-label",children:"Major Countries"}),(0,b.jsx)("div",{className:"country-grid",children:W.map(e=>(0,b.jsx)("button",{type:"button",className:"country-btn "+(p?.countryCode===e.countryCode?"selected":""),onClick:()=>te(e),children:e.name},`major-${e.countryCode}`))}),(0,b.jsx)("h4",{className:"section-label",children:"All Countries"}),(0,b.jsx)("div",{className:"country-grid-scroll",role:"region","aria-label":"All countries scrollable list",children:(0,b.jsx)("div",{className:"country-grid country-grid--scroll-inner",children:X.map(e=>(0,b.jsx)("button",{type:"button",className:"country-btn "+(p?.countryCode===e.countryCode?"selected":""),onClick:()=>te(e),children:e.name},`all-${e.countryCode}`))})})]});if(1===N&&2===S){const e=p?.countryCode||"",t=F&&"loading"!==F?P(F,e):[],r=P(V,e),a=P(v,e);let o=[],n="none";return"loading"===F?(o=[],n="datapage-loading"):t.length>0?(o=t,n="datapage"):r.length>0?(o=r,n="widget-serviceDatasource"):K&&(o=a,n="fallback"),(0,b.jsxs)("div",{className:"services-screen",children:[(0,b.jsx)("h3",{className:"content-heading",children:"Select your SERVICE"}),(0,b.jsxs)("p",{className:"countries-loading",role:"status",children:["Debug: CountryCode=",p?.countryCode||"N/A"," | source=",n," | count=",o.length]}),q?(0,b.jsx)("div",{className:"nav-error",role:"alert",children:q}):null,"loading"===F?(0,b.jsx)("p",{className:"countries-loading",role:"status",children:"Loading services..."}):null,(0,b.jsx)("div",{className:"service-grid",children:o.map(e=>{const t=e.pyGUID||e.serviceId||e.name,r=u===t;return(0,b.jsxs)("button",{type:"button",className:"service-card "+(r?"selected":""),onClick:()=>{x(t),D("")},children:[(0,b.jsx)("span",{className:"service-card-icon","aria-hidden":!0,children:(0,b.jsx)("i",{className:e.iconSource||"fa-solid fa-circle"})}),(0,b.jsxs)("span",{className:"service-card-text",children:[(0,b.jsx)("span",{className:"service-card-title",children:e.name}),(0,b.jsx)("span",{className:"service-card-subtitle",children:"Services"})]})]},t)})})]})}return null})()]}),(0,b.jsxs)("footer",{className:"content-footer",children:[oe?(0,b.jsx)("button",{type:"button",className:"btn-prev",onClick:ae,children:"Previous"}):null,(0,b.jsx)("button",{type:"button",className:"btn-next",onClick:re,disabled:ne,children:ie})]})]})]})]})})})},957:(e,t,r)=>{window?.__webpack_nonce__&&(r.nc=window.__webpack_nonce__)}}]);
//# sourceMappingURL=NC1001_Nt_CustomDX_ServiceOfferingWidget.62ec7229.js.map