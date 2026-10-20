# Industry landing pages: slug, display name, business noun, image group, searches, challenges, angle
I = []
def ind(slug, name, noun, grp, kws, pains, angle, cat):
    I.append(dict(slug=slug, name=name, noun=noun, grp=grp, kws=kws, pains=pains, angle=angle, cat=cat))

H, M, L, A, F, P, R, B = 'Home Services', 'Medical and Health', 'Legal', 'Automotive', 'Food and Hospitality', 'Professional Services', 'Real Estate and Property', 'Beauty, Fitness and Lifestyle'

ind('plumbers','Plumbers','plumbing company','i-home',['emergency plumber near me','water heater repair','drain cleaning service','leak detection','plumber open now'],
 [('Emergency searches decide the job','Most plumbing calls come from urgent searches where the first three map results win.'),('Lead sites steal your calls','Lead aggregators and home service ads crowd the top of the page.'),('Service area sprawl','You serve many suburbs but only rank near your office.')],
 'We build service pages for every job type, city pages for every area you cover and a Google Business Profile that wins the emergency map pack.', H)
ind('hvac','HVAC Companies','HVAC company','i-home',['ac repair near me','furnace replacement cost','hvac maintenance plan','heat pump installation','emergency ac service'],
 [('Seasonal demand spikes','Search volume swings with the weather and you need to rank before the rush.'),('High-ticket installs','Replacement jobs need trust content, financing info and reviews.'),('Competitive map packs','Large HVAC brands dominate maps in most metro areas.')],
 'We plan content around the seasons, build install pages that answer cost and financing questions and push your profile into the map pack before peak demand.', H)
ind('electricians','Electricians','electrical contractor','i-home',['electrician near me','panel upgrade','ev charger installation','electrical repair','commercial electrician'],
 [('Licensing and trust','Customers want proof you are licensed, insured and safe.'),('Mixed residential and commercial','Two audiences with very different searches.'),('High-value niche jobs','EV chargers, generators and panel upgrades are growing fast.')],
 'We separate residential and commercial journeys, build pages for high-value jobs like EV chargers and generators and showcase licensing and safety at every step.', H)
ind('roofing','Roofing Companies','roofing company','i-home',['roof repair near me','roof replacement cost','storm damage roof repair','metal roofing contractor','roof inspection'],
 [('Storm-driven demand','After a storm, searches spike and you need to be visible immediately.'),('Insurance questions','Homeowners research claims before they call.'),('Out-of-town competitors','Storm chasers flood local results with new listings.')],
 'We build storm response and insurance claim content, replacement cost pages and a review engine that proves you are local and established.', H)
ind('general-contractors','General Contractors','general contracting firm','i-home',['general contractor near me','home remodeling contractor','kitchen remodel','home addition builder','commercial general contractor'],
 [('Long research cycles','Remodeling clients compare portfolios for weeks.'),('Project-based proof','You need case studies and photos to win trust.'),('Broad service mix','Each project type needs its own page to rank.')],
 'We turn your project portfolio into ranking pages, write cost and process guides for each project type and capture homeowners early in their research.', H)
ind('landscaping','Landscaping Companies','landscaping company','i-home',['landscaping company near me','lawn care service','hardscape contractor','landscape design','yard cleanup'],
 [('Seasonal services','Spring and fall drive most searches.'),('Visual buying decisions','Customers choose based on photos of past work.'),('Recurring revenue','Maintenance plans need their own search strategy.')],
 'We pair visual project galleries with service area pages and build recurring maintenance pages that keep leads coming outside peak season.', H)
ind('pest-control','Pest Control Companies','pest control company','i-home',['pest control near me','termite inspection','bed bug exterminator','rodent removal','mosquito control'],
 [('Pest-specific searches','People search for the pest, not the company.'),('Urgency and embarrassment','Customers want fast, discreet help.'),('Recurring plans','Quarterly service plans drive lifetime value.')],
 'We build a page for every pest and treatment, answer the urgent questions customers ask and promote recurring protection plans.', H)
