import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BunkerBuster: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "bunker-buster",
    setTitleId: 1991,
    names: [
        {value: "Bunker Buster"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Your league's coordinated strike blew the hinges off multiple bunker doors at once during your " +
        "fight at Keyes Island Reactor."}
    ],
    acquisition: "During the Keyes Island Reactor Trial, bust down all three doors on a bunker within three seconds, and then repeat for all bunkers near Reactor Infinity",
    links: [
        {title: "Bunker Buster Badge", href: "https://paragonwiki.com/wiki/Bunker_Buster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png"}
    ],
};