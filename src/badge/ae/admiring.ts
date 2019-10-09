import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Admiring: IBadgeData = {
    type: BadgeType.AE,
    key: "admiring",
    names: [
        {value: "Admiring"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've played a \"Developer's Choice\" Mission Architect story arc earning the Admiring Badge."}],
    acquisition: "Complete one Developer's Choice story arc.",
    links: [
        {title: "Admiring Badge", href: "https://paragonwiki.com/wiki/Admiring_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/admiring.png"}]
};
