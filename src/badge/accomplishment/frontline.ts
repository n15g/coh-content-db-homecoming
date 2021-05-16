import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Frontline: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "frontline",
    setTitleId: 81,
    names: [
        {value: "Frontline"}
    ],
    alignment: ALIGNMENT_HERO,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/frontline.png"}],
    badgeText: [
        {value: "You stopped a battle between the Circle of Thorns and the Oranbegans from another dimension."}
    ],
    acquisition: "Complete the Stop the Circle of Thorns from contacting an alternate world mission from Cadao Kestrel",
    links: [
        {title: "Frontline Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Frontline_Badge"}
    ]
};
