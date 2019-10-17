import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Pirate: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "pirate",
    setTitleId: 248,
    names: [
        {value: "Pirate"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have trapped 10 Ghosts.  You are now an honorary Pirate."}
    ],
    acquisition: "Defeat 100 Spectral Pirates.",
    links: [
        {title: "Pirate Badge", href: "https://paragonwiki.com/wiki/Pirate_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ghosts.png"}
    ],
};
