import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const BailoutHero: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "bailout-hero",
    setTitleId: 2206,
    names: [
        {type: Alternate.H, value: "Bailout Hero"},
        {type: Alternate.V, value: "Bailout Villain"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The Freedom Phalanx and Vindicators were absorbed by Mot in their efforts to free Praetor Duncan. You worked together with a team of super powered individuals and Dream Doctor to save them and Praetor Duncan, while also destroying Diabolique once and for all.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png"}],
    acquisition: "Awarded after completing the Dream Doctor mission to complete the Dilemma Diabolique trial.",
    links: [
        {title: "Bailout Hero Badge", href: "https://homecoming.wiki/wiki/Bailout_Hero_Badge"},
        {title: "Bailout Villain Badge", href: "https://homecoming.wiki/wiki/Bailout_Villain_Badge"}
    ],
};
