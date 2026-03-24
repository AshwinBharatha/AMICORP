// AMICORP portal case widget — matches portal greys, red CTA, blue progress, white content
import styled, { css } from 'styled-components';

const primaryBlue = '#1a2b4c';
const stageInactiveCircle = '#8b96a8';
const stageLineGrey = '#b8c4d4';
const panelGrey = '#e8edf3';
const textBlack = '#111827';
const textGray = '#6b7280';
const textGrayMid = '#757575';
const chipBg = '#eceff2';
const chipBorder = '#d1d5db';
const redCta = '#d32f2f';
const callbackGray = '#8d9aa8';
const errorBg = '#fef2f2';
const errorText = '#b42318';
const nextBtn = '#1a2b4c';
/* Aligns stage strip with .layout (steps + main content) */
const caseInlinePad = '24px';

export default styled.div(() => {
  return css`
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    padding: 0;
    color: ${textBlack};
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
      outline: 2px solid ${primaryBlue};
      outline-offset: 3px;
    }

    .portal-tab--started {
      background: ${redCta};
      box-shadow: 0 2px 6px rgba(211, 47, 47, 0.35);
    }

    .portal-tab--started:hover,
    .portal-tab-group.is-active .portal-tab--started {
      background: ${redCta};
    }

    .portal-tab--started:hover {
      filter: brightness(1.05);
    }

    .portal-tab--callback {
      background: ${callbackGray};
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
      border-top: 10px solid ${redCta};
      filter: drop-shadow(0 2px 2px rgba(211, 47, 47, 0.25));
    }

    /* Stage strip: same left/right as steps column + main (search) — see ${caseInlinePad} */
    .stage-row {
      display: block;
      width: 100%;
      padding: 0 ${caseInlinePad};
      margin-bottom: 12px;
      background: #ffffff;
      box-sizing: border-box;
    }

    .stage-box {
      width: 100%;
      margin: 0;
      background: ${panelGrey};
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
      background: ${stageInactiveCircle};
      color: #ffffff;
      border: none;
      transition:
        background 0.15s,
        color 0.15s;
    }

    .top-stepper-node.active .top-stepper-circle,
    .top-stepper-node.complete .top-stepper-circle {
      background: ${primaryBlue};
      color: #ffffff;
    }

    .top-stepper-label {
      font-size: 13px;
      font-weight: 600;
      color: ${textGray};
    }

    .top-stepper-node.active .top-stepper-label {
      font-size: 14px;
      color: ${textBlack};
      font-weight: 700;
    }

    .top-stepper-node.complete:not(.active) .top-stepper-label {
      font-size: 13px;
      color: ${textGrayMid};
      font-weight: 600;
    }

    .top-stepper-line {
      flex: 1;
      height: 4px;
      background: ${stageLineGrey};
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
      padding: 0 ${caseInlinePad} 20px;
    }

    .left-nav {
      background-color: ${panelGrey};
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
      color: ${primaryBlue};
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
      background: ${primaryBlue};
      border: 2px solid ${primaryBlue};
    }

    .left-nav-marker--circle {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid ${primaryBlue};
    }

    .left-nav-marker--done {
      background: ${primaryBlue};
      border-color: ${primaryBlue};
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
      background: ${primaryBlue};
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
      color: ${textBlack};
      line-height: 1.25;
      margin-bottom: 3px;
    }

    .left-nav-item:not(.active):not(.complete) .left-nav-title {
      color: ${textGrayMid};
      font-weight: 700;
    }

    .left-nav-item.active .left-nav-title {
      color: ${textBlack};
    }

    .left-nav-subtitle {
      display: block;
      font-size: 12px;
      color: ${textGray};
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
      color: ${primaryBlue};
      letter-spacing: 0.02em;
    }

    .section-label {
      margin: 22px 0 12px;
      font-size: 15px;
      font-weight: 700;
      color: ${primaryBlue};
    }

    .section-label:first-of-type {
      margin-top: 6px;
    }

    .nav-error {
      background: ${errorBg};
      color: ${errorText};
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
      border: 1px solid ${chipBorder};
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
      color: ${textBlack};
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
      border: 2px solid ${primaryBlue};
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
      color: ${primaryBlue};
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
      color: ${textGray};
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
      border: 1px solid ${chipBorder};
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
      background: ${chipBg};
      color: ${textBlack};
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
      color: ${textBlack};
      padding: 9px 17px;
    }

    .sample-screen {
      max-width: 560px;
    }

    .sample-screen-title {
      margin: 0 0 12px;
      font-size: 20px;
      font-weight: 700;
      color: ${textBlack};
    }

    .sample-screen-body {
      margin: 0 0 16px;
      font-size: 15px;
      line-height: 1.55;
      color: ${textGray};
    }

    .sample-screen-meta {
      margin: 0;
      font-size: 14px;
      color: ${textGray};
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
      color: ${textBlack};
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
      color: ${textBlack};
    }

    .service-card.selected .service-card-title {
      color: #ac2d47;
    }

    .service-card-subtitle {
      font-size: 12px;
      line-height: 1.3;
      color: ${textGray};
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
      color: ${primaryBlue};
      border: 1px solid ${chipBorder};
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
      background: ${chipBg};
      border-color: #9ca3af;
    }

    .btn-next {
      background: ${nextBtn};
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
  `;
});
