import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const OuroborosMender: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "ouroboros-mender",
    setTitleId: 943,
    names: [
        {value: "Ouroboros Mender"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 50 story arcs."},
    ],
    acquisition: "Complete 50 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Ouroboros Mender Badge", href: "https://homecoming.wiki/wiki/Ouroboros_Mender_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/ouroboros-mender.png"}]
};
