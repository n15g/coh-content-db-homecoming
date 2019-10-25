import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Charmer: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "charmer",
    setTitleId: 69,
    names: [
        {value: "Charmer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have defeated the Hydra, a major threat to the sewer network of Paragon City."}
    ],
    acquisition: "Complete the Abandoned Sewers Trial",
    links: [
        {title: "Charmer Badge", href: "https://paragonwiki.com/wiki/Charmer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png"}
    ],
};