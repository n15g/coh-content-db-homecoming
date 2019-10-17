import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const KnifeButcher: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "knife-butcher",
    names: [
        {value: "Knife Butcher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You destroyed the source of the Knives of Vengeance, ending both their reign and also whatever " +
        "was left of the Knives of Artemis."}
    ],
    acquisition: "Complete the story arc from Max",
    links: [
        {title: "Knife Butcher Badge", href: "https://paragonwiki.com/wiki/Knife_Butcher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png"}
    ],
};