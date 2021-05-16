import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Confined: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "confined",
    setTitleId: 239,
    setTitleIdPraetorian: 1696,
    names: [
        {value: "Confined"},
        {type: Alternate.P, value: "Stuck"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You continue to be the shining example of inactivity."},
        {
            type: Alternate.P, value: "Hanging around all those secret PPD prisons must have rubbed off on you. You certainly seem " +
                "comfortable doing nothing for long stretches of time."
        }
    ],
    acquisition: "Be held for 3 hours",
    links: [
        {title: "Confined Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Confined_Badge"},
        {title: "Stuck Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Stuck_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png"}
    ],
};
