import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TippedOff: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "tipped-off",
    setTitleId: 1440,
    names: [
        {value: "Tipped Off"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You received your first tip earning yourself the Tipped Off badge."}
    ],
    acquisition: "Receive your first tip",
    links: [
        {title: "Tipped Off Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Tipped_Off_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tipped-off.png"}
    ],
};
