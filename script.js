
(()=>{
/* ➜ Paste real URLs below. Buttons with an empty value stay hidden. */
const LINKS={github:"https://github.com/Ranitsautya",linkedin:"https://www.linkedin.com/in/ranitsautya",churn:"https://github.com/Ranitsautya/Customer-Churn-Prediction-ANN.git",sentiment:"https://github.com/Ranitsautya/RNN.git",nlp:"https://github.com/Ranitsautya/nlp-preprocessor.git",flappy:"https://github.com/Ranitsautya/flappy-clone.git"};
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
$$('[data-link]').forEach(a=>{const u=LINKS[a.dataset.link];if(u){a.href=u;a.hidden=false}});
/* injected content */
const I={chat:'M4 5h16v11H9l-5 4z',doc:'M5 4h14v16H5zM9 9h6M9 13h6',db:'M5 6c0-1.700 3.100-3 7-3s7 1.300 7 3-3.100 3-7 3-7-1.300-7-3zM5 6v6c0 1.700 3.100 3 7 3s7-1.300 7-3V6M5 12v6c0 1.700 3.100 3 7 3s7-1.300 7-3v-6',srch:'M11 5a6 6 0 100 12 6 6 0 000-12zM16 16l5 5',chip:'M7 7h10v10H7zM10 10h4v4h-4zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4',ok:'M5 12l5 5L20 7',bar:'M5 20V10M12 20V4M19 20v-7',code:'M8 8l-5 4 5 4M16 8l5 4-5 4',cal:'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',cup:'M7 4h10v5a5 5 0 01-10 0zM12 14v4M8 20h8'};
const svg=d=>`<svg viewBox="0 0 24 24"><path d="${d}"/></svg>`;
$('#stats').innerHTML=[['bar','8.61','2','','CGPA'],['code','3','0','','ML / NLP projects'],['cal','90','0',' days','Generative AI training'],['cup','95','1','%','Higher Secondary']].map(([i,t,d,s,l])=>`<div class="rv">${svg(I[i])}<b><span class="num" data-to="${t}" data-dec="${d}">0</span>${s}</b><span>${l}</span></div>`).join('');
$('#flow').innerHTML=[['chat','Query'],['doc','Embeddings'],['db','Vector DB'],['srch','Retrieve'],['chip','LLM'],['ok','Answer']].map(([i,n],k)=>`${k?'<span class="ar"></span>':''}<div class="nd" style="--i:${k}"><div>${svg(I[i])}</div>${n}</div>`).join('');
const S={'Languages':['Python','Java','JavaScript','SQL','HTML','CSS'],'ML / AI Frameworks':['TensorFlow','Keras','Scikit-Learn','NLTK','LangChain','LangGraph'],'Generative AI':['Prompt Engineering','RAG Pipelines','Vector Databases','LoRA / QLoRA','Transformers'],'Web & Tools':['React.js','Streamlit','Pandas','NumPy','Git','GitHub','Jupyter Notebook','VS Code','Anaconda']};
const sym=n=>{const w=n.replace(/[^A-Za-z. ]/g,' ').split(/\s+/).filter(Boolean);return w.length>1?w[0][0]+w[1][0]:n[0].toUpperCase()+n[1].toLowerCase()};
$('#sg').innerHTML=Object.entries(S).map(([k,v])=>`<div class="rv"><h4>${k}</h4><div class="tl">${v.map(n=>`<div class="tile"><b>${sym(n)}</b><span>${n}</span></div>`).join('')}</div></div>`).join('');
/* preloader */
const pre=$('#pre'),pt=$('#pt');
function go(){pre.classList.add('go');if(fine&&!rm)document.body.classList.add('cur');setTimeout(()=>$('#hero').classList.add('in'),600);setTimeout(()=>pre.remove(),1300)}
if(rm)go();else{let n=0;const t=setInterval(()=>{n+=Math.ceil(Math.random()*7);if(n>=100){n=100;clearInterval(t);setTimeout(go,350)}pt.textContent='Initializing '+String(n).padStart(3,'0')},60)}
/* reveal + count-up */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
 $$('.num',e.target).forEach(c=>{const to=+c.dataset.to,d=+c.dataset.dec;if(rm){c.textContent=to.toFixed(d);return}const t0=performance.now();(function s(t){const p=clamp((t-t0)/1500,0,1);c.textContent=(to*(1-Math.pow(1-p,3))).toFixed(d);if(p<1)requestAnimationFrame(s)})(t0)})}),{threshold:.15});
