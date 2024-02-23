import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Bladegrass: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "bladegrass",
    setTitleId: 485,
    names: [
        {value: "Bladegrass"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have the respect of the natural world."}
    ],
    acquisition: "Defeat 300 Devouring Earth tree-creatures (Devouring Earth)",
    links: [
        {title: "Bladegrass Badge", href: "https://homecoming.wiki/wiki/Bladegrass_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
