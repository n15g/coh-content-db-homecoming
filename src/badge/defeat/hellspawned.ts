import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Hellspawned: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "hellspawned",
    setTitleId: 1,
    names: [
        {value: "Hellspawned"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've whupped those Hellions, but good."}
    ],
    acquisition: "Defeat 50 Hellions Damned",
    links: [
        {title: "Hellspawned Badge", href: "https://homecoming.wiki/wiki/Hellspawned_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/hellspawned.png"}
    ],
};
