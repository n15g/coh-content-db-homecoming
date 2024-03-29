import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WalksTheLine: IBadgeData = {
    type: BadgeType.AE,
    key: "walks-the-line",
    setTitleId: 1475,
    names: [
        {value: "Walks the Line"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned this badge by playing an Architect mission marked as Vigilante content."}],
    acquisition: "Complete a Mission Architect storyarc marked as Vigilante alignment.",
    links: [
        {title: "Walks the Line Badge", href: "https://homecoming.wiki/wiki/Walks_the_Line_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/walks-the-line.png"}]
};
