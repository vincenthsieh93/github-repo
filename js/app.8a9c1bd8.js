(function(t){function e(e){for(var o,s,a=e[0],l=e[1],c=e[2],p=0,f=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/github-repo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("8125")}}),o("GitHubRepo")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("My GitHub Repositories")]),n("ul",{staticClass:"repo",attrs:{id:"infinite"}},[t._l(t.repos,(function(e){return n("li",{key:e.id,staticClass:"repo__item"},[n("div",{staticClass:"repo__block"},[n("h2",{staticClass:"repo__title"},[t._v("Title:")]),n("p",{staticClass:"repo__content"},[t._v(t._s(e.name))])]),n("div",{staticClass:"repo__block"},[n("h2",{staticClass:"repo__title"},[t._v("Description:")]),n("p",{staticClass:"repo__content"},[t._v(t._s(e.description))])]),n("div",{staticClass:"repo__block"},[n("h2",{staticClass:"repo__title"},[t._v("Url:")]),n("a",{attrs:{href:t.getRepoLink(e.html_url),target:"_blank"}},[t._v(t._s(e.html_url))])])])})),t.repos.length<t.allRepos.length?n("li",{staticClass:"repo__item"},[n("p",{staticClass:"repo__tips"},[t._v("Load more...")])]):n("li",{staticClass:"repo__item"},[n("p",{staticClass:"repo__tips"},[t._v("No more repositories")])])],2)])},a=[],l=n("bc3a"),c=n.n(l),u=n("5118"),p={name:"GitHubRepo",data:function(){return{isLoading:!1,allRepos:[],count:3,repos:[]}},created:function(){var t=this;c.a.get("https://api.github.com/users/vincenthsieh93/repos").then((function(e){t.allRepos=e.data})).catch((function(t){console.error(t)}))},mounted:function(){var t=this,e=document.querySelector("#infinite");e.addEventListener("scroll",(function(){e.scrollTop+e.clientHeight>=e.scrollHeight&&t.repos.length<t.allRepos.length&&t.loadRepo()})),this.loadRepo()},methods:{loadRepo:function(){var t=this;this.isLoading=!0,Object(u["setTimeout"])((function(){for(var e=t.repos.length;e<t.count;e++)t.repos.push(t.allRepos[e]);t.count+=3,t.isLoading=!1}),1e3)},getRepoLink:function(t){return t}}},f=p,_=(n("7564"),n("2877")),d=Object(_["a"])(f,s,a,!1,null,"4ee5872e",null),h=d.exports,v={name:"app",components:{GitHubRepo:h}},b=v,g=(n("5c0b"),Object(_["a"])(b,r,i,!1,null,null,null)),m=g.exports,y=n("2f62");o["a"].use(y["a"]);var C=new y["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({store:C,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("e332"),r=n.n(o);r.a},"5c5a":function(t,e,n){},7564:function(t,e,n){"use strict";var o=n("5c5a"),r=n.n(o);r.a},8125:function(t,e,n){t.exports=n.p+"img/github_logo.3eb2edd1.png"},e332:function(t,e,n){}});
//# sourceMappingURL=app.8a9c1bd8.js.map