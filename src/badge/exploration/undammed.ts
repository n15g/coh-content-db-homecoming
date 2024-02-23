import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const Undammed: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "undammed",
    setTitleId: 118,
    names: [{value: "Undammed"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Faultline.key,
    location: [-820.0, -159.0, 1033.0],
    badgeText: [{value: "Funding has recently been passed in an effort to stop the damage caused by the leaking Paragon City Dam."}],
    notes: "Located at the top right (northeast) corner of a building in a canyon on the east side of the zone between the borders of the Aftershock and Overflow neighborhoods of [map:${Faultline.key}].",
    links: [
        {title: "Undammed Badge", href: "https://homecoming.wiki/wiki/Undammed_Badge"},
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "1"
};
