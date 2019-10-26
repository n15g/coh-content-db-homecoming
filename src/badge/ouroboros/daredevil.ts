import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Daredevil: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "daredevil",
    names: [
        {value: "Daredevil"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 25 and 29 while under a constant Debuff."},
    ],
    acquisition: "Complete a level 26-30 Flashback story arc while debuffed.  (Note: In game badge text is incorrect.)",
    links: [
        {title: "Daredevil Badge", href: "https://paragonwiki.com/wiki/Daredevil_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/daredevil.png"}]
};
