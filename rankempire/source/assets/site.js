(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const cl=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesk=()=>innerWidth>980;

/* smooth scroll */
let lenis=null;
if(window.Lenis&&!RM){lenis=new Lenis({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});window.lenis=lenis;
  const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length<2)return;const t=$(id);if(!t)return;e.preventDefault();lenis?lenis.scrollTo(t,{offset:-90}):t.scrollIntoView({behavior:'smooth'})}));

/* nav */
const nav=$('.nav');let lastY=scrollY;
function navTick(y){nav.classList.toggle('solid',y>40);if(document.body.classList.contains('mopen'))return;nav.classList.toggle('hide',y>lastY&&y>400);lastY=y}
const bg=$('.burger');if(bg)bg.addEventListener('click',()=>{const o=document.body.classList.toggle('mopen');$('.mnav').classList.toggle('open',o);bg.setAttribute('aria-expanded',o);if(lenis)o?lenis.stop():lenis.start()});

/* big word letters */
const bws=$$('.bigword');bws.forEach(el=>{const t=el.textContent.trim();el.innerHTML=[...t].map((c,i)=>`<span style="animation-delay:${.15+i*.06}s">${c}</span>`).join('')});
function bwFit(){bws.forEach(el=>{const W=el.clientWidth,H=el.clientHeight;[...el.children].forEach(s=>{s.style.backgroundSize=W+'px '+H+'px';s.style.backgroundPosition=(-s.offsetLeft)+'px '+(-s.offsetTop)+'px'})})}
bwFit();addEventListener('resize',bwFit);document.fonts&&document.fonts.ready.then(bwFit);

/* line reveals */
$$('[data-lines]').forEach(el=>{el.classList.add('lines');el.innerHTML=el.innerHTML.split(/<br\s*\/?>/).map((l,i)=>`<span class="ln"><span style="--d:${i*.08}s">${l}</span></span>`).join('');el.setAttribute('data-r','l')});

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
$$('[data-r]').forEach(el=>io.observe(el));
$$('[data-stagger]').forEach(g=>[...g.children].forEach((c,i)=>{c.setAttribute('data-r','');c.style.setProperty('--d',(i%6*.08)+'s');io.observe(c)}));

/* word reveal */
const wrevs=$$('.wrev').map(el=>{const nodes=[];const walk=(n)=>{[...n.childNodes].forEach(ch=>{if(ch.nodeType===3){const f=document.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w))f.appendChild(document.createTextNode(w));else{const s=document.createElement('span');s.className='w';s.textContent=w;f.appendChild(s);nodes.push(s)}});ch.replaceWith(f)}else if(ch.nodeType===1)walk(ch)})};walk(el);return{el,ws:nodes,last:-1}});

/* counters */
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,end=parseFloat(el.dataset.count),suf=el.dataset.suf||'',pre=el.dataset.pre||'',dur=1400,t0=performance.now();const st=t=>{const k=cl((t-t0)/dur),v=end*(1-Math.pow(1-k,3));el.textContent=pre+(end%1?v.toFixed(1):Math.round(v).toLocaleString())+suf;if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)}),{threshold:.6});
$$('[data-count]').forEach(el=>cio.observe(el));

/* pinned / scroll scenes */
const band=$('.band .bg'),bigw=$('.bigword'),proc=$('.proc'),pcs=$$('.proc .pc'),works=$$('.wk'),trust=$('.trust'),cols=$$('.trust .tcol'),giant=$('.giant'),phi=$$('.phimg img');
const svcw=$('.svcw'),svs=$$('.svcw .sv');let svOn=-1,svPin=false;
function setSv(i){if(i===svOn)return;svOn=i;svs.forEach((s,k)=>s.classList.toggle('on',k===i))}
svs.forEach((s,i)=>s.querySelector('.row').addEventListener('click',e=>{if(e.target.closest('a'))return;if(svPin&&lenis){const r=svcw.getBoundingClientRect();const span=svcw.offsetHeight-innerHeight;lenis.scrollTo(scrollY+r.top+span*(i+.5)/svs.length)}else setSv(i===svOn&&!svPin?-1:i)}));
function svLayout(){if(!svcw)return;const list=$('.svcs',svcw);svcw.style.height='';list.style.position='';list.style.top='';
  if(!isDesk()||RM){svPin=false;if(svOn<0)setSv(0);return}
  const prev=svOn;setSv(0);const h=list.offsetHeight;
  if(h<innerHeight-40){svPin=true;svcw.style.height=(h+svs.length*innerHeight*.42)+'px';list.style.position='sticky';list.style.top=Math.max(80,(innerHeight-h)/2)+'px'}else svPin=false;
  if(prev>=0)setSv(prev)}
if(svcw){setSv(0);addEventListener('load',svLayout);svLayout()}

