import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Packrat: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "packrat",
    setTitleId: 2365,
    names: [
        {value: "Packrat"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The more souvenirs you gather, the more you want. This is starting to become an obsession.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/packrat.png"}],
    acquisition: "Collect 100 Souvenirs",
    links: [
        {title: "Packrat Badge", href: "https://homecoming.wiki/wiki/Packrat_Badge"}
    ],
};
