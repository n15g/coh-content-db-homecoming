import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ColdWarrior: IBadgeData = {
    type: BadgeType.EVENT,
    key: "cold-warrior",
    names: [
        {value: "Cold Warrior"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have defeated 100 of the living snow creatures who plague Paragon City."},
        {type: Alternate.V, value: "You have defeated 100 of the living snow creatures who plagued the Rogue Isles."}
    ],
    acquisition: "Defeating 100 enemies in the Winter Horde during the Winter Event.",
    links: [
        {title: "Cold Warrior Badge", href: "https://paragonwiki.com/wiki/Cold_Warrior_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/cold-warrior.png"}]
};
