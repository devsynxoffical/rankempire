(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const cl=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const desk=()=>innerWidth>1024;

/* smooth scroll */
let lenis=null;
if(window.Lenis&&!RM){try{lenis=new Lenis({lerp:.12,smoothWheel:true});window.lenis=lenis;const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}catch(e){}}
const goTo=t=>{if(!t)return;lenis?lenis.scrollTo(t,{offset:-90}):t.scrollIntoView({behavior:'smooth'})};
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length<2)return;const t=$(id);if(!t)return;e.preventDefault();goTo(t);history.replaceState(null,'',id)}));

/* header dropdowns */
const hdr=$('.hdr');const items=$$('.mi');let closeT=null;
const closeAll=ex=>items.forEach(m=>{if(m!==ex){m.classList.remove('op');const b=$('button',m);b&&b.setAttribute('aria-expanded','false')}});
items.forEach(m=>{const b=$('button',m);if(!b)return;
  const open=()=>{clearTimeout(closeT);closeAll(m);m.classList.add('op');b.setAttribute('aria-expanded','true')};
  const close=()=>{closeT=setTimeout(()=>{m.classList.remove('op');b.setAttribute('aria-expanded','false')},140)};
  m.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')open()});m.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')close()});
  b.addEventListener('click',()=>{m.classList.contains('op')?(m.classList.remove('op'),b.setAttribute('aria-expanded','false')):open()});
  m.addEventListener('focusout',e=>{if(!m.contains(e.relatedTarget))close()})});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeAll();if(document.body.classList.contains('mopen'))toggleMob(false)}});
document.addEventListener('click',e=>{if(!e.target.closest('.mi'))closeAll()});
const burger=$('.burger'),mob=$('.mob');
function toggleMob(o){document.body.classList.toggle('mopen',o);mob.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);if(lenis)o?lenis.stop():lenis.start();document.documentElement.style.overflow=o?'hidden':''}
if(burger)burger.addEventListener('click',()=>toggleMob(!document.body.classList.contains('mopen')));

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.05});
$$('[data-r],.chart,[data-vis]').forEach(el=>io.observe(el));
$$('[data-stagger]').forEach(g=>[...g.children].forEach((c,i)=>{c.setAttribute('data-r','');c.style.setProperty('--d',(i%8*.06)+'s');io.observe(c)}));
$$('[data-split]').forEach(el=>{let i=0;const walk=n=>[...n.childNodes].forEach(ch=>{if(ch.nodeType===3){const f=document.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w))f.appendChild(document.createTextNode(w));else{const s=document.createElement('span');s.className='w';s.style.setProperty('--d',(i++*.045)+'s');s.textContent=w;f.appendChild(s)}});ch.replaceWith(f)}else if(ch.nodeType===1)walk(ch)});walk(el);el.classList.add('split-w');requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('in')))});
$$('.chart .ln').forEach(p=>{try{p.style.setProperty('--len',Math.ceil(p.getTotalLength()))}catch(e){}});

/* counters */
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,end=parseFloat(el.dataset.count),dec=(el.dataset.count.split('.')[1]||'').length,pre=el.dataset.pre||'',suf=el.dataset.suf||'';if(RM){el.textContent=pre+end.toLocaleString('en-US',{minimumFractionDigits:dec})+suf;return}const t0=performance.now(),D=1600;const st=t=>{const k=cl((t-t0)/D),v=end*(1-Math.pow(1-k,3));el.textContent=pre+v.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)}),{threshold:.5});
$$('[data-count]').forEach(el=>cio.observe(el));

/* map rank grid */
$$('.grid9').forEach(g=>{const cells=$$('i',g);const paint=()=>cells.forEach((c,i)=>{const x=i%7-3,y=Math.floor(i/7)-3,d=Math.hypot(x,y);const r=Math.max(1,Math.round(1+d*1.1+Math.random()*1.6));c.textContent=r>9?'9+':r;c.className=r<=3?'t1':r<=5?'t2':r<=7?'t3':'t4'});paint();if(!RM)setInterval(()=>{if(g.getBoundingClientRect().top<innerHeight)paint()},3200)});

/* tabs */
$$('[data-tabs]').forEach(w=>{const bs=$$('.tabs button',w),ps=$$('.tpanel',w);bs.forEach((b,i)=>b.addEventListener('click',()=>{bs.forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b)});ps.forEach((p,k)=>p.classList.toggle('on',k===i))}))});

