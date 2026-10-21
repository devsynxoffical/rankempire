#!/usr/bin/env python3
import os, sys, json

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ref', 'RankEmpire 3', 'source'))
from data_services import S, SERVICE_ORDER_CORE, SERVICE_ORDER_SVC, HOME_SVCS
from data_services_long import LONG as S_LONG
from data_industries import I, CATS
from data_industries_long import IND_LONG
from data_locations import C
from data_locations_long import CITY_LONG
from data_logos import LOGOS
from data_misc import PACKAGES, TOOLS, TEAM, BLOG, FAQ_HOME, PLAYBOOKS, TRUST, STACK

data = {
    "services": S,
    "servicesLong": S_LONG,
    "serviceOrderCore": SERVICE_ORDER_CORE,
    "serviceOrderSvc": SERVICE_ORDER_SVC,
    "homeServices": HOME_SVCS,
    "industries": I,
    "industriesLong": IND_LONG,
    "categories": CATS,
    "locations": C,
    "locationsLong": CITY_LONG,
    "logos": LOGOS,
    "packages": PACKAGES,
    "tools": [
        {"slug": t[0], "name": t[1], "type": t[2], "desc": t[3]}
        for t in TOOLS
    ],
    "team": [
        {"id": t[0], "name": t[1], "role": t[2], "bio": t[3]}
        for t in TEAM
    ],
    "blog": BLOG,
    "faqHome": [
        {"cat": f[0], "q": f[1], "a": f[2]}
        for f in FAQ_HOME
    ],
    "playbooks": PLAYBOOKS,
    "trust": [
        {"title": t[0], "desc": t[1], "bold": t[2], "badge": t[3]}
        for t in TRUST
    ],
    "stack": STACK
}

out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src', 'data', 'site_data.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

# Also write to root site_data.json if it exists
root_json = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'site_data.json')
with open(root_json, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Exported site_data.json successfully with v2 content!")