$$('.pn:not(#hero)').forEach(e=>io.observe(e));
/* nav */
const rail=$('#rail'),grip=$('#grip'),tab=$('#tab'),VW=()=>document.documentElement.clientWidth;let NS={side:'l',y:.5,hid:innerWidth<700};try{const s=JSON.parse(localStorage.getItem('rnav')||'null');if(s&&typeof s.y==='number')NS={side:'l',y:clamp(s.y,.08,.92),hid:!!s.hid}}catch(e){}
const save=()=>{try{localStorage.setItem('rnav',JSON.stringify(NS))}catch(e){}};
function place(){const w=rail.offsetWidth,h=rail.offsetHeight,W=VW(),R=NS.side==='r',tw=tab.offsetWidth,th=tab.offsetHeight;const y=clamp(NS.y*innerHeight-h/2,12,Math.max(12,innerHeight-h-12)),x=NS.hid?(R?W+14:-w-14):(R?W-w-14:14);rail.style.transform=`translate(${x}px,${y}px)`;rail.classList.toggle('off',NS.hid);rail.classList.toggle('r',R);rail.classList.toggle('l',!R);rail.inert=NS.hid;tab.classList.toggle('on',NS.hid);tab.classList.toggle('r',R);tab.classList.toggle('l',!R);tab.style.transform=`translate(${R?W-tw:0}px,${clamp(NS.y*innerHeight-th/2,12,Math.max(12,innerHeight-th-12))}px)`}
let dr=null;
grip.addEventListener('pointerdown',e=>{if(e.button>0)return;const r=rail.getBoundingClientRect();dr={ox:e.clientX-r.left,oy:e.clientY-r.top,w:r.width,h:r.height};grip.setPointerCapture(e.pointerId);rail.classList.add('drag');e.preventDefault()});
grip.addEventListener('pointermove',e=>{if(!dr)return;const W=VW();rail.style.transform=`translate(${clamp(e.clientX-dr.ox,-dr.w*.6,W-dr.w*.4)}px,${clamp(e.clientY-dr.oy,8,innerHeight-dr.h-8)}px)`;rail.classList.toggle('near',e.clientX<28||e.clientX>W-28)});
const drop=(e,ok)=>{if(!dr)return;const W=VW();if(ok){NS.side=e.clientX<W/2?'l':'r';NS.hid=e.clientX<28||e.clientX>W-28;NS.y=clamp((clamp(e.clientY-dr.oy,8,innerHeight-dr.h-8)+dr.h/2)/innerHeight,.08,.92)}dr=null;rail.classList.remove('drag','near');place();save()};
grip.addEventListener('pointerup',e=>drop(e,true));grip.addEventListener('pointercancel',e=>drop(e,false));
grip.addEventListener('keydown',e=>{const k=e.key;if(k==='ArrowUp')NS.y=clamp(NS.y-.04,.08,.92);else if(k==='ArrowDown')NS.y=clamp(NS.y+.04,.08,.92);else if(k==='ArrowLeft')NS.side='l';else if(k==='ArrowRight')NS.side='r';else return;e.preventDefault();place();save()});
$('#hide').onclick=()=>{NS.hid=true;place();save()};tab.onclick=()=>{NS.hid=false;place();save();setTimeout(()=>grip.focus(),60)};addEventListener('resize',place);
const rl=$$('.ls a');$$('main section').forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)rl.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+s.id))}),{rootMargin:'-45% 0px -50% 0px'}).observe(s));place();requestAnimationFrame(()=>{rail.classList.remove('init');tab.classList.remove('init')});
/* scroll */
const prog=$('#prog'),net=$('#net'),tml=$('#tml');let q=false;
function sc(){q=false;const y=scrollY;prog.style.width=y/(document.documentElement.scrollHeight-innerHeight)*100+'%';if(rm)return;net.style.transform=`translateY(${y*.12}px)`;
 const r=tml.getBoundingClientRect();tml.style.setProperty('--h',clamp((innerHeight*.7-r.top)/r.height,0,1)*100+'%')}
