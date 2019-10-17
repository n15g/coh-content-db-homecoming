import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Infiltrator: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "infiltrator",
    setTitleId: 42,
    names: [
        {value: "Infiltrator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have learned that the Paragon Protectors are an arm of Crey, and not simply an independent " +
        "group hired by them."}
    ],
    acquisition: "Defeat 200 Crey Paragon Protectors",
    links: [
        {title: "Infiltrator Badge", href: "https://paragonwiki.com/wiki/Infiltrator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/infiltrator.png"}
    ],
};