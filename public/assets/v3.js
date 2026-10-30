(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* opening: first visit per session */
const pre=$('.pre');
if(pre){const seen=document.documentElement.classList.contains('seen');
  if(seen||RM){pre.remove()}else{const n=$('.pc b',pre),t0=performance.now();const tick=t=>{const k=Math.min(1,(t-t0)/1300);if(n)n.textContent=Math.round(k*k*(3-2*k)*100);if(k<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);setTimeout(()=>pre.remove(),2700)}}

/* short accents become script */
$$('.ph h1 .acc').forEach(a=>{const t=a.textContent.trim();if(t.length<=16&&!/[A-Z]{2}|\d/.test(t))a.classList.add('scr')});

/* header: hide on scroll down, show on up */
const hdr=$('.hdr');let ly=scrollY;
addEventListener('scroll',()=>{const y=scrollY;if(hdr&&!hdr.querySelector('.mi.op')&&!document.body.classList.contains('mopen'))hdr.classList.toggle('hide',y>ly&&y>420);ly=y},{passive:true});

/* generic in-view */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2});
$$('[data-io]').forEach(el=>io.observe(el));

/* hero grain */
const cv=$('.nh canvas.grain')||$('.yh canvas.grain');
if(cv&&!RM){const x=cv.getContext('2d');let w,h,vis=true,last=0;const sz=()=>{w=cv.width=Math.ceil(cv.offsetWidth/3);h=cv.height=Math.ceil(cv.offsetHeight/3)};sz();addEventListener('resize',sz);
  new IntersectionObserver(es=>{vis=es[0].isIntersecting}).observe(cv);
  const d=x.createImageData(w,h);
  const draw=t=>{requestAnimationFrame(draw);if(!vis||t-last<80)return;last=t;let id=d;if(id.width!==w||id.height!==h)id=x.createImageData(w,h);const a=id.data;for(let i=0;i<a.length;i+=4){const v=Math.random()*255|0;a[i]=a[i+1]=a[i+2]=v;a[i+3]=255}x.putImageData(id,0,0)};requestAnimationFrame(draw)}
/* hero parallax on the giant word */
const word=$('.nh .word'),bgi=$('.nh .bgi img');
if(word&&!RM)addEventListener('scroll',()=>{const y=scrollY;if(y>innerHeight*1.2)return;word.style.transform=`translateY(${y*.18}px)`;if(bgi)bgi.style.setProperty('--sy',y*.3+'px')},{passive:true});

/* dot grid shimmer */
$$('[data-dots]').forEach(g=>{const d=$$('i',g);if(RM)return;let n=26;setInterval(()=>{if(g.getBoundingClientRect().top>innerHeight)return;n=n>=33?18:n+1;d.forEach((x,i)=>x.classList.toggle('on',i<n))},420)});

/* point-of-view words light up with scroll */
$$('[data-words]').forEach(el=>{const walk=n=>[...n.childNodes].forEach(ch=>{if(ch.nodeType===3){const f=document.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w))f.appendChild(document.createTextNode(w));else{const s=document.createElement('span');s.className='w';s.textContent=w;f.appendChild(s)}});ch.replaceWith(f)}else walk(ch)});walk(el);
  const ws=$$('.w',el);const up=()=>{const r=el.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(r.height+innerHeight*.35)));const k=Math.round(p*ws.length*1.15);ws.forEach((w,i)=>w.classList.toggle('lit',i<k))};
  if(RM){ws.forEach(w=>w.classList.add('lit'));return}addEventListener('scroll',up,{passive:true});up()});

/* discipline tabs */
$$('[data-ptabs]').forEach(w=>{const bs=$$('.tl button',w),ps=$$('.tp',w),im=$$('.pim img',w),cap=$('[data-cap]',w);
  bs.forEach((b,i)=>b.addEventListener('click',()=>{bs.forEach((x,k)=>{x.classList.toggle('on',k===i);x.setAttribute('aria-selected',k===i)});ps.forEach((x,k)=>x.classList.toggle('on',k===i));im.forEach((x,k)=>x.classList.toggle('on',k===i));if(cap&&window.POVCAPS)cap.textContent=POVCAPS[i]}))});

