(self["webpackChunk_0x_labs"]=self["webpackChunk_0x_labs"]||[]).push([[106],{98396:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(12924),r=n(34168),i=n(20539),a=n(58974);function c(e,t,n,r,i){const c="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[s,l]=o.useState((()=>i&&c?n(e).matches:r?r(e).matches:t));return(0,a.Z)((()=>{let t=!0;if(!c)return;const o=n(e),r=()=>{t&&l(o.matches)};return r(),o.addListener(r),()=>{t=!1,o.removeListener(r)}}),[e,n,c]),s}const s=o["useSyncExternalStore"];function l(e,t,n,r){const i=o.useCallback((()=>t),[t]),a=o.useMemo((()=>{if(null!==r){const{matches:t}=r(e);return()=>t}return i}),[i,e,r]),[c,l]=o.useMemo((()=>{if(null===n)return[i,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[i,n,e]),d=s(l,c,a);return d}function d(e,t={}){const n=(0,r.Z)(),o="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:a=!1,matchMedia:d=(o?window.matchMedia:null),ssrMatchMedia:h=null,noSsr:u}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let p="function"===typeof e?e(n):e;p=p.replace(/^@media( ?)/m,"");const w=void 0!==s?l:c,g=w(p,a,d,h,u);return g}},25974:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(12924),r=n(22122),i=n(44819),a=n(56760);const c="function"===typeof Symbol&&Symbol.for;var s=c?Symbol.for("mui.nested"):"__THEME_NESTED__",l=n(85893);function d(e,t){if("function"===typeof t){const n=t(e);return n}return(0,r.Z)({},e,t)}function h(e){const{children:t,theme:n}=e,r=(0,a.Z)();const c=o.useMemo((()=>{const e=null===r?n:d(r,n);return null!=e&&(e[s]=null!==r),e}),[n,r]);return(0,l.jsx)(i.Z.Provider,{value:c,children:t})}var u=h,p=n(54880),w=n(96682);function g(e){const t=(0,w.Z)();return(0,l.jsx)(p.T.Provider,{value:"object"===typeof t?t:{},children:e.children})}function m(e){const{children:t,theme:n}=e;return(0,l.jsx)(u,{theme:n,children:(0,l.jsx)(g,{children:t})})}var f=m},77791:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var o=n(41615),r="#1A1B1F",i={blue:{accentColor:"#3898FF",accentColorForeground:"#FFF"},green:{accentColor:"#4BD166",accentColorForeground:r},orange:{accentColor:"#FF983D",accentColorForeground:r},pink:{accentColor:"#FF7AB8",accentColorForeground:r},purple:{accentColor:"#7A70FF",accentColorForeground:"#FFF"},red:{accentColor:"#FF6257",accentColorForeground:"#FFF"}},a=i.blue,c=({accentColor:e=a.accentColor,accentColorForeground:t=a.accentColorForeground,...n}={})=>({...(0,o.w)(n),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(255, 255, 255, 0.04)",actionButtonBorderMobile:"rgba(255, 255, 255, 0.08)",actionButtonSecondaryBackground:"rgba(255, 255, 255, 0.08)",closeButton:"rgba(224, 232, 255, 0.6)",closeButtonBackground:"rgba(255, 255, 255, 0.08)",connectButtonBackground:r,connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",connectButtonText:"#FFF",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",error:"#FF494A",generalBorder:"rgba(255, 255, 255, 0.08)",generalBorderDim:"rgba(255, 255, 255, 0.04)",menuItemBackground:"rgba(224, 232, 255, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.5)",modalBackground:"#1A1B1F",modalBorder:"rgba(255, 255, 255, 0.08)",modalText:"#FFF",modalTextDim:"rgba(224, 232, 255, 0.3)",modalTextSecondary:"rgba(255, 255, 255, 0.6)",profileAction:"rgba(224, 232, 255, 0.1)",profileActionHover:"rgba(224, 232, 255, 0.2)",profileForeground:"rgba(224, 232, 255, 0.05)",selectedOptionBorder:"rgba(224, 232, 255, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.24)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});c.accentColors=i},53228:function(e,t,n){"use strict";n.d(t,{a3:function(){return L},wo:function(){return O},gU:function(){return E}});var o=n(66006),r=n(46387),i=n(241),a=n(56371),c=n(98973),s=n(20200);n(26729);const l=/(imtoken|metamask|rainbow)/i;var d=new WeakMap,h=new WeakSet;class u extends r.b{constructor(e){super(e),(0,r._)(this,h),(0,r.f)(this,"id","walletConnect"),(0,r.f)(this,"name","WalletConnect"),(0,r.f)(this,"ready",!0),(0,r.g)(this,d,{writable:!0,value:void 0}),(0,r.f)(this,"onAccountsChanged",(e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,a.getAddress)(e[0])})})),(0,r.f)(this,"onChainChanged",(e=>{const t=(0,r.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})})),(0,r.f)(this,"onDisconnect",(()=>{this.emit("disconnect")}))}async connect(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t,n,o;let s=e;if(!s){const e=(0,c.g)().lastUsedChainId;e&&!this.isChainUnsupported(e)&&(s=e)}const d=await this.getProvider({chainId:s,create:!0});d.on("accountsChanged",this.onAccountsChanged),d.on("chainChanged",this.onChainChanged),d.on("disconnect",this.onDisconnect),setTimeout((()=>this.emit("message",{type:"connecting"})),0);const u=await d.enable(),w=(0,a.getAddress)(u[0]),g=await this.getChainId(),m=this.isChainUnsupported(g),f=null!==(t=null===(n=d.connector)||void 0===n||null===(o=n.peerMeta)||void 0===o?void 0:o.name)&&void 0!==t?t:"";return l.test(f)&&(this.switchChain=(0,r.j)(this,h,p)),{account:w,chain:{id:g,unsupported:m},provider:new i.Q(d)}}catch(s){if(/user closed modal/i.test(s.message))throw new r.U(s);throw s}}async disconnect(){const e=await this.getProvider();await e.disconnect(),e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),"undefined"!==typeof localStorage&&localStorage.removeItem("walletconnect")}async getAccount(){const e=await this.getProvider(),t=e.accounts;return(0,a.getAddress)(t[0])}async getChainId(){const e=await this.getProvider(),t=(0,r.n)(e.chainId);return t}async getProvider(){var e;let{chainId:t=(null===(e=this.options)||void 0===e?void 0:e.chainId)||this.chains[0].id,create:o=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!(0,r.h)(this,d)||o){var i,a;const e=null!==(i=this.options)&&void 0!==i&&i.infuraId?{}:this.chains.reduce(((e,t)=>({...e,[t.id]:t.rpcUrls.default})),{}),o=(await Promise.all([n.e(194),n.e(885),n.e(563)]).then(n.bind(n,2885))).default;(0,r.i)(this,d,new o({...this.options,chainId:t,rpc:{...e,...null===(a=this.options)||void 0===a?void 0:a.rpc}}))}return(0,r.h)(this,d)}async getSigner(){const[e,t]=await Promise.all([this.getProvider(),this.getAccount()]);return new i.Q(e).getSigner(t)}async isAuthorized(){try{const e=await this.getAccount();return!!e}catch{return!1}}}async function p(e){const t=await this.getProvider(),n=(0,a.hexValue)(e);try{var o;await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});const r=[...this.chains,...s.a];return null!==(o=r.find((t=>t.id===e)))&&void 0!==o?o:{id:e,name:"Chain ".concat(n),network:"".concat(n),rpcUrls:{default:""}}}catch(i){const e="string"===typeof i?i:null===i||void 0===i?void 0:i.message;if(/user rejected request/i.test(e))throw new r.U(i);throw new r.e(i)}}var w=new WeakMap,g=new WeakMap,m=new WeakSet;class f extends r.b{constructor(e){let{chains:t,options:n}=e;super({chains:t,options:n}),(0,r._)(this,m),(0,r.f)(this,"id","coinbaseWallet"),(0,r.f)(this,"name","Coinbase Wallet"),(0,r.f)(this,"ready",!0),(0,r.g)(this,w,{writable:!0,value:void 0}),(0,r.g)(this,g,{writable:!0,value:void 0}),(0,r.f)(this,"onAccountsChanged",(e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,a.getAddress)(e[0])})})),(0,r.f)(this,"onChainChanged",(e=>{const t=(0,r.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})})),(0,r.f)(this,"onDisconnect",(()=>{this.emit("disconnect")}))}async connect(e){let{chainId:t}=e;try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await e.enable(),o=(0,a.getAddress)(n[0]);let r=await this.getChainId(),c=this.isChainUnsupported(r);if(t&&r!==t){const e=await this.switchChain(t);r=e.id,c=this.isChainUnsupported(r)}return{account:o,chain:{id:r,unsupported:c},provider:new i.Q(e)}}catch(n){if(/(user closed modal|accounts received is empty)/i.test(n.message))throw new r.U(n);throw n}}async disconnect(){if(!(0,r.h)(this,g))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,a.getAddress)(t[0])}async getChainId(){const e=await this.getProvider(),t=(0,r.n)(e.chainId);return t}async getProvider(){if(!(0,r.h)(this,g)){const e=this.chains.find((e=>e.id===this.options.chainId))||this.chains[0],t=this.options.chainId||e.id,o=this.options.jsonRpcUrl||e.rpcUrls.default;let i=(await Promise.all([n.e(194),n.e(71),n.e(811),n.e(684)]).then(n.bind(n,45811))).default;i.constructor||(i=i.default),(0,r.i)(this,w,new i(this.options)),(0,r.i)(this,g,(0,r.h)(this,w).makeWeb3Provider(o,t))}return(0,r.h)(this,g)}async getSigner(){const[e,t]=await Promise.all([this.getProvider(),this.getAccount()]);return new i.Q(e).getSigner(t)}async isAuthorized(){try{const e=await this.getAccount();return!!e}catch{return!1}}async switchChain(e){const t=await this.getProvider(),n=(0,a.hexValue)(e);try{var o;await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});const r=[...this.chains,...s.a];return null!==(o=r.find((t=>t.id===e)))&&void 0!==o?o:{id:e,name:"Chain ".concat(n),network:"".concat(n),rpcUrls:{default:""}}}catch(i){const o=this.chains.find((t=>t.id===e));if(!o)throw new r.c;if(4902===i.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[o.rpcUrls.default],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(c){if((0,r.j)(this,m,y).call(this,c))throw new r.U(c);throw new r.A}if((0,r.j)(this,m,y).call(this,i))throw new r.U(i);throw new r.e(i)}}async watchAsset(e){let{address:t,decimals:n=18,image:o,symbol:r}=e;const i=await this.getProvider();return await i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:n,image:o,symbol:r}}})}}function y(e){return/(user rejected)/i.test(e.message)}var v=new WeakMap,C=new WeakSet,b=new WeakSet;class k extends c.I{constructor(){let{chains:e,options:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n={name:"MetaMask",shimDisconnect:!0,shimChainChangedDisconnect:!0,...t};super({chains:e,options:n}),(0,r._)(this,b),(0,r._)(this,C),(0,r.f)(this,"id","metaMask"),(0,r.f)(this,"ready","undefined"!=typeof window&&!!(0,r.j)(this,b,I).call(this,window.ethereum)),(0,r.g)(this,v,{writable:!0,value:void 0})}async getProvider(){return"undefined"!==typeof window&&(0,r.i)(this,v,(0,r.j)(this,b,I).call(this,window.ethereum)),(0,r.h)(this,v)}}function U(e){const t=!(null===e||void 0===e||!e.isMetaMask);if(t&&(!e.isBraveWallet||e._events||e._state)&&!e.isTokenary)return e}function I(e){return null!==e&&void 0!==e&&e.providers?e.providers.find((0,r.j)(this,C,U)):(0,r.j)(this,C,U).call(this,e)}n(12924);var B=e=>e.reduce(((e,t)=>({...e,[t.id]:t.rpcUrls.default})),{}),x=({chains:e})=>({id:"argent",name:"Argent",iconUrl:async()=>(await n.e(146).then(n.bind(n,77146))).default,iconBackground:"#fff",downloadUrls:{android:"https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",ios:"https://apps.apple.com/us/app/argent/id1358741926",qrCode:"https://argent.link/app"},createConnector:()=>{const t=B(e),n=new u({chains:e,options:{qrcode:!1,options:{qrcode:!1,rpc:t}}});return{connector:n,mobile:{getUri:async()=>{const{uri:e}=(await n.getProvider()).connector;return(0,o.Dt)()?e:`https://argent.link/app/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>(await n.getProvider()).connector.uri,instructions:{learnMoreUrl:"https://www.argent.xyz/learn/what-is-a-crypto-wallet/",steps:[{description:"Put Argent on your home screen for faster access to your wallet.",step:"install",title:"Open the Argent app"},{description:"Create a wallet and username, or import an existing wallet.",step:"create",title:"Create or Import a Wallet"},{description:"After you scan, a connection prompt will appear for you to connect your wallet.",step:"scan",title:"Tap the Scan QR button"}]}}}}}),F=({chains:e,shimDisconnect:t})=>{var o;return{id:"brave",name:"Brave Wallet",iconUrl:async()=>(await n.e(311).then(n.bind(n,64311))).default,iconBackground:"#fff",installed:"undefined"!==typeof window&&!0===(null==(o=window.ethereum)?void 0:o.isBraveWallet),downloadUrls:{},createConnector:()=>({connector:new c.I({chains:e,options:{shimDisconnect:t}})})}},P=({appName:e,chains:t})=>({id:"coinbase",name:"Coinbase Wallet",shortName:"Coinbase",iconUrl:async()=>(await n.e(361).then(n.bind(n,69361))).default,iconBackground:"#2c5ff6",downloadUrls:{browserExtension:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455",qrCode:"https://coinbase-wallet.onelink.me/q5Sx/fdb9b250"},createConnector:({chainId:n=t[0].id})=>{const r=(0,o.gn)(),i=t.find((e=>e.id===n)),a=null==i?void 0:i.rpcUrls.default,c=new f({chains:t,options:{appName:e,headlessMode:!0,jsonRpcUrl:a}}),s=async()=>(await c.getProvider()).qrUrl;return{connector:c,...r?{}:{mobile:{getUri:s},qrCode:{getUri:s,instructions:{learnMoreUrl:"https://www.coinbase.com/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet",steps:[{description:"We recommend putting Coinbase Wallet on your home screen for quicker access.",step:"install",title:"Open the Coinbase Wallet app"},{description:"You can easily backup your wallet using the cloud backup feature.",step:"create",title:"Create or Import a Wallet"},{description:"After you scan, a connection prompt will appear for you to connect your wallet.",step:"scan",title:"Tap the scan button"}]}}}}}}),A=({chains:e})=>({id:"imToken",name:"imToken",iconUrl:async()=>(await n.e(614).then(n.bind(n,76614))).default,iconBackground:"#098de6",downloadUrls:{android:"https://play.google.com/store/apps/details?id=im.token.app",ios:"https://itunes.apple.com/us/app/imtoken2/id1384798940",qrCode:"https://token.im/download"},createConnector:()=>{const t=B(e),n=new u({chains:e,options:{qrcode:!1,rpc:t}});return{connector:n,mobile:{getUri:async()=>{const{uri:e}=(await n.getProvider()).connector;return`imtokenv2://wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>(await n.getProvider()).connector.uri,instructions:{learnMoreUrl:"undefined"!==typeof window&&window.navigator.language.includes("zh")?"https://support.token.im/hc/zh-cn/categories/360000925393":"https://support.token.im/hc/en-us/categories/360000925393",steps:[{description:"Put imToken app on your home screen for faster access to your wallet.",step:"install",title:"Open the imToken app"},{description:"Create a new wallet or import an existing one.",step:"create",title:"Create or Import a Wallet"},{description:"Choose New Connection, then scan the QR code and confirm the prompt to connect.",step:"scan",title:"Tap Scanner Icon in top right corner"}]}}}}}),M=({chains:e,shimDisconnect:t})=>({id:"injected",name:"Injected Wallet",iconUrl:async()=>(await n.e(276).then(n.bind(n,96276))).default,iconBackground:"#fff",createConnector:()=>({connector:new c.I({chains:e,options:{shimDisconnect:t}})})}),W=({chains:e})=>({id:"ledger",iconBackground:"#000",name:"Ledger Live",iconUrl:async()=>(await n.e(821).then(n.bind(n,20821))).default,downloadUrls:{android:"https://play.google.com/store/apps/details?id=com.ledger.live",ios:"https://apps.apple.com/us/app/ledger-live-web3-wallet/id1361671700",qrCode:"https://www.ledger.com/ledger-live/download#download-device-2"},createConnector:()=>{const t=B(e),n=new u({chains:e,options:{qrcode:!1,rpc:t}});return{connector:n,mobile:{getUri:async()=>{const{uri:e}=(await n.getProvider()).connector;return(0,o.Dt)()?e:`ledgerlive://wc?uri=${encodeURIComponent(e)}`}},desktop:{getUri:async()=>{const{uri:e}=(await n.getProvider()).connector;return`ledgerlive://wc?uri=${encodeURIComponent(e)}`}}}}});function q(e){const t=Boolean(e.isMetaMask);return!!t&&(!(e.isBraveWallet&&!e._events&&!e._state)&&!e.isTokenary)}var D=({chains:e,shimDisconnect:t})=>{const r="undefined"!==typeof window&&"undefined"!==typeof window.ethereum&&q(window.ethereum),i=(0,o.tq)()&&!r;return{id:"metaMask",name:"MetaMask",iconUrl:async()=>(await n.e(101).then(n.bind(n,81101))).default,iconBackground:"#fff",installed:i?void 0:r,downloadUrls:{browserExtension:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",android:"https://play.google.com/store/apps/details?id=io.metamask",ios:"https://apps.apple.com/us/app/metamask/id1438144202"},createConnector:()=>{const n=B(e),r=i?new u({chains:e,options:{qrcode:!1,rpc:n}}):new k({chains:e,options:{shimDisconnect:t}});return{connector:r,mobile:{getUri:i?async()=>{const{uri:e}=(await r.getProvider()).connector;return(0,o.Dt)()?e:`https://metamask.app.link/wc?uri=${encodeURIComponent(e)}`}:void 0}}}}},S=({chains:e})=>({id:"rainbow",name:"Rainbow",iconUrl:async()=>(await n.e(516).then(n.bind(n,48516))).default,iconBackground:"#0c2f78",downloadUrls:{android:"https://play.google.com/store/apps/details?id=me.rainbow",ios:"https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021",qrCode:"https://rainbow.download"},createConnector:()=>{const t=B(e),n=new u({chains:e,options:{qrcode:!1,rpc:t}});return{connector:n,mobile:{getUri:async()=>{const{uri:e}=(await n.getProvider()).connector;return(0,o.Dt)()?e:`https://rnbwapp.com/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>(await n.getProvider()).connector.uri,instructions:{learnMoreUrl:"https://learn.rainbow.me/connect-your-wallet-to-a-website-or-app",steps:[{description:"We recommend putting Rainbow on your home screen for faster access to your wallet.",step:"install",title:"Open the Rainbow app"},{description:"You can easily backup your wallet using our backup feature on your phone.",step:"create",title:"Create or Import a Wallet"},{description:"After you scan, a connection prompt will appear for you to connect your wallet.",step:"scan",title:"Tap the scan button"}]}}}}}),T=({chains:e})=>({id:"steak",name:"Steakwallet",iconUrl:async()=>(await n.e(322).then(n.bind(n,87322))).default,iconBackground:"#000",downloadUrls:{android:"https://play.google.com/store/apps/details?id=fi.steakwallet.app",ios:"https://apps.apple.com/np/app/steakwallet/id1569375204",qrCode:"https://steakwallet.fi/download"},createConnector:()=>{const t=B(e),n=new u({chains:e,options:{qrcode:!1,rpc:t}});return{connector:n,mobile:{getUri:async()=>{const{uri:e}=(await n.getProvider()).connector;return(0,o.Dt)()?e:`https://links.steakwallet.fi/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>(await n.getProvider()).connector.uri,instructions:{learnMoreUrl:"https://blog.steakwallet.fi/introducing-the-steakwallet-beta/",steps:[{description:"Add Steakwallet to your home screen for faster access to your wallet.",step:"install",title:"Open the Steakwallet app"},{description:"Create a new wallet or import an existing one.",step:"create",title:"Create or Import a Wallet"},{description:"Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect.",step:"scan",title:"Tap the QR icon and scan"}]}}}}}),j=({chains:e})=>({id:"trust",name:"Trust Wallet",iconUrl:async()=>(await n.e(270).then(n.bind(n,77270))).default,iconBackground:"#fff",downloadUrls:{android:"https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",ios:"https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409",qrCode:"https://link.trustwallet.com"},createConnector:()=>{const t=B(e),n=new u({chains:e,options:{qrcode:!1,rpc:t}});return{connector:n,mobile:{getUri:async()=>{const{uri:e}=(await n.getProvider()).connector;return(0,o.Dt)()?e:`https://link.trustwallet.com/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>(await n.getProvider()).connector.uri,instructions:{learnMoreUrl:"https://trustwallet.com/blog/an-introduction-to-trustwallet",steps:[{description:"Put Trust Wallet on your home screen for faster access to your wallet.",step:"install",title:"Open the Trust Wallet app"},{description:"Create a new wallet or import an existing one.",step:"create",title:"Create or Import a Wallet"},{description:"Choose New Connection, then scan the QR code and confirm the prompt to connect.",step:"scan",title:"Tap WalletConnect in Settings"}]}}}}}),_=({chains:e})=>({id:"walletConnect",name:"WalletConnect",iconUrl:async()=>(await n.e(991).then(n.bind(n,12991))).default,iconBackground:"#3b99fc",createConnector:()=>{const t=(0,o.gn)(),n=B(e),r=new u({chains:e,options:{qrcode:t,rpc:n}}),i=async()=>(await r.getProvider()).connector.uri;return{connector:r,...t?{}:{mobile:{getUri:i},qrCode:{getUri:i}}}}}),E={argent:x,brave:F,coinbase:P,imToken:A,injected:M,ledger:W,metaMask:D,rainbow:S,steak:T,trust:j,walletConnect:_};function R(e){return Object.fromEntries(Object.entries(e).filter((([e,t])=>void 0!==t)))}var L=e=>function(t){const n=[];return e.forEach((({groupName:e,wallets:o})=>{o.forEach((({createConnector:o,...r})=>{var i;const{connector:a,...c}=R(o(t));if(a._wallet)throw new Error(`Can't connect wallet "${r.name}" to connector "${null!=(i=a.name)?i:a.id}" as it's already connected to wallet "${a._wallet.name}". Each wallet must have its own connector instance.`);let s;if("walletConnect"===r.id&&c.qrCode){const{chains:e,options:t}=a;s=new u({chains:e,options:{...t,qrcode:!0}}),n.push(s)}const l={connector:a,groupName:e,walletConnectModalConnector:s,...r,...c};a._wallet=l,n.push(a)}))})),n},O=({appName:e,chains:t})=>{const n="undefined"!==typeof window&&window.ethereum&&!q(window.ethereum)&&!window.ethereum.isCoinbaseWallet&&!window.ethereum.isBraveWallet,o=[{groupName:"Popular",wallets:[S({chains:t}),P({appName:e,chains:t}),D({chains:t,shimDisconnect:!0}),_({chains:t}),F({chains:t,shimDisconnect:!0}),...n?[M({chains:t,shimDisconnect:!0})]:[]]}];return{connectors:L(o),wallets:o}};o.xZ,o.Bg,o.VQ,o.UG},86582:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(72560);function r(e){if(Array.isArray(e))return(0,o.Z)(e)}function i(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var a=n(64254);function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return r(e)||i(e)||(0,a.Z)(e)||c()}},35763:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var o=n(333),r=n(39566);function i(){let{alchemyId:e=r.d,pollingInterval:t,priority:n,stallTimeout:i,weight:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(r){return r.rpcUrls.alchemy?{chain:{...r,rpcUrls:{...r.rpcUrls,default:"".concat(r.rpcUrls.alchemy,"/").concat(e)}},provider:()=>{const c=new o.D(r.id,e);return t&&(c.pollingInterval=t),Object.assign(c,{priority:n,stallTimeout:i,weight:a})},webSocketProvider:()=>new o.V(r.id,e)}:null}}},90220:function(e,t,n){"use strict";n.d(t,{I:function(){return r}});var o=n(93901);function r(){let{pollingInterval:e,priority:t,stallTimeout:n,weight:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(i){return i.rpcUrls.default?{chain:i,provider:()=>{const a=new o.c(i.rpcUrls.default,{chainId:i.id,name:i.network});return e&&(a.pollingInterval=e),Object.assign(a,{priority:t,stallTimeout:n,weight:r})}}:null}}}}]);