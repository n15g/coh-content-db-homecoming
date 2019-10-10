import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {EchoFaultline} from "../../map/echo-faultline";

export const Newsman: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "newsman",
    names: [
        {type: Alternate.M, value: "Newsman"},
        {type: Alternate.F, value: "Newswoman"},

    ],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoFaultline.key,
    location: [1125.0, -26.9, 1296.7],
    notes: "**Moved from [map:faultline] in Issue 25.**\n" +
        "\n" +
        " Approx. 513 yrds. S of the \"Dark Canyons\" marker in front of the doors to a grey stoned high-rise that's tilting into the canyon, next to the west perimeter wall.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
