import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Oobatz: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "oobatz",
    setTitleId: 2319,
    names: [
        {value: "Oobatz"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You stopped Longbow from raiding a Family casino in St. Martial, then proceeded to rob the " +
                "Family blind. The goons of the Family have taken to calling you 'Oobatz', crazy, for daring to " +
                "cross them."
        }
    ],
    acquisition: "Complete the The Family Raid zone event in St. Martial",
    links: [
        {title: "Oobatz Badge", href: "https://homecoming.wiki/wiki/Oobatz_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png"}
    ],
};
