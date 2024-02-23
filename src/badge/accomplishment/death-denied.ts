import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DeathDenied: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "death-denied",
    setTitleId: 2163,
    names: [
        {value: "Death Denied"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Incarnate Trial: Dilemma Diabolique."}
    ],
    acquisition: "Complete the Dilemma Diabolique Trial",
    links: [
        {title: "Death Denied Badge", href: "https://homecoming.wiki/wiki/Death_Denied_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/death-denied.png"}
    ],
};
