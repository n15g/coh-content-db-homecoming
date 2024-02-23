import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Poltergeist: IBadgeData = {
    type: BadgeType.PVP,
    key: "poltergeist",
    setTitleId: 582,
    names: [
        {value: "Poltergeist"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have helped defeat Ghost Widow in Recluse's Victory."}
    ],
    acquisition: "Defeat Ghost Widow in Recluse's Victory",
    links: [
        {title: "Poltergeist Badge", href: "https://homecoming.wiki/wiki/Poltergeist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/poltergeist.png"}
    ],
};
