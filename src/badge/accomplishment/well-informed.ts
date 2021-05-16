import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const WellInformed: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "well-informed",
    setTitleId: 1444,
    names: [
        {value: "Well Informed"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You completed a Rogue Alignment Mission earning yourself the Well Informed badge."}
    ],
    acquisition: "Complete a Rogue Alignment mission",
    links: [
        {title: "Well Informed Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Well_Informed_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/well-informed.png"}
    ],
};
