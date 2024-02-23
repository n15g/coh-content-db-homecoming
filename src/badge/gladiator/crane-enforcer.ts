import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CraneEnforcer: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "crane-enforcer",
    setTitleId: 478,
    names: [
        {value: "Crane Enforcer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Tsoo are bound by honor to serve you."}
    ],
    acquisition: "Earn the [badge:tracer] Badge (Tsoo)",
    links: [
        {title: "Crane Enforcer Badge", href: "https://homecoming.wiki/wiki/Crane_Enforcer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