/* vertical panels */
$$('.gv .pan').forEach(pan=>{const ps=$$('.p',pan);const set=p=>ps.forEach(x=>{const on=x===p&&!x.classList.contains('on');x.classList.toggle('on',x===p?on:false);x.setAttribute('aria-expanded',x.classList.contains('on'));$$('a',x).forEach(a=>a.tabIndex=x.classList.contains('on')?0:-1)});
  ps.forEach(p=>{p.addEventListener('click',e=>{if(e.target.closest('a'))return;set(p)});p.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target===p){e.preventDefault();set(p)}});
    p.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&innerWidth>1024&&!p.classList.contains('on'))set(p)})})});

/* spartan switch drives the existing pricing toggle */
$$('.spx').forEach(s=>{const sw=$('.sw-b',s),m=$('.toggle [data-v=m]',s),y=$('.toggle [data-v=y]',s);if(!sw)return;sw.addEventListener('click',()=>{const on=sw.getAttribute('aria-pressed')!=='true';sw.setAttribute('aria-pressed',on);(on?y:m).click()})});

/* footer clock (Eastern Time) */
const clk=$('[data-clock]');
if(clk){const f=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});const t=()=>{clk.textContent=f.format(new Date())};t();setInterval(t,1000)}

/* about: movable light + backdrop */
const mv=$('.mv');
if(mv){mv.addEventListener('pointermove',e=>{const r=mv.getBoundingClientRect();mv.style.setProperty('--lx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');mv.style.setProperty('--ly',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')});
  const bs=$$('.bd button',mv);bs.forEach(b=>b.addEventListener('click',()=>{mv.dataset.bd=b.dataset.bd;bs.forEach(x=>x.setAttribute('aria-pressed',x===b))}));
  mv.addEventListener('click',e=>{if(e.target.closest('a,button'))return;const order=['l','o','d'];const n=order[(order.indexOf(mv.dataset.bd)+1)%3];const b=bs.find(x=>x.dataset.bd===n);if(b)b.click()})}

/* ===== Neiden-style motion ===== */
const nh=$('.nh');
/* tagline: split into letters for the pen sweep */
const scp=$('.nh .script');
if(scp&&!RM){let k=0;scp.innerHTML=[...scp.textContent].map(c=>c===' '?'<span class="sp"> </span>':`<span class="ch" style="--i:${k++}">${c}</span>`).join('')}
/* extrusion + spiral follow the mouse */
if(nh&&!RM&&matchMedia('(hover:hover)').matches){let raf=0,mx=0,my=0;nh.addEventListener('pointermove',e=>{const r=nh.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5;if(!raf)raf=requestAnimationFrame(()=>{raf=0;nh.style.setProperty('--ex',(-mx*.07).toFixed(3)+'em');nh.style.setProperty('--ey',(-my*.06+.015).toFixed(3)+'em');nh.style.setProperty('--bx',(mx*-40).toFixed(1)+'px');nh.style.setProperty('--by',(my*-30).toFixed(1)+'px')})});
  nh.addEventListener('pointerleave',()=>{nh.style.setProperty('--ex','-.022em');nh.style.setProperty('--ey','.022em');nh.style.setProperty('--bx','0px');nh.style.setProperty('--by','0px')})}
/* custom cursor */
if(!RM&&matchMedia('(hover:hover) and (pointer:fine)').matches){const d=document.createElement('div'),r=document.createElement('div');d.className='cur';r.className='cur-r';document.body.append(d,r);
  let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y,on=false;addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;if(!on){on=true;rx=x;ry=y}d.style.transform=`translate(${x}px,${y}px)`;r.classList.toggle('big',!!e.target.closest('a,button,[role=button],summary,input,select,textarea,label'))},{passive:true});
  addEventListener('pointerdown',()=>r.classList.add('dn'));addEventListener('pointerup',()=>r.classList.remove('dn'));
  document.addEventListener('pointerleave',()=>{d.style.opacity=r.style.opacity=0});document.addEventListener('pointerenter',()=>{d.style.opacity=r.style.opacity=1});
  const loop=()=>{rx+=(x-rx)*.16;ry+=(y-ry)*.16;r.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(loop)};loop()}
/* section headings fill in word by word on scroll */
if(!RM){const hs=$$('main h2').filter(h=>!h.closest('.nh,.ot,.pv-top,.fd,[data-words],.gv .p,.spx .pm,.faqs,.af')&&h.textContent.trim().split(/\s+/).length>=3);
  hs.forEach(h=>{const walk=n=>[...n.childNodes].forEach(ch=>{if(ch.nodeType===3){const f=document.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w))f.appendChild(document.createTextNode(w));else{const s=document.createElement('span');s.className='wfw';s.textContent=w;f.appendChild(s)}});ch.replaceWith(f)}else if(ch.nodeType===1&&!ch.matches('.ip,svg'))walk(ch)});walk(h);h.classList.add('wf')});
  const up=()=>hs.forEach(h=>{const r=h.getBoundingClientRect();if(r.top>innerHeight||r.bottom<0)return;const ws=$$('.wfw',h);const p=Math.min(1,Math.max(0,(innerHeight*.92-r.top)/(innerHeight*.45)));const k=Math.ceil(p*ws.length);ws.forEach((w,i)=>w.classList.toggle('lit',i<k))});
  addEventListener('scroll',up,{passive:true});addEventListener('resize',up);up()}
