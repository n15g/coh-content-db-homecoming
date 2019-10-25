import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HeartOfHatred: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "heart-of-hatred",
    setTitleId: 2193,
    names: [
        {value: "Heart of Hatred"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You fought against Mot, the essence of hatred, and managed to win, saving the world from being " +
        "devoured whole by the creature."}
    ],
    acquisition: "Complete the final story arc from Dream Doctor",
    links: [
        {title: "Heart of Hatred Badge", href: "https://paragonwiki.com/wiki/Heart_of_Hatred_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png"}
    ],
};