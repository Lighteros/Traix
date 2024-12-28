"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{73163:function(e,t,o){o.r(t),o.d(t,{W3mModal:function(){return h}});var i=o(81630),a=o(89593),r=o(23569),s=o(15376),n=o(93969),d=(0,r.iv)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;o(20739);var l=function(e,t,o,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,o,s):a(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let c="scroll-lock",h=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.enableEmbedded=i.OptionsController.state.enableEmbedded,this.open=i.IN.state.open,this.caipAddress=i.RY.state.activeCaipAddress,this.caipNetwork=i.RY.state.activeCaipNetwork,this.shake=i.IN.state.shake,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),i.IN.subscribeKey("shake",e=>this.shake=e),i.RY.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),i.RY.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e))),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}firstUpdated(){if(i.OptionsController.setEnableEmbedded(this.enableEmbedded),this.caipAddress){if(this.enableEmbedded){i.IN.close();return}this.onNewAddress(this.caipAddress)}}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return(this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded)?(0,r.dy)`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?(0,r.dy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return(0,r.dy)` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,n.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){"UnsupportedChain"===i.RouterController.state.view||await i.wf.isSIWXCloseDisabled()?i.IN.shake():i.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=i.ThemeController.state,o=a.UiHelperUtil.getColorTheme(t);(0,a.initializeTheming)(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),i.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:o}=t.target;!o||o.includes("W3M-")||o.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){let t=i.j1.getPlainAddress(e);this.caipAddress=e,await i.wf.initializeIfEnabled(),(!t||this.enableEmbedded)&&i.IN.close()}onNewNetwork(e){if(!this.caipAddress){this.caipNetwork=e,i.RouterController.goBack();return}let t=this.caipNetwork?.caipNetworkId?.toString(),o=e?.caipNetworkId?.toString();t&&o&&t!==o&&this.caipNetwork?.name!=="Unknown Network"&&i.RouterController.goBack(),this.caipNetwork=e}};h.styles=d,l([(0,s.Cb)({type:Boolean})],h.prototype,"enableEmbedded",void 0),l([(0,s.SB)()],h.prototype,"open",void 0),l([(0,s.SB)()],h.prototype,"caipAddress",void 0),l([(0,s.SB)()],h.prototype,"caipNetwork",void 0),l([(0,s.SB)()],h.prototype,"shake",void 0),h=l([(0,a.customElement)("w3m-modal")],h)}}]);