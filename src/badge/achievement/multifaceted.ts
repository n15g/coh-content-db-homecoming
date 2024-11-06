import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Multifaceted: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "multifaceted",
    setTitleId: 2538,
    names: [
        {value: "Multifaceted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You've walked too many roads of life to count, and your experience affords you a position of reflection and wisdom. You've completed countless Alignment Tip missions and made many moral decisions."}
    ],
    acquisition: "Earn this badge by completing 25 Alignment Tip missions.",
    links: [
        {title: "Multifaceted Badge", href: "https://homecoming.wiki/wiki/Multifaceted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/alignment-mission.png"}
    ],
};
