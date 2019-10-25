import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Discerning: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "discerning",
    setTitleId: 1274,
    names: [
        {value: "Discerning"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your experience could outstrip even several seasoned heroes combined. You know what's what; there are no surprises for you anymore. You have attained sixty Veteran levels.`},
        {type: Alternate.V, value: `Your experience could outstrip even several seasoned villains combined. You know what's what; there are no surprises for you anymore. You have attained sixty Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 60",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-60.png"}]
};
