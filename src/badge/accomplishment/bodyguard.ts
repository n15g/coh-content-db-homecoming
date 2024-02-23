import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Bodyguard: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "bodyguard",
    setTitleId: 84,
    names: [
        {value: "Bodyguard"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You stopped the assassination of a Rikti peace negotiator."}
    ],
    acquisition: "Complete the Rescue Rikti negotiator quickly mission from Crimson",
    links: [
        {title: "Bodyguard Badge", href: "https://homecoming.wiki/wiki/Bodyguard_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/bodyguard.png"}
    ],
};
