import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoFaultline} from "../../map/echo-faultline";

export const DugTooDeep: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dug-too-deep",
    names: [{value: "Dug Too Deep"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoFaultline.key,
    location: [1141.7, -618.3, -16.0],
    notes: "Directly south of the dark canyons marker, down in the cracks.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
