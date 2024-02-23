import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const IronChef: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "iron-chef",
    setTitleId: 2395,
    names: [
        {value: "Iron Chef"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Your trained, discerning eye demands you shun most recipes.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png"}],
    acquisition: "Reject 1000 recipe drops",
    links: [
        {title: "Iron Chef Badge", href: "https://homecoming.wiki/wiki/Iron_Chef_Badge"}
    ],
};
