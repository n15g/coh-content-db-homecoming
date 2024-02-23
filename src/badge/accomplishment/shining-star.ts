import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ShiningStar: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "shining-star",
    setTitleId: 2014,
    names: [
        {value: "Shining Star"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You and your friends have proven your worth to Manticore, and gained a high-profile benefactor."}
    ],
    acquisition: "Complete the Level 5-9 Ongoing Training story arc from Twinshot",
    links: [
        {title: "Shining Star Badge", href: "https://homecoming.wiki/wiki/Shining_Star_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/shining-star.png"}
    ],
};
