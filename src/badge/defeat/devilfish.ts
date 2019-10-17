import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Devilfish: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "devilfish",
    setTitleId: 207,
    names: [
        {value: "Devilfish"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have helped defeat the giant octopus, Lusca, from terrorizing Independence Port."}
    ],
    acquisition: "Defeat Lusca, a monster that spawns in Independence Port",
    links: [
        {title: "Devilfish Badge", href: "https://paragonwiki.com/wiki/Devilfish_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/devilfish.png"}
    ],
};