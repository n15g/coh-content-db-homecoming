import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ItsyBitsy: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "itsy-bitsy",
    names: [
        {value: "Itsy Bitsy"}
    ],
    alignment: ALIGNMENT_HERO,
    acquisition: "Defeat the Jade Spider in Trading Places (Hero version).",
    links: [
        {title: "Itsy Bitsy Badge", href: "https://paragonwiki.com/wiki/Itsy_Bitsy_Badge"}
    ],
};
