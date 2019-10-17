import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Isolator: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "isolator",
    setTitleId: 39,
    names: [
        {value: "Isolator"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You began your career on a high note, by personally ending the riots of contaminated thugs in " +
        "the Outbreak Zone."},
        {type: Alternate.V, value: "When you were first brawling Contaminated in the Outbreak Zone, did you ever think that one " +
        "day you'd be known as a villain?"}
    ],
    acquisition: "Defeat 100 Contaminated",
    links: [
        {title: "Isolator Badge", href: "https://paragonwiki.com/wiki/Isolator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/isolator.png"}
    ],
};