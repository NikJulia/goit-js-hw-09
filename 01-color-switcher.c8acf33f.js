parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TCaP":[function(require,module,exports) {
const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=1e3;let e=null;function o(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,e=setInterval(()=>{t.body.style.backgroundColor=a()},n)}function d(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(e)}function a(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.disabled=!1,t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",o),t.stopBtn.addEventListener("click",d);
},{}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-js-hw-09/01-color-switcher.c8acf33f.js.map