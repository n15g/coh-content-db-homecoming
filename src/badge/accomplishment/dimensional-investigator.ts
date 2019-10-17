import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DimensionalInvestigator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "dimensional-investigator",
    names: [
        {value: "Dimensional Investigator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You found a lot of odd things during your fight to hold the last area of Praetoria. Some make " +
        "sense, while others leave you with more questions than answers."}
    ],
    acquisition: "Find all the Easter eggs in each of missions from Number Six",
    links: [
        {title: "Dimensional Investigator Badge", href: "https://paragonwiki.com/wiki/Dimensional_Investigator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate-challenge.png"}
    ],
};