(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var a=n(6),r=n(4),c=n(7),o=n(0),s=n.n(o),i=n(3),u=n(8),d=(n(16),["./assets/isaque.png","./assets/leonardo.png","./assets/iuri.png","./assets/fernanda.png","./assets/wemilly.png","./assets/raylson.png","./assets/gustavo.png"]),l=function(t){return{x:0,y:-4*t,scale:1,rot:20*Math.random()-10,delay:100*t}},f=function(t){return{x:0,rot:0,scale:1.5,y:-1e3}},g=function(t,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(t/10,"deg) rotateZ(").concat(t,"deg) scale(").concat(e,")")};function p(){var t=Object(o.useState)(function(){return new Set}),e=Object(r.a)(t,1)[0],n=Object(i.c)(d.length,function(t){return Object(a.a)({},l(t),{from:f(t)})}),c=Object(r.a)(n,2),p=c[0],b=c[1],j=Object(u.a)(function(t){var n=Object(r.a)(t.args,1)[0],a=t.down,c=Object(r.a)(t.delta,1)[0],o=(t.distance,Object(r.a)(t.direction,1)[0]),s=t.velocity,i=o<0?-1:1;!a&&s>.2&&e.add(n),b(function(t){if(n===t){var r=e.has(n);return{x:r?(200+window.innerWidth)*i:a?c:0,rot:c/100+(r?10*i*s:0),scale:a?1.1:1,delay:void 0,config:{friction:50,tension:a?800:r?200:500}}}}),a||e.size!==d.length||setTimeout(function(){return e.clear()||b(function(t){return l(t)})},600)});return p.map(function(t,e){var n=t.x,a=t.y,r=t.rot,c=t.scale;return s.a.createElement(i.a.div,{key:e,style:{transform:Object(i.b)([n,a],function(t,e){return"translate3d(".concat(t,"px,").concat(e,"px,0)")})}},s.a.createElement(i.a.div,Object.assign({},j(e),{style:{transform:Object(i.b)([r,c],g),backgroundImage:"url(".concat(d[e],")")}})))})}Object(c.render)(s.a.createElement(p,null),document.getElementById("root"))},16:function(t,e,n){},9:function(t,e,n){t.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.978ea9b8.chunk.js.map