import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const MadeAStand: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "made-a-stand",
    setTitleId: 1446,
    names: [
        {value: "Made a Stand"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "Your morality has been demonstrated to all, at least for today. You completed a Morality " +
                "Mission to earn this badge."
        },
        {type: Alternate.V, value: "You strove for what you believe in and, against all odds, came out on top."}
    ],
    acquisition: "Complete a Morality Mission through Tips  Requires Going Rogue.",
    links: [
        {title: "Made a Stand Badge", href: "https://homecoming.wiki/wiki/Made_a_Stand_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/made-a-stand-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/made-a-stand-v.png"}
    ],
};
