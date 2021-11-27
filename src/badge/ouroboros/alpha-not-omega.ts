import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AlphaNotOmega: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "alpha-not-omega",
    setTitleId: 2474,
    names: [
        {value: "Alpha Not Omega"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have completed a Flashback at level 50 while only benefitting from the Incarnate Power in your Alpha Slot.`}
    ],
    acquisition: `Complete a Flashback at level 50 with a challenge setting of "Alpha Slot Only"`,
    links: [
        {title: "Alpha Not Omega Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Alpha_Not_Omega_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/alpha-not-omega.png"}]
};