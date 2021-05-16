import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Apathetic: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "apathetic",
    setTitleId: 2382,
    names: [
        {value: "Apathetic"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The world looks at your achievements in awe, but you remain impassive.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png"}],
    acquisition: "Reject 500 inspiration drops.",
    links: [
        {title: "Apathetic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Apathetic_Badge"}
    ],
};
