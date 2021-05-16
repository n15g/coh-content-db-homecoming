import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Capped: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "capped",
    setTitleId: 907,
    names: [
        {value: "Capped"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 20 and 24 while not using any Temporary Powers.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 20 and 24 while not using any Temporary Powers.`}
    ],
    acquisition: "Complete a level 21-25 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Capped Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Capped_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/capped.png"}]
};
