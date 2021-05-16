import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Qualified: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "qualified",
    setTitleId: 965,
    names: [
        {value: "Qualified"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Good run, but try harder, better times can be had!"}
    ],
    acquisition: "Complete a ski run on the Expert slope in under 45 seconds during a Winter Event",
    links: [
        {title: "Qualified Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Qualified_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-bronze.png"}
    ],
};
