import Script from 'next/script';
import site from '@/content/site.json';

// Google Analytics 4 plus lead-action tracking.
// GA4 loads only when content/site.json has a "ga4" Measurement ID (G-XXXXXXX).
// Lead actions are sent as GA4 events (mark them as key events in GA4 Admin):
//   generate_lead (audit/contact form submit), whatsapp_click, book_call_click, phone_click, email_click.
// The same clicks are also sent to the Meta Pixel as standard Lead / Contact / Schedule events.
const TRACK = `(function(){
function ev(name,params){try{if(window.gtag)window.gtag('event',name,params||{});}catch(e){}}
function fb(name){try{if(window.fbq)window.fbq('track',name);}catch(e){}}
document.addEventListener('click',function(e){
  var a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a)return;
  var h=a.getAttribute('href')||'';var p={page_path:location.pathname,link_url:h};
  if(h.indexOf('wa.me/')>-1){ev('whatsapp_click',p);fb('Contact');}
  else if(h.indexOf('/book-a-call')===0||h.indexOf('calendar.app.google')>-1||h.indexOf('calendar.google.com')>-1){ev('book_call_click',p);fb('Schedule');}
  else if(h.indexOf('tel:')===0){ev('phone_click',p);fb('Contact');}
  else if(h.indexOf('mailto:')===0){ev('email_click',p);fb('Contact');}
},true);
document.addEventListener('submit',function(e){
  var f=e.target;if(!f||f.tagName!=='FORM')return;
  var kind=f.classList.contains('audit')?'hero_audit':(f.classList.contains('ycf')?'contact_form':(f.id||f.className||'form'));
  ev('generate_lead',{page_path:location.pathname,form:String(kind).slice(0,40)});fb('Lead');
},true);
})();`;

export default function Analytics() {
  const id = (site as { ga4?: string }).ga4 || '';
  return (
    <>
      {id && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${id}');` }} />
        </>
      )}
      <Script id="lead-events" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: TRACK }} />
    </>
  );
}
