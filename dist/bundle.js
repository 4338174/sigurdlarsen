!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var r,o=n(1),i=document.querySelector("#slider"),u=-1,s=3,c=[],a=[],l=0,f=0;f<29;f++)c.push("./img/modell/modell_spin"+("0"+f).slice(-2)+".png");function h(t){u=1,r=t.screenX}function d(){u=-1}function v(t){1==u&&_(t.screenX)}function p(t){u=1,r=t.touches[0].screenX}function m(t){u=-1}function y(t){1==u&&_(t.touches[0].screenX)}function _(t){t+s<r&&(console.log("left"),r=t,l!=c.length-1?l+=1:l=0,console.log(c[l]),g(a[l])),t-s>r&&(console.log("right"),r=t,0!=l?l-=1:l=c.length-1,console.log(c[l]),g(a[l]))}function g(t){if(null===i)throw new Error("sliderElement does not exist.");var e=i.querySelector("img");if(null===e)throw new Error("No image found.");i.replaceChild(t,e)}console.log(c),function(t){var e=t.map(function(t){return new o.Promise(function(e,n){var r=new Image;r.onload=function(){e(r)},r.onerror=r.onabort=function(){n(t)},r.src=t})});return o.Promise.all(e)}(c).then(function(t){if(null===i)throw new Error("sliderElement does not exist.");a=t;for(var e=function(t){setTimeout(function(){return g(a[t])},25*t)},n=0;n<a.length;n++)e(n);i.addEventListener("mousemove",v),i.addEventListener("mousedown",h),i.addEventListener("mouseup",d),document.body.addEventListener("mouseup",d),document.body.addEventListener("mouseleave",d),document.body.addEventListener("mousemove",v),i.addEventListener("touchstart",p),i.addEventListener("touchend",m),i.addEventListener("touchmove",y),document.body.addEventListener("touchstart",p),document.body.addEventListener("touchend",m)},function(t){console.log(t)})},function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,u=void 0,s=function(t,e){v[o]=t,v[o+1]=e,2===(o+=2)&&(u?u(p):m())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var t=setTimeout;return function(){return t(p,1)}}var v=new Array(1e3);function p(){for(var t=0;t<o;t+=2){(0,v[t])(v[t+1]),v[t]=void 0,v[t+1]=void 0}o=0}var m=void 0;function y(t,e){var n=this,r=new this.constructor(w);void 0===r[g]&&X(r);var o=n._state;if(o){var i=arguments[o-1];s(function(){return k(o,r,i,n._result)})}else M(n,r,t,e);return r}function _(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(w);return S(e,t),e}m=f?function(){return e.nextTick(p)}:l?function(){var t=0,e=new l(p),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():h?function(){var t=new MessageChannel;return t.port1.onmessage=p,function(){return t.port2.postMessage(0)}}():void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(p)}:d()}catch(t){return d()}}():d();var g=Math.random().toString(36).substring(2);function w(){}var b=void 0,E=1,T=2,A={error:null};function j(t){try{return t.then}catch(t){return A.error=t,A}}function L(e,n,r){n.constructor===e.constructor&&r===y&&n.constructor.resolve===_?function(t,e){e._state===E?O(t,e._result):e._state===T?P(t,e._result):M(e,void 0,function(e){return S(t,e)},function(e){return P(t,e)})}(e,n):r===A?(P(e,A.error),A.error=null):void 0===r?O(e,n):t(r)?function(t,e,n){s(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?S(t,n):O(t,n))},function(e){r||(r=!0,P(t,e))},t._label);!r&&o&&(r=!0,P(t,o))},t)}(e,n,r):O(e,n)}function S(t,e){t===e?P(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}(e)?O(t,e):L(t,e,j(e))}function x(t){t._onerror&&t._onerror(t._result),C(t)}function O(t,e){t._state===b&&(t._result=e,t._state=E,0!==t._subscribers.length&&s(C,t))}function P(t,e){t._state===b&&(t._state=T,t._result=e,s(x,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+E]=n,o[i+T]=r,0===i&&t._state&&s(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?k(n,r,o,i):o(i);t._subscribers.length=0}}function k(e,n,r,o){var i=t(r),u=void 0,s=void 0,c=void 0,a=void 0;if(i){if((u=function(t,e){try{return t(e)}catch(t){return A.error=t,A}}(r,o))===A?(a=!0,s=u.error,u.error=null):c=!0,n===u)return void P(n,new TypeError("A promises callback cannot return that same promise."))}else u=o,c=!0;n._state!==b||(i&&c?S(n,u):a?P(n,s):e===E?O(n,u):e===T&&P(n,u))}var F=0;function X(t){t[g]=F++,t._state=void 0,t._result=void 0,t._subscribers=[]}var q=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(w),this.promise[g]||X(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&O(this.promise,this._result))):P(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===b&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===_){var o=j(t);if(o===y&&t._state!==b)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===Y){var i=new n(w);L(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===b&&(this._remaining--,t===T?P(r,n):this._result[e]=n),0===this._remaining&&O(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,function(t){return n._settledAt(E,e,t)},function(t){return n._settledAt(T,e,t)})},t}();var Y=function(){function e(t){this[g]=F++,this._result=this._state=void 0,this._subscribers=[],w!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){S(t,e)},function(e){P(t,e)})}catch(e){P(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return Y.prototype.then=y,Y.all=function(t){return new q(this,t).promise},Y.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},Y.resolve=_,Y.reject=function(t){var e=new this(w);return P(e,t),e},Y._setScheduler=function(t){u=t},Y._setAsap=function(t){s=t},Y._asap=s,Y.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=Y},Y.Promise=Y,Y})}).call(this,n(2),n(3))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var c,a=[],l=!1,f=-1;function h(){l&&c&&(l=!1,c.length?a=c.concat(a):f=-1,a.length&&d())}function d(){if(!l){var t=s(h);l=!0;for(var e=a.length;e;){for(c=a,a=[];++f<e;)c&&c[f].run();f=-1,e=a.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function p(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new v(t,e)),1!==a.length||l||s(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);