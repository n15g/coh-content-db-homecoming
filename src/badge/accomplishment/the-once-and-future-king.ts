import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TheOnceAndFutureKing: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-once-and-future-king",
    setTitleId: 2219,
    names: [
        {type: Alternate.M, value: "The Once and Future King"},
        {type: Alternate.F, value: "The Once and Future Queen"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You helped set Pendragon down the path of righteousness.  While he may walk the mists of " +
        "Praetoria for years, his soul has been redeemed and his freedom from Night Ward ensured."}
    ],
    acquisition: "Complete the story arc from Sir Bedwyr",
    links: [
        {title: "The Once and Future King Badge", href: "https://paragonwiki.com/wiki/The_Once_and_Future_King_Badge"},
        {title: "The Once and Future Queen Badge", href: "https://paragonwiki.com/wiki/The_Once_and_Future_Queen_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-once-and-future-king.png"}
    ],
};