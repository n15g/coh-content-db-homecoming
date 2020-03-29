import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const VIP: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "vip",
    setTitleId: 183,
    setTitleIdPraetorian: 1658,
    names: [
        {type: Alternate.H, value: "V.I.P."},
        {type: Alternate.V, value: "Destined One"},
        {type: Alternate.MP, value: "Praetoria's Son"},
        {type: Alternate.FP, value: "Praetoria's Daughter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Being a V.I.P. in Paragon City has many advantages associated with it.`},
        {type: Alternate.V, value: `Being one of Kalinda's Destined Ones brings with it many perks, and just as many enemies.`},
        {type: Alternate.P, value: `Praetoria is your world, for better or worse.`}
    ],
    notes: `Awarded on any character creation`,
    links: [
        {title: "V.I.P. Badge", href: "https://paragonwiki.com/wiki/V.I.P._Badge"},
        {title: "Destined One Badge", href: "https://paragonwiki.com/wiki/Destined_One_Badge"},
        {title: "Praetoria's Son Badge", href: "https://paragonwiki.com/wiki/Praetoria%27s_Son_Badge"},
        {title: "Praetoria's Daughter Badge", href: "https://paragonwiki.com/wiki/Praetoria%27s_Daughter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/vip.png"}
    ]
};
