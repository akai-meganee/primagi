if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,o,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(o.map((r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-f929b32b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"config.json",revision:"c699856f8bdfa79c39e11f249cdc0906"},{url:"favicon.ico",revision:"2dbd3878716f4a47104965ed7c8a3c33"},{url:"font/NotoSansJP-Bold.otf2.woff",revision:"484ff05f9f2c0ad7e092c5321cbf79e5"},{url:"font/NotoSansJP-Regular2.woff",revision:"65dee0df720c84d2847223531e34a7ac"},{url:"img/card.png",revision:"4d03d4efee27f56c0dd3c6410d0497f8"},{url:"img/img_load_err.jpg",revision:"f10e86577b492c2fc63335d2716fae10"},{url:"index.html",revision:"bded69ef0d33629dc2905a28efed1b7d"},{url:"logo128.png",revision:"fd7b4ccea67fc18476dee4ac53ecb892"},{url:"logo512.png",revision:"a8d3e81a648a06637f9e33ce7fb5d9d7"},{url:"main.js",revision:"bc380fe0ad529da52f42303639e77032"},{url:"manifest.json",revision:"8a56c0e490541ded63af60afc317ba5d"}],{}),e.registerRoute(/https:\/\/cdn.primagi.jp\/.*/,new e.CacheFirst({cacheName:"primagi",plugins:[new e.ExpirationPlugin({maxEntries:3e3,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
