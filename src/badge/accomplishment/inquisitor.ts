import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Inquisitor: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "inquisitor",
    setTitleId: 1445,
    names: [
        {value: "Inquisitor"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You completed a Villain Alignment Mission earning yourself the Inquisitor badge."}
    ],
    acquisition: "Complete a Villain Alignment mission",
    links: [
        {title: "Inquisitor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Inquisitor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/inquisitor.png"}
    ],
};
