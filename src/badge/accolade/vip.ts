import {ALIGNMENT_PRIMAL, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const VIP: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "vip",
    setTitleId: 183,
    names: [
        {type: Alternate.H, value: "V.I.P."},
        {type: Alternate.V, value: "Destined One"},
    ],
    alignment: ALIGNMENT_PRIMAL,
    badgeText: [
        {type: Alternate.H, value: `Being a V.I.P. in Paragon City has many advantages associated with it.`},
        {type: Alternate.V, value: `Being one of Kalinda's Destined Ones brings with it many perks, and just as many enemies.`},
    ],
    acquisition: `Awarded on initial login of a Primal-origin character`,
    links: [
        {title: "V.I.P. Badge", href: "https://homecoming.wiki/wiki/V.I.P._Badge"},
        {title: "Destined One Badge", href: "https://homecoming.wiki/wiki/Destined_One_Badge"},
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/char-creation.png"}
    ]
};
