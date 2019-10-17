import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const BailoutHero: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "bailout-hero",
    names: [
        {type: Alternate.H, value: "Bailout Hero"},
        {type: Alternate.V, value: "Bailout Villain"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Awarded after completing the Dream Doctor mission to complete the Dilemma Diabolique trial.",
    links: [
        {title: "Bailout Hero Badge", href: "https://paragonwiki.com/wiki/Bailout_Hero_Badge"},
        {title: "Bailout Villain Badge", href: "https://paragonwiki.com/wiki/Bailout_Villain_Badge"}
    ],
};