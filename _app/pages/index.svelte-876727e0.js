import{S as ge,i as ve,s as me,L as ye,e as p,t as G,k as $,M as K,c as b,a as _,h as O,d as h,m as T,N as J,b as r,g as C,G as o,j as ie,O as Ke,K as re,P as $e,z as Ge,l as ke,Q as de,C as Oe,R as Je,F as Qe,w as X,x as Z,y as ee,q as R,o as z,B as te,H as Ye,I as Xe,J as Ze,n as ze,p as Ue,v as et,T as tt,U as _e,A as lt,f as st}from"../chunks/vendor-130a3e33.js";import{M as at}from"../chunks/metadata-c92f9c48.js";var Te=globalThis&&globalThis.__awaiter||function(i,e,t,s){function l(a){return a instanceof t?a:new t(function(n){n(a)})}return new(t||(t=Promise))(function(a,n){function c(u){try{v(s.next(u))}catch(m){n(m)}}function f(u){try{v(s.throw(u))}catch(m){n(m)}}function v(u){u.done?a(u.value):l(u.value).then(c,f)}v((s=s.apply(i,e||[])).next())})};function nt(i){return i?`?${Object.entries(i).map(([e,t])=>`${e}=${t}`).join("&")}`:""}const We=({apiRoot:i,electionTagId:e,mediaTargetSize:t})=>({limit:s=6,tag:l=""}={})=>Te(void 0,void 0,void 0,function*(){const a=(f,v)=>Te(void 0,void 0,void 0,function*(){return yield(yield fetch(i+f+nt(v))).json()}),n=l?(yield a("/tags",{search:l,_fields:"id",per_page:1}))[0].id:e;return(yield a("/posts",{tags:n,_embed:"wp:featuredmedia",_fields:"id,title,link,date,tags,_links.wp:featuredmedia,_embedded.wp:featuredmedia",per_page:s})).filter(({tags:f})=>!l||(f==null?void 0:f.includes(e))).map(({id:f,title:v,link:u,date:m,_embedded:g})=>{const[k]=g==null?void 0:g["wp:featuredmedia"];return{id:f,title:v.rendered,link:u,date:new Date(m).toLocaleDateString("th-TH",{dateStyle:"long"}),image:k.media_details.sizes[t].source_url}})}),it={apiRoot:"https://thestandard.co/wp-json/wp/v2",electionTagId:47793,mediaTargetSize:"newsthumb-small"},rt={apiRoot:"https://wevis.info/wp-json/wp/v2",electionTagId:17,mediaTargetSize:"small-thumb"},qe=We(it),ot=We(rt);function Ae(i,e,t){const s=i.slice();return s[9]=e[t],s}function ct(i,e,t){const s=i.slice();return s[5]=e[t],s}function ft(i){let e,t,s=i[12].message+"",l;return{c(){e=p("p"),t=G("\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: "),l=G(s)},l(a){e=b(a,"P",{});var n=_(e);t=O(n,"\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: "),l=O(n,s),n.forEach(h)},m(a,n){C(a,e,n),o(e,t),o(e,l)},p(a,n){n&16&&s!==(s=a[12].message+"")&&ie(l,s)},d(a){a&&h(e)}}}function ht(i){let e,t=i[8],s=[];for(let l=0;l<t.length;l+=1)s[l]=Me(Ae(i,t,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=ke()},l(l){for(let a=0;a<s.length;a+=1)s[a].l(l);e=ke()},m(l,a){for(let n=0;n<s.length;n+=1)s[n].m(l,a);C(l,e,a)},p(l,a){if(a&16){t=l[8];let n;for(n=0;n<t.length;n+=1){const c=Ae(l,t,n);s[n]?s[n].p(c,a):(s[n]=Me(c),s[n].c(),s[n].m(e.parentNode,e))}for(;n<s.length;n+=1)s[n].d(1);s.length=t.length}},d(l){de(s,l),l&&h(e)}}}function Me(i){let e,t,s,l=[i[9]],a={};for(let n=0;n<l.length;n+=1)a=Oe(a,l[n]);return{c(){e=p("div"),t=p("ui-post-card"),s=$(),this.h()},l(n){e=b(n,"DIV",{class:!0});var c=_(e);t=b(c,"UI-POST-CARD",{}),_(t).forEach(h),s=T(c),c.forEach(h),this.h()},h(){$e(t,a),r(e,"class","flex-shrink-0 w-64 md:w-auto")},m(n,c){C(n,e,c),o(e,t),o(e,s)},p(n,c){$e(t,a=Ge(l,[c&16&&n[9]]))},d(n){n&&h(e)}}}function ut(i){let e,t=new Array(gt).fill(null),s=[];for(let l=0;l<t.length;l+=1)s[l]=dt(ct(i,t,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=ke()},l(l){for(let a=0;a<s.length;a+=1)s[a].l(l);e=ke()},m(l,a){for(let n=0;n<s.length;n+=1)s[n].m(l,a);C(l,e,a)},p:re,d(l){de(s,l),l&&h(e)}}}function dt(i){let e,t,s;return{c(){e=p("div"),t=p("ui-post-card"),s=$(),this.h()},l(l){e=b(l,"DIV",{class:!0});var a=_(e);t=b(a,"UI-POST-CARD",{loading:!0}),_(t).forEach(h),s=T(a),a.forEach(h),this.h()},h(){Je(t,"loading","true"),r(e,"class","flex-shrink-0 w-64 md:w-auto")},m(l,a){C(l,e,a),o(e,t),o(e,s)},d(l){l&&h(e)}}}function _t(i){let e,t,s,l,a,n,c,f,v,u,m,g,k,V,x,A,L,H,E,w,I,D={ctx:i,current:null,token:null,hasCatch:!0,pending:ut,then:ht,catch:ft,value:8,error:12};return ye(I=i[4](),D),{c(){e=p("div"),t=p("div"),s=p("div"),l=p("h1"),a=G(i[0]),n=$(),c=p("h2"),f=G(i[1]),v=$(),u=p("div"),m=p("a"),g=p("span"),k=G(i[2]),V=$(),x=K("svg"),A=K("path"),L=K("path"),H=K("path"),E=$(),w=p("div"),D.block.c(),this.h()},l(P){e=b(P,"DIV",{class:!0});var M=_(e);t=b(M,"DIV",{class:!0});var U=_(t);s=b(U,"DIV",{class:!0});var B=_(s);l=b(B,"H1",{class:!0});var W=_(l);a=O(W,i[0]),W.forEach(h),n=T(B),c=b(B,"H2",{class:!0});var le=_(c);f=O(le,i[1]),le.forEach(h),B.forEach(h),v=T(U),u=b(U,"DIV",{});var Q=_(u);m=b(Q,"A",{href:!0,target:!0,class:!0});var ne=_(m);g=b(ne,"SPAN",{});var Y=_(g);k=O(Y,i[2]),Y.forEach(h),V=T(ne),x=J(ne,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var se=_(x);A=J(se,"path",{d:!0,stroke:!0,"stroke-width":!0}),_(A).forEach(h),L=J(se,"path",{d:!0,stroke:!0,"stroke-width":!0}),_(L).forEach(h),H=J(se,"path",{d:!0,stroke:!0,"stroke-width":!0}),_(H).forEach(h),se.forEach(h),ne.forEach(h),Q.forEach(h),U.forEach(h),E=T(M),w=b(M,"DIV",{class:!0});var ae=_(w);D.block.l(ae),ae.forEach(h),M.forEach(h),this.h()},h(){r(l,"class","typo-h4"),r(c,"class","typo-u3"),r(s,"class","flex-1"),r(A,"d","M6 10L14 2"),r(A,"stroke","black"),r(A,"stroke-width","2"),r(L,"d","M7 1H15V9"),r(L,"stroke","black"),r(L,"stroke-width","2"),r(H,"d","M11 9.85714V15H1V5H6.14286"),r(H,"stroke","black"),r(H,"stroke-width","2"),r(x,"width","16"),r(x,"height","16"),r(x,"viewBox","0 0 16 16"),r(x,"fill","none"),r(x,"xmlns","http://www.w3.org/2000/svg"),r(m,"href",i[3]),r(m,"target","_blank"),r(m,"class","flex flex-row space-x-2 items-center typo-b5 hover:underline"),r(t,"class","flex flex-col md:flex-row space-y-4 md:space-y-0"),r(w,"class","flex md:grid md:grid-cols-3 gap-6 md:gap-12 overflow-y-hidden overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0"),r(e,"class","py-20 space-y-8")},m(P,M){C(P,e,M),o(e,t),o(t,s),o(s,l),o(l,a),o(s,n),o(s,c),o(c,f),o(t,v),o(t,u),o(u,m),o(m,g),o(g,k),o(m,V),o(m,x),o(x,A),o(x,L),o(x,H),o(e,E),o(e,w),D.block.m(w,D.anchor=null),D.mount=()=>w,D.anchor=null},p(P,[M]){i=P,M&1&&ie(a,i[0]),M&2&&ie(f,i[1]),M&4&&ie(k,i[2]),M&8&&r(m,"href",i[3]),D.ctx=i,M&16&&I!==(I=i[4]())&&ye(I,D)||Ke(D,i,M)},i:re,o:re,d(P){P&&h(e),D.block.d(),D.token=null,D=null}}}const gt=6;function vt(i,e,t){let{title:s}=e,{subtitle:l}=e,{viewAllText:a}=e,{viewAllLink:n}=e,{fetchPosts:c}=e;return i.$$set=f=>{"title"in f&&t(0,s=f.title),"subtitle"in f&&t(1,l=f.subtitle),"viewAllText"in f&&t(2,a=f.viewAllText),"viewAllLink"in f&&t(3,n=f.viewAllLink),"fetchPosts"in f&&t(4,c=f.fetchPosts)},[s,l,a,n,c]}class Ee extends ge{constructor(e){super();ve(this,e,vt,_t,me,{title:0,subtitle:1,viewAllText:2,viewAllLink:3,fetchPosts:4})}}function Se(i,e,t){const s=i.slice();return s[3]=e[t],s}function Pe(i){let e,t=i[3]+"",s,l;return{c(){e=p("div"),s=G(t),l=$(),this.h()},l(a){e=b(a,"DIV",{class:!0});var n=_(e);s=O(n,t),l=T(n),n.forEach(h),this.h()},h(){r(e,"class","box flex-1 text-white h-10 md:h-16 flex justify-center items-center typo-h5 svelte-1urocxm")},m(a,n){C(a,e,n),o(e,s),o(e,l)},p(a,n){n&2&&t!==(t=a[3]+"")&&ie(s,t)},d(a){a&&h(e)}}}function mt(i){let e,t,s,l,a,n=i[1],c=[];for(let f=0;f<n.length;f+=1)c[f]=Pe(Se(i,n,f));return{c(){e=p("div"),t=p("div");for(let f=0;f<c.length;f+=1)c[f].c();s=$(),l=p("p"),a=G(i[0]),this.h()},l(f){e=b(f,"DIV",{class:!0});var v=_(e);t=b(v,"DIV",{class:!0});var u=_(t);for(let g=0;g<c.length;g+=1)c[g].l(u);u.forEach(h),s=T(v),l=b(v,"P",{class:!0});var m=_(l);a=O(m,i[0]),m.forEach(h),v.forEach(h),this.h()},h(){r(t,"class","flex flex-row space-x-1"),r(l,"class","typo-u5 text-center"),r(e,"class","flex-1 flex flex-col space-y-2")},m(f,v){C(f,e,v),o(e,t);for(let u=0;u<c.length;u+=1)c[u].m(t,null);o(e,s),o(e,l),o(l,a)},p(f,[v]){if(v&2){n=f[1];let u;for(u=0;u<n.length;u+=1){const m=Se(f,n,u);c[u]?c[u].p(m,v):(c[u]=Pe(m),c[u].c(),c[u].m(t,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=n.length}v&1&&ie(a,f[0])},i:re,o:re,d(f){f&&h(e),de(c,f)}}}function pt(i,e,t){let s,{value:l}=e,{label:a}=e;return i.$$set=n=>{"value"in n&&t(2,l=n.value),"label"in n&&t(0,a=n.label)},i.$$.update=()=>{i.$$.dirty&4&&t(1,s=`${l<10?0:""}${l}`.split(""))},[a,s,l]}class be extends ge{constructor(e){super();ve(this,e,pt,mt,me,{value:2,label:0})}}function Le(i){let e,t,s,l,a,n,c,f,v,u,m,g,k,V,x,A,L,H;return t=new be({props:{label:"\u0E27\u0E31\u0E19",value:i[0].day}}),c=new be({props:{label:"\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",value:i[0].hour}}),g=new be({props:{label:"\u0E19\u0E32\u0E17\u0E35",value:i[0].minute}}),L=new be({props:{label:"\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",value:i[0].second}}),{c(){e=p("div"),X(t.$$.fragment),s=$(),l=p("span"),a=G(":"),n=$(),X(c.$$.fragment),f=$(),v=p("span"),u=G(":"),m=$(),X(g.$$.fragment),k=$(),V=p("span"),x=G(":"),A=$(),X(L.$$.fragment),this.h()},l(E){e=b(E,"DIV",{class:!0});var w=_(e);Z(t.$$.fragment,w),s=T(w),l=b(w,"SPAN",{class:!0});var I=_(l);a=O(I,":"),I.forEach(h),n=T(w),Z(c.$$.fragment,w),f=T(w),v=b(w,"SPAN",{class:!0});var D=_(v);u=O(D,":"),D.forEach(h),m=T(w),Z(g.$$.fragment,w),k=T(w),V=b(w,"SPAN",{class:!0});var P=_(V);x=O(P,":"),P.forEach(h),A=T(w),Z(L.$$.fragment,w),w.forEach(h),this.h()},h(){r(l,"class","svelte-16mf04h"),r(v,"class","svelte-16mf04h"),r(V,"class","svelte-16mf04h"),r(e,"class","flex flex-row space-x-1 typo-h5 items-center")},m(E,w){C(E,e,w),ee(t,e,null),o(e,s),o(e,l),o(l,a),o(e,n),ee(c,e,null),o(e,f),o(e,v),o(v,u),o(e,m),ee(g,e,null),o(e,k),o(e,V),o(V,x),o(e,A),ee(L,e,null),H=!0},p(E,w){const I={};w&1&&(I.value=E[0].day),t.$set(I);const D={};w&1&&(D.value=E[0].hour),c.$set(D);const P={};w&1&&(P.value=E[0].minute),g.$set(P);const M={};w&1&&(M.value=E[0].second),L.$set(M)},i(E){H||(R(t.$$.fragment,E),R(c.$$.fragment,E),R(g.$$.fragment,E),R(L.$$.fragment,E),H=!0)},o(E){z(t.$$.fragment,E),z(c.$$.fragment,E),z(g.$$.fragment,E),z(L.$$.fragment,E),H=!1},d(E){E&&h(e),te(t),te(c),te(g),te(L)}}}function bt(i){let e,t,s,l,a,n,c,f,v;const u=i[3].default,m=Qe(u,i,i[2],null);let g=i[0]&&Le(i);return{c(){e=p("div"),t=p("div"),s=p("div"),l=$(),a=p("p"),m&&m.c(),n=$(),c=p("div"),f=$(),g&&g.c(),this.h()},l(k){e=b(k,"DIV",{class:!0});var V=_(e);t=b(V,"DIV",{class:!0});var x=_(t);s=b(x,"DIV",{class:!0}),_(s).forEach(h),l=T(x),a=b(x,"P",{class:!0});var A=_(a);m&&m.l(A),A.forEach(h),n=T(x),c=b(x,"DIV",{class:!0}),_(c).forEach(h),x.forEach(h),f=T(V),g&&g.l(V),V.forEach(h),this.h()},h(){r(s,"class","line svelte-16mf04h"),r(a,"class","typo-u5 text-center"),r(c,"class","line svelte-16mf04h"),r(t,"class","flex flex-row space-x-3"),r(e,"class","flex flex-col space-y-3")},m(k,V){C(k,e,V),o(e,t),o(t,s),o(t,l),o(t,a),m&&m.m(a,null),o(t,n),o(t,c),o(e,f),g&&g.m(e,null),v=!0},p(k,[V]){m&&m.p&&(!v||V&4)&&Ye(m,u,k,k[2],v?Ze(u,k[2],V,null):Xe(k[2]),null),k[0]?g?(g.p(k,V),V&1&&R(g,1)):(g=Le(k),g.c(),R(g,1),g.m(e,null)):g&&(ze(),z(g,1,1,()=>{g=null}),Ue())},i(k){v||(R(m,k),R(g),v=!0)},o(k){z(m,k),z(g),v=!1},d(k){k&&h(e),m&&m.d(k),g&&g.d()}}}const fe=1e3,ue=60,we=60,je=24,wt=1e3;function kt(i,e,t){let{$$slots:s={},$$scope:l}=e,{until:a}=e,n,c;const f=v=>{let u=v.getTime()-new Date().getTime();const m=u/fe/ue/we/je,g=Math.floor(m);u=(m-g)*fe*ue*we*je;const k=u/fe/ue/we,V=Math.floor(k);u=(k-V)*fe*ue*we;const x=u/fe/ue,A=Math.floor(x);u=(x-A)*fe*ue;const L=Math.floor(u/fe);return{day:g,hour:V,minute:A,second:L}};return et(()=>{t(0,c=f(a)),n=setInterval(()=>{t(0,c=f(a))},wt)}),tt(()=>clearInterval(n)),i.$$set=v=>{"until"in v&&t(1,a=v.until),"$$scope"in v&&t(2,l=v.$$scope)},[c,a,l,s]}class Et extends ge{constructor(e){super();ve(this,e,kt,bt,me,{until:1})}}function xt(i){let e,t,s;return{c(){e=K("svg"),t=K("path"),s=K("path"),this.h()},l(l){e=J(l,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0});var a=_(e);t=J(a,"path",{d:!0}),_(t).forEach(h),s=J(a,"path",{d:!0}),_(s).forEach(h),a.forEach(h),this.h()},h(){r(t,"d","M8 1.5L15.5789 9.5L8 17.5"),r(s,"d","M0 9.5L16 9.5"),r(e,"width","17"),r(e,"height","19"),r(e,"viewBox","0 0 17 19"),r(e,"fill","none"),r(e,"stroke","white"),r(e,"stroke-width","2")},m(l,a){C(l,e,a),o(e,t),o(e,s)},d(l){l&&h(e)}}}function Dt(i){let e,t,s,l;return{c(){e=K("svg"),t=K("path"),s=K("path"),l=K("path"),this.h()},l(a){e=J(a,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0});var n=_(e);t=J(n,"path",{d:!0}),_(t).forEach(h),s=J(n,"path",{d:!0}),_(s).forEach(h),l=J(n,"path",{d:!0}),_(l).forEach(h),n.forEach(h),this.h()},h(){r(t,"d","M6.00037 10.5L14.0004 2.5"),r(s,"d","M7.00037 1.5H15.0004V9.5"),r(l,"d","M11.0004 10.3571V15.5H1.00037V5.5H6.14322"),r(e,"width","16"),r(e,"height","17"),r(e,"viewBox","0 0 16 17"),r(e,"fill","none"),r(e,"stroke","white"),r(e,"stroke-width","2")},m(a,n){C(a,e,n),o(e,t),o(e,s),o(e,l)},d(a){a&&h(e)}}}function Ce(i){let e,t;return{c(){e=p("div"),t=G("Coming soon"),this.h()},l(s){e=b(s,"DIV",{class:!0});var l=_(e);t=O(l,"Coming soon"),l.forEach(h),this.h()},h(){r(e,"class","absolute inset-0 flex justify-center items-center typo-b2 bg-black bg-opacity-60")},m(s,l){C(s,e,l),o(e,t)},d(s){s&&h(e)}}}function It(i){let e,t,s,l,a,n,c,f,v,u,m,g,k,V,x,A;function L(I,D){return I[3]?Dt:xt}let H=L(i),E=H(i),w=!i[2]&&Ce();return{c(){e=p("div"),t=p("a"),s=p("div"),l=p("img"),n=$(),c=p("div"),f=p("div"),v=p("p"),u=G(i[1]),m=$(),g=p("p"),k=G(i[0]),V=$(),E.c(),A=$(),w&&w.c(),this.h()},l(I){e=b(I,"DIV",{class:!0});var D=_(e);t=b(D,"A",{href:!0,target:!0,class:!0});var P=_(t);s=b(P,"DIV",{class:!0});var M=_(s);l=b(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(h),n=T(P),c=b(P,"DIV",{class:!0});var U=_(c);f=b(U,"DIV",{class:!0});var B=_(f);v=b(B,"P",{class:!0});var W=_(v);u=O(W,i[1]),W.forEach(h),m=T(B),g=b(B,"P",{class:!0});var le=_(g);k=O(le,i[0]),le.forEach(h),B.forEach(h),V=T(U),E.l(U),U.forEach(h),P.forEach(h),A=T(D),w&&w.l(D),D.forEach(h),this.h()},h(){_e(l.src,a=i[4])||r(l,"src",a),r(l,"alt",i[1]),r(l,"class","object-cover w-full h-full"),r(s,"class","absolute inset-0"),r(v,"class","typo-u3"),r(g,"class","typo-h6"),r(f,"class","flex-1"),r(c,"class","content absolute inset-0 flex flex-row px-8 py-6 bg-black bg-opacity-20"),r(t,"href",i[2]),r(t,"target",x=i[3]?"_blank":""),r(t,"class","absolute inset-0 border border-black hover:border-white"),r(e,"class","relative bg-gray h-44 md:h-52")},m(I,D){C(I,e,D),o(e,t),o(t,s),o(s,l),o(t,n),o(t,c),o(c,f),o(f,v),o(v,u),o(f,m),o(f,g),o(g,k),o(c,V),E.m(c,null),o(e,A),w&&w.m(e,null)},p(I,[D]){D&16&&!_e(l.src,a=I[4])&&r(l,"src",a),D&2&&r(l,"alt",I[1]),D&2&&ie(u,I[1]),D&1&&ie(k,I[0]),H!==(H=L(I))&&(E.d(1),E=H(I),E&&(E.c(),E.m(c,null))),D&4&&r(t,"href",I[2]),D&8&&x!==(x=I[3]?"_blank":"")&&r(t,"target",x),I[2]?w&&(w.d(1),w=null):w||(w=Ce(),w.c(),w.m(e,null))},i:re,o:re,d(I){I&&h(e),E.d(),w&&w.d()}}}function Vt(i,e,t){let{th:s}=e,{en:l}=e,{href:a=null}=e,{external:n=!1}=e,{image:c}=e;return i.$$set=f=>{"th"in f&&t(0,s=f.th),"en"in f&&t(1,l=f.en),"href"in f&&t(2,a=f.href),"external"in f&&t(3,n=f.external),"image"in f&&t(4,c=f.image)},[s,l,a,n,c]}class yt extends ge{constructor(e){super();ve(this,e,Vt,It,me,{th:0,en:1,href:2,external:3,image:4})}}function He(i,e,t){const s=i.slice();return s[3]=e[t],s}function Be(i,e,t){const s=i.slice();return s[6]=e[t].name,s[7]=e[t].logo,s[8]=e[t].href,s}function $t(i){let e,t,s;return{c(){e=G("\u0E19\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E35\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07"),t=p("br"),s=G("\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E17\u0E35\u0E48 22 \u0E1E.\u0E04. 2565 8:00-17:00 \u0E19.")},l(l){e=O(l,"\u0E19\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E35\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07"),t=b(l,"BR",{}),s=O(l,"\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E17\u0E35\u0E48 22 \u0E1E.\u0E04. 2565 8:00-17:00 \u0E19.")},m(l,a){C(l,e,a),C(l,t,a),C(l,s,a)},d(l){l&&h(e),l&&h(t),l&&h(s)}}}function Re(i){let e,t,s,l,a,n;return{c(){e=p("a"),t=p("img"),a=$(),this.h()},l(c){e=b(c,"A",{href:!0,target:!0});var f=_(e);t=b(f,"IMG",{src:!0,alt:!0,class:!0}),a=T(f),f.forEach(h),this.h()},h(){_e(t.src,s=i[7])||r(t,"src",s),r(t,"alt",l=i[6]),r(t,"class","h-6 md:h-8"),r(e,"href",n=i[8]),r(e,"target","_blank")},m(c,f){C(c,e,f),o(e,t),o(e,a)},p:re,d(c){c&&h(e)}}}function Ne(i){let e,t;const s=[i[3]];let l={};for(let a=0;a<s.length;a+=1)l=Oe(l,s[a]);return e=new yt({props:l}),{c(){X(e.$$.fragment)},l(a){Z(e.$$.fragment,a)},m(a,n){ee(e,a,n),t=!0},p(a,n){const c=n&4?Ge(s,[lt(a[3])]):{};e.$set(c)},i(a){t||(R(e.$$.fragment,a),t=!0)},o(a){z(e.$$.fragment,a),t=!1},d(a){te(e,a)}}}function Tt(i){let e,t,s,l,a,n,c,f,v,u,m,g,k,V,x,A,L,H,E,w,I,D,P,M,U,B,W,le,Q,ne,Y,se;e=new at({}),k=new Et({props:{until:new Date("2022-05-22 8:00 GMT+7"),$$slots:{default:[$t]},$$scope:{ctx:i}}});let ae=i[1],N=[];for(let d=0;d<ae.length;d+=1)N[d]=Re(Be(i,ae,d));let oe=i[2],j=[];for(let d=0;d<oe.length;d+=1)j[d]=Ne(He(i,oe,d));const Fe=d=>z(j[d],1,1,()=>{j[d]=null});return W=new Ee({props:{title:"\u0E02\u0E48\u0E32\u0E27\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.",subtitle:"\u0E23\u0E27\u0E21\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21. \u0E08\u0E32\u0E01 The STANDARD",fetchPosts:qe,viewAllText:"\u0E14\u0E39\u0E02\u0E48\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1A\u0E19 thestandard.co",viewAllLink:"https://thestandard.co/tag/bkkelection2022/"}}),Q=new Ee({props:{title:"\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.",subtitle:"\u0E23\u0E27\u0E21\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E19\u0E49\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E14\u0E49\u0E27\u0E22 Data Visualization \u0E42\u0E14\u0E22 WeVis",fetchPosts:ot,viewAllText:"\u0E14\u0E39\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1A\u0E19 wevis.info",viewAllLink:"https://wevis.info/tag/\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07-\u0E01\u0E17\u0E21/"}}),Y=new Ee({props:{title:"\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E01\u0E17\u0E21.",subtitle:"\u0E40\u0E01\u0E23\u0E47\u0E14\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.'65 \u0E08\u0E32\u0E01 The STANDARD",fetchPosts:i[0],viewAllText:"\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1A\u0E19 thestandard.co",viewAllLink:"https://thestandard.co/tag/bkk-election-101//"}}),{c(){X(e.$$.fragment),t=$(),s=p("div"),l=p("div"),a=p("div"),n=p("div"),c=p("img"),v=$(),u=p("p"),m=G("\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E41\u0E25\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E20\u0E32 \u0E01\u0E17\u0E21. \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48"),g=$(),X(k.$$.fragment),V=$(),x=p("div"),A=p("img"),H=$(),E=p("div");for(let d=0;d<N.length;d+=1)N[d].c();w=$(),I=p("div"),D=$(),P=p("div"),M=p("div");for(let d=0;d<j.length;d+=1)j[d].c();U=$(),B=p("div"),X(W.$$.fragment),le=$(),X(Q.$$.fragment),ne=$(),X(Y.$$.fragment),this.h()},l(d){Z(e.$$.fragment,d),t=T(d),s=b(d,"DIV",{class:!0});var S=_(s);l=b(S,"DIV",{class:!0,style:!0});var q=_(l);a=b(q,"DIV",{class:!0});var y=_(a);n=b(y,"DIV",{class:!0});var F=_(n);c=b(F,"IMG",{src:!0,alt:!0}),v=T(F),u=b(F,"P",{class:!0});var xe=_(u);m=O(xe,"\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E41\u0E25\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E20\u0E32 \u0E01\u0E17\u0E21. \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48"),xe.forEach(h),g=T(F),Z(k.$$.fragment,F),F.forEach(h),V=T(y),x=b(y,"DIV",{class:!0});var pe=_(x);A=b(pe,"IMG",{src:!0,alt:!0,class:!0}),H=T(pe),E=b(pe,"DIV",{class:!0});var De=_(E);for(let ce=0;ce<N.length;ce+=1)N[ce].l(De);De.forEach(h),pe.forEach(h),y.forEach(h),q.forEach(h),w=T(S),I=b(S,"DIV",{class:!0}),_(I).forEach(h),D=T(S),P=b(S,"DIV",{class:!0});var Ie=_(P);M=b(Ie,"DIV",{class:!0});var Ve=_(M);for(let ce=0;ce<j.length;ce+=1)j[ce].l(Ve);Ve.forEach(h),Ie.forEach(h),S.forEach(h),U=T(d),B=b(d,"DIV",{class:!0});var he=_(B);Z(W.$$.fragment,he),le=T(he),Z(Q.$$.fragment,he),ne=T(he),Z(Y.$$.fragment,he),he.forEach(h),this.h()},h(){_e(c.src,f="/static/images/bkkelection-white-big.png")||r(c,"src",f),r(c,"alt","BKK ELECTION 2022"),r(u,"class","typo-b4 text-center"),r(n,"class","flex-1 flex flex-col space-y-8"),_e(A.src,L="https://via.placeholder.com/480x270?text=video")||r(A,"src",L),r(A,"alt","Video"),r(A,"class","w-full h-auto hidden md:block"),r(E,"class","flex flex-row space-x-8 justify-end"),r(x,"class","flex-1 flex flex-col space-y-8"),r(a,"class","flex flex-col md:flex-row justify-center items-center px-5 py-12 md:py-32 w-full max-w-screen-xl space-y-8 md:space-y-0 md:space-x-16"),r(l,"class","flex flex-col items-center bg-cover bg-center"),st(l,"background-image","url('/static/images/landing-bg.png')"),r(I,"class","-mt-12 h-12 to-black from-transparent bg-gradient-to-b "),r(M,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-2xl p-5 gap-5"),r(P,"class","flex flex-col items-center"),r(s,"class","bg-black text-white"),r(B,"class","flex flex-col max-w-screen-xl mx-auto divide-y divide-black px-5 md:py-8")},m(d,S){ee(e,d,S),C(d,t,S),C(d,s,S),o(s,l),o(l,a),o(a,n),o(n,c),o(n,v),o(n,u),o(u,m),o(n,g),ee(k,n,null),o(a,V),o(a,x),o(x,A),o(x,H),o(x,E);for(let q=0;q<N.length;q+=1)N[q].m(E,null);o(s,w),o(s,I),o(s,D),o(s,P),o(P,M);for(let q=0;q<j.length;q+=1)j[q].m(M,null);C(d,U,S),C(d,B,S),ee(W,B,null),o(B,le),ee(Q,B,null),o(B,ne),ee(Y,B,null),se=!0},p(d,[S]){const q={};if(S&2048&&(q.$$scope={dirty:S,ctx:d}),k.$set(q),S&2){ae=d[1];let y;for(y=0;y<ae.length;y+=1){const F=Be(d,ae,y);N[y]?N[y].p(F,S):(N[y]=Re(F),N[y].c(),N[y].m(E,null))}for(;y<N.length;y+=1)N[y].d(1);N.length=ae.length}if(S&4){oe=d[2];let y;for(y=0;y<oe.length;y+=1){const F=He(d,oe,y);j[y]?(j[y].p(F,S),R(j[y],1)):(j[y]=Ne(F),j[y].c(),R(j[y],1),j[y].m(M,null))}for(ze(),y=oe.length;y<j.length;y+=1)Fe(y);Ue()}},i(d){if(!se){R(e.$$.fragment,d),R(k.$$.fragment,d);for(let S=0;S<oe.length;S+=1)R(j[S]);R(W.$$.fragment,d),R(Q.$$.fragment,d),R(Y.$$.fragment,d),se=!0}},o(d){z(e.$$.fragment,d),z(k.$$.fragment,d),j=j.filter(Boolean);for(let S=0;S<j.length;S+=1)z(j[S]);z(W.$$.fragment,d),z(Q.$$.fragment,d),z(Y.$$.fragment,d),se=!1},d(d){te(e,d),d&&h(t),d&&h(s),te(k),de(N,d),de(j,d),d&&h(U),d&&h(B),te(W),te(Q),te(Y)}}}const At="bkk-election-101";function Mt(i){return[()=>qe({tag:At}),[{name:"WeVis",logo:"/static/images/logo-wevis.png",href:"https://wevis.info"},{name:"The Standard",logo:"/static/images/logo-tsd.png",href:"https://thestandard.co/"},{name:"Wisesight",logo:"/static/images/logo-wisesight.png",href:"https://wisesight.com/"}],[{th:"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F + \u0E2A.\u0E01.",en:"Meet the Candidates",href:"/candidate",image:"https://via.placeholder.com/406x213?text=candidates"},{th:"\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.",en:"Voting Map",image:"/static/images/cover/tn_result.png"},{th:"\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E15\u0E34\u0E01\u0E32\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07",en:"How to Vote?",href:"",image:"/static/images/cover/tn_howtovote.png"},{th:"\u0E28\u0E36\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21. \u0E1A\u0E19\u0E42\u0E25\u0E01\u0E42\u0E0B\u0E40\u0E0A\u0E35\u0E22\u0E25",en:"Social Trend",href:"/socialtrend",image:"/static/images/cover/tn_sociallistening.png"},{th:"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E01\u0E27\u0E19\u0E43\u0E08\u0E0A\u0E32\u0E27 \u0E01\u0E17\u0E21.",en:"Open Bangkok",href:"https://openbangkok.wevis.info",external:!0,image:"/static/images/cover/tn_openbkk.png"},{th:"\u0E23\u0E48\u0E27\u0E21\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 \u0E01\u0E17\u0E21.",en:"Bangkok Budgeting",href:"https://bangkokbudgeting.wevis.info",external:!0,image:"/static/images/cover/tn_bangkokbudget.png"}]]}class Lt extends ge{constructor(e){super();ve(this,e,Mt,Tt,me,{})}}export{Lt as default};
