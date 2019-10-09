import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const NinjaMonkey: IBadgeData = {
    type: BadgeType.EVENT,
    key: "ninja-monkey",
    names: [
        {value: "Ninja Monkey"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You defeated a total of 75 Ninjas and Monkeys during a single match in the Summer Blockbuster 'Time Gladiator'."},
    ],
    acquisition: "In the Summer Blockbuster, defeat a total of 75 ninjas and monkeys during a single \"Time Gladiator\" match.",
    links: [
        {title: "Ninja Monkey Badge", href: "https://paragonwiki.com/wiki/Ninja_Monkey_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/ninja-monkey.png"}]
};
