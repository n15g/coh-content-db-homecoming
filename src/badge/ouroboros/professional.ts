import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Professional: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "professional",
    names: [
        {value: "Professional"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while only using your Primary and Secondary powersets."},
    ],
    acquisition: "Complete a level 20-24 Flashback arc using no pool powers.",
    links: [
        {title: "Professional Badge", href: "https://paragonwiki.com/wiki/Professional_Badge"}
    ],
    icons: [{value: "core.ouroboros.professional"}]
};
