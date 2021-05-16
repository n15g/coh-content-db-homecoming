import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SiblingRivalry: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "sibling-rivalry",
    setTitleId: 2175,
    names: [
        {value: "Sibling Rivalry"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Challenge Trial: Drowning in Blood."}
    ],
    acquisition: "Complete the Drowning in Blood trial",
    links: [
        {title: "Sibling Rivalry Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sibling_Rivalry_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/sibling-rivalry.png"}
    ],
};
