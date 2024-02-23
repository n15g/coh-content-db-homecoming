import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const SoulTaker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "soul-taker",
    setTitleId: 339,
    names: [
        {value: "Soul Taker"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The wizard Tarixus taught you dark secrets of the infernal realms in this mission."}
    ],
    acquisition: "Complete the Offer soul of Akarist mission from Archmage Tarixus",
    links: [
        {title: "Soul Taker Badge", href: "https://homecoming.wiki/wiki/Soul_Taker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-5.png"}
    ],
};
