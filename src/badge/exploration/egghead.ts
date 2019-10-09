import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";

export const Egghead: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "egghead",
    names: [{value: "Egghead"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: CapAuDiable.key,
    location: [941.0, 98.0, -1441.0],
    badgeText: [{value: "It's back to school for you. Aeon University is home to many of Dr. Aeon's Brighter employees."}],
    notes: "The Egghead Badge is in Cap au Diable on top of the university right above the front door. The university is located along the western edge of New Haven.",
    links: [
        {title: "Egghead Badge", href: "https://paragonwiki.com/wiki/Egghead_Badge"}
    ],
    icons: [{value: "core.exploration.villain"}],
    vidiotMapKey: "3"
};