ind('cleaning','Cleaning Companies','cleaning company','i-home',['house cleaning service','commercial cleaning company','move out cleaning','deep cleaning near me','office cleaning'],
 [('Low trust threshold','Customers let you into their homes and need reassurance.'),('Residential versus commercial','Different buyers, different searches.'),('Price shopping','Many searches include cost and quotes.')],
 'We build trust with clear pricing guides, background check and insurance details and separate journeys for homes and offices.', H)
ind('dentists','Dentists','dental practice','i-med',['dentist near me','emergency dentist','teeth whitening','dental implants cost','invisalign provider'],
 [('High-value treatments','Implants and aligners need detailed, trustworthy pages.'),('Insurance questions','Patients want to know if you accept their plan.'),('Review sensitivity','Patients read reviews closely before booking.')],
 'We create treatment pages that answer cost, process and recovery questions, highlight insurance and financing and grow reviews ethically.', M)
ind('doctors','Doctors and Medical Practices','medical practice','i-med',['primary care doctor near me','urgent care','pediatrician accepting new patients','dermatologist near me','telehealth appointment'],
 [('YMYL standards','Google holds medical content to the highest trust standards.'),('Provider listings','Each provider needs a strong profile and listing.'),('Booking friction','Patients leave if booking is unclear.')],
 'We write medically reviewed content, optimize each provider profile and make appointment booking the obvious next step on every page.', M)
ind('lawyers','Lawyers','law firm','i-legal',['lawyer near me','family law attorney','criminal defense lawyer','estate planning attorney','business lawyer'],
 [('Extremely competitive results','Legal keywords are among the most expensive in search.'),('Practice area depth','Each practice area needs authoritative content.'),('Bar advertising rules','Content must follow professional conduct rules.')],
 'We build authoritative practice area hubs, attorney bio pages with real credentials and local signals that win consultations in your market.', L)
ind('personal-injury-lawyers','Personal Injury Lawyers','personal injury firm','i-legal',['personal injury lawyer near me','car accident attorney','truck accident lawyer','slip and fall attorney','wrongful death lawyer'],
 [('Highest-cost keywords','PI terms are some of the most expensive clicks online.'),('Case type depth','Each accident type needs its own detailed page.'),('Directory competition','Legal directories outrank many firm websites.')],
 'We create case type pages for every accident, local pages for every courthouse area you serve and a link profile strong enough to beat legal directories.', L)
ind('chiropractors','Chiropractors','chiropractic clinic','i-med',['chiropractor near me','back pain treatment','sports chiropractor','prenatal chiropractor','neck pain relief'],
 [('Condition-led searches','Patients search their pain, not your clinic name.'),('New patient offers','First visit offers need clear landing pages.'),('Local competition','Many clinics compete in small areas.')],
 'We build condition and treatment pages patients search for, optimize your profile for nearby searches and make first visits easy to book.', M)
ind('veterinarians','Veterinarians','veterinary clinic','i-med',['vet near me','emergency vet','pet vaccinations','dog dental cleaning','exotic animal vet'],
 [('Emergency moments','Pet owners search in a panic and call the first trusted result.'),('Service breadth','Wellness, surgery, dental and emergency all need pages.'),('Loyal but local','Owners want a clinic close to home.')],
 'We make your emergency availability unmissable, build service pages for every type of care and win the map pack in the neighborhoods you serve.', M)
ind('med-spas','Med Spas','med spa','i-beauty',['med spa near me','botox near me','laser hair removal','hydrafacial','lip filler'],
 [('Treatment-specific demand','Customers search treatments, often with price.'),('Before and after proof','Visual results drive bookings.'),('Compliance','Medical claims need careful wording.')],
 'We create treatment pages with pricing context and results galleries, written carefully for medical compliance, plus local pages that win nearby searches.', B)
ind('auto-repair','Auto Repair Shops','auto repair shop','i-auto',['auto repair near me','brake repair','check engine light diagnostic','transmission repair','oil change near me'],
 [('Trust in pricing','Drivers worry about being overcharged.'),('Make and model searches','Many searches include vehicle brands.'),('Dealer competition','Dealerships compete for service searches.')],
 'We build service and vehicle make pages, publish honest pricing guides and turn reviews into your strongest advantage over dealers.', A)
