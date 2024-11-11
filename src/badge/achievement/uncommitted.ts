import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Uncommitted: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "uncommitted",
    setTitleId: 2536,
    names: [
        {value: "Uncommitted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: `There's so many options sometimes in life, you can't help but have a difficult time choosing. You've completed a few Alignment Tip missions and made a couple moral decisions.`}
    ],
    acquisition: "Complete 5 Alignment Tip missions.",
    links: [
        {title: "Uncommitted Badge", href: "https://homecoming.wiki/wiki/Uncommitted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/alignment-tips.png"}
    ],
};
