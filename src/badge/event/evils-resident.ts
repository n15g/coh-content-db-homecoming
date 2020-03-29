import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const EvilsResident: IBadgeData = {
    type: BadgeType.EVENT,
    key: "evils-resident",
    setTitleId: 1022,
    names: [
        {value: "Evil's Resident"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've defeated 25 Zombie Bosses, making your place of occupation a Home of the Dead."},
    ],
    acquisition: "Defeat 25 Zombie bosses during Zombie Apocalypses.",
    links: [
        {title: "Evil's Resident Badge", href: "https://paragonwiki.com/wiki/Evil%27s_Resident_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/evils-resident.png"}]
};
