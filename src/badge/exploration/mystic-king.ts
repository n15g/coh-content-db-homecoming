import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const MysticKing: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "mystic-king",
    names: [
        {type: Alternate.M, value: "Mystic King"},
        {type: Alternate.F, value: "Mystic Queen"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [-376.0, 70.0, 245.0],
    badgeText: [{
        value: "Ley Lines are powerful forces of mystical energy that crisscross the planet. Where they meet is called a nexus, and all magic is stronger for miles around."
    }],
    notes: "The Mystic King Badge is located in Kings Row on a rooftop in the SW part of the Gish neighborhood, 144 yards NNW of the Pocket D entrance.",
    links: [
        {title: "Mystic King Badge", href: "https://paragonwiki.com/wiki/Mystic_King_Badge"},
        {title: "Mystic Queen Badge", href: "https://paragonwiki.com/wiki/Mystic_Queen_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "3"
};
