"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[279],{279:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t=n(861),c=n(885),a=n(757),s=n.n(a),u=n(791),i=n(412),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.movieId,e.next=3,i.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:"d76cfeaddd14e5c6063db60e37f83b2f"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=o,d=n(470),l={},p=n(184),v=function(){var e=(0,u.useState)(),r=(0,c.Z)(e,2),n=r[0],a=r[1],i=(0,d.UO)().movieId,o=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f({movieId:i});case 3:r=e.sent,console.log(r.results),a(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){o()}),[]),n&&0!==n.length?(0,p.jsx)("ul",{children:n.map((function(e){var r=e.id,n=e.author,t=e.content;return(0,p.jsx)("li",{children:(0,p.jsxs)("div",{className:l.cardWrap,children:[(0,p.jsxs)("p",{children:["Author: ",n]}),(0,p.jsx)("p",{children:t})]})},r)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})}}}]);
//# sourceMappingURL=279.5e39f41a.chunk.js.map