import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gangbuster: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "gangbuster",
    setTitleId: 309,
    names: [
        {value: "Gangbuster"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Family knows better than to mess with you."}
    ],
    acquisition: "Defeat 200 minions or lieutenants of The Family.",
    links: [
        {title: "Gangbuster Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gangbuster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/gangbuster.png"}
    ],
};
