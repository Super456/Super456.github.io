import{w as ln,c as O}from"./path-39bad7e2.CbwjOpE9.js";import{au as an,av as j,aw as D,ax as rn,ay as y,Y as on,az as J,aA as _,aB as un,aC as t,aD as sn,aE as tn,aF as fn}from"./theme.CyLIXCX6.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,z,E,v,A,S,a){var B=z-l,i=E-h,n=S-v,m=a-A,r=m*B-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*B,h+r*i]}function U(l,h,z,E,v,A,S){var a=l-z,B=h-E,i=(S?A:-A)/J(a*a+B*B),n=i*B,m=-i*a,r=l+n,s=h+m,f=z+n,c=E+m,Y=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,w=r*c-f*s,C=(g<0?-1:1)*J(fn(0,T*T*R-w*w)),F=(w*g-p*C)/R,I=(-w*p-g*C)/R,P=(w*g+p*C)/R,d=(-w*p+g*C)/R,x=F-Y,e=I-o,u=P-Y,$=d-o;return x*x+e*e>u*u+$*$&&(F=P,I=d),{cx:F,cy:I,x01:-n,y01:-m,x11:F*(v/T-1),y11:I*(v/T-1)}}function vn(){var l=cn,h=yn,z=O(0),E=null,v=gn,A=mn,S=pn,a=null,B=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,Y=un(c-f),o=c>f;if(a||(a=n=B()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(Y>on-y)a.moveTo(s*j(f),s*D(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*j(c),r*D(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,w=Y,C=Y,F=S.apply(this,arguments)/2,I=F>y&&(E?+E.apply(this,arguments):J(r*r+s*s)),P=_(un(s-r)/2,+z.apply(this,arguments)),d=P,x=P,e,u;if(I>y){var $=sn(I/r*D(F)),K=sn(I/s*D(F));(w-=$*2)>y?($*=o?1:-1,R+=$,T-=$):(w=0,R=T=(f+c)/2),(C-=K*2)>y?(K*=o?1:-1,p+=K,g-=K):(C=0,p=g=(f+c)/2)}var G=s*j(p),H=s*D(p),L=r*j(T),M=r*D(T);if(P>y){var N=s*j(g),Q=s*D(g),V=r*j(R),W=r*D(R),q;if(Y<an)if(q=dn(G,H,V,W,N,Q,L,M)){var X=G-q[0],Z=H-q[1],k=N-q[0],b=Q-q[1],nn=1/D(tn((X*k+Z*b)/(J(X*X+Z*Z)*J(k*k+b*b)))/2),en=J(q[0]*q[0]+q[1]*q[1]);d=_(P,(r-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}C>y?x>y?(e=U(V,W,G,H,s,x,o),u=U(N,Q,L,M,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(G,H),a.arc(0,0,s,p,g,!o)):a.moveTo(G,H),!(r>y)||!(w>y)?a.lineTo(L,M):d>y?(e=U(L,M,N,Q,r,-d,o),u=U(G,H,V,W,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[j(m)*n,D(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:O(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:O(+n),i):h},i.cornerRadius=function(n){return arguments.length?(z=typeof n=="function"?n:O(+n),i):z},i.padRadius=function(n){return arguments.length?(E=n==null?null:typeof n=="function"?n:O(+n),i):E},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:O(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:O(+n),i):A},i.padAngle=function(n){return arguments.length?(S=typeof n=="function"?n:O(+n),i):S},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as d};
