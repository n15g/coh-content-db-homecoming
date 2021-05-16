import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const IronWarrior: IBadgeData = {
    type: BadgeType.EVENT,
    key: "iron-warrior",
    setTitleId: 698,
    names: [
        {value: "Iron Warrior"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated the Halloween Jack in Irons."},
    ],
    acquisition: "Defeat Jack in Irons during the Halloween event.",
    links: [
        {title: "Iron Warrior Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Iron_Warrior_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/iron-warrior.png"}]
};