/* images slide and unblur in */
if(!RM){const ims=$$('main img').filter(i=>!i.closest('.nh,.pov,.mq,.lgm,.av,.hdr,.af,.gv,.trust,.spx,.pre,.tru,.logos,.mv')&&!i.closest('[data-io]')&&i.getBoundingClientRect().top>innerHeight*.9);
  const iob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');iob.unobserve(e.target)}}),{rootMargin:'0px 0px -6% 0px',threshold:.05});
  ims.forEach((im,i)=>{const t=im.closest('figure,.t,.c,.pim,.ph1,.phimg')||im;if(t.classList.contains('imr'))return;const r=t.getBoundingClientRect();t.classList.add('imr',r.left+r.width/2<innerWidth*.4?'l':r.left+r.width/2>innerWidth*.6?'r':'u');iob.observe(t)})}

/* point of view: autoplay disciplines, index + KPI card */
$$('[data-ptabs]').forEach(w=>{const bs=$$('.tl button',w),kp=$$('.kp',w),ix=$('[data-ix]',w);let cur=0,t=0,vis=false;
  const fc=$$('.fch',w),pim=$('.pim',w),pm=$$('.pim .pm',w);const sync=i=>{cur=i;kp.forEach((k,j)=>k.classList.toggle('on',j===i));pm.forEach((k,j)=>{k.classList.toggle('on',j===i);const v=k.querySelector('video');if(v){if(j===i){v.play&&v.play().catch(()=>{})}else v.pause()}});fc.forEach((k,j)=>k.classList.toggle('on',j===i));if(ix)ix.textContent='0'+(i+1)};
  bs.forEach((b,i)=>b.addEventListener('click',()=>{sync(i);const bar=b.querySelector('.bar');if(bar){bar.style.animation='none';bar.offsetWidth;bar.style.animation=''}}));
  new IntersectionObserver(es=>{const was=vis;vis=es[0].isIntersecting;if(vis&&!was&&bs[cur])bs[cur].click()}).observe(w);
  if(pim&&!RM&&matchMedia('(hover:hover)').matches){pim.addEventListener('pointermove',e=>{const r=pim.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;pim.style.setProperty('--tx',(x*8).toFixed(2)+'deg');pim.style.setProperty('--ty',(-y*8).toFixed(2)+'deg')});pim.addEventListener('pointerleave',()=>{pim.style.setProperty('--tx','0deg');pim.style.setProperty('--ty','0deg')})}
  if(!RM){const r0=w.getBoundingClientRect();if(r0.top>innerHeight*.85){w.classList.add('arm');const rio=new IntersectionObserver(es=>{if(es[0].isIntersecting){w.classList.add('lv');rio.disconnect()}},{threshold:0,rootMargin:'0px 0px -15% 0px'});rio.observe(w);setTimeout(()=>{},0)}}
  w.addEventListener('focusin',()=>w.classList.add('hold'));w.addEventListener('focusout',()=>w.classList.remove('hold'));
  if(!RM)bs.forEach(b=>{const bar=b.querySelector('.bar');if(bar)bar.addEventListener('animationend',()=>{if(b.classList.contains('on')&&vis)bs[(cur+1)%bs.length].click()})});
});
})();
/* ===== v6: rank grid ===== */
(()=>{const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const g=$('#rg-grid');if(g&&window.RGDATA){const cells=$$('i',g),rng=$('#rg-range'),kws=$$('.rg-kw button'),tip=$('#rg-tip');let k=0;
  const col=v=>v<=3?'#3ec36a':v<=6?'#b9e35a':v<=10?'#f4c542':'#ec4e3b';
  const draw=()=>{const d=RGDATA[k],t=+rng.value/100;let top=0,sum=0;cells.forEach((c,i)=>{const r=i/11|0,cc=i%11;const b=d.before[r][cc],a=d.after[r][cc];const v=Math.round(b+(a-b)*t);c.textContent=v>20?'20+':v;c.style.setProperty('--bgc',col(v));c.style.setProperty('--s',v<=3?1.08:1);c.dataset.v=v;if(v<=3)top++;sum+=v});
    $('#rg-top3').textContent=top;$('#rg-avg').textContent=(sum/121).toFixed(1);$('#rg-win').textContent=Math.round(top/121*100)+'%'};
  kws.forEach((b,i)=>b.addEventListener('click',()=>{k=i;kws.forEach((x,j)=>x.classList.toggle('on',j===i));draw()}));
  rng.addEventListener('input',draw);
  cells.forEach((c,i)=>{c.addEventListener('pointerenter',()=>{tip.hidden=false;tip.textContent='Position #'+c.dataset.v+' here';const r=c.getBoundingClientRect(),m=g.parentElement.getBoundingClientRect();tip.style.left=(r.left-m.left+r.width/2)+'px';tip.style.top=(r.top-m.top)+'px'});c.addEventListener('pointerleave',()=>tip.hidden=true)});
  rng.value=0;draw();
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){io.disconnect();let v=0;const st=performance.now();const an=t=>{v=Math.min(100,(t-st)/1800*100);rng.value=v;draw();if(v<100)requestAnimationFrame(an)};setTimeout(()=>requestAnimationFrame(an),500)}},{threshold:.35});io.observe(g)}
/* AI typing */
const ty=$('#ai-type');if(ty){const qs=['best dumpster rental near me','which SEO agency should I hire?','top rated dentist open saturday','book a plumber for tomorrow'];let qi=0,ci=0,del=false;const step=()=>{const q=qs[qi];ty.textContent=q.slice(0,ci);if(!del&&ci<q.length){ci++;setTimeout(step,55)}else if(!del){del=true;setTimeout(step,1600)}else if(ci>0){ci--;setTimeout(step,22)}else{del=false;qi=(qi+1)%qs.length;setTimeout(step,300)}};step()}
/* founder light + backdrop */
const fd=$('.fd');if(fd){fd.addEventListener('pointerenter',()=>document.body.classList.add('in-fd'));fd.addEventListener('pointerleave',()=>document.body.classList.remove('in-fd'));fd.addEventListener('pointermove',e=>{const r=fd.getBoundingClientRect();const px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;fd.style.setProperty('--lx',(px*100).toFixed(1)+'%');fd.style.setProperty('--ly',(py*100).toFixed(1)+'%');const dx=(0.5-px);fd.style.setProperty('--sx',(dx*170).toFixed(0)+'px');fd.style.setProperty('--sk',(dx*-22).toFixed(1)+'deg')});
  const bs=$$('.fd-bd button',fd);bs.forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();fd.dataset.bd=b.dataset.bd;bs.forEach(x=>x.setAttribute('aria-pressed',x===b))}));
  fd.addEventListener('click',e=>{if(e.target.closest('a,button'))return;const o=['l','o','d'];const n=o[(o.indexOf(fd.dataset.bd)+1)%3];const b=bs.find(x=>x.dataset.bd===n);if(b)b.click()})}
})();

