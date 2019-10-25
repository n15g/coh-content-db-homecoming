import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Kleptomaniac: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "kleptomaniac",
    setTitleId: 2364,
    names: [
        {value: "Kleptomaniac"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `When it comes to collecting souvenirs from your foes, you don't just take anything that's not nailed down; you take the nails, too.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/kleptomaniac.png"}],
    acquisition: "Colllect 50 Souvenirs",
    links: [
        {title: "Kleptomaniac Badge", href: "https://paragonwiki.com/wiki/Kleptomaniac_Badge"}
    ],
};
