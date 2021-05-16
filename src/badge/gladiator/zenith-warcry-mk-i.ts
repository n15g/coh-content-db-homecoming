import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ZenithWarcryMkI: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "zenith-warcry-mk-i",
    setTitleId: 497,
    names: [
        {value: "Zenith Warcry Mk I"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "Gladiator program initiated."}
    ],
    acquisition: "Earn the [badge:burkholders-bane] Badge (Council)",
    links: [
        {title: "Zenith Warcry Mk I Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Zenith_Warcry_Mk_I_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
