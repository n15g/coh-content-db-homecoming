import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const BlackenedSoul: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "blackened-soul",
    setTitleId: 2018,
    names: [
        {value: "Blackened Soul"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "Having won the contest by besting your rivals, you've been given the task of now dealing with " +
                "them... permanently."
        }
    ],
    acquisition: "Complete the Level 10-14 Ongoing Training story arc from Dr. Graves",
    links: [
        {title: "Blackened Soul Badge", href: "https://homecoming.wiki/wiki/Blackened_Soul_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/blackened-soul.png"}
    ],
};
