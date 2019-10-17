import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Cannibal: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "cannibal",
    setTitleId: 1472,
    names: [
        {value: "Cannibal"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Ghouls only understand one thing. Strength. You've proven that you have that in spades. " +
        "You defeated hordes of Ghouls to earn this badge."}
    ],
    acquisition: "Defeat 100 points worth of Ghouls",
    links: [
        {title: "Cannibal Badge", href: "https://paragonwiki.com/wiki/Cannibal_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cannibal.png"}
    ],
};