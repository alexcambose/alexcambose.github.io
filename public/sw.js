if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>a(e,i),f={module:{uri:i},exports:n,require:r};s[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8458a300e6e1dcc5774606dd4f26a607"},{url:"/_next/static/IOjH2NVtiCaANwx4FQXgv/_buildManifest.js",revision:"4ebfba5aa7072d75afe363eb5c11da2c"},{url:"/_next/static/IOjH2NVtiCaANwx4FQXgv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/164-d0959e27dec9ad76.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/17d85303-1ddef2c7eef929e2.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/335.802ec4c01bbf87b8.js",revision:"802ec4c01bbf87b8"},{url:"/_next/static/chunks/522-c18110f2ea198d60.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/54.56dcb6a616503cb0.js",revision:"56dcb6a616503cb0"},{url:"/_next/static/chunks/58.77f68c2099c76f7f.js",revision:"77f68c2099c76f7f"},{url:"/_next/static/chunks/74-c22647f3cd1714dc.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/924.bd5f832b6d1a0e30.js",revision:"bd5f832b6d1a0e30"},{url:"/_next/static/chunks/app/layout-d1881604e3fb15bf.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/app/page-8d8ffdb858943b90.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/framework-f780fd9bae3b8c58.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/main-6387ad5dc0c86b47.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/main-app-f3eebf6560dd3b01.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/pages/_app-c1e6012cffc83f52.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/pages/_error-eea7f7f56f62524d.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-9d18fd8ced1cc486.js",revision:"IOjH2NVtiCaANwx4FQXgv"},{url:"/_next/static/css/1956d8ff16fdd514.css",revision:"1956d8ff16fdd514"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/coinbase.svg",revision:"ce26b78e0336736c94a038f9bfe2e890"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"ddbc3f8cc5320bdfd224742577ee86bc"},{url:"/metamask.svg",revision:"d206794f79a670efe19d23659fe7ccec"},{url:"/vercel.svg",revision:"0277e415b4bba9361a057a607884c295"},{url:"/walletconnect.svg",revision:"aaa3d0d4db1b815f574d0bc4ccf23cc5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