ind('auto-detailing','Auto Detailing Businesses','auto detailing business','i-auto',['car detailing near me','ceramic coating','mobile detailing','paint correction','interior detailing'],
 [('Mobile service areas','Mobile detailers need visibility across many neighborhoods.'),('Premium services','Ceramic coating and paint correction need education.'),('Visual proof','Photos and video sell the result.')],
 'We pair premium service education with visual results and service area pages that reflect where your mobile team actually works.', A)
ind('towing','Towing Companies','towing company','i-auto',['towing near me','24 hour towing','roadside assistance','flatbed towing','car lockout service'],
 [('Pure urgency','Drivers call the first result they trust.'),('Highway and area coverage','You need visibility across roads and suburbs.'),('Spam listings','Fake towing listings crowd the map.')],
 'We optimize for instant calls, build coverage pages for the areas and highways you serve and report fake listings that steal your calls.', A)
ind('real-estate','Real Estate Agents and Brokerages','real estate brokerage','i-realestate',['real estate agent near me','homes for sale in','sell my house','best neighborhoods in','realtor for first time buyers'],
 [('Portal dominance','Big listing portals own most property searches.'),('Hyperlocal intent','Buyers search by neighborhood and school.'),('Agent brand building','Clients choose people, not logos.')],
 'We win the searches portals ignore: neighborhood guides, market reports, seller guides and agent profiles that build personal authority.', R)
ind('accountants','Accountants and CPAs','accounting firm','i-pro',['cpa near me','small business accountant','tax preparation service','bookkeeping services','irs tax help'],
 [('Seasonal peaks','Tax season drives a surge of searches.'),('Specialist niches','Industries and situations need dedicated pages.'),('Trust and credentials','Clients want proof of expertise.')],
 'We build pages for each service and client type, publish timely tax content before deadlines and highlight credentials that win high-value clients.', P)
ind('insurance','Insurance Agencies','insurance agency','i-pro',['insurance agent near me','auto insurance quote','home insurance','business insurance','life insurance agent'],
 [('Carrier competition','National carriers dominate quote searches.'),('Product breadth','Each line of insurance needs its own page.'),('Local trust','Independent agents win on local relationships.')],
 'We position you as the local expert with product pages, comparison guides and local signals that national carriers cannot match.', P)
ind('gyms','Gyms and Fitness Studios','gym','i-beauty',['gym near me','personal trainer','crossfit gym','24 hour gym','group fitness classes'],
 [('Membership decisions','People compare price, location and vibe.'),('Class-specific searches','Classes and programs each have demand.'),('January rush','New year demand needs early rankings.')],
 'We build program and class pages, make pricing and trial offers clear and prepare rankings well before the new year rush.', B)
ind('salons','Hair Salons','hair salon','i-beauty',['hair salon near me','balayage','hair extensions','keratin treatment','best hairstylist in'],
 [('Style-specific searches','Clients search the service they want.'),('Portfolio driven','Instagram-style proof sells.'),('Stylist loyalty','Clients follow stylists, not only salons.')],
 'We build service pages with real portfolio photos, stylist profiles and booking paths that turn local searches into appointments.', B)
ind('restaurants','Restaurants','restaurant','i-food',['restaurants near me','best brunch in','takeout near me','private dining','restaurant open now'],
 [('Map-first discovery','Most diners choose from Google Maps.'),('Menu and hours accuracy','Wrong info costs reservations.'),('Third-party platforms','Delivery apps and review sites compete for clicks.')],
 'We make your Google profile irresistible with photos, menu, posts and reviews and build pages for cuisine, occasions and private dining.', F)
ind('movers','Moving Companies','moving company','i-home',['movers near me','long distance movers','local moving company','packing services','office movers'],
 [('High trust stakes','People hand over everything they own.'),('Local and long distance','Two distinct search patterns.'),('Quote comparisons','Customers request several quotes.')],
 'We build route and city pages for long distance moves, clear pricing guides and review-led trust signals that win the quote request.', H)
ind('locksmiths','Locksmiths','locksmith business','i-home',['locksmith near me','car lockout','emergency locksmith','lock change','commercial locksmith'],
 [('Emergency urgency','Customers call immediately.'),('Fake listings','Locksmith map results are full of spam.'),('Service radius','Speed of arrival matters.')],
 'We prove you are a real, local locksmith with a verified profile, real photos and reviews, then report spam listings that take your calls.', H)
