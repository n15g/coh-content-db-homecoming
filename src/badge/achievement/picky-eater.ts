import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PickyEater: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "picky-eater",
    setTitleId: 2392,
    names: [
        {value: "Picky Eater"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `There are some recipes you just won't touch.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png"}],
    acquisition: "Reject 50 recipe drops.",
    links: [
        {title: "Picky Eater Badge", href: "https://paragonwiki.com/wiki/Picky_Eater_Badge"}
    ],
};
