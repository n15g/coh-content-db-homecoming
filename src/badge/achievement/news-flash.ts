import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const NewsFlash: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "news-flash",
    setTitleId: 2073,
    names: [
        {value: "News Flash"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You managed to successfully complete each major broadcast to the people of Praetoria within a " +
        "few minutes, establishing to the world that Tyrant's Imperial forces are no obstacle to the " +
        "Incarnates and their mission to deliver the truth to the people during the raid on TPN Campus."}
    ],
    acquisition: "Complete all three 500-point Public Opinion challenges, taking no more than 8 minutes per challenge, and then finish the TPN Campus Trial",
    links: [
        {title: "News Flash Badge", href: "https://paragonwiki.com/wiki/News_Flash_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-tpn.png"}
    ],
};