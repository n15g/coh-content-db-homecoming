import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Raver: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "raver",
    setTitleId: 218,
    names: [
        {value: "Raver"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You have helped clean up the streets of the raving Trolls."},
        {type: Alternate.V, value: "You crashed, smashed, and bashed the raving Trolls party into the ground."}
    ],
    acquisition: "Defeat 50 Glowing Trolls during a Troll Rave",
    links: [
        {title: "Raver Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Raver_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/raver.png"}
    ],
};