/* pricing toggle */
$$('[data-price]').forEach(w=>{const bs=$$('.toggle button',w);bs.forEach(b=>b.addEventListener('click',()=>{const y=b.dataset.v==='y';bs.forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});$$('[data-m]',w).forEach(el=>el.textContent=y?el.dataset.y:el.dataset.m);$$('.bill',w).forEach(el=>el.textContent=y?el.dataset.yb:el.dataset.mb)}))});

/* faq */
$$('.faqs').forEach(w=>{const qs=$$('.fq',w);qs.forEach(q=>$('button',q).addEventListener('click',()=>{const o=!q.classList.contains('on');qs.forEach(x=>{x.classList.remove('on');$('button',x).setAttribute('aria-expanded','false')});if(o){q.classList.add('on');$('button',q).setAttribute('aria-expanded','true')}}))});

/* toc highlight */
const tl=$$('.toc a[href^="#"]');if(tl.length){const secs=tl.map(a=>$(a.getAttribute('href'))).filter(Boolean);const tio=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const id='#'+e.target.id;tl.forEach(a=>a.classList.toggle('on',a.getAttribute('href')===id))}})},{rootMargin:'-30% 0px -60% 0px'});secs.forEach(s=>tio.observe(s))}

/* filter lists */
$$('[data-filter]').forEach(inp=>{const sc=$(inp.dataset.filter);const em=$('.empty',sc.parentElement);inp.addEventListener('input',()=>{const q=inp.value.trim().toLowerCase();let n=0;$$('[data-k]',sc).forEach(el=>{const s=!q||el.dataset.k.includes(q);el.style.display=s?'':'none';if(s)n++});$$('[data-grp]',sc).forEach(g=>{g.style.display=$$('[data-k]',g).some(x=>x.style.display!=='none')?'':'none'});if(em)em.style.display=n?'none':'block'})});

/* audit forms -> contact with website prefilled */
$$('form.audit').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const v=$('input',f).value.trim();if(!v){$('input',f).focus();return}location.href=f.getAttribute('action')+'?site='+encodeURIComponent(v)}));
const qs=new URLSearchParams(location.search);const site=qs.get('site');const sf=$('#f-site');if(site&&sf){sf.value=site;const m=$('#f-msg');if(m&&!m.value)m.value='Please send me a free SEO audit for '+site+'.'}
$$('form[data-mail]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);let body='';for(const [k,v] of d.entries())if(v)body+=`${k}: ${v}\n`;location.href=`mailto:${f.dataset.mail}?subject=${encodeURIComponent(f.dataset.subject||'Website enquiry')}&body=${encodeURIComponent(body)}`;f.classList.add('sent')}));
$$('form[data-news]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const i=$('input',f);if(!i.value.includes('@')){i.focus();return}location.href=`mailto:${f.dataset.news}?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent('Please add '+i.value+' to the RankEmpire newsletter.')}`;i.value='';i.placeholder='Thanks, check your email app'}));

/* scroll scenes: header shadow, trust section, footer word */
const trust=$('.trust'),cols=$$('.trust .tcol'),giant=$('.giant');
function frame(){const y=scrollY,vh=innerHeight;if(hdr)hdr.classList.toggle('sc',y>8);
  if(trust&&desk()&&!RM){const r=trust.getBoundingClientRect();if(r.bottom>0&&r.top<vh){const p=cl(-r.top/(trust.offsetHeight-vh));cols.forEach((c,i)=>{const H=c.offsetHeight;const from=vh*(i?1.35:1.05),to=-H+vh*(i?.05:.15);c.style.transform=`translate3d(0,${(from+(to-from)*cl(p*(i?1.1:1))).toFixed(1)}px,0)`})}}
  if(giant){const r=giant.getBoundingClientRect();if(r.top<vh){const p=cl((vh-r.top)/(r.height+vh*.3));giant.style.setProperty('--gy',((1-p)*40).toFixed(1)+'%')}}}
let tk=false;const req=()=>{if(!tk){tk=true;requestAnimationFrame(()=>{tk=false;frame()})}};
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);if(lenis)lenis.on('scroll',req);frame();
})();
