import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WalksTheLine: IBadgeData = {
    type: BadgeType.AE,
    key: "walks-the-line",
    names: [
        {value: "Walks the Line"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned this badge by playing an Architect mission marked as Vigilante content."}],
    acquisition: "Complete a Mission Architect storyarc marked as Vigilante alignment.",
    links: [
        {title: "Walks the Line Badge", href: "https://paragonwiki.com/wiki/Walks_the_Line_Badge"}
    ],
    imageKeys: [{value: "core.ae.walks-the-line"}]
};
