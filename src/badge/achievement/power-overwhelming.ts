import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const PowerOverwhelming: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "power-overwhelming",
    setTitleId: 2480,
    names: [
        {value: "Power Overwhelming"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You like to make demonstrations of your power, it's what makes you a cut above the rest. You didn't bat an eye in letting Ripplesurge consume environmental ripple energy, and empowering himself to his absolute limit before showing him why no degree of overwhelming power can stand against your own might.`}
    ],
    acquisition: `Defeat Ripplesurge while it is empowered from standing in the residual energy left behind from consuming a Shimmering Effusion while on Hard Mode in Dr. Aeon's Strike Force.`,
    links: [
        {title: "Power Overwhelming Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Power_Overwhelming_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sf-aeon.png"}
    ],
};