import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Terminator: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "terminator",
    setTitleId: 1323,
    names: [
        {value: "Terminator"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `Given your past deeds, many of Paragon City's citizens are understandably wary of you.`},
        {type: Alternate.V, value: `The citizens of Paragon City flee in terror when they see you coming.`}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/terminator.png"}],
    acquisition: "Kill 1000 citizens in mayhem missions",
    links: [
        {title: "Terminator Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Terminator_Badge"}
    ],
};