ind('barbers','Barbershops','barbershop','i-beauty',['barbershop near me','fade haircut','beard trim','walk in barber','kids haircut'],
 [('Walk-in versus booking','Some clients walk in, others book online.'),('Style searches','Fades and beard trims are searched by name.'),('Hyperlocal competition','Barbers compete block by block.')],
 'We optimize for walk-in searches and booking, showcase cuts with real photos and win the map pack in your neighborhood.', B)
ind('cafes','Cafes','cafe','i-food',['coffee shop near me','cafe with wifi','best latte in','breakfast cafe','study cafe'],
 [('Map-first choices','Coffee decisions happen on Google Maps.'),('Atmosphere sells','People search for vibe, wifi and seating.'),('Local loyalty','Regulars come from a small radius.')],
 'We make your profile the most inviting option nearby with photos, attributes and reviews and capture searches for work-friendly and brunch spots.', F)
ind('bakeries','Bakeries','bakery','i-food',['bakery near me','custom cakes','wedding cake bakery','gluten free bakery','fresh bread near me'],
 [('Custom orders','Cakes and catering need dedicated pages.'),('Visual buying','Photos drive orders.'),('Occasion searches','Birthdays and weddings create peaks.')],
 'We build custom order and occasion pages with galleries and make ordering simple, while your profile wins nearby fresh bake searches.', F)
ind('florists','Florists','florist','i-food',['florist near me','flower delivery','wedding florist','sympathy flowers','same day flower delivery'],
 [('Holiday peaks','Valentines and Mothers Day drive massive demand.'),('Wire service competition','National networks take a cut of local orders.'),('Delivery areas','Customers search by delivery location.')],
 'We prepare rankings before every holiday, build delivery area pages and help customers order directly instead of through national networks.', F)
ind('yoga-studios','Yoga Studios','yoga studio','i-beauty',['yoga studio near me','hot yoga','beginner yoga classes','prenatal yoga','yoga teacher training'],
 [('Class style searches','Students search by style and level.'),('Intro offers','New students need clear trial offers.'),('Community feel','People choose based on atmosphere.')],
 'We create pages for every class style and level, highlight intro offers and show the community that makes your studio different.', B)
ind('photographers','Photographers','photography business','i-food',['photographer near me','wedding photographer','family photographer','headshot photographer','newborn photographer'],
 [('Portfolio heavy sites','Image-heavy sites are often slow and thin on text.'),('Niche searches','Each type of shoot needs its own page.'),('Location based','Couples and families search by area and venue.')],
 'We speed up your portfolio, add the context Google needs and build pages for each shoot type and popular venue.', F)
ind('tutors','Tutors and Tutoring Centers','tutoring business','i-pro',['tutor near me','math tutor','sat prep','online tutoring','reading tutor for kids'],
 [('Subject-specific demand','Parents search by subject and test.'),('Online versus local','Both need a strategy.'),('Parent trust','Credentials and results matter.')],
 'We build subject and test prep pages, separate online and in-person journeys and highlight tutor credentials parents look for.', P)
ind('daycares','Daycares and Preschools','childcare center','i-pro',['daycare near me','preschool enrollment','infant care','after school program','montessori near me'],
 [('High trust decisions','Parents research carefully and visit before enrolling.'),('Enrollment cycles','Demand follows school calendars.'),('Licensing proof','Parents look for safety and licensing.')],
 'We publish clear program pages, licensing and safety details and enrollment content timed to the school calendar.', P)
ind('wedding-planners','Wedding Planners','wedding planning business','i-food',['wedding planner near me','destination wedding planner','day of coordinator','luxury wedding planner','wedding venues in'],
 [('Long consideration','Couples plan for months.'),('Venue searches','Couples search venues before planners.'),('Visual storytelling','Real weddings sell services.')],
 'We turn real weddings into venue and style pages, capture couples early in planning and showcase packages clearly.', F)
ind('therapists','Therapists and Counselors','therapy practice','i-med',['therapist near me','couples counseling','anxiety therapist','online therapy','child therapist'],
 [('Sensitive searches','Clients need privacy and reassurance.'),('Specialty matching','People search by issue and approach.'),('Directory competition','Therapy directories rank highly.')],
 'We create calm, specific pages for each specialty and approach, clear insurance and booking info and a profile that competes with directories.', M)
