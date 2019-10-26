import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const DividedMastery: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "divided-mastery",
    setTitleId: 856,
    names: [
        {value: "Divided Mastery"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback under the parameter of "1 Defeat Allowed" for the team.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback under the parameter of "1 Defeat Allowed" for the team.`}
    ],
    acquisition: "Complete a Flashback story arc with one or fewer defeats.",
    links: [
        {title: "Divided Mastery Badge", href: "https://paragonwiki.com/wiki/Divided_Mastery_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/divided-mastery.png"}]
};
