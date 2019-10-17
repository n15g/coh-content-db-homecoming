import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AlreadyDead: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "already-dead",
    names: [
        {value: "Already Dead"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Battle Maiden thought she was all powerful, but you put her down before she knew what was " +
        "happening."}
    ],
    acquisition: "Defeat Battle Maiden within 15 minutes in the Apex Task Force",
    links: [
        {title: "Already Dead Badge", href: "https://paragonwiki.com/wiki/Already_Dead_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-tinmage.png"}
    ],
};