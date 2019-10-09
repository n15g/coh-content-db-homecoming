import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const VirtuallyImpulsive: IBadgeData = {
    type: BadgeType.AE,
    key: "virtually-impulsive",
    names: [
        {value: "Virtually Impulsive"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've clicked on your first mission objective in Test Mode earning yourself the Virtually Impulsive badge."}],
    acquisition: "Earn this badge by interacting with any mission objective while in Test Mode.",
    links: [
        {title: "Virtually Impulsive Badge", href: "https://paragonwiki.com/wiki/Virtually_Impulsive_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/virtually-impulsive.png"}]
};
