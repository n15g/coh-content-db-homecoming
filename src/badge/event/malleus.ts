import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Malleus: IBadgeData = {
    type: BadgeType.EVENT,
    key: "malleus",
    setTitleId: 189,
    names: [
        {value: "Malleus"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 75 witches, sorcerous crones who use dark magicks."},
    ],
    acquisition: "Defeat 75 Witches during the Halloween event.",
    links: [
        {title: "Malleus Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Malleus_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/malleus.png"}]
};
