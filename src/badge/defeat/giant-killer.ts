import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const GiantKiller: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "giant-killer",
    setTitleId: 428,
    names: [
        {value: "Giant Killer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have felled the mighty Jack in Irons, earning the title Giant Killer."}
    ],
    acquisition: "Defeat Jack in Irons, a monster that spawns in Croatoa",
    links: [
        {title: "Giant Killer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Giant_Killer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/giant-killer.png"}
    ],
};
