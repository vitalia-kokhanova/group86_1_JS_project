(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var re={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++a)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},it=function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[a++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],s=e[n++],o=e[n++],c=((r&7)<<18|(i&63)<<12|(s&63)<<6|o&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],s=e[n++];t[a++]=String.fromCharCode((r&15)<<12|(i&63)<<6|s&63)}}return t.join("")},_e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const i=e[r],s=r+1<e.length,o=s?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,h=(i&3)<<4|o>>4;let g=(o&15)<<2|l>>6,p=l&63;c||(p=64,s||(g=64)),a.push(n[u],n[h],n[g],n[p])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ee(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):it(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||o==null||l==null||h==null)throw new st;const g=i<<2|o>>4;if(a.push(g),l!==64){const p=o<<4&240|l>>2;if(a.push(p),h!==64){const at=l<<6&192|h;a.push(at)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class st extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ot=function(e){const t=Ee(e);return _e.encodeByteArray(t,!0)},Ae=function(e){return ot(e).replace(/\./g,"")},ct=function(e){try{return _e.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=()=>lt().__FIREBASE_DEFAULTS__,ut=()=>{if(typeof process>"u"||typeof re>"u")return;const e=re.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ft=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ct(e[1]);return t&&JSON.parse(t)},ht=()=>{try{return dt()||ut()||ft()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Se=()=>{var e;return(e=ht())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,a))}}}function mt(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Te(){try{return typeof indexedDB=="object"}catch{return!1}}function Ce(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function gt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="FirebaseError";class C extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=bt,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?yt(i,a):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new C(r,o,a)}}function yt(e,t){return e.replace(It,(n,a)=>{const r=t[a];return r!=null?String(r):`<${a}?>`})}const It=/\{\$([^}]+)}/g;function R(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const i=e[r],s=t[r];if(ae(i)&&ae(s)){if(!R(i,s))return!1}else if(i!==s)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function ae(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=1e3,vt=2,Et=4*60*60*1e3,_t=.5;function ie(e,t=wt,n=vt){const a=t*Math.pow(n,e),r=Math.round(_t*a*(Math.random()-.5)*2);return Math.min(Et,a+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){return e&&e._delegate?e._delegate:e}class v{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const a=new pt;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Tt(t))try{this.getOrInitializeService({instanceIdentifier:E})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});a.resolve(i)}catch{}}}}clearInstance(t=E){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=E){return this.instances.has(t)}getOptions(t=E){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);a===o&&s.resolve(r)}return r}onInit(t,n){var a;const r=this.normalizeInstanceIdentifier(n),i=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const a=this.onInitCallbacks.get(n);if(a)for(const r of a)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:St(t),options:n}),this.instances.set(t,a),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=E){return this.component?this.component.multipleInstances?t:E:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function St(e){return e===E?void 0:e}function Tt(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new At(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(d||(d={}));const Dt={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Ot=d.INFO,Rt={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},Bt=(e,t,...n)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),r=Rt[t];if(r)console[r](`[${a}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oe{constructor(t){this.name=t,this._logLevel=Ot,this._logHandler=Bt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in d))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...t),this._logHandler(this,d.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...t),this._logHandler(this,d.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,d.INFO,...t),this._logHandler(this,d.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,d.WARN,...t),this._logHandler(this,d.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...t),this._logHandler(this,d.ERROR,...t)}}const Mt=(e,t)=>t.some(n=>e instanceof n);let se,oe;function $t(){return se||(se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pt(){return oe||(oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Re=new WeakMap,W=new WeakMap,Be=new WeakMap,F=new WeakMap,X=new WeakMap;function Nt(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(y(e.result)),r()},s=()=>{a(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Re.set(n,e)}).catch(()=>{}),X.set(t,e),t}function Lt(e){if(W.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),r()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});W.set(e,t)}let q={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return W.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Be.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kt(e){q=e(q)}function Ft(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(j(this),t,...n);return Be.set(a,t.sort?t.sort():[t]),y(a)}:Pt().includes(e)?function(...t){return e.apply(j(this),t),y(Re.get(this))}:function(...t){return y(e.apply(j(this),t))}}function jt(e){return typeof e=="function"?Ft(e):(e instanceof IDBTransaction&&Lt(e),Mt(e,$t())?new Proxy(e,q):e)}function y(e){if(e instanceof IDBRequest)return Nt(e);if(F.has(e))return F.get(e);const t=jt(e);return t!==e&&(F.set(e,t),X.set(t,e)),t}const j=e=>X.get(e);function Me(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const s=indexedDB.open(e,t),o=y(s);return a&&s.addEventListener("upgradeneeded",c=>{a(y(s.result),c.oldVersion,c.newVersion,y(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const xt=["get","getKey","getAll","getAllKeys","count"],Ht=["put","add","delete","clear"],x=new Map;function ce(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=Ht.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||xt.includes(n)))return;const i=async function(s,...o){const c=this.transaction(s,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return x.set(t,i),i}kt(e=>({...e,get:(t,n,a)=>ce(t,n)||e.get(t,n,a),has:(t,n)=>!!ce(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ut(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function Ut(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const G="@firebase/app",le="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Oe("@firebase/app"),zt="@firebase/app-compat",Wt="@firebase/analytics-compat",qt="@firebase/analytics",Gt="@firebase/app-check-compat",Kt="@firebase/app-check",Yt="@firebase/auth",Jt="@firebase/auth-compat",Xt="@firebase/database",Zt="@firebase/database-compat",Qt="@firebase/functions",en="@firebase/functions-compat",tn="@firebase/installations",nn="@firebase/installations-compat",rn="@firebase/messaging",an="@firebase/messaging-compat",sn="@firebase/performance",on="@firebase/performance-compat",cn="@firebase/remote-config",ln="@firebase/remote-config-compat",dn="@firebase/storage",un="@firebase/storage-compat",fn="@firebase/firestore",hn="@firebase/vertexai-preview",pn="@firebase/firestore-compat",mn="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="[DEFAULT]",gn={[G]:"fire-core",[zt]:"fire-core-compat",[qt]:"fire-analytics",[Wt]:"fire-analytics-compat",[Kt]:"fire-app-check",[Gt]:"fire-app-check-compat",[Yt]:"fire-auth",[Jt]:"fire-auth-compat",[Xt]:"fire-rtdb",[Zt]:"fire-rtdb-compat",[Qt]:"fire-fn",[en]:"fire-fn-compat",[tn]:"fire-iid",[nn]:"fire-iid-compat",[rn]:"fire-fcm",[an]:"fire-fcm-compat",[sn]:"fire-perf",[on]:"fire-perf-compat",[cn]:"fire-rc",[ln]:"fire-rc-compat",[dn]:"fire-gcs",[un]:"fire-gcs-compat",[fn]:"fire-fst",[pn]:"fire-fst-compat",[hn]:"fire-vertex","fire-js":"fire-js",[mn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=new Map,bn=new Map,Y=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){b.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function A(e){const t=e.name;if(Y.has(t))return b.debug(`There were multiple attempts to register component ${t}.`),!1;Y.set(t,e);for(const n of B.values())de(n,e);for(const n of bn.values())de(n,e);return!0}function N(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},I=new P("app","Firebase",yn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new v("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}function $e(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const a=Object.assign({name:K,automaticDataCollectionEnabled:!1},t),r=a.name;if(typeof r!="string"||!r)throw I.create("bad-app-name",{appName:String(r)});if(n||(n=Se()),!n)throw I.create("no-options");const i=B.get(r);if(i){if(R(n,i.options)&&R(a,i.config))return i;throw I.create("duplicate-app",{appName:r})}const s=new Ct(r);for(const c of Y.values())s.addComponent(c);const o=new In(n,a,s);return B.set(r,o),o}function wn(e=K){const t=B.get(e);if(!t&&e===K&&Se())return $e();if(!t)throw I.create("no-app",{appName:e});return t}function w(e,t,n){var a;let r=(a=gn[e])!==null&&a!==void 0?a:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),b.warn(o.join(" "));return}A(new v(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="firebase-heartbeat-database",En=1,O="firebase-heartbeat-store";let H=null;function Pe(){return H||(H=Me(vn,En,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(O)}catch(n){console.warn(n)}}}}).catch(e=>{throw I.create("idb-open",{originalErrorMessage:e.message})})),H}async function _n(e){try{const n=(await Pe()).transaction(O),a=await n.objectStore(O).get(Ne(e));return await n.done,a}catch(t){if(t instanceof C)b.warn(t.message);else{const n=I.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});b.warn(n.message)}}}async function ue(e,t){try{const a=(await Pe()).transaction(O,"readwrite");await a.objectStore(O).put(t,Ne(e)),await a.done}catch(n){if(n instanceof C)b.warn(n.message);else{const a=I.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});b.warn(a.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=1024,Sn=30*24*60*60*1e3;class Tn{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dn(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fe();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Sn}),this._storage.overwrite(this._heartbeatsCache))}catch(a){b.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fe(),{heartbeatsToSend:a,unsentEntries:r}=Cn(this._heartbeatsCache.heartbeats),i=Ae(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return b.warn(n),""}}}function fe(){return new Date().toISOString().substring(0,10)}function Cn(e,t=An){const n=[];let a=e.slice();for(const r of e){const i=n.find(s=>s.agent===r.agent);if(i){if(i.dates.push(r.date),he(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),he(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Dn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Te()?Ce().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _n(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ue(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ue(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function he(e){return Ae(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e){A(new v("platform-logger",t=>new Vt(t),"PRIVATE")),A(new v("heartbeat",t=>new Tn(t),"PRIVATE")),w(G,le,e),w(G,le,"esm2017"),w("fire-js","")}On("");var Rn="firebase",Bn="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */w(Rn,Bn,"app");const Le="@firebase/installations",Z="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=1e4,Fe=`w:${Z}`,je="FIS_v2",Mn="https://firebaseinstallations.googleapis.com/v1",$n=60*60*1e3,Pn="installations",Nn="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},S=new P(Pn,Nn,Ln);function xe(e){return e instanceof C&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He({projectId:e}){return`${Mn}/projects/${e}/installations`}function Ve(e){return{token:e.token,requestStatus:2,expiresIn:Fn(e.expiresIn),creationTime:Date.now()}}async function Ue(e,t){const a=(await t.json()).error;return S.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ze({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function kn(e,{refreshToken:t}){const n=ze(e);return n.append("Authorization",jn(t)),n}async function We(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Fn(e){return Number(e.replace("s","000"))}function jn(e){return`${je} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=He(e),r=ze(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={fid:n,authVersion:je,appId:e.appId,sdkVersion:Fe},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await We(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ve(l.authToken)}}else throw await Ue("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=/^[cdef][\w-]{21}$/,J="";function Un(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=zn(e);return Vn.test(n)?n:J}catch{return J}}function zn(e){return Hn(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Map;function Ke(e,t){const n=L(e);Ye(n,t),Wn(n,t)}function Ye(e,t){const n=Ge.get(e);if(n)for(const a of n)a(t)}function Wn(e,t){const n=qn();n&&n.postMessage({key:e,fid:t}),Gn()}let _=null;function qn(){return!_&&"BroadcastChannel"in self&&(_=new BroadcastChannel("[Firebase] FID Change"),_.onmessage=e=>{Ye(e.data.key,e.data.fid)}),_}function Gn(){Ge.size===0&&_&&(_.close(),_=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="firebase-installations-database",Yn=1,T="firebase-installations-store";let V=null;function Q(){return V||(V=Me(Kn,Yn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(T)}}})),V}async function M(e,t){const n=L(e),r=(await Q()).transaction(T,"readwrite"),i=r.objectStore(T),s=await i.get(n);return await i.put(t,n),await r.done,(!s||s.fid!==t.fid)&&Ke(e,t.fid),t}async function Je(e){const t=L(e),a=(await Q()).transaction(T,"readwrite");await a.objectStore(T).delete(t),await a.done}async function k(e,t){const n=L(e),r=(await Q()).transaction(T,"readwrite"),i=r.objectStore(T),s=await i.get(n),o=t(s);return o===void 0?await i.delete(n):await i.put(o,n),await r.done,o&&(!s||s.fid!==o.fid)&&Ke(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){let t;const n=await k(e.appConfig,a=>{const r=Jn(a),i=Xn(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===J?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Jn(e){const t=e||{fid:Un(),registrationStatus:0};return Xe(t)}function Xn(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(S.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Zn(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Qn(e)}:{installationEntry:t}}async function Zn(e,t){try{const n=await xn(e,t);return M(e.appConfig,n)}catch(n){throw xe(n)&&n.customData.serverCode===409?await Je(e.appConfig):await M(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Qn(e){let t=await pe(e.appConfig);for(;t.registrationStatus===1;)await qe(100),t=await pe(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await ee(e);return a||n}return t}function pe(e){return k(e,t=>{if(!t)throw S.create("installation-not-found");return Xe(t)})}function Xe(e){return er(e)?{fid:e.fid,registrationStatus:0}:e}function er(e){return e.registrationStatus===1&&e.registrationTime+ke<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr({appConfig:e,heartbeatServiceProvider:t},n){const a=nr(e,n),r=kn(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={installation:{sdkVersion:Fe,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await We(()=>fetch(a,o));if(c.ok){const l=await c.json();return Ve(l)}else throw await Ue("Generate Auth Token",c)}function nr(e,{fid:t}){return`${He(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e,t=!1){let n;const a=await k(e.appConfig,i=>{if(!Ze(i))throw S.create("not-registered");const s=i.authToken;if(!t&&ir(s))return i;if(s.requestStatus===1)return n=rr(e,t),i;{if(!navigator.onLine)throw S.create("app-offline");const o=or(i);return n=ar(e,o),o}});return n?await n:a.authToken}async function rr(e,t){let n=await me(e.appConfig);for(;n.authToken.requestStatus===1;)await qe(100),n=await me(e.appConfig);const a=n.authToken;return a.requestStatus===0?te(e,t):a}function me(e){return k(e,t=>{if(!Ze(t))throw S.create("not-registered");const n=t.authToken;return cr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ar(e,t){try{const n=await tr(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await M(e.appConfig,a),n}catch(n){if(xe(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Je(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await M(e.appConfig,a)}throw n}}function Ze(e){return e!==void 0&&e.registrationStatus===2}function ir(e){return e.requestStatus===2&&!sr(e)}function sr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$n}function or(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function cr(e){return e.requestStatus===1&&e.requestTime+ke<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(e){const t=e,{installationEntry:n,registrationPromise:a}=await ee(t);return a?a.catch(console.error):te(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(e,t=!1){const n=e;return await ur(n),(await te(n,t)).token}async function ur(e){const{registrationPromise:t}=await ee(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){if(!e||!e.options)throw U("App Configuration");if(!e.name)throw U("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw U(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function U(e){return S.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="installations",hr="installations-internal",pr=e=>{const t=e.getProvider("app").getImmediate(),n=fr(t),a=N(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},mr=e=>{const t=e.getProvider("app").getImmediate(),n=N(t,Qe).getImmediate();return{getId:()=>lr(n),getToken:r=>dr(n,r)}};function gr(){A(new v(Qe,pr,"PUBLIC")),A(new v(hr,mr,"PRIVATE"))}gr();w(Le,Z);w(Le,Z,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="analytics",br="firebase_id",yr="origin",Ir=60*1e3,wr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ne="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new Oe("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},m=new P("analytics","Analytics",vr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e){if(!e.startsWith(ne)){const t=m.create("invalid-gtag-resource",{gtagURL:e});return f.warn(t.message),""}return e}function et(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function _r(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ar(e,t){const n=_r("firebase-js-sdk-policy",{createScriptURL:Er}),a=document.createElement("script"),r=`${ne}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(r):r,a.async=!0,document.head.appendChild(a)}function Sr(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Tr(e,t,n,a,r,i){const s=a[r];try{if(s)await t[s];else{const c=(await et(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(o){f.error(o)}e("config",r,i)}async function Cr(e,t,n,a,r){try{let i=[];if(r&&r.send_to){let s=r.send_to;Array.isArray(s)||(s=[s]);const o=await et(n);for(const c of s){const l=o.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",a,r||{})}catch(i){f.error(i)}}function Dr(e,t,n,a){async function r(i,...s){try{if(i==="event"){const[o,c]=s;await Cr(e,t,n,o,c)}else if(i==="config"){const[o,c]=s;await Tr(e,t,n,a,o,c)}else if(i==="consent"){const[o,c]=s;e("consent",o,c)}else if(i==="get"){const[o,c,l]=s;e("get",o,c,l)}else if(i==="set"){const[o]=s;e("set",o)}else e(i,...s)}catch(o){f.error(o)}}return r}function Or(e,t,n,a,r){let i=function(...s){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Dr(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function Rr(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ne)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=30,Mr=1e3;class $r{constructor(t={},n=Mr){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const tt=new $r;function Pr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Nr(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:Pr(a)},i=wr.replace("{app-id}",n),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw m.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Lr(e,t=tt,n){const{appId:a,apiKey:r,measurementId:i}=e.options;if(!a)throw m.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:a};throw m.create("no-api-key")}const s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new jr;return setTimeout(async()=>{o.abort()},Ir),nt({appId:a,apiKey:r,measurementId:i},s,o,t)}async function nt(e,{throttleEndTimeMillis:t,backoffCount:n},a,r=tt){var i;const{appId:s,measurementId:o}=e;try{await kr(a,t)}catch(c){if(o)return f.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await Nr(e);return r.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!Fr(l)){if(r.deleteThrottleMetadata(s),o)return f.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?ie(n,r.intervalMillis,Br):ie(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(s,h),f.debug(`Calling attemptFetch again in ${u} millis`),nt(e,h,a,r)}}function kr(e,t){return new Promise((n,a)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),a(m.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Fr(e){if(!(e instanceof C)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class jr{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function xr(e,t,n,a,r){if(r&&r.global){e("event",n,a);return}else{const i=await t,s=Object.assign(Object.assign({},a),{send_to:i});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(){if(Te())try{await Ce()}catch(e){return f.warn(m.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return f.warn(m.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vr(e,t,n,a,r,i,s){var o;const c=Lr(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&f.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>f.error(p)),t.push(c);const l=Hr().then(p=>{if(p)return a.getId()}),[u,h]=await Promise.all([c,l]);Rr(i)||Ar(i,u.measurementId),r("js",new Date);const g=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return g[yr]="firebase",g.update=!0,h!=null&&(g[br]=h),r("config",u.measurementId,g),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.app=t}_delete(){return delete D[this.app.options.appId],Promise.resolve()}}let D={},ge=[];const be={};let z="dataLayer",zr="gtag",ye,rt,Ie=!1;function Wr(){const e=[];if(mt()&&e.push("This is a browser extension environment."),gt()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=m.create("invalid-analytics-context",{errorInfo:t});f.warn(n.message)}}function qr(e,t,n){Wr();const a=e.options.appId;if(!a)throw m.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)f.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw m.create("no-api-key");if(D[a]!=null)throw m.create("already-exists",{id:a});if(!Ie){Sr(z);const{wrappedGtag:i,gtagCore:s}=Or(D,ge,be,z,zr);rt=i,ye=s,Ie=!0}return D[a]=Vr(e,ge,be,t,ye,z,n),new Ur(e)}function Gr(e=wn()){e=De(e);const t=N(e,$);return t.isInitialized()?t.getImmediate():Kr(e)}function Kr(e,t={}){const n=N(e,$);if(n.isInitialized()){const r=n.getImmediate();if(R(t,n.getOptions()))return r;throw m.create("already-initialized")}return n.initialize({options:t})}function Yr(e,t,n,a){e=De(e),xr(rt,D[e.app.options.appId],t,n,a).catch(r=>f.error(r))}const we="@firebase/analytics",ve="0.10.7";function Jr(){A(new v($,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return qr(a,r,n)},"PUBLIC")),A(new v("analytics-internal",e,"PRIVATE")),w(we,ve),w(we,ve,"esm2017");function e(t){try{const n=t.getProvider($).getImmediate();return{logEvent:(a,r,i)=>Yr(n,a,r,i)}}catch(n){throw m.create("interop-component-reg-failed",{reason:n})}}}Jr();const Xr={apiKey:"AIzaSyBv33wcqlvshLdxukPHWCTXgvA2HBIhHzY",authDomain:"project-js-9e6d9.firebaseapp.com",projectId:"project-js-9e6d9",storageBucket:"project-js-9e6d9.appspot.com",messagingSenderId:"12456906342",appId:"1:12456906342:web:99533e85fc9948d2a727a7",measurementId:"G-K9TMHH2KLW"};Gr(app);const Zr=document.getElementById("app");function Qr(e){e.innerHTML=`
        <h1>Home</h1>
    `}$e(Xr);document.addEventListener("DOMContentLoaded",()=>{switch(window.location.pathname){case"/":Qr(Zr);break;case"/about":renderAbout(appContainer);break;case"/contacts":renderContacts(appContainer);case"/products":renderProducts(appContainer)}});
