import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Diminished: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "diminished",
    setTitleId: 904,
    names: [
        {value: "Diminished"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 1 and 15 while not using any Temporary Powers.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 1 and 15 while not using any Temporary Powers.`}
    ],
    acquisition: "Complete a level 1-15 Flashback arc using no temp powers.",
    links: [
        {title: "Diminished Badge", href: "https://paragonwiki.com/wiki/Diminished_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/diminished.png"}]
};
