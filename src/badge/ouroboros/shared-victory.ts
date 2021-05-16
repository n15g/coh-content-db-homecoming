import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SharedVictory: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "shared-victory",
    setTitleId: 858,
    names: [
        {value: "Shared Victory"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback under the parameter of "5 Defeats Allowed" for the team.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback under the parameter of "5 Defeats Allowed" for the team.`}
    ],
    acquisition: "Complete a Flashback story arc with five or fewer defeats.",
    links: [
        {title: "Shared Victory Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Shared_Victory_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/shared-victory.png"}]
};
