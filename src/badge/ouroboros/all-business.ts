import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AllBusiness: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "all-business",
    names: [
        {value: "All Business"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 25 and 29 while only using your Primary and Secondary powersets."},
    ],
    acquisition: "Complete a level 25-29 Flashback arc using no pool powers.",
    links: [
        {title: "All Business Badge", href: "https://paragonwiki.com/wiki/All_Business_Badge"}
    ],
    icons: [{value: "core.ouroboros.all-business"}]
};
