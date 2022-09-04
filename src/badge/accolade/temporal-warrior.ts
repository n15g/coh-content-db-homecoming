import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TemporalWarrior: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "temporal-warrior",
    setTitleId: 1629,
    names: [
        {value: "Temporal Warrior"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Your connection to your home timeline has been severed. Your only purpose now is eternal battle for a future you will never reach.`},
    ],
    acquisition: `Awarded on initial login of a PvP-only Temporal Warrior character`,
    links: [
        {title: "Temporal Warrior Badge", href: "https://homecoming.wiki/wiki/Temporal_Warrior_Badge"},
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/char-creation.png"}
    ]
};
