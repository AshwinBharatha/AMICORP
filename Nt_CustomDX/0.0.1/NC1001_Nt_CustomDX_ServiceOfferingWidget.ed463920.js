(self.webpackChunkamicorp=self.webpackChunkamicorp||[]).push([[18295163],{94:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var a=r(594),o=r(388),n=(r(957),r(267));const i="#1a2b4c",s="#e8edf3",l="#111827",c="#6b7280",d="#757575",p="#eceff2",f="#d1d5db",u="#d32f2f",x="24px",b=n.Ay.div(()=>n.AH`
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
      color: ${d};
      letter-spacing: 0.02em;
    }

    .section-label {
      margin: 22px 0 12px;
      font-size: 15px;
      font-weight: 700;
      color: ${l};
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
  `);var g=r(848);const h="D_ActiveCountryList",m={distinctResultsOnly:!0,select:[{field:"CountryCode"},{field:"Name"},{field:"IsMajor"},{field:"IsActive"}]};function v(){return"undefined"!=typeof globalThis?globalThis.PCore:void 0}const y=[{id:1,label:"Services"},{id:2,label:"Details"},{id:3,label:"Packages"},{id:4,label:"Payment"}],k=[{id:1,title:"Jurisdiction",subtitle:"Choose the jurisdiction."},{id:2,title:"Services",subtitle:"Select services to get started."},{id:3,title:"Products",subtitle:"Choose the products of your choice."},{id:4,title:"Add on Services",subtitle:"Find the additional services that fits your needs."}],w=e=>{const t=e.CountryCode??e.countryCode??e.pyCountryCode??e.code??"";return String(t).trim()},j=e=>e.name||e.countryName||e.country||e.pyLabel||e.pyCountry||e.Country||e.Name||"",N=e=>{const t=e.IsMajor??e.isMajor??e.pyIsMajor??e.major??e.isPrimary;return"string"==typeof t?"true"===t.toLowerCase()||"Y"===t||"1"===t:Boolean(!0===t)};function $(){return(0,g.jsx)("svg",{className:"search-icon",width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:(0,g.jsx)("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}function C(e){const t=new Set,r=[];for(const a of e){const e=j(a).trim();if(!e)continue;const o=w(a).trim(),n=(o||e).toLowerCase();t.has(n)||(t.add(n),r.push({name:e,countryCode:o||e,isMajor:N(a)}))}return r.sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"})),r}function S({small:e}){return(0,g.jsx)("svg",{className:e?"icon-check icon-check--sm":"icon-check",width:e?10:12,height:e?10:12,viewBox:"0 0 24 24","aria-hidden":!0,children:(0,g.jsx)("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}const z=(0,o.A)(function(e){const{datasource:t,header:r="Choose your JURISDICTION",getPConnect:o}=e,n=(0,a.useRef)(o);n.current=o;const[i,s]=(0,a.useState)(""),[l,c]=(0,a.useState)(""),[d,p]=(0,a.useState)(1),[f,u]=(0,a.useState)(1),[x,w]=(0,a.useState)(""),[j,N]=(0,a.useState)("started"),[z,A]=(0,a.useState)(null),[P,I]=(0,a.useState)(""),R=Boolean(l.trim());(0,a.useEffect)(()=>{const e=v();if(!e?.getDataPageUtils?.()?.getDataAsync)return;let t=!1;return A("loading"),I(""),async function(){const e=v(),t=e?.getDataPageUtils?.()?.getDataAsync;if("function"!=typeof t)return[];const r=(()=>{try{return n.current().getContextName()||""}catch{return""}})(),a=e=>Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.pxResults)?e.pxResults:[];try{const e=[];let o=1;for(;;){const n={pageNumber:o,pageSize:100},i=a(await t(h,r,{},n,{...m}));if(e.push(...i),i.length<100)break;o+=1}return e}catch(e){const o=[()=>t(h,r),()=>t(h),()=>t(h,r,{})];let n=e;for(const e of o)try{return a(await e())}catch(e){n=e}throw n}}().then(e=>{t||(I(""),A(C(e)))}).catch(e=>{console.error(e),t||(I("Could not load countries from the server."),A(null))}),()=>{t=!0}},[]);const M=(0,a.useMemo)(()=>null!==z&&"loading"!==z?z:"loading"===z?[]:C(t?.source||[]),[t,z]),D=(0,a.useMemo)(()=>M.filter(e=>e.isMajor),[M]),L=(0,a.useMemo)(()=>{const e=i.trim().toLowerCase();return e?M.filter(t=>t.name.toLowerCase().includes(e)):M},[M,i]),_=(0,a.useCallback)(e=>{w(""),e>1&&!R?w("Please select a jurisdiction before continuing to the next stage."):p(e)},[R]),U=(0,a.useCallback)(e=>{w(""),e>1&&!R?w("Please select a jurisdiction to access this step."):(p(1),u(e))},[R]),T=(0,a.useCallback)(e=>{c(e),w(""),p(1),u(e=>1===e?2:e)},[]),B=(0,a.useCallback)(()=>{if(w(""),1===d){if(1===f)return R?void u(2):void w("Please select a jurisdiction to continue.");if(2===f)return void u(3);if(3===f)return void u(4);if(4===f)return R?void p(2):void w("Please select a jurisdiction to continue.")}2!==d?3===d&&p(4):p(3)},[d,f,R]),E=(0,a.useCallback)(()=>{if(w(""),1!==d)return 2===d?(p(1),void u(4)):void(3!==d?4===d&&p(3):p(2));f>1&&u(f-1)},[d,f]),O=!(1===d&&1===f),q=1===d&&1===f&&!R||4===d,J=1===d&&4===f?"Move to Details":"Next",F=(e,t)=>(0,g.jsxs)("div",{className:"sample-screen",children:[(0,g.jsx)("h3",{className:"sample-screen-title",children:e}),(0,g.jsx)("p",{className:"sample-screen-body",children:t}),l?(0,g.jsxs)("p",{className:"sample-screen-meta",children:["Selected jurisdiction: ",(0,g.jsx)("strong",{children:l})]}):null]});return(0,g.jsx)(b,{children:(0,g.jsxs)("div",{className:"case-card",children:[(0,g.jsxs)("div",{className:"portal-tabs",role:"tablist","aria-label":"Portal actions",children:[(0,g.jsxs)("div",{className:"portal-tab-group "+("started"===j?"is-active":""),children:[(0,g.jsx)("button",{type:"button",role:"tab","aria-selected":"started"===j,className:"portal-tab portal-tab--started "+("started"===j?"is-selected":""),onClick:()=>N("started"),children:"GET STARTED"}),"started"===j?(0,g.jsx)("span",{className:"portal-tab-caret","aria-hidden":!0}):null]}),(0,g.jsx)("button",{type:"button",role:"tab","aria-selected":"callback"===j,className:"portal-tab portal-tab--callback "+("callback"===j?"is-selected":""),onClick:()=>N("callback"),children:"REQUEST CALLBACK"})]}),(0,g.jsx)("div",{className:"stage-row",children:(0,g.jsx)("div",{className:"stage-box",children:(0,g.jsx)("nav",{className:"top-stepper","aria-label":"Checkout stages",children:y.map((e,t)=>(0,g.jsxs)("div",{className:"top-stepper-segment",children:[(0,g.jsxs)("button",{type:"button",className:`top-stepper-node ${d===e.id?"active":""} ${d>e.id?"complete":""}`,onClick:()=>_(e.id),"aria-current":d===e.id?"step":void 0,"aria-label":`Step ${e.id}: ${e.label}`,children:[(0,g.jsx)("span",{className:"top-stepper-circle",children:e.id}),(0,g.jsx)("span",{className:"top-stepper-label",children:e.label})]}),t<y.length-1?(0,g.jsx)("div",{className:"top-stepper-line","aria-hidden":!0}):null]},e.id))})})}),(0,g.jsxs)("div",{className:"layout",children:[(0,g.jsx)("aside",{className:"left-nav","aria-label":"Service steps",children:(0,g.jsx)("ul",{className:"left-nav-list",children:k.map((e,t)=>{const r=1===d&&f===e.id,a=1===d&&f>e.id,o=e.id>1&&!R,n=a;return(0,g.jsx)("li",{className:"left-nav-row",children:(0,g.jsxs)("button",{type:"button",className:`left-nav-item ${r?"active":""} ${a?"complete":""} ${o?"blocked":""}`,onClick:()=>U(e.id),"aria-current":r?"step":void 0,children:[(0,g.jsxs)("span",{className:"left-nav-rail",children:[r&&(0,g.jsx)("span",{className:"left-nav-marker left-nav-marker--square",children:(0,g.jsx)(S,{})}),!r&&a&&(0,g.jsx)("span",{className:"left-nav-marker left-nav-marker--circle left-nav-marker--done",children:(0,g.jsx)(S,{small:!0})}),!r&&!a&&(0,g.jsx)("span",{className:"left-nav-marker left-nav-marker--circle left-nav-marker--pending"}),t<k.length-1?(0,g.jsx)("span",{className:"left-nav-connector "+(n?"is-blue":"")}):null]}),(0,g.jsxs)("span",{className:"left-nav-text",children:[(0,g.jsx)("span",{className:"left-nav-title",children:e.title}),(0,g.jsx)("span",{className:"left-nav-subtitle",children:e.subtitle})]})]})},e.id)})})}),(0,g.jsxs)("div",{className:"main-column",children:[(0,g.jsxs)("section",{className:"content",children:[1===d&&1===f||!x?null:(0,g.jsx)("div",{className:"nav-error",role:"alert",children:x}),1===d&&1===f?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h3",{className:"content-heading",children:r}),x?(0,g.jsx)("div",{className:"nav-error",role:"alert",children:x}):null,(0,g.jsxs)("div",{className:"search-row",children:[(0,g.jsx)("input",{type:"text",value:i,onChange:e=>s(e.target.value),placeholder:"Search","aria-label":"Search country"}),(0,g.jsx)("div",{className:"search-addon",children:(0,g.jsx)("button",{type:"button",className:"search-trigger","aria-label":"Search",children:(0,g.jsx)($,{})})})]}),"loading"===z?(0,g.jsx)("p",{className:"countries-loading",role:"status",children:"Loading countries…"}):null,P&&0===M.length?(0,g.jsxs)("div",{className:"nav-error countries-fetch-error",role:"alert",children:[P," Showing the configured list if available."]}):null,(0,g.jsx)("h4",{className:"section-label",children:"Major Countries"}),(0,g.jsx)("div",{className:"country-grid",children:D.map(e=>(0,g.jsx)("button",{type:"button",className:"country-btn "+(l===e.name?"selected":""),onClick:()=>T(e.name),children:e.name},`major-${e.countryCode}`))}),(0,g.jsx)("h4",{className:"section-label",children:"All Countries"}),(0,g.jsx)("div",{className:"country-grid-scroll",role:"region","aria-label":"All countries scrollable list",children:(0,g.jsx)("div",{className:"country-grid country-grid--scroll-inner",children:L.map(e=>(0,g.jsx)("button",{type:"button",className:"country-btn "+(l===e.name?"selected":""),onClick:()=>T(e.name),children:e.name},`all-${e.countryCode}`))})})]}):1===d&&2===f?F("Services","Sample screen: choose the services for your incorporation. Replace this content with your real services UI."):1===d&&3===f?F("Products","Sample screen: pick product packages. Replace this content with your product catalog."):1===d&&4===f?F("Add on Services","Sample screen: optional add-ons. Replace this content with your add-on offerings."):2===d?F("Details","Sample screen: capture company and contact details. Replace with your Details stage UI."):3===d?F("Packages","Sample screen: review and select a package. Replace with your Packages stage UI."):F("Payment","Sample screen: payment and confirmation. Replace with your Payment stage UI.")]}),(0,g.jsxs)("footer",{className:"content-footer",children:[O?(0,g.jsx)("button",{type:"button",className:"btn-prev",onClick:E,children:"Previous"}):null,(0,g.jsx)("button",{type:"button",className:"btn-next",onClick:B,disabled:q,children:J})]})]})]})]})})})},957:(e,t,r)=>{window?.__webpack_nonce__&&(r.nc=window.__webpack_nonce__)}}]);
//# sourceMappingURL=NC1001_Nt_CustomDX_ServiceOfferingWidget.ed463920.js.map