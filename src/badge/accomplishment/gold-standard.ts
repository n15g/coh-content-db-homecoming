import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const GoldStandard: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "gold-standard",
    setTitleId: 2476,
    names: [
        {value: "Gold Standard"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You assisted Dr. Aeon in finally settling the score with King Midas and his Gold Brickers who were manipulating the local gold market using unstable dimensional counterfeits in order to establish themselves as independent players on the Rogue Isles. You've shown them the real measure of what passes the quality standard for gold.`
        }
    ],
    acquisition: `Complete Dr. Aeon's Strike Force.`,
    links: [
        {title: "Gold Standard Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gold_Standard_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/gold-standard.png"}
    ],
};