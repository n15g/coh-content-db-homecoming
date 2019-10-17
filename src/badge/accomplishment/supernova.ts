import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Supernova: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "supernova",
    setTitleId: 2016,
    names: [
        {value: "Supernova"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Shining Stars have stopped a Praetorian plot to destroy Paragon, but at great cost."}
    ],
    acquisition: "Complete the Level 15-19 Ongoing Training story arc from Twinshot",
    links: [
        {title: "Supernova Badge", href: "https://paragonwiki.com/wiki/Supernova_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/supernova.png"}
    ],
};