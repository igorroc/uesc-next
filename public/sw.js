if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Frame 13.png",revision:"04a15dc35e24110564e48b485b0b9b10"},{url:"/Frame 13@0.5.png",revision:"9f643ed40d273028176c7bef4e8ceda3"},{url:"/_next/app-build-manifest.json",revision:"fcbc5306581c5b7df751ecf3c3ccb656"},{url:"/_next/static/FXFdx35pErMtQio5HUAhm/_buildManifest.js",revision:"02b926c0e0d93f81521380ea4167e5c8"},{url:"/_next/static/FXFdx35pErMtQio5HUAhm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2e3a737e-2c8b44dce757de72.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/382-0f847f9133b187aa.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/539bbe41-36a808a15c0c6bdb.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/698-d7458314db3e3d19.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/95-656850eb76f62d8c.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/calculadora/info/page-5068176d65dc9ee2.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/calculadora/layout-fbd3e4710dd3c2ab.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/calculadora/page-dd90df25563231fa.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/emails/add/page-a040505289ff815b.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/emails/admin-add/page-6695cffd786840ef.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/emails/layout-7615122c572cece6.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/emails/page-e53491df9f4db62a.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/layout-a1f2114a27d4028c.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/app/page-f862a91e7bcfb553.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/b6364a60-34bf9f8958f7e0b7.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/bce60fc1-1bdfbd669332dc7c.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/cacdea1d-54b5de8670d8b2e8.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/main-88f2aacfe1e0a94f.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/main-app-376369466752c967.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-067389310fbc83ae.js",revision:"FXFdx35pErMtQio5HUAhm"},{url:"/_next/static/css/19c8912ec17bb0da.css",revision:"19c8912ec17bb0da"},{url:"/_next/static/css/31a6a74dd0797f59.css",revision:"31a6a74dd0797f59"},{url:"/_next/static/css/515f66db08a29a50.css",revision:"515f66db08a29a50"},{url:"/_next/static/css/74ac2d12993646cf.css",revision:"74ac2d12993646cf"},{url:"/_next/static/css/963743769f20b6bd.css",revision:"963743769f20b6bd"},{url:"/_next/static/css/b3c35d5907d0b119.css",revision:"b3c35d5907d0b119"},{url:"/_next/static/css/da62ecad2b0edcce.css",revision:"da62ecad2b0edcce"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/banner.png",revision:"c5eed7f2dd9e84b49822cec3f8a0410e"},{url:"/banner_calculadora.png",revision:"b13815308063784d02ba25fb3fd2d9eb"},{url:"/banner_emails.png",revision:"60ae903aaf30643685f34b10f161ed9d"},{url:"/favicon.png",revision:"5d6fc2aa31faa39ea7e7555c099c88b2"},{url:"/icon-192x192.png",revision:"8c1e068c3256f0f30b2f838b397b8b27"},{url:"/icon-256x256.png",revision:"ee3285fcd2e6cbef905335ba9dacc4e6"},{url:"/icon-384x384.png",revision:"30fe20ab18ea291b74e2d00191f981c4"},{url:"/icon-512x512.png",revision:"910fa63c87edf94aa7688a985cd39d9b"},{url:"/manifest.json",revision:"bb5d617155cc7179c0a7fe9d7dda4c7e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
