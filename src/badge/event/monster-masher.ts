import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MonsterMasher: IBadgeData = {
    type: BadgeType.EVENT,
    key: "monster-masher",
    setTitleId: 1370,
    names: [
        {value: "Monster Masher"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You helped thwart the schemes of the horrifying Abominations by destroying their Banner of Mayhem."},
    ],
    acquisition: "Defeat the Banner of Mayhem during a Deadly Apocalypse.",
    links: [
        {title: "Monster Masher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Monster_Masher_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/monster-masher.png"}]
};
