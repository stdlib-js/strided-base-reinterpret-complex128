// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var a,e,l,f,y;if(null==t)return r.call(t);e=t[n],y=n,a=null!=(f=t)&&o.call(f,y);try{t[n]=void 0}catch(o){return r.call(t)}return l=r.call(t),a?t[n]=e:delete t[n],l}:function(t){return r.call(t)},e="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var f="function"==typeof Float64Array?Float64Array:void 0;var y=function(){var t,r,o;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,NaN]),o=r,t=(e&&o instanceof Float64Array||"[object Float64Array]"===a(o))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?f:function(){throw new Error("not implemented")};function c(t,r){return new y(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,2*(t.length-r))}export{c as default};
//# sourceMappingURL=mod.js.map
