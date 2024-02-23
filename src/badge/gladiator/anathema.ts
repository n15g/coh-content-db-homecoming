import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Anathema: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "anathema",
    setTitleId: 484,
    names: [
        {value: "Anathema"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "These Lost serve you grudgingly."}
    ],
    acquisition: "Earn the [badge:finder] Badge (The Lost)",
    links: [
        {title: "Anathema Badge", href: "https://homecoming.wiki/wiki/Anathema_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