addEventListener('scroll',()=>{if(!q){q=true;requestAnimationFrame(sc)}},{passive:true});sc();
/* 3D network */
let MX=0,MY=0;addEventListener('pointermove',e=>{MX=e.clientX/innerWidth-.5;MY=e.clientY/innerHeight-.5});
const spr=document.createElement('canvas');spr.width=spr.height=48;{const c=spr.getContext('2d'),g=c.createRadialGradient(24,24,0,24,24,24);g.addColorStop(0,'rgba(255,90,80,1)');g.addColorStop(.25,'rgba(255,49,49,.65)');g.addColorStop(1,'rgba(255,49,49,0)');c.fillStyle=g;c.fillRect(0,0,48,48)}
function makeNet(cv,o){
 const g=cv.getContext('2d');let W,H,cx,cy,S,vis=true,ay=0,ax=-.3;const P=[],E=[],seen=new Set();let sd=o.seed;
 const rnd=()=>(sd=sd*16807%2147483647)/2147483647,add=(x,y,z,t)=>P.push({x,y,z,t});
 if(o.shape){const p=(1+Math.sqrt(5))/2;[[-1,p,0],[1,p,0],[-1,-p,0],[1,-p,0],[0,-1,p],[0,1,p],[0,-1,-p],[0,1,-p],[p,0,-1],[p,0,1],[-p,0,-1],[-p,0,1]].forEach(v=>{const l=Math.hypot(...v);add(v[0]/l,v[1]/l,v[2]/l,1)});for(const x of[-1,1])for(const y of[-1,1])for(const z of[-1,1])add(x*.45,y*.45,z*.45,2)}
 for(let i=0;i<o.n;i++){const u=rnd()*2-1,a=rnd()*6.283,r=Math.sqrt(1-u*u),R=o.r0+rnd()*o.r1;add(r*Math.cos(a)*R,u*R,r*Math.sin(a)*R,0)}
 const D=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z),pe=(i,j,t)=>{const k=Math.min(i,j)*999+Math.max(i,j);if(!seen.has(k)){seen.add(k);E.push([i,j,t])}};
 P.forEach((a,i)=>{P.forEach((b,j)=>{if(j<=i)return;const d=D(a,b);if(a.t===1&&b.t===1&&d<1.1)pe(i,j,1);else if(a.t===2&&b.t===2&&d<.95)pe(i,j,2)});
  P.map((b,j)=>[D(a,b),j]).filter(x=>x[1]!==i).sort((x,y)=>x[0]-y[0]).slice(0,o.k||3).forEach(x=>pe(i,x[1],0))});
 function size(){const dpr=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;g.setTransform(dpr,0,0,dpr,0,0);const m=W<700;cx=W*(m?.5:o.cx);cy=H*(m?.3:o.cy);S=Math.min(W,H)*(m?.3:o.s);frame(0)}
 function frame(t){g.clearRect(0,0,W,H);if(!rm){ay+=.0028;}const tay=ay+MX*.9,tax=-.3+MY*.5,cY=Math.cos(tay),sY=Math.sin(tay),cX=Math.cos(tax),sX=Math.sin(tax);
  const Q=P.map(p=>{const x=p.x*cY+p.z*sY,z1=-p.x*sY+p.z*cY,y=p.y*cX-z1*sX,z=p.y*sX+z1*cX,k=3.2/(3.2+z);return{x:cx+x*k*S,y:cy+y*k*S,k,d:clamp(.55-z*.3,.12,1),t:p.t}});
  g.lineWidth=1;E.forEach(([i,j,t])=>{const a=Q[i],b=Q[j],d=(a.d+b.d)/2;g.strokeStyle=t?`rgba(255,255,255,${.34*d})`:`rgba(255,49,49,${.42*d})`;g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.stroke()});
  if(!rm)for(let n=0;n<14;n++){const e=E[(n*7)%E.length],a=Q[e[0]],b=Q[e[1]],u=(t*.0004+n*.17)%1;g.drawImage(spr,a.x+(b.x-a.x)*u-6,a.y+(b.y-a.y)*u-6,12,12)}
  Q.forEach((p,i)=>{if(i%3===0||p.t===1){const s=(p.t===1?30:20)*p.k*p.d+6;g.globalAlpha=Math.min(1,p.d+.2);g.drawImage(spr,p.x-s/2,p.y-s/2,s,s);g.globalAlpha=1}g.fillStyle=`rgba(255,255,255,${.5+.5*p.d})`;g.beginPath();g.arc(p.x,p.y,1.4*p.k+.6,0,6.3);g.fill()})}
 (function lp(t){if(vis&&!rm)frame(t);requestAnimationFrame(lp)})(0);
 new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);addEventListener('resize',size);size()}
makeNet($('#net'),{seed:7,shape:1,n:48,r0:.25,r1:1.05,cx:.7,cy:.5,s:.3});
makeNet($('#cn'),{seed:21,shape:0,n:70,r0:.5,r1:1.5,cx:.8,cy:.5,s:.22,k:3});
/* pointer interactions */
if(fine&&!rm){
 const cr=$('#cr');let x=0,y=0,rx=0,ry=0;
 addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY});
 (function lp(){rx+=(x-rx)*.4;ry+=(y-ry)*.4;cr.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(lp)})();
 addEventListener('pointerdown',()=>cr.classList.add('fire'));
 addEventListener('pointerup',()=>cr.classList.remove('fire'));
 $$('a,button').forEach(a=>{a.addEventListener('pointerenter',()=>cr.classList.add('big'));a.addEventListener('pointerleave',()=>cr.classList.remove('big'))});
 $$('.btn').forEach(m=>{m.addEventListener('pointermove',e=>{const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});m.addEventListener('pointerleave',()=>m.style.transform='')});
 $$('.card').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*10+'deg');c.style.setProperty('--rx',((e.clientY-r.top)/r.height-.5)*-8+'deg')});c.addEventListener('pointerleave',()=>{c.style.removeProperty('--rx');c.style.removeProperty('--ry')})});
}
})();