/* ===== v6: point of view loop scroll sync + founder clock ===== */
(()=>{const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rail=$('.pv-rail');if(rail){const li=$$('li',rail),ms=$$('.pv-m'),n=$('#pv-n'),ring=$('.pv-ring');let cur=-1;
  const set=i=>{if(i===cur)return;cur=i;li.forEach((x,k)=>x.classList.toggle('on',k===i));ms.forEach((x,k)=>x.classList.toggle('on',k===i));if(n)n.textContent='0'+(i+1);if(ring)ring.style.setProperty('--p',(i+1)/li.length)};
  const up=()=>{const mid=innerHeight*.5;let best=0,bd=1e9;li.forEach((x,k)=>{const r=x.getBoundingClientRect();const d=Math.abs(r.top+r.height/2-mid);if(d<bd){bd=d;best=k}});set(best)};
  addEventListener('scroll',up,{passive:true});addEventListener('resize',up);up()}
const c2=$('[data-clock2]');if(c2){const f=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hour:'2-digit',minute:'2-digit',hour12:false});const t=()=>c2.textContent=f.format(new Date());t();setInterval(t,30000)}
})();
/* ===== v6: FAQ chat + robo ===== */
(()=>{const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const L=$('#fxl');if(L&&window.FXDATA){const FAQ=FXDATA,C=$('#fxchat'),R=$('#fxr'),RM=matchMedia('(prefers-reduced-motion: reduce)').matches;let cur=-1,tok=0,cat='all';
L.innerHTML=FAQ.map((f,i)=>`<li data-c="${f.c}"><button type="button" data-i="${i}"><span class="n">${String(i+1).padStart(2,'0')}</span><span>${f.q}</span><i>&rarr;</i></button></li>`).join('');
const vis=()=>[...L.children].filter(li=>!li.classList.contains('hide')).map(li=>+li.firstElementChild.dataset.i);const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function show(i,scroll){if(i===cur)return;cur=i;const t=++tok;$$('#fxl button').forEach(b=>b.classList.toggle('on',+b.dataset.i===i));
 $('#fxc').innerHTML=`<em>${String(i+1).padStart(2,'0')}</em> / ${FAQ.length}`;if(scroll){const b=L.querySelector(`[data-i="${i}"]`);L.scrollTo({top:b.offsetTop-L.offsetTop-60,behavior:'smooth'})}
 C.innerHTML=`<div class="fx-m u">${FAQ[i].q}</div>`;R.innerHTML='';
 const m=document.createElement('div');m.className='fx-m b';m.innerHTML='<span class="who">RankEmpire team</span><span class="fx-dots"><i></i><i></i><i></i></span>';
 if(!RM){await wait(260);if(t!==tok)return}C.appendChild(m);if(!RM){await wait(650);if(t!==tok)return}
 const w=FAQ[i].a.split(' '),tx=document.createElement('span');m.lastChild.replaceWith(tx);
 if(RM)tx.textContent=FAQ[i].a;else for(let k=0;k<w.length;k++){tx.textContent=w.slice(0,k+1).join(' ');await wait(16);if(t!==tok)return}
 const tg=document.createElement('div');tg.className='tg';tg.innerHTML=FAQ[i].t.map(x=>`<span>${x}</span>`).join('');m.appendChild(tg);requestAnimationFrame(()=>tg.classList.add('on'));
 const rel=FAQ.map((_,k)=>k).filter(k=>k!==i&&FAQ[k].c===FAQ[i].c).slice(0,2);if(rel.length<2)rel.push((i+1)%FAQ.length);
 R.innerHTML=rel.map((k,n)=>`<button type="button" data-i="${k}" style="animation-delay:${n*.08}s">${FAQ[k].q}</button>`).join('')}
L.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;show(+b.dataset.i);if(innerWidth<980){const y=$('.fx-top').getBoundingClientRect().top+scrollY-80;scrollTo({top:y,behavior:'smooth'})}});
R.addEventListener('click',e=>{const b=e.target.closest('button');if(b)show(+b.dataset.i,1)});
const step=d=>{const v=vis();if(!v.length)return;const p=v.indexOf(cur);show(v[(p+d+v.length)%v.length],1)};$('#fxp').onclick=()=>step(-1);$('#fxn').onclick=()=>step(1);
function filt(){const q=$('#fxs').value.trim().toLowerCase();[...L.children].forEach((li,i)=>li.classList.toggle('hide',!((cat==='all'||FAQ[i].c===cat)&&(!q||(FAQ[i].q+' '+FAQ[i].a).toLowerCase().includes(q)))));const v=vis();$('#fxe').classList.toggle('on',!v.length);if(v.length&&!v.includes(cur))show(v[0])}
$('#fxt').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#fxt button').forEach(x=>x.classList.toggle('on',x===b));cat=b.dataset.c;filt()});$('#fxs').addEventListener('input',filt);
$('#fxa').addEventListener('submit',e=>{e.preventDefault();const q=$('#fxq').value.trim();if(!q){$('#fxq').focus();return}tok++;cur=-1;$$('#fxl button').forEach(b=>b.classList.remove('on'));R.innerHTML='';C.innerHTML=`<div class="fx-m u">${q.replace(/[<>&]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]))}</div><div class="fx-m b"><span class="who">RankEmpire team</span>Good question. Opening your email so it reaches us directly, we reply within a day.</div>`;setTimeout(()=>{location.href='mailto:'+FXMAIL+'?subject='+encodeURIComponent('Question from the website')+'&body='+encodeURIComponent(q)},700);$('#fxq').value=''});
let started=0;new IntersectionObserver((es,o)=>{if(es[0].isIntersecting&&!started){started=1;show(0);o.disconnect()}},{threshold:.25}).observe($('#fx'))}
const ro=$('#robo'),rb=$('#robot');if(ro&&rb){const io=new IntersectionObserver(e=>{if(e[0].isIntersecting){ro.classList.add('in');io.disconnect()}},{threshold:.2});io.observe(ro);let rx=0,ry=0,t=false;ro.addEventListener('pointermove',e=>{const r=ro.getBoundingClientRect();rx=(e.clientX-r.left)/r.width-.5;ry=(e.clientY-r.top)/r.height-.5;if(!t){t=true;requestAnimationFrame(()=>{t=false;rb.style.transform=`translate(${rx*24}px,${ry*20}px) rotate(${rx*3}deg)`})}});ro.addEventListener('pointerleave',()=>{rb.style.transform=''})}
})();

