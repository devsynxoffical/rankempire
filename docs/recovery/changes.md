# Recovery change log

Every change: date, URL, reason, before, validation, after (filled in when measured).

| Date | URL | Change | Reason | Before | Validation | After |
|---|---|---|---|---|---|---|
| 2026-11-19 | /contact-us/ | After submit, show a confirmation box with "Send on WhatsApp" (pre-filled with the form details), "Book a free call" and the email address | The form only opens the visitor's email app (mailto); without one, the lead is lost | 8 clicks in 23 days; GA4 not accessible; leads unknown | Playwright submit test on mobile and desktop (box shown, WhatsApp link contains the details); owner confirms WhatsApp leads arrive; GA4 whatsapp_click on /contact-us/ once access is given | pending |
| 2026-11-19 | Scheduled sessions | Stop Google Indexing API for normal pages; no new city pages; no title or description change on a page within 21 days of its last change | Indexing API is for job and livestream pages only; repeated edits made results unmeasurable | 8 pages submitted 4+ times still not indexed | Session instructions | n/a |
