import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Valet: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "valet",
    names: [
        {value: "Valet"}
    ],
    alignment: ALIGNMENT_HERO,
    acquisition: "Keep Paragon City's vehicles safe during a freakshow rampage.",
    links: [
        {title: "Valet Badge", href: "https://paragonwiki.com/wiki/Valet_Badge"}
    ],
};