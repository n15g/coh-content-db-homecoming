import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Apostate: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "apostate",
    setTitleId: 2170,
    names: [
        {value: "Apostate"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defied an entire pantheon by smashing the implements of their vile will."}
    ],
    acquisition: "Defeat 100 points worth of Incarnate-level Banished Pantheon",
    links: [
        {title: "Apostate Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Apostate_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/apostate.png"}
    ],
};
