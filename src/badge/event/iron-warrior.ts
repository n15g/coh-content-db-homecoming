import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const IronWarrior: IBadgeData = {
    type: BadgeType.EVENT,
    key: "iron-warrior",
    names: [
        {value: "Iron Warrior"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated the Halloween Jack in Irons."},
    ],
    acquisition: "Defeat Jack in Irons during the Halloween event.",
    links: [
        {title: "Iron Warrior Badge", href: "https://paragonwiki.com/wiki/Iron_Warrior_Badge"}
    ],
    imageKeys: [{value: "core.event.iron-warrior"}]
};
