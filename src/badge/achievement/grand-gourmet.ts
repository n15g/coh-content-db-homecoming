import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GrandGourmet: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "grand-gourmet",
    setTitleId: 2394,
    names: [
        {value: "Grand Gourmet"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The commonplace is not for you. Only the finest recipes will do!`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png"}],
    acquisition: "Reject 500 recipe drops",
    links: [
        {title: "Grand Gourmet Badge", href: "https://homecoming.wiki/wiki/Grand_Gourmet_Badge"}
    ],
};
