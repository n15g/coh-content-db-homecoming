import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Destructive: IBadgeData = {
    type: BadgeType.AE,
    key: "destructive",
    setTitleId: 1250,
    names: [
        {value: "Destructive"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've destroyed your first object during an Architect mission, earning yourself the Destructive badge."}],
    acquisition: "Destroy a destructible object inside a published Mission Architect mission.",
    links: [
        {title: "Destructive Badge", href: "https://homecoming.wiki/wiki/Destructive_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/destructive.png"}]
};
