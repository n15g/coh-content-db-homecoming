import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const GrandLanista: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "grand-lanista",
    setTitleId: 474,
    names: [
        {value: "Grand Lanista"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Continued success has earned you fame as a manager of gladiators."},
        {type: Alternate.V, value: "You have achieved great fame as a manager of gladiators in the Arena."}
    ],
    acquisition: "Win ten Gladiator matches in the Arena (Arena)",
    links: [
        {title: "Grand Lanista Badge", href: "https://homecoming.wiki/wiki/Grand_Lanista_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
