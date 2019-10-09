import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const EvilsResident: IBadgeData = {
    type: BadgeType.EVENT,
    key: "evils-resident",
    names: [
        {value: "Evil's Resident"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've taken down 25 Zombie Minions, showing you have Glimpsed the Abyss."},
    ],
    acquisition: "Defeat 25 Zombie minions during Zombie Apocalypses.",
    links: [
        {title: "Evil's Resident Badge", href: "https://paragonwiki.com/wiki/Evil%27s_Resident_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/evils-resident.png"}]
};
