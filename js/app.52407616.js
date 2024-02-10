(function(){"use strict";var __webpack_modules__={3725:function(e,r,o){var n=o(9242),t=o(3396);const _=(0,t._)("div",{id:"editor"},null,-1),c=(0,t._)("div",{id:"field"},null,-1);function i(e,r,o,n,i,a){return(0,t.wg)(),(0,t.iD)(t.HY,null,[_,c],64)}var a=o(1993),s=o(89);const u=(0,s.Z)(a.Z,[["render",i]]);var d=u,f=o(5431);(0,f.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,n.ri)(d).mount("#app")},1993:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var monaco_editor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3956),jsxgraph__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2305);function lex(e){return e.split(/[ \n\t]+/).filter((function(e){return["RIGHT","UP","LEFT","DOWN","SET","CALL","PROCEDURE","ENDPROC","REPEAT","ENDREPEAT","IFBLOCK","ENDIF"].includes(e)||/[a-zA-Z][a-zA-Z0-9]*/.test(e)||/[0-9]+/.test(e)}))}function parse(tokens,scope={},guard=!0){let cmds="";const token=function(){return tokens.splice(0,1)[0]};while(tokens.length){const temp=token();if("IFBLOCK"===temp)cmds+=`\n                if (scope.blocked('${token()}') {\n                    ${parse(tokens,scope,!1)}\n                }\n            `;else if("REPEAT"===temp)cmds+=`\n                for (let pos = 0; pos < ${token()}; pos++) {\n                    ${parse(tokens,scope,!1)}\n                }\n            `;else if("PROCEDURE"===temp)scope[token()]=eval(`(\n                function(scope) {\n                    ${parse(tokens,scope,!1)}\n                }\n            )`);else if("CALL"===temp)cmds+=`\n                scope.${token()}(scope)\n            `;else if("SET"===temp)cmds+=`\n                scope.${token()} = ${token()}\n            `;else if(["RIGHT","UP","LEFT","DOWN"].includes(temp)){let e=token();e=isNaN(parseInt(e))?`scope.${e}`:e,cmds+=`\n                scope.${temp}(${e})\n            `}else if(["ENDIF","ENDREPEAT","ENDPROC"].includes(temp))return cmds}return console.log(cmds),guard?{func:eval(`(\n                function(scope) {\n                    ${cmds}\n                }\n            )`),scope:scope}:cmds}monaco_editor__WEBPACK_IMPORTED_MODULE_0__.Mj.register({id:"custom"}),monaco_editor__WEBPACK_IMPORTED_MODULE_0__.Mj.setMonarchTokensProvider("custom",{keywords:["IFBLOCK","ENDIF","REPEAT","ENDREPEAT","PROCEDURE","ENDPROC","SET","CALL","RIGHT","LEFT","UP","DOWN"],tokenizer:{root:[[/[A-Z_$][\w$]*/,{cases:{"@keywords":"keyword","@default":"identifier"}}],[/\d+/,"number"]]}});const configs={strokeWidth:()=>board.canvasWidth/150,strokeColor:"lightblue",highlightStrokeColor:"lightblue"};function execute({func:e,scope:r}){let o=.5,n=.5;e({...r,RIGHT:function(e){board.create("segment",[[o,n],[o+e,n]],configs),o+=e},UP:function(e){board.create("segment",[[o,n],[o,n-e]],configs),n-=e},LEFT:function(e){board.create("segment",[[o,n],[o-e,n]],configs),o-=e},DOWN:function(e){board.create("segment",[[o,n],[o,n+e]],configs),n+=e}})}let board;__webpack_exports__.Z={name:"app",async mounted(){const e=document.querySelector("#editor"),r=monaco_editor__WEBPACK_IMPORTED_MODULE_0__.j6.create(e,{value:"\n\n",language:"custom",theme:"vs-dark",scrollbar:{useShadows:!1,verticalHasArrows:!0,horizontalHasArrows:!0,vertical:"visible",horizontal:"visible",verticalScrollbarSize:17,horizontalScrollbarSize:17,arrowSize:30}});board=jsxgraph__WEBPACK_IMPORTED_MODULE_1__.Nn.initBoard("field",{boundingbox:[-.5,-.5,22,22],axis:!0,defaultAxes:{x:{strokeColor:"white",highlightStrokeColor:"white",ticks:{insertTicks:!1,ticksDistance:1,minorHeight:0,strokeColor:"white",label:{strokeColor:"white",highlightStrokeColor:"white",offset:[0,-4],anchorX:"middle",anchorY:"top"}}},y:{strokeColor:"white",highlightStrokeColor:"white",ticks:{insertTicks:!1,ticksDistance:1,minorHeight:0,strokeColor:"white",label:{strokeColor:"white",highlightStrokeColor:"white",offset:[4,0],anchorX:"left",anchorY:"middle"}}}},drag:{enabled:!1},pan:{enabled:!0,needShift:!0}}),document.querySelector("#field_licenseText").remove(),addEventListener("resize",(function(e){r.layout()})),addEventListener("keydown",(function(e){115===e.keyCode&&execute(parse(lex(r.getValue())))}));const o={};board.on("down",(function(e,r){const n=board.getCoordsTopLeftCorner(e,r),t=jsxgraph__WEBPACK_IMPORTED_MODULE_1__.bt(e,r),_=t[0]-n[0],c=t[1]-n[1];let i=new jsxgraph__WEBPACK_IMPORTED_MODULE_1__.mZ(jsxgraph__WEBPACK_IMPORTED_MODULE_1__.fy,[_,c],board);const[a,s,u]=i.usrCoords,[d,f,l]=[Math.floor(s),Math.round(s),Math.ceil(s)],[b,p,k]=[Math.floor(u),Math.round(u),Math.ceil(u)];Math.abs(f-s)<.1?i=[[f,b],[f,k]]:Math.abs(p-u)<.1&&(i=[[d,p],[l,p]]),i instanceof jsxgraph__WEBPACK_IMPORTED_MODULE_1__.mZ||(i in o?(board.removeObject(o[i]),delete o[i]):o[i]=board.create("segment",i,{strokeColor:"red",highlightStrokeColor:"red"}))}))}}}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var o=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(o.exports,o,o.exports,__webpack_require__),o.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.amdO={}}(),function(){var e=[];__webpack_require__.O=function(r,o,n,t){if(!o){var _=1/0;for(s=0;s<e.length;s++){o=e[s][0],n=e[s][1],t=e[s][2];for(var c=!0,i=0;i<o.length;i++)(!1&t||_>=t)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](o[i])}))?o.splice(i--,1):(c=!1,t<_&&(_=t));if(c){e.splice(s--,1);var a=n();void 0!==a&&(r=a)}}return r}t=t||0;for(var s=e.length;s>0&&e[s-1][2]>t;s--)e[s]=e[s-1];e[s]=[o,n,t]}}(),function(){__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(r,{a:r}),r}}(),function(){__webpack_require__.d=function(e,r){for(var o in r)__webpack_require__.o(r,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(r,o){return __webpack_require__.f[o](e,r),r}),[]))}}(),function(){__webpack_require__.u=function(e){return"js/"+e+"."+{15:"9ece2fd2",75:"035f9f2a",386:"f25dcb6e",413:"d6f6768c",622:"767b483e",786:"f712247b",1022:"cbe27538",1030:"f956afe3",1319:"18312f16",1463:"521bf792",1598:"f786d536",1636:"d5fe9bc2",2008:"5fce23a7",2250:"9449a568",2341:"19dd8fea",2358:"11745268",2401:"e7f5c576",2532:"59789bc3",2784:"b7acaf4e",2804:"a11127a7",2936:"55a59490",3202:"8b9b2b8e",3263:"0cf31d41",3268:"0a5e49dc",3415:"30bfbdab",3629:"cbbf013e",3700:"a2daa725",3703:"69452b8f",3817:"fe32f44f",3956:"a5e4baea",3986:"63d066a4",4034:"25b2386e",4366:"e027a4f6",4816:"3673cbe4",4962:"0fcc9aa8",5019:"effb13e5",5096:"3cd6077b",5106:"7a1b6b60",5191:"9b9b1f2a",5254:"bd42e145",5527:"bf311581",5630:"a88710e2",5661:"929f29d3",5662:"d2e092fe",5710:"ff8a3b76",5856:"e3ee4055",5985:"43114f9f",6044:"aed858a7",6048:"a73a7d20",6346:"af0dc9cb",6388:"7119da0b",6540:"d124cf95",6590:"98021b58",6786:"90dcf2d6",6862:"83bb0c20",6877:"2fdd9977",6896:"3a096775",7007:"534b6154",7010:"13585428",7083:"c4a5a496",7099:"4518cc78",7146:"c17273ea",7271:"91406553",7473:"092eb75a",7500:"2e62c435",7517:"dbe07dad",7643:"f04235d0",7954:"dd992ef9",7973:"bcaa5dbd",8248:"78cb5404",8412:"a3b7bf4a",8647:"5547c8dd",8822:"605f539e",9007:"abcdc446",9111:"5e36d569",9270:"3699e067",9380:"cd7c82d1",9583:"c7bc3d55",9674:"61966b52",9700:"103a3ddd",9765:"357e3f3b",9903:"46bf8e96",9906:"00becaea",9928:"f26b6c36"}[e]+".js"}}(),function(){__webpack_require__.miniCssF=function(e){}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={},r="grid-studio:";__webpack_require__.l=function(o,n,t,_){if(e[o])e[o].push(n);else{var c,i;if(void 0!==t)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var u=a[s];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==r+t){c=u;break}}c||(i=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,__webpack_require__.nc&&c.setAttribute("nonce",__webpack_require__.nc),c.setAttribute("data-webpack",r+t),c.src=o),e[o]=[n];var d=function(r,n){c.onerror=c.onload=null,clearTimeout(f);var t=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((function(e){return e(n)})),r)return r(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),i&&document.head.appendChild(c)}}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){__webpack_require__.p="/"}(),function(){var e={2143:0};__webpack_require__.f.j=function(r,o){var n=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var t=new Promise((function(o,t){n=e[r]=[o,t]}));o.push(n[2]=t);var _=__webpack_require__.p+__webpack_require__.u(r),c=new Error,i=function(o){if(__webpack_require__.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var t=o&&("load"===o.type?"missing":o.type),_=o&&o.target&&o.target.src;c.message="Loading chunk "+r+" failed.\n("+t+": "+_+")",c.name="ChunkLoadError",c.type=t,c.request=_,n[1](c)}};__webpack_require__.l(_,i,"chunk-"+r,r)}},__webpack_require__.O.j=function(r){return 0===e[r]};var r=function(r,o){var n,t,_=o[0],c=o[1],i=o[2],a=0;if(_.some((function(r){return 0!==e[r]}))){for(n in c)__webpack_require__.o(c,n)&&(__webpack_require__.m[n]=c[n]);if(i)var s=i(__webpack_require__)}for(r&&r(o);a<_.length;a++)t=_[a],__webpack_require__.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return __webpack_require__.O(s)},o=self["webpackChunkgrid_studio"]=self["webpackChunkgrid_studio"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var __webpack_exports__=__webpack_require__.O(void 0,[4998],(function(){return __webpack_require__(3725)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.52407616.js.map