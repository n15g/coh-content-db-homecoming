import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ProportionalSupremacy: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "proportional-supremacy",
    setTitleId: 857,
    names: [
        {value: "Proportional Supremacy"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback under the parameter of "3 Defeats Allowed" for the team.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback under the parameter of "3 Defeats Allowed" for the team.`}
    ],
    acquisition: "Complete a Flashback story arc with three or fewer defeats.",
    links: [
        {title: "Proportional Supremacy Badge", href: "https://paragonwiki.com/wiki/Proportional_Supremacy_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/proportional-supremacy.png"}]
};