ind('financial-advisors','Financial Advisors','financial advisory firm','i-pro',['financial advisor near me','retirement planning','fee only financial advisor','wealth management','401k rollover help'],
 [('YMYL trust standards','Financial content needs strong expertise signals.'),('Compliance review','Content must pass compliance.'),('Niche audiences','Advisors who specialize win more searches.')],
 'We build compliant, expert-led content around your niche, advisor profiles with credentials and local pages for the communities you serve.', P)
ind('property-management','Property Management Companies','property management company','i-realestate',['property management near me','rental property manager','hoa management','commercial property management','tenant screening services'],
 [('Two audiences','Owners and tenants search differently.'),('Area specific','Owners want local market knowledge.'),('Service comparison','Fees and services are compared closely.')],
 'We target property owners with area pages and fee guides while keeping tenant traffic separated so it does not dilute your lead generation.', R)
ind('home-builders','Home Builders','home building company','i-realestate',['custom home builder','new construction homes','home builders near me','luxury home builder','build on your lot'],
 [('Long sales cycles','Buyers research for months.'),('Community and lot searches','Location drives demand.'),('Portfolio proof','Model homes and floor plans sell.')],
 'We build community, floor plan and process pages that capture buyers early and keep them engaged through a long decision.', R)
ind('painters','Painting Contractors','painting company','i-home',['house painters near me','interior painting','exterior house painting','cabinet painting','commercial painting'],
 [('Seasonal exterior work','Exterior painting peaks in warm months.'),('Visual results','Before and after photos win jobs.'),('Quote driven','Customers compare several quotes.')],
 'We build interior, exterior and cabinet pages with real project photos and cost guides that bring in quote-ready homeowners.', H)
ind('flooring-companies','Flooring Companies','flooring company','i-home',['flooring installation near me','hardwood floor refinishing','luxury vinyl plank installation','tile installer','carpet installation'],
 [('Material-specific searches','Customers search by flooring type.'),('Showroom and installs','Both retail and installation need visibility.'),('Price research','Cost per square foot is a common search.')],
 'We create material and service pages with honest cost guidance and showroom visibility that turns research into estimates.', H)
ind('fencing-companies','Fencing Companies','fence company','i-home',['fence company near me','wood fence installation','vinyl fence','chain link fence','fence repair'],
 [('Material choices','Buyers compare wood, vinyl, aluminum and chain link.'),('Permits and HOA questions','Customers need guidance before buying.'),('Seasonal demand','Spring and summer drive installs.')],
 'We build material comparison and installation pages, answer permit and HOA questions and rank you before peak season.', H)
ind('pool-service-companies','Pool Service Companies','pool service company','i-home',['pool cleaning service','pool repair near me','pool opening','pool equipment repair','weekly pool service'],
 [('Recurring service','Weekly plans drive lifetime value.'),('Seasonal openings','Openings and closings create peaks.'),('Equipment searches','Pumps and heaters need repair pages.')],
 'We build recurring service and equipment repair pages and time opening and closing content to the season.', H)
ind('orthodontists','Orthodontists','orthodontic practice','i-med',['orthodontist near me','braces for adults','invisalign cost','kids orthodontist','clear aligners'],
 [('High-value treatment decisions','Families compare options and cost.'),('Two audiences','Parents for kids and adults for themselves.'),('Aligner brand competition','Direct to consumer aligners compete for searches.')],
 'We publish clear treatment and cost pages for kids and adults and explain why an orthodontist beats mail-order aligners.', M)
ind('plastic-surgeons','Plastic Surgeons','plastic surgery practice','i-med',['plastic surgeon near me','rhinoplasty','breast augmentation cost','tummy tuck','facelift surgeon'],
 [('High-stakes trust','Patients research surgeons for months.'),('Procedure depth','Each procedure needs detailed, accurate content.'),('Compliance and imagery','Before and after photos need careful handling.')],
 'We create procedure pages with recovery and cost information, surgeon credential content and galleries handled with care.', M)

I.sort(key=lambda x: x['name'])
CATS = [H, M, L, A, F, P, R, B]
