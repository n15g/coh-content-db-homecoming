import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const BadLuck: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "bad-luck",
    setTitleId: 340,
    names: [
        {value: "Bad Luck"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You and Hard Luck recovered a mystical amulet designed to jinx everyone around the wearer."}
    ],
    acquisition: "Complete the The Unlucky Artifacts mission from Hard Luck",
    links: [
        {title: "Bad Luck Badge", href: "https://paragonwiki.com/wiki/Bad_Luck_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-6.png"}
    ],
};