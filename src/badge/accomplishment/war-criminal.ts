import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const WarCriminal: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "war-criminal",
    setTitleId: 2258,
    names: [
        {value: "War Criminal"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You worked together with Mr. G to break out several criminals of war from Vanguard custody."}
    ],
    acquisition: "Complete the first story arc from Mr. G (Primal Earth)",
    links: [
        {title: "War Criminal Badge", href: "https://homecoming.wiki/wiki/War_Criminal_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png"}
    ],
};
