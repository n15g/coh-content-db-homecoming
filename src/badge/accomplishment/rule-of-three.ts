import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const RuleOfThree: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "rule-of-three",
    setTitleId: 1589,
    names: [
        {value: "Rule of Three"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You've joined the Freedom Phalanx's Task Force Program. In the process of proving yourself to " +
        "Positron, you uncovered three villainous plots involving the Faultline Dam."},
        {type: Alternate.V, value: "You've ditched the Freedom Phalanx's Task Force Program. You proved yourself to Positron by " +
        "uncovering the Faultline Dam plots, but then turned your back on him."}
    ],
    acquisition: "Complete the first part of the new Positron Task Force",
    links: [
        {title: "Rule of Three Badge", href: "https://paragonwiki.com/wiki/Rule_of_Three_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/rule-of-three.png"}
    ],
};