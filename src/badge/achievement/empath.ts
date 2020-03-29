import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Empath: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "empath",
    setTitleId: 238,
    setTitleIdPraetorian: 1692,
    names: [
        {value: "Empath"},
        {type: Alternate.P, value: "Death's Jailer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped your fellow heroes by healing them for ten million hit points."},
        {type: Alternate.P, value: "With you around, people have started to wonder if you've managed to lock up Death somewhere " +
        "far away."}
    ],
    acquisition: "Heal others for 10,000,000 hit points",
    links: [
        {title: "Empath Badge", href: "https://paragonwiki.com/wiki/Empath_Badge"},
        {title: "Death's Jailer Badge", href: "https://paragonwiki.com/wiki/Death%27s_Jailer_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png"}
    ],
};
