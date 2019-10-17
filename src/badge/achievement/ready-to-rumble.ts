import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ReadyToRumble: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "ready-to-rumble",
    names: [
        {value: "Ready to Rumble"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Pendragon, Chimera, Shadowhunter, Black Swan, and a legion of IDF fell before you and your " +
        "league with startling rapidity.  By demonstrating your speed at mowing through Praetoria's " +
        "last line of defense, you have proven that you are Ready to Rumble!"}
    ],
    acquisition: "Defeat Black Swan sooner than 8 minutes after entering the Magisterium",
    links: [
        {title: "Ready to Rumble Badge", href: "https://paragonwiki.com/wiki/Ready_to_Rumble_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/ready-to-rumble.png"}
    ],
};