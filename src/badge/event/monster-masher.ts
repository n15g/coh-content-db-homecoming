import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MonsterMasher: IBadgeData = {
    type: BadgeType.EVENT,
    key: "monster-masher",
    names: [
        {value: "Monster Masher"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You helped thwart the schemes of the horrifying Abominations by destroying their Banner of Mayhem."},
    ],
    acquisition: "Defeat the Banner of Mayhem during a Deadly Apocalypse.",
    links: [
        {title: "Monster Masher Badge", href: "https://paragonwiki.com/wiki/Monster_Masher_Badge"}
    ],
    imageKeys: [{value: "core.event.monster-masher"}]
};
