function T(){}function W(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t&&typeof t=="object"&&typeof t.then=="function"}function D(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(D)}function J(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function dt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function K(t){return Object.keys(t).length===0}function ht(t,e,n,c){if(t){const r=P(t,e,n,c);return t[0](r)}}function P(t,e,n,c){return t[1]&&c?W(n.ctx.slice(),t[1](c(e))):n.ctx}function mt(t,e,n,c){if(t[2]&&c){const r=t[2](c(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],l=Math.max(e.dirty.length,r.length);for(let s=0;s<l;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function pt(t,e,n,c,r,o){if(r){const l=P(e,n,c,o);t.p(l,r)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let c=0;c<n;c++)e[c]=-1;return e}return-1}let w=!1;function Q(){w=!0}function R(){w=!1}function U(t,e,n,c){for(;t<e;){const r=t+(e-t>>1);n(r)<=c?t=r+1:e=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),c=new Int32Array(e.length);n[0]=-1;let r=0;for(let i=0;i<e.length;i++){const u=e[i].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:U(1,r,d=>e[n[d]].claim_order,u))-1;c[i]=n[f]+1;const a=f+1;n[a]=i,r=Math.max(a,r)}const o=[],l=[];let s=e.length-1;for(let i=n[r]+1;i!=0;i=c[i-1]){for(o.push(e[i-1]);s>=i;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);o.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<o.length&&l[i].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(l[i],f)}}function X(t,e){if(w){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){w&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function bt(){return N(" ")}function $t(){return N("")}function B(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const c in e)e[c]==null?t.removeAttribute(c):c==="style"?t.style.cssText=e[c]:c==="__value"?t.value=t[c]=e[c]:n[c]&&n[c].set?t[c]=e[c]:B(t,c,e[c])}function wt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:B(t,e,n)}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,c,r=!1){nt(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const i=n(s);return i===void 0?t.splice(l,1):t[l]=i,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const i=n(s);return i===void 0?t.splice(l,1):t[l]=i,r?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return c()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function F(t,e,n,c){return z(t,r=>r.nodeName===e,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];n[s.name]||o.push(s.name)}o.forEach(l=>r.removeAttribute(l))},()=>c(e))}function vt(t,e,n){return F(t,e,n,Z)}function Et(t,e,n){return F(t,e,n,tt)}function ct(t,e){return z(t,n=>n.nodeType===3,n=>{const c=""+e;if(n.data.startsWith(c)){if(n.data.length!==c.length)return n.splitText(c.length)}else n.data=c},()=>N(e),!0)}function jt(t){return ct(t," ")}function At(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e,n,c){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,c?"important":"")}function rt(t,e,n=!1){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,!1,e),c}function St(t,e=document.body){return Array.from(e.querySelectorAll(t))}let y;function _(t){y=t}function m(){if(!y)throw new Error("Function called outside component initialization");return y}function Ct(t){m().$$.on_mount.push(t)}function qt(t){m().$$.after_update.push(t)}function Mt(t){m().$$.on_destroy.push(t)}function Ot(){const t=m();return(e,n)=>{const c=t.$$.callbacks[e];if(c){const r=rt(e,n);c.slice().forEach(o=>{o.call(t,r)})}}}function Tt(t,e){m().$$.context.set(t,e)}const p=[],O=[],$=[],E=[],H=Promise.resolve();let j=!1;function I(){j||(j=!0,H.then(S))}function Dt(){return I(),H}function A(t){$.push(t)}function Pt(t){E.push(t)}const v=new Set;let b=0;function S(){const t=y;do{for(;b<p.length;){const e=p[b];b++,_(e),it(e.$$)}for(_(null),p.length=0,b=0;O.length;)O.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];v.has(n)||(v.add(n),n())}$.length=0}while(p.length);for(;E.length;)E.pop()();j=!1,v.clear(),_(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const k=new Set;let h;function lt(){h={r:0,c:[],p:h}}function st(){h.r||g(h.c),h=h.p}function L(t,e){t&&t.i&&(k.delete(t),t.i(e))}function ut(t,e,n,c){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),c&&(n&&t.d(1),c())}),t.o(e)}}function Bt(t,e){const n=e.token={};function c(r,o,l,s){if(e.token!==n)return;e.resolved=s;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=s);const u=r&&(e.current=r)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==o&&a&&(lt(),ut(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),st())}):e.block.d(1),u.c(),L(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[o]=u),f&&S()}if(G(t)){const r=m();if(t.then(o=>{_(r),c(e.then,1,e.value,o),_(null)},o=>{if(_(r),c(e.catch,2,e.error,o),_(null),!e.hasCatch)throw o}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}}function zt(t,e,n){const c=e.slice(),{resolved:r}=t;t.current===t.then&&(c[t.value]=r),t.current===t.catch&&(c[t.error]=r),t.block.p(c,n)}function Ft(t,e){const n={},c={},r={$$scope:1};let o=t.length;for(;o--;){const l=t[o],s=e[o];if(s){for(const i in l)i in s||(c[i]=1);for(const i in s)r[i]||(n[i]=s[i],r[i]=1);t[o]=s}else for(const i in l)r[i]=1}for(const l in c)l in n||(n[l]=void 0);return n}function Ht(t){return typeof t=="object"&&t!==null?t:{}}function It(t,e,n){const c=t.$$.props[e];c!==void 0&&(t.$$.bound[c]=n,n(t.$$.ctx[c]))}function Lt(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function ot(t,e,n,c){const{fragment:r,on_mount:o,on_destroy:l,after_update:s}=t.$$;r&&r.m(e,n),c||A(()=>{const i=o.map(D).filter(J);l?l.push(...i):g(i),t.$$.on_mount=[]}),s.forEach(A)}function at(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(p.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Gt(t,e,n,c,r,o,l,s=[-1]){const i=y;_(t);const u=t.$$={fragment:null,ctx:null,props:o,update:T,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||i.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,...C)=>{const q=C.length?C[0]:d;return u.ctx&&r(u.ctx[a],u.ctx[a]=q)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](q),f&&ft(t,a)),d}):[],u.update(),f=!0,g(u.before_update),u.fragment=c?c(u.ctx):!1,e.target){if(e.hydrate){Q();const a=et(e.target);u.fragment&&u.fragment.l(a),a.forEach(Y)}else u.fragment&&u.fragment.c();e.intro&&L(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),R(),S()}_(i)}class Jt{$destroy(){at(this,1),this.$destroy=T}$on(e,n){const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const r=c.indexOf(n);r!==-1&&c.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ft as A,Ht as B,at as C,W as D,Dt as E,ht as F,St as G,wt as H,X as I,pt as J,yt as K,mt as L,dt as M,tt as N,Et as O,xt as P,Ot as Q,O as R,Jt as S,It as T,Pt as U,Bt as V,zt as W,kt as X,Mt as Y,et as a,B as b,vt as c,Y as d,Z as e,Nt as f,gt as g,ct as h,Gt as i,At as j,bt as k,$t as l,jt as m,T as n,lt as o,ut as p,st as q,L as r,_t as s,N as t,Tt as u,qt as v,Ct as w,Lt as x,Wt as y,ot as z};
