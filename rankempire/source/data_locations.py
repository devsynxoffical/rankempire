# City landing pages
C = []
def city(slug, name, state, st, areas, inds, note):
    C.append(dict(slug=slug, name=name, state=state, st=st, areas=areas, inds=inds, note=note))

city('new-york','New York','New York','NY',['Manhattan','Brooklyn','Queens','The Bronx','Staten Island','Long Island','Jersey City','Westchester'],
 ['lawyers','dentists','restaurants','real-estate'],'In a market as dense as New York, map results can change from one block to the next. Local SEO here means neighborhood-level relevance, borough-specific pages and a review profile strong enough to stand out among thousands of competitors.')
city('los-angeles','Los Angeles','California','CA',['Downtown LA','Santa Monica','Pasadena','Glendale','Long Beach','Burbank','Beverly Hills','The Valley'],
 ['med-spas','personal-injury-lawyers','real-estate','restaurants'],'Los Angeles is a sprawling market where customers rarely drive across town. Winning here means separate visibility in each area you serve, from the Westside to the Valley, plus content that speaks to a very competitive, very visual audience.')
city('chicago','Chicago','Illinois','IL',['The Loop','Lincoln Park','Wicker Park','Naperville','Evanston','Schaumburg','Oak Park','Hyde Park'],
 ['hvac','roofing','lawyers','accountants'],'Chicago businesses compete across the city and a large ring of suburbs. Weather-driven services like HVAC and roofing see sharp seasonal swings, so rankings need to be in place before winter and storm season arrive.')
city('houston','Houston','Texas','TX',['Downtown','The Heights','Katy','Sugar Land','The Woodlands','Pearland','Pasadena','Cypress'],
 ['roofing','hvac','personal-injury-lawyers','auto-repair'],'Houston is spread out and heavily car-dependent, so proximity matters for every local search. Hurricane and heat seasons drive demand for home services, while fast-growing suburbs open new opportunities every year.')
city('dallas','Dallas','Texas','TX',['Uptown','Plano','Frisco','Irving','Richardson','Arlington','McKinney','Garland'],
 ['home-builders','real-estate','plumbers','financial-advisors'],'The Dallas-Fort Worth area keeps adding residents and new suburbs, which means new searches and new competitors every quarter. Businesses that build pages for growing areas like Frisco and McKinney early tend to own them.')
city('miami','Miami','Florida','FL',['Brickell','Miami Beach','Coral Gables','Doral','Wynwood','Kendall','Hialeah','Fort Lauderdale'],
 ['med-spas','plastic-surgeons','real-estate','restaurants'],'Miami is bilingual, international and highly competitive in beauty, hospitality and real estate. Strong local SEO here often includes Spanish-language content and pages targeting distinct neighborhoods with very different audiences.')
city('phoenix','Phoenix','Arizona','AZ',['Scottsdale','Tempe','Mesa','Chandler','Gilbert','Glendale','Peoria','Surprise'],
 ['hvac','pool-service-companies','pest-control','roofing'],'In Phoenix, extreme heat makes AC repair and pool service true emergencies for much of the year. The metro area is large and suburban, so ranking across Scottsdale, Mesa and the East Valley requires a page and a plan for each.')
city('san-diego','San Diego','California','CA',['Downtown','La Jolla','North Park','Chula Vista','Carlsbad','Escondido','Oceanside','Pacific Beach'],
 ['dentists','real-estate','gyms','wedding-planners'],'San Diego combines tourist demand with tight-knit local communities. Businesses here win by building trust in specific neighborhoods and by reaching visitors planning weddings, events and stays from out of town.')
city('san-francisco','San Francisco','California','CA',['SoMa','Mission District','Marina','Oakland','Berkeley','Palo Alto','San Mateo','Daly City'],
 ['lawyers','therapists','cafes','accountants'],'San Francisco and the Bay Area are home to tech-savvy customers who research thoroughly. Clear expertise, strong reviews and well-structured service pages matter more here than almost anywhere else.')
city('austin','Austin','Texas','TX',['Downtown','South Congress','East Austin','Round Rock','Cedar Park','Georgetown','Pflugerville','Lakeway'],
 ['gyms','home-builders','restaurants','yoga-studios'],'Austin keeps attracting new residents and businesses, and with them a steady stream of first-time local searches. Fast-growing suburbs like Round Rock and Georgetown are often less competitive than the core and worth early investment.')
city('atlanta','Atlanta','Georgia','GA',['Buckhead','Midtown','Decatur','Marietta','Alpharetta','Sandy Springs','Smyrna','Roswell'],
 ['personal-injury-lawyers','salons','plumbers','real-estate'],'Atlanta is a metro of distinct neighborhoods and suburbs separated by heavy traffic. Customers choose nearby providers, so visibility in each area, from Buckhead to Alpharetta, makes a measurable difference.')
city('seattle','Seattle','Washington','WA',['Capitol Hill','Ballard','Bellevue','Redmond','Kirkland','Tacoma','Fremont','West Seattle'],
 ['roofing','cafes','therapists','general-contractors'],'Seattle customers value expertise and sustainability, and rainy weather keeps roofing and home repair in steady demand. The Eastside cities of Bellevue and Redmond behave like separate markets and deserve their own pages.')
city('denver','Denver','Colorado','CO',['LoDo','Capitol Hill','Highlands','Aurora','Lakewood','Littleton','Boulder','Englewood'],
 ['roofing','gyms','auto-repair','landscaping'],'Hail storms make Denver one of the busiest roofing markets in the country, while an active population drives fitness and outdoor services. Seasonal planning and suburban coverage are central to local SEO here.')
city('boston','Boston','Massachusetts','MA',['Back Bay','Cambridge','Somerville','Brookline','Newton','Quincy','South Boston','Waltham'],
 ['doctors','tutors','accountants','lawyers'],'Boston is a market of universities, hospitals and professional services, where expertise signals carry real weight. Local SEO here leans on authoritative content and credentials as much as on maps and reviews.')
city('las-vegas','Las Vegas','Nevada','NV',['The Strip','Henderson','Summerlin','North Las Vegas','Spring Valley','Enterprise','Paradise','Boulder City'],
 ['restaurants','wedding-planners','hvac','pool-service-companies'],'Las Vegas mixes a huge visitor economy with fast-growing residential suburbs. Hospitality businesses need to reach tourists planning trips, while home services in Henderson and Summerlin compete for year-round local demand.')
city('charlotte','Charlotte','North Carolina','NC',['Uptown','South End','Ballantyne','Matthews','Huntersville','Concord','Mooresville','Gastonia'],
 ['financial-advisors','home-builders','hvac','dentists'],'Charlotte is a banking hub with rapidly growing suburbs. Financial and professional services need strong trust signals, while new neighborhoods create constant demand for home services and healthcare.')
city('orlando','Orlando','Florida','FL',['Downtown','Winter Park','Kissimmee','Lake Nona','Dr. Phillips','Altamonte Springs','Sanford','Clermont'],
 ['restaurants','pool-service-companies','pest-control','real-estate'],'Orlando serves millions of visitors and a fast-growing local population. Tourism businesses compete for visitor searches, while home services and real estate follow the rapid growth of areas like Lake Nona and Kissimmee.')
