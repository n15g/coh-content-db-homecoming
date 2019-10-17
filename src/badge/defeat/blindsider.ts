import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Blindsider: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "blindsider",
    setTitleId: 1468,
    names: [
        {value: "Blindsider"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Seers never saw you coming! You defeated plenty of Seers to earn this badge."}
    ],
    acquisition: "Defeat 100 points worth of Seers",
    links: [
        {title: "Blindsider Badge", href: "https://paragonwiki.com/wiki/Blindsider_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/blindsider.png"}
    ],
};