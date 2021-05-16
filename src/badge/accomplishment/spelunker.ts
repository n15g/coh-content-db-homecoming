import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Spelunker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "spelunker",
    setTitleId: 72,
    names: [
        {value: "Spelunker"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have freed a local fortune teller from the clutches of the Circle of Thorns."}
    ],
    acquisition: "Complete the Rescue Fortune Teller mission from Dr. Trevor Seaborn, Hugo Redding, or Haley Philips",
    links: [
        {title: "Spelunker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Spelunker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spelunker.png"}
    ],
};
