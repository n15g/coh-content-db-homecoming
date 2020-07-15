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
        {value: "Siren's Call must call to you. You've spent over one hour there."}
    ],
    acquisition: "Spend 1 hour in Siren's Call",
    links: [
        {title: "Siren's Song Badge", href: "https://paragonwiki.com/wiki/Siren%27s_Song_Badge"},
        {title: "Raider Badge", href: "https://paragonwiki.com/wiki/Raider_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png"}
    ],
};