/* ===== v7: counters on facts ===== */
(()=>{const $$=(s,c=document)=>[...c.querySelectorAll(s)];const els=$$('.yfacts b[data-count]');if(!els.length)return;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const b=e.target,raw=b.dataset.raw,n=parseFloat(raw);if(isNaN(n)){return}const t0=performance.now(),d=1400;const tick=t=>{const k=Math.min(1,(t-t0)/d),v=n*(1-Math.pow(1-k,3));b.textContent=(Number.isInteger(n)?Math.round(v):v.toFixed(1))+(raw.replace(/[\d.]/g,''));if(k<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}),{threshold:.5});els.forEach(e=>io.observe(e))})();
/* ===== v7: footer ===== */
(()=>{const f=document.getElementById('foot');if(!f)return;const w=document.getElementById('fw'),st=document.getElementById('fstart');
w.innerHTML=[...w.textContent].map(c=>c===' '?' ':'<span>'+c+'</span>').join('');
function fit(){w.style.fontSize='100px';const cs=getComputedStyle(st),av=st.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight)-st.querySelector('.arr').getBoundingClientRect().width-30;w.style.fontSize=Math.floor(100*av/w.scrollWidth*.98)+'px'}
fit();document.fonts&&document.fonts.ready.then(fit);addEventListener('resize',fit);
let mx=0,my=0,t=false;function paint(){t=false;const r=f.getBoundingClientRect();f.style.setProperty('--mx',mx-r.left+'px');f.style.setProperty('--my',my-r.top+'px')}
f.addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;if(!t){t=true;requestAnimationFrame(paint)}});
document.getElementById('ftop').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const nl=document.getElementById('nl');if(nl)nl.addEventListener('submit',e=>{e.preventDefault();const v=document.getElementById('nl-e').value.trim();if(!v)return;location.href='mailto:'+nl.dataset.mail+'?subject='+encodeURIComponent('Newsletter signup')+'&body='+encodeURIComponent('Please subscribe '+v);nl.querySelector('button').textContent='Thanks!'});
})();
/* ===== v7: make sure motion loops actually play ===== */
(()=>{const vs=[...document.querySelectorAll('video[autoplay]')];if(!vs.length)return;
const kick=v=>{v.muted=true;v.playsInline=true;const p=v.play();if(p&&p.catch)p.catch(()=>{})};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)kick(e.target);else e.target.pause()}),{rootMargin:'200px'});
vs.forEach(v=>{v.setAttribute('preload','auto');io.observe(v)});
addEventListener('pointerdown',()=>vs.forEach(kick),{once:true});addEventListener('touchstart',()=>vs.forEach(kick),{once:true});
})();
/* ===== v8: timeline draw, checklist tick, ring progress ===== */
(()=>{const $$=(s,c=document)=>[...c.querySelectorAll(s)];
$$('[data-tl]').forEach(tl=>{const li=$$('li',tl);const up=()=>{const r=tl.getBoundingClientRect();const p=Math.min(100,Math.max(0,(innerHeight*.75-r.top)/r.height*100));tl.style.setProperty('--tl',p);li.forEach(x=>{const rr=x.getBoundingClientRect();x.classList.toggle('lit',rr.top<innerHeight*.75)})};addEventListener('scroll',up,{passive:true});up()});
$$('[data-fit]').forEach(ul=>{const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){ul.classList.add('on');const p=ul.closest('.xfit-p');if(p)p.classList.add('on');io.disconnect()}},{threshold:.3});io.observe(ul)});
$$('.yf').forEach(c=>{const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){c.classList.add('in');io.disconnect()}},{threshold:.4});io.observe(c)});
})();

