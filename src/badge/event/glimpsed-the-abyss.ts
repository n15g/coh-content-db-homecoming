import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GlimpsedTheAbyss: IBadgeData = {
    type: BadgeType.EVENT,
    key: "glimpsed-the-abyss",
    names: [
        {value: "Glimpsed the Abyss"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've taken down 100 Zombie Minions, showing you have Glimpsed the Abyss."},
    ],
    acquisition: "Defeat 100 Zombie minions during Zombie Apocalypses.",
    links: [
        {title: "Glimpsed the Abyss Badge", href: "https://paragonwiki.com/wiki/Glimpsed_the_Abyss_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/glimpsed-the-abyss.png"}]
};
