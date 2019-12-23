/*! For license information please see bundle.js.LICENSE */
!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!g[e]||!v[e])return;for(var r in v[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--w&&0===m&&k()}(e,r),n&&n(e,r)};var r,t=!0,o="ca6f1b382beaa4a4f057",c=1e4,i={},s=[],a=[];function d(e){var n=C[e];if(!n)return j;var t=function(t){return n.hot.active?(C[t]?-1===C[t].parents.indexOf(e)&&C[t].parents.push(e):(s=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),j(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(n){j[e]=n}}};for(var c in j)Object.prototype.hasOwnProperty.call(j,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===u&&_("prepare"),m++,j.e(e).then(n,(function(e){throw n(),e}));function n(){m--,"prepare"===u&&(y[e]||O(e),0===m&&0===w&&k())}},t.t=function(e,n){return 1&n&&(e=t(e)),j.t(e,-2&n)},t}function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:E,apply:D,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:i[e]};return r=void 0,n}var p=[],u="idle";function _(e){u=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var f,h,b,w=0,m=0,y={},v={},g={};function P(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return t=e,_("check"),(n=c,n=n||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,c=j.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}}))).then((function(e){if(!e)return _("idle"),null;v={},y={},g=e.c,b=e.h,_("prepare");var n=new Promise((function(e,n){f={resolve:e,reject:n}}));h={};return O("main"),"prepare"===u&&0===m&&0===w&&k(),n}));var n}function O(e){g[e]?(v[e]=!0,w++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=j.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):y[e]=!0}function k(){_("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then((function(){return D(t)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(P(r));e.resolve(n)}}function D(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var r,t,c,a,d;function l(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=C[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var s=0;s<a.parents.length;s++){var d=a.parents[s],l=C[d];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([d]),moduleId:c,parentId:d};-1===n.indexOf(d)&&(l.hot._acceptedDependencies[c]?(r[d]||(r[d]=[]),p(r[d],[c])):(delete r[d],n.push(d),t.push({chain:i.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var f={},w=[],m={},y=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var v in h)if(Object.prototype.hasOwnProperty.call(h,v)){var E;d=P(v);var O=!1,k=!1,D=!1,x="";switch((E=h[v]?l(d):{type:"disposed",moduleId:v}).chain&&(x="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(E),n.ignoreUnaccepted||(O=new Error("Aborted because "+d+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(E),k=!0;break;case"disposed":n.onDisposed&&n.onDisposed(E),D=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return _("abort"),Promise.reject(O);if(k)for(d in m[d]=h[d],p(w,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,d)&&(f[d]||(f[d]=[]),p(f[d],E.outdatedDependencies[d]));D&&(p(w,[E.moduleId]),m[d]=y)}var H,M=[];for(t=0;t<w.length;t++)d=w[t],C[d]&&C[d].hot._selfAccepted&&m[d]!==y&&M.push({module:d,errorHandler:C[d].hot._selfAccepted});_("dispose"),Object.keys(g).forEach((function(e){!1===g[e]&&function(e){delete installedChunks[e]}(e)}));for(var U,I,R=w.slice();R.length>0;)if(d=R.pop(),a=C[d]){var q={},L=a.hot._disposeHandlers;for(c=0;c<L.length;c++)(r=L[c])(q);for(i[d]=q,a.hot.active=!1,delete C[d],delete f[d],c=0;c<a.children.length;c++){var A=C[a.children[c]];A&&((H=A.parents.indexOf(d))>=0&&A.parents.splice(H,1))}}for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(a=C[d]))for(I=f[d],c=0;c<I.length;c++)U=I[c],(H=a.children.indexOf(U))>=0&&a.children.splice(H,1);for(d in _("apply"),o=b,m)Object.prototype.hasOwnProperty.call(m,d)&&(e[d]=m[d]);var W=null;for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(a=C[d])){I=f[d];var T=[];for(t=0;t<I.length;t++)if(U=I[t],r=a.hot._acceptedDependencies[U]){if(-1!==T.indexOf(r))continue;T.push(r)}for(t=0;t<T.length;t++){r=T[t];try{r(I)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:I[t],error:e}),n.ignoreErrored||W||(W=e)}}}for(t=0;t<M.length;t++){var B=M[t];d=B.module,s=[d];try{j(d)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:r,originalError:e}),n.ignoreErrored||W||(W=r),W||(W=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||W||(W=e)}}return W?(_("fail"),Promise.reject(W)):(_("idle"),new Promise((function(e){e(w)})))}var C={};function j(n){if(C[n])return C[n].exports;var r=C[n]={i:n,l:!1,exports:{},hot:l(n),parents:(a=s,s=[],a),children:[]};return e[n].call(r.exports,r,r.exports,d(n)),r.l=!0,r.exports}j.m=e,j.c=C,j.d=function(e,n,r){j.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},j.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,n){if(1&n&&(e=j(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(j.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)j.d(r,t,function(n){return e[n]}.bind(null,t));return r},j.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(n,"a",n),n},j.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},j.p="",j.h=function(){return o},d("./src/index.js")(j.s="./src/index.js")}({"./src/components/heading/heading.css":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/heading/heading.css?")},"./src/components/heading/heading.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.css */ "./src/components/heading/heading.css");\n/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heading_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Heading =\n/*#__PURE__*/\nfunction () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n\n  _createClass(Heading, [{\n    key: "render",\n    value: function render() {\n      var h1 = document.createElement(\'h1\');\n      var body = document.querySelector(\'body\');\n      h1.innerHTML = \'YKW is awesome\';\n      body.appendChild(h1);\n    }\n  }]);\n\n  return Heading;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Heading);\n\n//# sourceURL=webpack:///./src/components/heading/heading.js?')},"./src/components/hello-world-button/hello-world-button.css":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.css?")},"./src/components/hello-world-button/hello-world-button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_world_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world-button.css */ \"./src/components/hello-world-button/hello-world-button.css\");\n/* harmony import */ var _hello_world_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hello_world_button_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar HelloWorldButton =\n/*#__PURE__*/\nfunction () {\n  function HelloWorldButton() {\n    _classCallCheck(this, HelloWorldButton);\n\n    this.buttonCssClass = 'hello-world-button';\n  }\n\n  _createClass(HelloWorldButton, [{\n    key: \"render\",\n    value: function render() {\n      var button = document.createElement('button');\n      button.innerHTML = 'Hello world';\n      button.classList.add(this.buttonCssClass);\n      var body = document.querySelector('body');\n\n      button.onclick = function () {\n        var p = document.createElement('p');\n        p.innerHTML = 'Hello world YKW';\n        p.classList.add('hello-world-text');\n        body.appendChild(p);\n      };\n\n      body.appendChild(button);\n    }\n  }]);\n\n  return HelloWorldButton;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HelloWorldButton);\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.js?")},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello-world-button/hello-world-button.js */ "./src/components/hello-world-button/hello-world-button.js");\n/* harmony import */ var _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heading/heading.js */ "./src/components/heading/heading.js");\n\n\nvar heading = new _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__["default"]();\nheading.render();\nvar helloWorldButton = new _components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__["default"]();\nhelloWorldButton.render();\n\nif (false) {} else if (true) {\n  console.log(\'Development mode\');\n}\n\nif (true) {\n  module.hot.accept();\n}\n\n//# sourceURL=webpack:///./src/index.js?')}});