function frame(){
  const y=scrollY,vh=innerHeight;navTick(y);
  if(band){const r=band.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<vh)band.style.transform=`translate3d(0,${(r.top*-.12).toFixed(1)}px,0)`}
  if(bigw&&y<vh*1.2)bigw.style.transform=`translate3d(0,${(y*.18).toFixed(1)}px,0) scale(${(1-y*.00012).toFixed(4)})`;
  wrevs.forEach(o=>{const r=o.el.getBoundingClientRect();if(r.top>vh||r.bottom<0)return;const p=cl((vh*.85-r.top)/(r.height+vh*.45));const n=Math.round(p*o.ws.length);if(n!==o.last){o.ws.forEach((w,i)=>w.classList.toggle('on',i<n));o.last=n}});
  if(proc&&isDesk()&&!RM){const r=proc.getBoundingClientRect();const p=cl(-r.top/(proc.offsetHeight-vh));pcs.forEach((c,i)=>{const k=cl((p-.04-i*.17)/.3);const e=1-Math.pow(1-k,3);c.style.setProperty('--y',((1-e)*(vh*.9)+ (1-e)*i*40).toFixed(1)+'px')})}
  if(svPin){const r=svcw.getBoundingClientRect();const span=svcw.offsetHeight-vh;const p=cl(-r.top/span);setSv(Math.min(svs.length-1,Math.floor(p*svs.length*0.999)))}
  if(works.length&&isDesk()){works.forEach((w,i)=>{const nx=works[i+1];const c=w.firstElementChild;if(!nx){c.style.transform='';return}const r=nx.getBoundingClientRect(),top=parseFloat(getComputedStyle(nx).top)||110;const k=cl(1-(r.top-top)/(vh*.8));c.style.transform=`scale(${(1-k*.06).toFixed(4)})`;c.style.filter=k>0?`brightness(${(1-k*.12).toFixed(3)})`:''})}
  if(trust&&isDesk()&&!RM){const r=trust.getBoundingClientRect();const p=cl(-r.top/(trust.offsetHeight-vh));cols.forEach((c,i)=>{const H=c.offsetHeight;const sp=i?1.1:1;const from=vh*(i?1.35:1.05),to=-H+vh*(i?.05:.15);c.style.transform=`translate3d(0,${(from+(to-from)*cl(p*sp)).toFixed(1)}px,0)`})}
  if(giant){const r=giant.getBoundingClientRect();const p=cl((vh-r.top)/(r.height+vh*.3));giant.style.setProperty('--gy',((1-p)*40).toFixed(1)+'%')}
  phi.forEach(im=>{const r=im.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;im.style.transform=`translate3d(0,${(-(1-(r.top+r.height)/(vh+r.height))*15).toFixed(2)}%,0)`});
}
let tick=false;const req=()=>{if(!tick){tick=true;requestAnimationFrame(()=>{tick=false;frame()})}};
addEventListener('scroll',req,{passive:true});addEventListener('resize',()=>{svLayout();req()});if(lenis)lenis.on('scroll',req);frame();

/* pricing toggle */
$$('.tog').forEach(t=>{const sw=$('.sw',t);const sec=t.closest('section')||document;const set=y=>{t.classList.toggle('y',y);sw.setAttribute('aria-checked',y);$$('[data-m]',sec).forEach(el=>{el.textContent=y?el.dataset.y:el.dataset.m});$$('[data-per]',sec).forEach(el=>el.textContent=y?'/mo, billed yearly':'/month')};sw.addEventListener('click',()=>set(!t.classList.contains('y')));$$('.m,.yl',t).forEach(l=>l.addEventListener('click',()=>set(l.classList.contains('yl'))))});

/* faq */
$$('.faqw').forEach(w=>{const tabs=$$('.ftabs button',w),qs=$$('.fq',w);
  qs.forEach(q=>$('button',q).addEventListener('click',()=>{const o=!q.classList.contains('on');qs.forEach(x=>{x.classList.remove('on');$('button',x).setAttribute('aria-expanded','false')});if(o){q.classList.add('on');$('button',q).setAttribute('aria-expanded','true')}}));
  tabs.forEach(b=>b.addEventListener('click',()=>{tabs.forEach(x=>x.classList.toggle('on',x===b));const c=b.dataset.c;let first=null;qs.forEach(q=>{const s=c==='all'||q.dataset.c===c;q.classList.toggle('hide',!s);q.classList.remove('on');if(s&&!first)first=q});if(first)first.classList.add('on')}))});

/* forms: compose email */
$$('form[data-mail]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);let body='';for(const [k,v] of d.entries())if(v)body+=`${k}: ${v}\n`;const to=f.dataset.mail;const sub=f.dataset.subject||'Website enquiry';location.href=`mailto:${to}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;f.classList.add('sent')}));
$$('form[data-news]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const i=$('input',f);if(!i.value.includes('@')){i.focus();return}location.href=`mailto:${f.dataset.news}?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent('Please add '+i.value+' to the RankEmpire newsletter.')}`;i.value='';i.placeholder='Thanks, check your email app'}));
})();
