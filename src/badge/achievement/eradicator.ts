import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Eradicator: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "eradicator",
    names: [
        {value: "Eradicator"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Deal 50,000,000 damage to earn this badge.",
    links: [
        {title: "Eradicator Badge", href: "https://paragonwiki.com/wiki/Eradicator_Badge"}
    ],
};
