import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Valet: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "valet",
    setTitleId: 2391,
    names: [
        {value: "Valet"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `You have kept Paragon City's vehicles safe during a Freakshow rampage.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/valet.png"}],
    acquisition: "Keep Paragon City's vehicles safe during a freakshow rampage.",
    links: [
        {title: "Valet Badge", href: "https://paragonwiki.com/wiki/Valet_Badge"}
    ],
};