/* robo fallback: reveal on scroll/timeout regardless of observer */
(()=>{const ro=document.querySelector('#robo');if(!ro)return;const on=()=>{const r=ro.getBoundingClientRect();if(r.top<innerHeight*.9&&r.bottom>0){ro.classList.add('in');removeEventListener('scroll',on)}};addEventListener('scroll',on,{passive:true});on();setTimeout(()=>{if(!ro.classList.contains('in'))on()},1500);document.querySelector('#robot')?.addEventListener('load',on)})();

document.querySelectorAll('[data-more]').forEach(b=>b.addEventListener('click',()=>{const m=b.previousElementSibling;const o=m.hidden;m.hidden=!o;b.innerHTML=o?'Show less <i>&minus;</i>':'Read more <i>+</i>'}));

/* mobile swipe tracks: progress bar + hint (<=760px only; see site.css) */
(()=>{
const MQ=matchMedia('(max-width:760px)');
const SC='.mr-g,.ai-g,.yf-g,.xm-g,.xp-g,.xl-g,.xi-g,.ih-r,.tmc-g,.sb .grid,.trust .tcol,.srf-g';
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const init=()=>{if(!MQ.matches)return;$$(SC).forEach(sc=>{if(sc.dataset.sw)return;const n=[...sc.children].filter(c=>c.tagName!=='SCRIPT').length;if(n<2)return;sc.dataset.sw='1';
  const bar=document.createElement('div');bar.className='m-bar';bar.setAttribute('aria-hidden','true');bar.appendChild(document.createElement('i'));sc.after(bar);
  const hint=document.createElement('div');hint.className='m-hint';hint.setAttribute('aria-hidden','true');hint.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M14 6l6 6-6 6"/></svg><span>Swipe · '+n+' cards</span>';bar.after(hint);
  const up=()=>{const max=sc.scrollWidth-sc.clientWidth;if(max<=2){bar.style.display='none';hint.style.display='none';return}bar.style.display='';const w=Math.max(.12,sc.clientWidth/sc.scrollWidth);const th=bar.firstChild;th.style.width=(w*100).toFixed(2)+'%';th.style.transform='translateX('+((sc.scrollLeft/max)*(1-w)/w*100).toFixed(2)+'%)'};
  up();sc.addEventListener('scroll',()=>requestAnimationFrame(up),{passive:true});addEventListener('resize',up)})};
init();MQ.addEventListener?MQ.addEventListener('change',init):MQ.addListener(init);
})();
