import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Wrangler: IBadgeData = {
    type: BadgeType.PVP,
    key: "wrangler",
    setTitleId: 581,
    names: [
        {value: "Wrangler"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have helped defeat Black Scorpion in Recluse's Victory."}
    ],
    acquisition: "Defeat Black Scorpion in Recluse's Victory",
    links: [
        {title: "Wrangler Badge", href: "https://homecoming.wiki/wiki/Wrangler_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/wrangler.png"}
    ],
};
