if(!self.define){let s,l={};const i=(i,n)=>(i=new URL(i+".js",n).href,l[i]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=l,document.head.appendChild(s)}else s=i,importScripts(i),l()})).then((()=>{let s=l[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(l[u])return;let e={};const j=s=>i(s,u),o={module:{uri:u},exports:e,require:j};l[u]=Promise.all(n.map((s=>o[s]||j(s)))).then((s=>(r(...s),e)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"grid-studio"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/app.ffd0b351.css",revision:null},{url:"/css/chunk-vendors.da48e898.css",revision:null},{url:"/fonts/codicon.f1c9615d.ttf",revision:null},{url:"/index.html",revision:"edfb0ec86cc448d67059ee9fe6aeab18"},{url:"/js/1022.cbe27538.js",revision:null},{url:"/js/1030.f956afe3.js",revision:null},{url:"/js/1319.18312f16.js",revision:null},{url:"/js/1463.521bf792.js",revision:null},{url:"/js/15.9ece2fd2.js",revision:null},{url:"/js/1598.f786d536.js",revision:null},{url:"/js/1636.d5fe9bc2.js",revision:null},{url:"/js/2008.5fce23a7.js",revision:null},{url:"/js/2250.9449a568.js",revision:null},{url:"/js/2341.19dd8fea.js",revision:null},{url:"/js/2358.11745268.js",revision:null},{url:"/js/2401.e7f5c576.js",revision:null},{url:"/js/2532.59789bc3.js",revision:null},{url:"/js/2784.b7acaf4e.js",revision:null},{url:"/js/2804.a11127a7.js",revision:null},{url:"/js/2936.55a59490.js",revision:null},{url:"/js/3202.8b9b2b8e.js",revision:null},{url:"/js/3263.0cf31d41.js",revision:null},{url:"/js/3268.0a5e49dc.js",revision:null},{url:"/js/3415.30bfbdab.js",revision:null},{url:"/js/3629.cbbf013e.js",revision:null},{url:"/js/3700.a2daa725.js",revision:null},{url:"/js/3703.69452b8f.js",revision:null},{url:"/js/3817.fe32f44f.js",revision:null},{url:"/js/386.f25dcb6e.js",revision:null},{url:"/js/3956.a5e4baea.js",revision:null},{url:"/js/3986.63d066a4.js",revision:null},{url:"/js/4034.25b2386e.js",revision:null},{url:"/js/413.d6f6768c.js",revision:null},{url:"/js/4366.e027a4f6.js",revision:null},{url:"/js/4816.3673cbe4.js",revision:null},{url:"/js/4962.0fcc9aa8.js",revision:null},{url:"/js/5019.effb13e5.js",revision:null},{url:"/js/5096.3cd6077b.js",revision:null},{url:"/js/5106.7a1b6b60.js",revision:null},{url:"/js/5191.9b9b1f2a.js",revision:null},{url:"/js/5254.bd42e145.js",revision:null},{url:"/js/5527.bf311581.js",revision:null},{url:"/js/5630.a88710e2.js",revision:null},{url:"/js/5661.929f29d3.js",revision:null},{url:"/js/5662.d2e092fe.js",revision:null},{url:"/js/5710.ff8a3b76.js",revision:null},{url:"/js/5856.e3ee4055.js",revision:null},{url:"/js/5985.43114f9f.js",revision:null},{url:"/js/6044.aed858a7.js",revision:null},{url:"/js/6048.a73a7d20.js",revision:null},{url:"/js/622.767b483e.js",revision:null},{url:"/js/6346.af0dc9cb.js",revision:null},{url:"/js/6388.7119da0b.js",revision:null},{url:"/js/6540.d124cf95.js",revision:null},{url:"/js/6590.98021b58.js",revision:null},{url:"/js/6786.90dcf2d6.js",revision:null},{url:"/js/6862.83bb0c20.js",revision:null},{url:"/js/6877.2fdd9977.js",revision:null},{url:"/js/6896.3a096775.js",revision:null},{url:"/js/7007.534b6154.js",revision:null},{url:"/js/7010.13585428.js",revision:null},{url:"/js/7083.c4a5a496.js",revision:null},{url:"/js/7099.4518cc78.js",revision:null},{url:"/js/7146.c17273ea.js",revision:null},{url:"/js/7271.91406553.js",revision:null},{url:"/js/7473.092eb75a.js",revision:null},{url:"/js/75.035f9f2a.js",revision:null},{url:"/js/7500.2e62c435.js",revision:null},{url:"/js/7517.dbe07dad.js",revision:null},{url:"/js/7643.f04235d0.js",revision:null},{url:"/js/786.f712247b.js",revision:null},{url:"/js/7954.dd992ef9.js",revision:null},{url:"/js/7973.bcaa5dbd.js",revision:null},{url:"/js/8248.78cb5404.js",revision:null},{url:"/js/8412.a3b7bf4a.js",revision:null},{url:"/js/8647.5547c8dd.js",revision:null},{url:"/js/8822.605f539e.js",revision:null},{url:"/js/9007.abcdc446.js",revision:null},{url:"/js/9111.5e36d569.js",revision:null},{url:"/js/9270.3699e067.js",revision:null},{url:"/js/9380.cd7c82d1.js",revision:null},{url:"/js/9583.c7bc3d55.js",revision:null},{url:"/js/9674.61966b52.js",revision:null},{url:"/js/9700.103a3ddd.js",revision:null},{url:"/js/9765.357e3f3b.js",revision:null},{url:"/js/9903.46bf8e96.js",revision:null},{url:"/js/9906.00becaea.js",revision:null},{url:"/js/9928.f26b6c36.js",revision:null},{url:"/js/app.52407616.js",revision:null},{url:"/manifest.json",revision:"18ed7a04d12fce838874a6f82170df9b"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map