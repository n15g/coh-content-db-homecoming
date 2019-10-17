import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SirensSong: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "sirens-song",
    setTitleId: 399,
    names: [
        {type: Alternate.H, value: "Siren's Song"},
        {type: Alternate.V, value: "Raider"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Siren's Call must call to you. You've spent over 5 hours here."}
    ],
    acquisition: "Spend 1 hours in Siren's Call",
    links: [
        {title: "Siren's Song Badge", href: "https://paragonwiki.com/wiki/Siren%27s_Song_Badge"},
        {title: "Raider Badge", href: "https://paragonwiki.com/wiki/Raider_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time.png"}
    ],
};
