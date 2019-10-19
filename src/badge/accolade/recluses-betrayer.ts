import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ReclusesBetrayer: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "recluses-betrayer",
    setTitleId: 398,
    names: [
        {type: Alternate.H, value: "Recluse's Betrayer"},
        {type: Alternate.V, value: "Recluse's Right Hand"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Lord Recluse was wrong to place his trust in you.`}
    ],
    notes: `Complete every story arc from Black Scorpion, Captain Mako, Ghost Widow, Scirocco and Lord Recluse to earn this badge. [Rewards 20 Merits]`,
    links: [
        {title: "Recluse's Betrayer Badge", href: "https://paragonwiki.com/wiki/Recluse%27s_Betrayer_Badge"},
        {title: "Recluse's Right Hand Badge", href: "https://paragonwiki.com/wiki/Recluse%27s_Right_Hand_Badge"}
    ]
};