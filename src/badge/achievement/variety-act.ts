import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const VarietyAct: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "variety-act",
    setTitleId: 2523,
    names: [
        {value: "Variety Act"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: `In order to properly demonstrate your dominance, it's important you make sure everyone else knows you're a big deal. Towards that, you've elected to keep your most varied rivals close to ensure you're ready to tackle anybody who might become a threat.`
        }
    ],
    acquisition: `Complete a Task or Strike Force with a team that qualifies for Role Diversity.`,
    links: [
        {title: "Variety Act Badge", href: "https://homecoming.wiki/wiki/Variety_Act_Badge"}
    ],
    icons: [
		{type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/variety-act-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/variety-act-v.png"}
    ],
};