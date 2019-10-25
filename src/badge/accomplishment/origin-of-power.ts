import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const OriginOfPower: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "origin-of-power",
    setTitleId: 989,
    names: [
        {value: "Origin of Power"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You gain a deeper understanding of the power and history of origins by talking to a " +
        "representative of each path."}
    ],
    acquisition: "Complete the Origin of Power story arc from Percy Winkley",
    links: [
        {title: "Origin of Power Badge", href: "https://paragonwiki.com/wiki/Origin_of_Power_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/origin-of-power.png"}
    ],
};