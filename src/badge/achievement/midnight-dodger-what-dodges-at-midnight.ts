import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MidnightDodgerWhatDodgesAtMidnight: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "midnight-dodger-what-dodges-at-midnight",
    names: [
        {value: "Midnight Dodger What Dodges at Midnight"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Director 11 may be a master of demolitions, but you showed him you're a master at dodging " +
        "bombs."}
    ],
    acquisition: "Set off zero proximity mines during the warehouse battle in the first mission of the Tin Mage Mark II Task Force",
    links: [
        {title: "Midnight Dodger What Dodges at Midnight Badge", href: "https://paragonwiki.com/wiki/Midnight_Dodger_What_Dodges_at_Midnight_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png"}
    ],
};