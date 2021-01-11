(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(105)),i={id:"testnet-platform",title:"How to Test"},l={unversionedId:"testnet-platform",id:"testnet-platform",isDocsHomePage:!1,title:"How to Test",description:"You can try the saving & lending platform at tadpole.finance. Currently, the platform is still under development and is not ready for real money transactions. We need to make sure all codes are well tested and formally audited before we launch it on the mainnet. The Tadpole smart contracts were deployed in the Goerli testnet and can play around using testnet tokens.",source:"@site/docs/testnet-platform.md",slug:"/testnet-platform",permalink:"/docs/testnet-platform",version:"current",sidebar:"someSidebar",previous:{title:"DEX Liquidity Mining",permalink:"/docs/staking"},next:{title:"Developer Rewards Program",permalink:"/docs/developer-rewards"}},c=[{value:"How to Test the Saving &amp; Lending Platform?",id:"how-to-test-the-saving--lending-platform",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can try the saving & lending platform at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tadpole.finance"}),"tadpole.finance"),". Currently, the platform is still under development and is not ready for real money transactions. We need to make sure all codes are well tested and formally audited before we launch it on the mainnet. The Tadpole smart contracts were deployed in the Goerli testnet and can play around using testnet tokens."),Object(o.b)("h2",{id:"how-to-test-the-saving--lending-platform"},"How to Test the Saving & Lending Platform?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://metamask.io"}),"Metamask")," Application or Browser Extension.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Make sure you change the "Ethereum Mainnet" to "Goerli Test Network" in the Network Option.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Claim Free ETH for Gas Fee in Goerli Test Network. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://goerli-faucet.slock.it/"}),"HERE"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tadpole.finance"}),"tadpole.finance"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'On "Supply" tab, Switch on the "Enable" button for your desired Coin(s), and Confirm the transaction.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://goerli.etherscan.io/address/0x520d849db6e4bf7e0c58a45fc513a6d633baf77e"}),"Tadpole Goerli Test Contract")," to Claim some Test Tokens:"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Go to "Contract" Tab.'),Object(o.b)("li",{parentName:"ul"},'Click "Connect to Web3" and Approve the Connection Request.'),Object(o.b)("li",{parentName:"ul"},'Once Connected to Your Goerli Test Network Wallet, Click The "request" function in Tadpole Goerli Contract.'),Object(o.b)("li",{parentName:"ul"},'Click "Write" and Approve the Transaction, you should see the Test Tokens arrived in your Wallet in Minutes.')),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Back to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tadpole.finance"}),"tadpole.finance"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On Supply tab, click the test token you want to supply (e.g USDT).")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter the amount you want to supply.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Click "Continue" to Supply the Token, or "Redeem" to take it back then approve the transaction.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For Borrowing, you can click on the Tokens/Coins you want to borrow.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Then click on "Continue" to borrow the cryptoasset, or "Repay" to repay your debt, then approve the transaction.'))))}s.isMDXComponent=!0}}]);