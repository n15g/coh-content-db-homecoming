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
    acquisition: "Finish a level 25-29 Flashback story arc while debuffed.",
    links: [
        {title: "Daredevil Badge", href: "https://paragonwiki.com/wiki/Daredevil_Badge"}
    ],
    icons: [{value: "core.ouroboros.daredevil"}]
};
