import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const RockBottom: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "rock-bottom",
    names: [{value: "Rock Bottom"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Faultline.key,
    location: [-706.6, -87.8, 1757.0],
    notes: "NW corner of the map. Outside the Rusty Rivet.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
