import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const FalseProphet: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "false-prophet",
    names: [
        {value: "False Prophet"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You're not above using others' beliefs to your own advantage, especially when they're as " +
        "gullible as the Luddites."}
    ],
    acquisition: "Complete the story arc from Brother Hammond",
    links: [
        {title: "False Prophet Badge", href: "https://paragonwiki.com/wiki/False_Prophet_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/false-prophet.png"}
    ],
};