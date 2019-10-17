import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const HammerDown: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "hammer-down",
    setTitleId: 304,
    names: [
        {value: "Hammer Down"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "That'll teach Scrapyard to mess with you."}
    ],
    acquisition: "Defeat the Ghost of Scrapyard, a monster that spawns in Sharkhead Isle",
    links: [
        {title: "Hammer Down Badge", href: "https://paragonwiki.com/wiki/Hammer_Down_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/scrapyarder.png"}
    ],
};