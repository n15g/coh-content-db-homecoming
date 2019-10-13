import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const Riveting: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "riveting",
    names: [{value: "Riveting"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Faultline.key,
    location: [1260.8, 31.0, -1788.0],
    notes: "NW corner of the map. Outside the Rusty Rivet.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
