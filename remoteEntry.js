var k={1461:(i,v,l)=>{var s={"./ProductsModule":()=>l.e(828).then(()=>()=>l(1856))},b=(f,w)=>(l.R=w,w=l.o(s,f)?s[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),l.R=void 0,w),p=(f,w)=>{if(l.S){var d="default",x=l.S[d];if(x&&x!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return l.S[d]=f,l.I(d,w)}};l.d(v,{get:()=>b,init:()=>p})}},$={};function e(i){var v=$[i];if(void 0!==v)return v.exports;var l=$[i]={exports:{}};return k[i](l,l.exports,e),l.exports}e.m=k,e.c=$,e.d=(i,v)=>{for(var l in v)e.o(v,l)&&!e.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:v[l]})},e.f={},e.e=i=>Promise.all(Object.keys(e.f).reduce((v,l)=>(e.f[l](i,v),v),[])),e.u=i=>i+"."+{96:"d025a63b1018858f",181:"d4490ffefece9f45",255:"726f2d124e334c66",284:"f973a12340aafff0",481:"b7cb76bd1ab58327",511:"fc73f7d3926b1be7",559:"ee633e2cea8b2266",650:"5da852d771c4cc5e",673:"742df2cb87d325c6",687:"0d052a4260224fb5",793:"060aada5dc48cad1",828:"053beae3960596b6",895:"3dfb4136ce54eabc",920:"9f5534a7f60f61ff"}[i]+".js",e.miniCssF=i=>{},e.o=(i,v)=>Object.prototype.hasOwnProperty.call(i,v),(()=>{var i={},v="products:";e.l=(l,s,b,p)=>{if(i[l])i[l].push(s);else{var f,w;if(void 0!==b)for(var d=document.getElementsByTagName("script"),x=0;x<d.length;x++){var g=d[x];if(g.getAttribute("src")==l||g.getAttribute("data-webpack")==v+b){f=g;break}}f||(w=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,e.nc&&f.setAttribute("nonce",e.nc),f.setAttribute("data-webpack",v+b),f.src=e.tu(l)),i[l]=[s];var m=(E,V)=>{f.onerror=f.onload=null,clearTimeout(y);var S=i[l];if(delete i[l],f.parentNode&&f.parentNode.removeChild(f),S&&S.forEach(c=>c(V)),E)return E(V)},y=setTimeout(m.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=m.bind(null,f.onerror),f.onload=m.bind(null,f.onload),w&&document.head.appendChild(f)}}})(),e.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{e.S={};var i={},v={};e.I=(l,s)=>{s||(s=[]);var b=v[l];if(b||(b=v[l]={}),!(s.indexOf(b)>=0)){if(s.push(b),i[l])return i[l];e.o(e.S,l)||(e.S[l]={});var p=e.S[l],w="products",d=(m,y,E,V)=>{var S=p[m]=p[m]||{},c=S[y];(!c||!c.loaded&&(!V!=!c.eager?V:w>c.from))&&(S[y]={get:E,from:w,eager:!!V})},g=[];return"default"===l&&(d("@angular/common","15.2.0",()=>e.e(895).then(()=>()=>e(6895))),d("@angular/core","15.2.0",()=>e.e(650).then(()=>()=>e(4650))),d("@angular/platform-browser","15.2.0",()=>e.e(255).then(()=>()=>e(1481))),d("@angular/router","15.2.0",()=>e.e(793).then(()=>()=>e(4793))),d("@fortawesome/angular-fontawesome","0.12.1",()=>e.e(920).then(()=>()=>e(6920))),d("@fortawesome/fontawesome-svg-core","6.3.0",()=>e.e(673).then(()=>()=>e(2673))),d("@fortawesome/free-solid-svg-icons","6.3.0",()=>e.e(687).then(()=>()=>e(2687))),d("rxjs/operators","7.8.0",()=>e.e(559).then(()=>()=>e(7559))),d("rxjs","7.8.0",()=>e.e(284).then(()=>()=>e(7284)))),i[l]=g.length?Promise.all(g).then(()=>i[l]=1):1}}})(),(()=>{var i;e.tt=()=>(void 0===i&&(i={createScriptURL:v=>v},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),e.tu=i=>e.tt().createScriptURL(i),(()=>{var i;if("string"==typeof import.meta.url&&(i=import.meta.url),!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=i})(),(()=>{var i=t=>{var n=o=>o.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),a=r[1]?n(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,n(r[2]))),r[3]&&(a.push([]),a.push.apply(a,n(r[3]))),a},l=t=>{var n=t[0],r="";if(1===t.length)return"*";if(n+.5){r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var a=1,o=1;o<t.length;o++)a--,r+="u"==(typeof(h=t[o]))[0]?"-":(a>0?".":"")+(a=2,h);return r}var u=[];for(o=1;o<t.length;o++){var h=t[o];u.push(0===h?"not("+C()+")":1===h?"("+C()+" || "+C()+")":2===h?u.pop()+" "+u.pop():l(h))}return C();function C(){return u.pop().replace(/^\((.+)\)$/,"$1")}},s=(t,n)=>{if(0 in t){n=i(n);var r=t[0],a=r<0;a&&(r=-r-1);for(var o=0,u=1,h=!0;;u++,o++){var C,T,P=u<t.length?(typeof t[u])[0]:"";if(o>=n.length||"o"==(T=(typeof(C=n[o]))[0]))return!h||("u"==P?u>r&&!a:""==P!=a);if("u"==T){if(!h||"u"!=P)return!1}else if(h)if(P==T)if(u<=r){if(C!=t[u])return!1}else{if(a?C>t[u]:C<t[u])return!1;C!=t[u]&&(h=!1)}else if("s"!=P&&"n"!=P){if(a||u<=r)return!1;h=!1,u--}else{if(u<=r||T<P!=a)return!1;h=!1}else"s"!=P&&"n"!=P&&(h=!1,u--)}}var F=[],M=F.pop.bind(F);for(o=1;o<t.length;o++){var A=t[o];F.push(1==A?M()|M():2==A?M()&M():A?s(A,n):!M())}return!!M()},f=(t,n)=>{var r=t[n];return Object.keys(r).reduce((a,o)=>!a||!r[a].loaded&&((t,n)=>{t=i(t),n=i(n);for(var r=0;;){if(r>=t.length)return r<n.length&&"u"!=(typeof n[r])[0];var a=t[r],o=(typeof a)[0];if(r>=n.length)return"u"==o;var u=n[r],h=(typeof u)[0];if(o!=h)return"o"==o&&"n"==h||"s"==h||"u"==o;if("o"!=o&&"u"!=o&&a!=u)return a<u;r++}})(a,o)?o:a,0)},g=(t,n,r,a)=>{var o=f(t,r);if(!s(a,o))throw new Error(((t,n,r,a)=>"Unsatisfied version "+r+" from "+(r&&t[n][r].from)+" of shared singleton module "+n+" (required "+l(a)+")")(t,r,o,a));return S(t[r][o])},S=t=>(t.loaded=1,t.get()),j=(t=>function(n,r,a,o){var u=e.I(n);return u&&u.then?u.then(t.bind(t,n,e.S[n],r,a,o)):t(n,e.S[n],r,a,o)})((t,n,r,a,o)=>n&&e.o(n,r)?g(n,0,r,a):o()),O={},z={4888:()=>j("default","@angular/common",[1,15,2,0],()=>e.e(181).then(()=>()=>e(6895))),140:()=>j("default","@angular/router",[1,15,2,0],()=>e.e(511).then(()=>()=>e(4793))),9246:()=>j("default","@fortawesome/free-solid-svg-icons",[1,6,3,0],()=>e.e(687).then(()=>()=>e(2687))),5760:()=>j("default","@angular/core",[1,15,2,0],()=>e.e(650).then(()=>()=>e(4650))),1459:()=>j("default","@fortawesome/angular-fontawesome",[2,0,12,1],()=>e.e(96).then(()=>()=>e(6920))),3635:()=>j("default","rxjs",[2,7,8,0],()=>e.e(284).then(()=>()=>e(7284))),5893:()=>j("default","rxjs/operators",[2,7,8,0],()=>e.e(559).then(()=>()=>e(7559))),7783:()=>j("default","@angular/platform-browser",[1,15,2,0],()=>e.e(481).then(()=>()=>e(1481))),3055:()=>j("default","@fortawesome/fontawesome-svg-core",[1,6,3,0],()=>e.e(673).then(()=>()=>e(2673)))},L={96:[3055,7783],255:[4888,5760],481:[4888],511:[3635,4888,5893,7783],650:[3635,5893],793:[3635,4888,5760,5893,7783],828:[4888,140,9246,5760,1459],895:[5760],920:[3055,5760,7783]};e.f.consumes=(t,n)=>{e.o(L,t)&&L[t].forEach(r=>{if(e.o(O,r))return n.push(O[r]);var a=h=>{O[r]=0,e.m[r]=C=>{delete e.c[r],C.exports=h()}},o=h=>{delete O[r],e.m[r]=C=>{throw delete e.c[r],h}};try{var u=z[r]();u.then?n.push(O[r]=u.then(a).catch(o)):a(u)}catch(h){o(h)}})}})(),(()=>{var i={893:0};e.f.j=(s,b)=>{var p=e.o(i,s)?i[s]:void 0;if(0!==p)if(p)b.push(p[2]);else{var f=new Promise((g,m)=>p=i[s]=[g,m]);b.push(p[2]=f);var w=e.p+e.u(s),d=new Error;e.l(w,g=>{if(e.o(i,s)&&(0!==(p=i[s])&&(i[s]=void 0),p)){var m=g&&("load"===g.type?"missing":g.type),y=g&&g.target&&g.target.src;d.message="Loading chunk "+s+" failed.\n("+m+": "+y+")",d.name="ChunkLoadError",d.type=m,d.request=y,p[1](d)}},"chunk-"+s,s)}};var v=(s,b)=>{var d,x,[p,f,w]=b,g=0;if(p.some(y=>0!==i[y])){for(d in f)e.o(f,d)&&(e.m[d]=f[d]);w&&w(e)}for(s&&s(b);g<p.length;g++)e.o(i,x=p[g])&&i[x]&&i[x][0](),i[x]=0},l=self.webpackChunkproducts=self.webpackChunkproducts||[];l.forEach(v.bind(null,0)),l.push=v.bind(null,l.push.bind(l))})();var U=e(1461),R=U.get,B=U.init;export{R as get,B as init};