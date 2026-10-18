window.__ModuleLoader__.load({
  id: 'dsh_win95_skin',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    /**
     * Windows 95 palette, identical for light and dark: the skin is a period
     * desktop, not a modern theme. Alias tokens only, so every component and
     * the Appearance switch keep working.
     */
    const PALETTE = {
      '--dsw-alias-bg-base': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-bg-layer-1': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-bg-layer-2': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-bg-overlay': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-bg-module-platform': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-menu-surface-fill': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-border-l1': { light: '#a0a0a0', dark: '#a0a0a0' },
      '--dsw-alias-border-l2': { light: '#808080', dark: '#808080' },
      '--dsw-alias-border-l3': { light: '#404040', dark: '#404040' },
      '--dsw-alias-border-l4': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-alias-separator-primary': { light: '#808080', dark: '#808080' },
      '--dsw-alias-label-primary': { light: '#000000', dark: '#000000' },
      '--dsw-alias-label-secondary': { light: '#404040', dark: '#404040' },
      '--dsw-alias-label-tertiary': { light: '#606060', dark: '#606060' },
      '--dsw-alias-label-caption': { light: '#606060', dark: '#606060' },
      '--dsw-alias-label-dimmed': { light: '#808080', dark: '#808080' },
      '--dsw-alias-label-primary-dimmed': { light: '#000000', dark: '#000000' },
      '--dsw-alias-label-primary-inverted': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-label-primary-foreground': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-label-primary-bluish': { light: '#000080', dark: '#000080' },
      '--dsw-alias-brand-primary': { light: '#000080', dark: '#000080' },
      '--dsw-alias-state-business-primary': { light: '#000080', dark: '#000080' },
      '--dsw-alias-state-business-tertiary': { light: '#1084d0', dark: '#1084d0' },
      '--dsw-alias-state-error-primary': { light: '#800000', dark: '#800000' },
      '--dsw-alias-state-success-primary': { light: '#008000', dark: '#008000' },
      '--dsw-alias-state-warn-primary': { light: '#808000', dark: '#808000' },
      '--dsw-alias-state-idle-primary': { light: '#808080', dark: '#808080' },
      '--dsw-alias-interactive-bg-hover': { light: '#d0d0d0', dark: '#d0d0d0' },
      '--dsw-alias-interactive-bg-hover-solid': { light: '#c8c8c8', dark: '#c8c8c8' },
      '--dsw-alias-button-primary-hover': { light: '#1084d0', dark: '#1084d0' },
      '--dsw-alias-button-floating-fill': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-button-floating-hover': { light: '#d0d0d0', dark: '#d0d0d0' },
      '--dsw-alias-button-info-fill': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-button-info-hover': { light: '#d0d0d0', dark: '#d0d0d0' },
      '--dsw-alias-button-elevated-fill': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-menu-icon': { light: '#000000', dark: '#000000' },
      '--dsw-specific-sidebar-fill': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-specific-menu': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-specific-input-major': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-specific-bubble': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-specific-selector': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-markdown-code-block': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-markdown-code-block-banner': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-scrollbar-bg-l1': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-scrollbar-bg-l2': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-scrollbar-hover-l2': { light: '#a0a0a0', dark: '#a0a0a0' },
      '--dsw-alias-turn-trigger-bg': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-alias-turn-trigger-bg-hover': { light: '#d0d0d0', dark: '#d0d0d0' },
      '--dsw-specific-sidebar-nav-item-active': { light: '#d0d0d0', dark: '#d0d0d0' },
      '--dsw-specific-sidebar-nav-item-hover': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-specific-sidebar-nav-item-active-accent': { light: '#000080', dark: '#000080' },
      '--dsw-alias-tooltip-bg': { light: '#ffffe1', dark: '#ffffe1' },
      '--dsw-alias-toast-bg': { light: '#000080', dark: '#000080' },
      '--dsw-alias-toast-label': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-switch-thumb': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-link': { light: '#0000ff', dark: '#0000ff' },

      /* Diff viewers and markdown code must follow the light palette too. */
      '--dsw-alias-file-diff-added-bg': { light: '#e6f4e7', dark: '#e6f4e7' },
      '--dsw-alias-file-diff-added-gutter': { light: '#edf7ed', dark: '#edf7ed' },
      '--dsw-alias-file-diff-added-marker': { light: '#01a241', dark: '#01a241' },
      '--dsw-alias-file-diff-deleted-bg': { light: '#fce6e2', dark: '#fce6e2' },
      '--dsw-alias-file-diff-deleted-gutter': { light: '#fdece9', dark: '#fdece9' },
      '--dsw-alias-file-diff-deleted-marker': { light: '#ba2723', dark: '#ba2723' },
      '--dsw-alias-code-diff-added': { light: '#01a24114', dark: '#01a24114' },
      '--dsw-alias-code-diff-deleted': { light: '#ec131314', dark: '#ec131314' },
      '--dsw-alias-markdown-inline-code': { light: '#f0f0f0', dark: '#f0f0f0' },
      '--dsw-alias-markdown-citation': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-markdown-placeholder': { light: '#a0a0a0', dark: '#a0a0a0' },
      '--dsw-alias-markdown-tag': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-alias-markdown-code-segment-selected': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-markdown-code-segment-unselected': { light: '#dfdfdf', dark: '#dfdfdf' },

      /* Syntax colours: the light shiki palette, so code stays readable on white. */
      '--shiki-token-constant': { light: '#1c7ed6', dark: '#1c7ed6' },
      '--shiki-token-string': { light: '#2f9e44', dark: '#2f9e44' },
      '--shiki-token-comment': { light: '#868e96', dark: '#868e96' },
      '--shiki-token-keyword': { light: '#d6336c', dark: '#d6336c' },
      '--shiki-token-parameter': { light: '#e8590c', dark: '#e8590c' },
      '--shiki-token-function': { light: '#6741d9', dark: '#6741d9' },
      '--shiki-token-string-expression': { light: '#2b8a3e', dark: '#2b8a3e' },
      '--shiki-token-punctuation': { light: '#495057', dark: '#495057' },
      '--shiki-token-link': { light: '#1971c2', dark: '#1971c2' },

      /* Remaining dark-mode surfaces that would otherwise stay dark. */
      '--dsw-alias-bg-document-preview': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-label-document-preview': { light: '#404040', dark: '#404040' },
      '--dsw-alias-bg-layer-3': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-alias-bg-multi-select': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-alias-bg-skeleton': { light: '#0000000a', dark: '#0000000a' },
      '--dsw-alias-bg-mask-1': { light: '#0000003d', dark: '#0000003d' },
      '--dsw-alias-bg-mask-2': { light: '#0000001f', dark: '#0000001f' },
      '--dsw-alias-bg-mask-3': { light: '#0000007a', dark: '#0000007a' },
      '--dsw-alias-interactive-bg-active': { light: '#00000018', dark: '#00000018' },
      '--dsw-alias-interactive-bg-hover-accent': { light: '#00000010', dark: '#00000010' },
      '--dsw-alias-interactive-bg-hover-danger': { light: '#ec13130d', dark: '#ec13130d' },
      '--dsw-alias-button-contrast-fill': { light: '#404040', dark: '#404040' },
      '--dsw-alias-button-ghost-active-border': { light: '#808080', dark: '#808080' },
      '--dsw-alias-button-ghost-active-fill': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-alias-button-ghost-active-hover': { light: '#d0d0d0', dark: '#d0d0d0' },
      '--dsw-alias-button-tool-bar-fill': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-button-tool-bar-hover': { light: '#d0d0d0', dark: '#d0d0d0' },
      '--dsw-alias-menu-group-header-fill': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-specific-tip': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-specific-login-input': { light: '#ffffff', dark: '#ffffff' },
      '--dsw-alias-onboarding-card-fill': { light: '#c0c0c0', dark: '#c0c0c0' },
      '--dsw-alias-onboarding-secondary-fill': { light: '#dfdfdf', dark: '#dfdfdf' },
      '--dsw-alias-onboarding-checkbox-border': { light: '#808080', dark: '#808080' },
      '--dsw-alias-label-shimmer': { light: '#00000040', dark: '#00000040' },
    };

    /**
     * Windows 95 chrome: raised and sunken bevels, silver controls, white
     * document fields, navy selection, classic 16px scrollbars with arrow
     * buttons, and square-capped pixel icons.
     */
    const W95_CSS = [
      "@font-face{font-family:'DSH Fusion Pixel';src:url('/dsh_win95_skin/fusion-pixel-text.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap;}",
      "@font-face{font-family:'DSH Fusion Pixel Mono';src:url('/dsh_win95_skin/fusion-pixel-mono.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap;}",

      ':root{',
      "--dsh-font-family-text:'DSH Fusion Pixel','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif !important;",
      "--dsh-font-family-text-default:'DSH Fusion Pixel','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif !important;",
      "--dsh-font-family-code:'DSH Fusion Pixel Mono','SF Mono',Menlo,Consolas,monospace !important;",
      "--dsh-font-family-code-default:'DSH Fusion Pixel Mono','SF Mono',Menlo,Consolas,monospace !important;",
      "--dsw-font-family:'DSH Fusion Pixel','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif !important;",
      "--dsw-font-family-code:'DSH Fusion Pixel Mono','SF Mono',Menlo,Consolas,monospace !important;",
      '--dsw-radius-xs:0px !important;',
      '--dsw-radius-sm:0px !important;',
      '--dsw-radius-md:0px !important;',
      '--dsw-radius-lg:0px !important;',
      '--dsw-radius-xl:0px !important;',
      '--dsw-radius-panel:0px !important;',
      '--w95-face:#c0c0c0;',
      '--w95-light:#ffffff;',
      '--w95-shadow:#808080;',
      '--w95-dark:#000000;',
      '--w95-hilight:#dfdfdf;',
      '--w95-navy:#000080;',
      '--w95-raised:inset 1px 1px 0 0 #ffffff,inset -1px -1px 0 0 #000000,inset 2px 2px 0 0 #dfdfdf,inset -2px -2px 0 0 #808080;',
      '--w95-sunken:inset 1px 1px 0 0 #808080,inset -1px -1px 0 0 #ffffff,inset 2px 2px 0 0 #000000,inset -2px -2px 0 0 #dfdfdf;',
      '}',

      'body{--dsh-scrollbar-width:16px !important;--dsw-elevation-soft:none !important;--dsw-elevation-panel:none !important;--dsw-elevation-prominent:none !important;background-color:#c0c0c0;}',
      'body,body *{--dsw-elevation-soft:none !important;--dsw-elevation-panel:none !important;--dsw-elevation-prominent:none !important;}',

      'html,body{color-scheme:light !important;}',
      'html,body,body *,body *::before,body *::after{border-radius:0 !important;}',
      '*,*::before,*::after{backdrop-filter:none !important;-webkit-backdrop-filter:none !important;}',

      "body,button,input,textarea,select,optgroup,option,[contenteditable='true']{font-family:var(--dsw-font-family) !important;font-variant-ligatures:none;}",
      'pre,code,kbd,samp,tt{font-family:var(--dsw-font-family-code) !important;font-variant-ligatures:none;}',
      '::selection{background-color:#000080;color:#ffffff;}',
      "input,textarea,[contenteditable='true']{caret-color:#000000;}",

      /* ——— classic scrollbars ——— */
      'html ::-webkit-scrollbar{width:16px;height:16px;}',
      'html ::-webkit-scrollbar-track{background-color:#c0c0c0;background-image:repeating-conic-gradient(#ffffff 0% 25%,#c0c0c0 0% 50%);background-size:2px 2px;}',
      'html ::-webkit-scrollbar-thumb{background-color:#c0c0c0;border:1px solid;border-color:#ffffff #000000 #000000 #ffffff;background-clip:content-box;}',
      'html ::-webkit-scrollbar-thumb:hover{background-color:#d0d0d0;}',
      'html ::-webkit-scrollbar-button:single-button{display:block;width:16px;height:16px;background-color:#c0c0c0;border:1px solid;border-color:#ffffff #000000 #000000 #ffffff;background-repeat:no-repeat;background-position:center;}',
      'html ::-webkit-scrollbar-button:single-button:vertical:decrement{background-image:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22 shape-rendering=%22crispEdges%22%3E%3Cpath d=%22M4 1L7 6H1Z%22 fill=%22%23000000%22/%3E%3C/svg%3E");}',
      'html ::-webkit-scrollbar-button:single-button:vertical:increment{background-image:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22 shape-rendering=%22crispEdges%22%3E%3Cpath d=%22M1 2H7L4 7Z%22 fill=%22%23000000%22/%3E%3C/svg%3E");}',
      'html ::-webkit-scrollbar-button:single-button:horizontal:decrement{background-image:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22 shape-rendering=%22crispEdges%22%3E%3Cpath d=%22M6 1V7L1 4Z%22 fill=%22%23000000%22/%3E%3C/svg%3E");}',
      'html ::-webkit-scrollbar-button:single-button:horizontal:increment{background-image:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22 shape-rendering=%22crispEdges%22%3E%3Cpath d=%22M2 1L7 4L2 7Z%22 fill=%22%23000000%22/%3E%3C/svg%3E");}',
      'html ::-webkit-scrollbar-corner{background-color:#c0c0c0;}',

      /* ——— window frame ——— */
      'html::after{content:"";position:fixed;inset:0;z-index:2147483646;pointer-events:none;box-shadow:var(--w95-raised);}',

      /* ——— controls ——— */
      "button:not([role='menuitem']):not([role='option']),[role='button']{background-color:#c0c0c0 !important;box-shadow:var(--w95-raised) !important;color:#000000 !important;}",
      "button:not([role='menuitem']):not([role='option']):hover:not(:disabled){background-color:#d0d0d0 !important;}",
      "button:not([role='menuitem']):not([role='option']):active:not(:disabled),[role='button']:active{box-shadow:var(--w95-sunken) !important;transform:translate(1px,1px);}",
      "button[class*='_primary']:not([role='menuitem']):not([role='option']){background-color:#000080 !important;color:#ffffff !important;}",
      "button[class*='_primary']:not([role='menuitem']):not([role='option']):hover:not(:disabled){background-color:#1084d0 !important;}",

      "input:not([type='checkbox']):not([type='radio']):not([type='range']):not([type='color']),textarea,select{background-color:#ffffff !important;color:#000000 !important;border:0 !important;box-shadow:var(--w95-sunken) !important;}",
      "div:has(> input:not([type='checkbox']):not([type='radio']):not([type='range'])){background-color:transparent !important;border:0 !important;box-shadow:none !important;}",
      "input[type='checkbox']{appearance:none;-webkit-appearance:none;width:14px;height:14px;margin:0;background-color:#ffffff;box-shadow:var(--w95-sunken);}",
      "input[type='checkbox']:checked{background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 shape-rendering=%22crispEdges%22%3E%3Cpath d=%22M2 6L5 9L10 2%22 fill=%22none%22 stroke=%22%23000000%22 stroke-width=%222%22/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:center;}",
      "input[type='radio']{accent-color:#000080;}",

      "[data-conversation-tabs]{background-color:#c0c0c0 !important;margin:8px -28px 0 -20px !important;padding:4px 28px 0 20px !important;gap:0 !important;box-shadow:none !important;align-items:flex-end !important;}",
      "button[role='tab'][aria-selected]{box-sizing:border-box !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;height:24px !important;margin:0 !important;padding:0 14px !important;line-height:16px !important;background-color:#c0c0c0 !important;box-shadow:var(--w95-raised) !important;position:relative !important;}",
      "button[role='tab'][aria-selected='true']{height:26px !important;margin-bottom:-1px !important;background-color:#c0c0c0 !important;box-shadow:inset 0 1px 0 #ffffff,inset 0 2px 0 #dfdfdf,inset 1px 0 0 #ffffff,inset 2px 0 0 #dfdfdf,inset -1px 0 0 #000000,inset -2px 0 0 #808080 !important;z-index:1 !important;}",
      "[role='tab']::after{display:none !important;}",
      "[role='switch']{background-color:#ffffff !important;box-shadow:var(--w95-sunken) !important;}",
      "[role='switch'] > *{background-color:#c0c0c0 !important;box-shadow:var(--w95-raised) !important;}",

      /* ——— surfaces ——— */
      "[role='menu'],[role='listbox'],[role='tree']{background-color:#c0c0c0 !important;border:0 !important;box-shadow:var(--w95-raised) !important;}",
      "[role='menu']{padding:2px !important;}",
      "[role='menu'] > div:first-child{box-shadow:var(--w95-raised) !important;}",
      "[role='menuitem']{min-height:22px !important;padding:2px 8px !important;font-size:12px !important;line-height:18px !important;}",
      "[role='menuitem'] [class*='itemIcon']{width:14px !important;height:14px !important;}",
      "[role='menuitem']:hover:not(:disabled),[role='menuitem']:focus-visible,[role='option']:hover{background-color:#000080 !important;color:#ffffff !important;}",
      "[role='menuitem']:hover:not(:disabled) *,[role='menuitem']:focus-visible *,[role='option']:hover *{color:#ffffff !important;}",
      "[role='tooltip']{background-color:#ffffe1 !important;color:#000000 !important;border:1px solid #000000 !important;box-shadow:none !important;}",
      "[role='tooltip'] *{color:#000000 !important;}",
      "[role='dialog']:not(:has(img)){background-color:#c0c0c0 !important;border:0 !important;box-shadow:var(--w95-raised),8px 8px 0 0 rgba(0,0,0,.35) !important;outline:1px solid #000000 !important;}",
      "[aria-labelledby]:has([data-slot='settings.header']){background-color:#c0c0c0 !important;box-shadow:var(--w95-raised),10px 10px 0 0 rgba(0,0,0,.35) !important;outline:1px solid #000000 !important;}",
      ":has(> [data-changes-hover-preview]){background-color:#c0c0c0 !important;padding:2px !important;box-shadow:var(--w95-raised),8px 8px 0 0 rgba(0,0,0,.35) !important;outline:1px solid #000000 !important;overflow:visible !important;}",
      "[data-changes-hover-preview] > div:first-child{background-color:#000080 !important;color:#ffffff !important;padding:2px 6px !important;}",
      "[data-changes-hover-preview] > div:first-child *{color:#ffffff !important;}",

      /* ——— session / workspace hover cards: silver tooltip window, black text ——— */
      "div[class*='_card_']:has([class*='hoverContent']){background-color:#c0c0c0 !important;color:#000000 !important;box-shadow:var(--w95-raised),6px 6px 0 0 rgba(0,0,0,.35) !important;outline:1px solid #000000 !important;}",
      "div[class*='_card_']:has([class*='hoverContent']) [class*='hoverTitle']{color:#000000 !important;font-weight:700 !important;}",
      "div[class*='_card_']:has([class*='hoverContent']) :is([class*='hoverPath'],[class*='hoverTime']){color:#404040 !important;}",
      "div[class*='_card_']:has([class*='hoverContent']) [class*='hoverStatus']{color:#000000 !important;}",
      "div[class*='_card_']:has([class*='hoverContent']) [class*='hoverStatus'] svg,div[class*='_card_']:has([class*='hoverContent']) [class*='hoverArchived'] svg{color:#000000 !important;fill:currentColor !important;}",
      "div[class*='_card_']:has(> [class*='_copied_']){background-color:#c0c0c0 !important;box-shadow:var(--w95-raised),6px 6px 0 0 rgba(0,0,0,.35) !important;outline:1px solid #000000 !important;}",
      "div[class*='_card_']:has(> [class*='_copied_']) [class*='_copied_']{color:#000000 !important;}",

      "[class*='menu']:has(> ul[aria-label]){background-color:#c0c0c0 !important;padding:2px !important;box-shadow:var(--w95-raised),8px 8px 0 0 rgba(0,0,0,.35) !important;outline:1px solid #000000 !important;overflow:visible !important;}",
      "[class*='menu']:has(> ul[aria-label]) > div:first-child{box-shadow:var(--w95-raised) !important;}",
      "[class*='menu']:has(> ul[aria-label]) > ul > li:first-child{background-color:#000080 !important;}",
      "[class*='menu']:has(> ul[aria-label]) > ul > li:first-child *{color:#ffffff !important;}",
      "[class*='menu']:has(> ul[aria-label]) > ul > li:first-child button,[class*='menu']:has(> ul[aria-label]) > ul > li:first-child button *{color:#000000 !important;}",

      '[data-composer-card]{background-color:#ffffff !important;box-shadow:var(--w95-sunken) !important;}',
      "[data-slot='main'] > *{background-color:#ffffff !important;}",
      "body:has(header[data-window-drag]) [data-conversation-region='chat']{box-shadow:inset 0 1px 0 #404040 !important;}",
      "[data-slot='sidebar'] > *{background-color:#c0c0c0 !important;border-right:1px solid #808080 !important;}",
      "[data-slot='sidebar.brand.mark'],[data-slot='conversation.hero.brand.mark']{display:none !important;}",
      "div[data-window-drag]:has([data-slot='sidebar.brand.name']){display:none !important;}",
      ":has(> [data-slot='settings.header']):not(:has([data-slot='settings.section'])){background-color:#000080 !important;}",
      ":has(> [data-slot='settings.header']):not(:has([data-slot='settings.section'])) *{color:#ffffff !important;}",
      'header[data-window-drag]{background-color:#000080 !important;border-bottom:0 !important;}',
      "header[data-window-drag] *:not([role='menu']):not([role='menu'] *):not([role='dialog'] *):not([role='tooltip'] *):not(button):not(button *):not([role='tab']):not([role='tab'] *){color:#ffffff !important;}",
      /* ——— pixel icons ——— */
      'svg,svg *{shape-rendering:crispEdges;stroke-linecap:square !important;stroke-linejoin:miter !important;}',
      'svg.dsh-pixel-icon > *{visibility:hidden !important;}',
      'svg.dsh-pixel-icon{background-color:currentColor;}',

      /* ——— pixel cursor ——— */
      'html,body{cursor:url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 16 16%22 shape-rendering=%22crispEdges%22%3E%3Cpath d=%22M1 1L1 12L4 9L6 13L8 12L6 8L10 8Z%22 fill=%22%23ffffff%22 stroke=%22%23000000%22/%3E%3C/svg%3E") 1 1,auto;}',
    ].join('\n');

    /* ——— pixel icon pack (sidebar set) ——— */
    const pxRect = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`;
    const pxRing = (x, y, w, h) => [
      pxRect(x + 2, y, w - 4, 2),
      pxRect(x + 2, y + h - 2, w - 4, 2),
      pxRect(x, y + 2, 2, h - 4),
      pxRect(x + w - 2, y + 2, 2, h - 4),
      pxRect(x + 1, y + 1, 1, 1),
      pxRect(x + w - 2, y + 1, 1, 1),
      pxRect(x + 1, y + h - 2, 1, 1),
      pxRect(x + w - 2, y + h - 2, 1, 1),
    ].join('');
    const pxSprite = (body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges" fill="#000">${body}</svg>`;
    const PIXEL_SPRITES = {
      newchat: pxSprite(pxRing(2, 2, 12, 12) + pxRect(7, 5, 2, 6) + pxRect(5, 7, 6, 2)),
      plugins: pxSprite(pxRect(2, 2, 4, 4) + pxRect(10, 2, 4, 4) + pxRect(2, 10, 4, 4) + pxRect(10, 10, 4, 4)),
      automation: pxSprite(pxRing(2, 2, 12, 12) + pxRect(7, 4, 2, 5) + pxRect(8, 7, 4, 2)),
      folder: pxSprite(pxRect(1, 4, 7, 2) + pxRect(6, 4, 2, 3) + pxRect(1, 6, 14, 2) + pxRect(1, 6, 2, 9) + pxRect(13, 6, 2, 9) + pxRect(1, 13, 14, 2)),
      search: pxSprite(pxRing(1, 1, 10, 10) + pxRect(10, 10, 2, 2) + pxRect(12, 12, 2, 2) + pxRect(14, 14, 2, 2)),
      settings: pxSprite(pxRect(2, 4, 12, 2) + pxRect(9, 2, 4, 6) + pxRect(2, 10, 12, 2) + pxRect(3, 8, 4, 6)),
      newfolder: pxSprite(pxRect(1, 4, 7, 2) + pxRect(6, 4, 2, 3) + pxRect(1, 6, 14, 2) + pxRect(1, 6, 2, 9) + pxRect(13, 6, 2, 9) + pxRect(1, 13, 14, 2) + pxRect(7, 8, 2, 4) + pxRect(5, 9, 6, 2)),
    };
    const ICON_LABELS = [
      ['newchat', /新会话|新建会话|new session|new chat/i],
      ['plugins', /插件|plug-?in/i],
      ['automation', /自动化|automation|scheduled/i],
      ['folder', /工作区|workspace/i],
      ['search', /搜索|search/i],
      ['settings', /设置|settings|preferences/i],
      ['newfolder', /新建文件夹|new folder|create folder/i],
    ];

    function maskSvg(svg, url, name) {
      svg.classList.add('dsh-pixel-icon');
      svg.dataset.dshPx = name;
      for (const prop of ['-webkit-mask-image', 'mask-image']) svg.style.setProperty(prop, url);
      for (const prop of ['-webkit-mask-repeat', 'mask-repeat']) svg.style.setProperty(prop, 'no-repeat');
      for (const prop of ['-webkit-mask-size', 'mask-size']) svg.style.setProperty(prop, '100% 100%');
      for (const prop of ['-webkit-mask-position', 'mask-position']) svg.style.setProperty(prop, 'center');
      svg.style.setProperty('background-color', 'currentColor');
    }

    function applyIconSprite(svg) {
      if (!(svg instanceof SVGElement) || svg.dataset.dshPx !== undefined) return false;
      let name;
      const button = svg.closest('button,a,[role="button"]');
      if (button !== null) {
        if (button.querySelector('svg') !== svg) return false;
        const text = (button.getAttribute('aria-label') || '') + ' ' + (button.textContent || '');
        for (const [key, re] of ICON_LABELS) {
          if (re.test(text)) { name = key; break; }
        }
      }
      if (name === undefined) {
        const row = svg.parentElement;
        const text = row === null ? '' : (row.textContent || '').trim();
        if (/^(工作区|workspaces?)/i.test(text) && row.querySelector('svg') === svg) name = 'folder';
      }
      if (name === undefined) return false;
      maskSvg(svg, 'url("data:image/svg+xml,' + encodeURIComponent(PIXEL_SPRITES[name]) + '")', name);
      return true;
    }

    const PIXEL_RASTER_CACHE = new Map();
    function pixelMaskUrl(svg) {
      let markup = new XMLSerializer().serializeToString(svg);
      if (!markup.includes('xmlns=')) markup = markup.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
      const key = markup;
      const cached = PIXEL_RASTER_CACHE.get(key);
      if (cached !== undefined) return cached;
      const pending = new Promise((resolve) => {
        const image = new Image();
        image.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            const context = canvas.getContext('2d');
            if (context === null) { resolve(undefined); return; }
            context.imageSmoothingEnabled = false;
            context.clearRect(0, 0, 16, 16);
            context.drawImage(image, 0, 0, 16, 16);
            const frame = context.getImageData(0, 0, 16, 16);
            const pixels = frame.data;
            for (let i = 0; i < pixels.length; i += 4) {
              pixels[i] = 0;
              pixels[i + 1] = 0;
              pixels[i + 2] = 0;
              pixels[i + 3] = pixels[i + 3] >= 96 ? 255 : 0;
            }
            context.putImageData(frame, 0, 0);
            resolve(canvas.toDataURL('image/png'));
          } catch (error) {
            resolve(undefined);
          }
        };
        image.onerror = () => resolve(undefined);
        image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(markup);
      });
      PIXEL_RASTER_CACHE.set(key, pending);
      return pending;
    }

    function pixelateIcon(svg) {
      if (!(svg instanceof SVGElement) || svg.dataset.dshPx !== undefined) return;
      let width = Number.parseFloat(svg.getAttribute('width') || '');
      let height = Number.parseFloat(svg.getAttribute('height') || '');
      if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
        const box = svg.getBoundingClientRect();
        width = box.width;
        height = box.height;
      }
      if (width < 8 || height < 8 || width > 40 || height > 40) return;
      pixelMaskUrl(svg).then((url) => {
        if (url === undefined || !svg.isConnected || svg.dataset.dshPx !== undefined) return;
        maskSvg(svg, 'url("' + url + '")', 'auto');
      });
    }

    function installPixelIcons() {
      let timer = null;
      const scan = () => {
        document.querySelectorAll('[data-dsh-px]').forEach((el) => {
          if (!el.classList.contains('dsh-pixel-icon')) el.classList.add('dsh-pixel-icon');
        });
        document.querySelectorAll('svg').forEach((svg) => {
          if (applyIconSprite(svg)) return;
          pixelateIcon(svg);
        });
      };
      const schedule = () => {
        if (timer !== null) clearTimeout(timer);
        timer = setTimeout(scan, 120);
      };
      scan();
      const observer = new MutationObserver(schedule);
      observer.observe(document.body, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
        if (timer !== null) clearTimeout(timer);
        document.querySelectorAll('[data-dsh-px]').forEach((el) => {
          el.classList.remove('dsh-pixel-icon');
          for (const prop of ['-webkit-mask-image', 'mask-image', '-webkit-mask-repeat', 'mask-repeat', '-webkit-mask-size', 'mask-size', '-webkit-mask-position', 'mask-position', 'background-color']) {
            el.style.removeProperty(prop);
          }
          delete el.dataset.dshPx;
        });
      };
    }

    function PixelSkin() {
      React.useEffect(() => installPixelIcons(), []);
      return h('style', { 'data-dsh-w95-skin': '' }, W95_CSS);
    }

    return {
      inject: ['slots', 'theme'],
      apply(ctx) {
        const theme = ctx.get('theme');
        if (theme && typeof theme.overrideTokens === 'function') {
          try {
            ctx.effect(() => theme.overrideTokens('dsh_win95_skin', PALETTE));
          } catch (error) {
            console.warn('[dsh_win95_skin] palette override failed:', error);
          }
        }
        ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay',
          id: 'dsh_win95_skin',
          order: -1000,
          label: 'Pixel skin',
        }, PixelSkin));
      },
    };
  },
});
