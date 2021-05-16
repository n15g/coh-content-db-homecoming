import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const CimeroranHero: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "cimeroran-hero",
    setTitleId: 2198,
    names: [
        {type: Alternate.M, value: "Cimeroran Hero"},
        {type: Alternate.F, value: "Cimeroran Heroine"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You played through Marcus Valerius's personal story, witnessing the event where Marcus " +
                "Valerius brought Mot to the land of Astoria and joined together with Mot, becoming his " +
                "Sentinel."
        }
    ],
    acquisition: "Complete the personal story mission from Sister Solaris",
    links: [
        {title: "Cimeroran Hero Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Cimeroran_Hero_Badge"},
        {title: "Cimeroran Heroine Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Cimeroran_Heroine_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png"}
    ],
};
