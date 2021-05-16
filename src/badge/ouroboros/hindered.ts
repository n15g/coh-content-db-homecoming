import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Hindered: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "hindered",
    setTitleId: 909,
    names: [
        {value: "Hindered"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 30 and 34 while not using any Temporary Powers.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 30 and 34 while not using any Temporary Powers.`}
    ],
    acquisition: "Complete a level 31-35 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Hindered Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hindered_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/hindered.png"}]
};
