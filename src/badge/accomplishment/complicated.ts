import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Negotiator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "complicated",
    setTitleId: 2459,
    names: [
        {value: "Complicated"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "Sometimes, the line between good and evil isn't as simple as it seems."}
    ],
    acquisition: "Complete the Defeat Frostfire mission from Flux",
    links: [
        {title: "Negotiator Badge", href: "https://paragonwiki.com/wiki/Complicated_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/complicated.png"}
    ],
};
