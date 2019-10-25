import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PoorImpulseControl: IBadgeData = {
    type: BadgeType.AE,
    key: "poor-impulse-control",
    setTitleId: 1172,
    names: [
        {value: "Poor Impulse Control"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've clicked on your first mission objective in an Architect Mission earning yourself the Poor Impulse Control badge."}],
    acquisition: "Earn this badge by interacting with one required mission objectives while on an Architect mission.",
    links: [
        {title: "Poor Impulse Control Badge", href: "https://paragonwiki.com/wiki/Poor_Impulse_Control_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/poor-impulse-control.png"}]
};
