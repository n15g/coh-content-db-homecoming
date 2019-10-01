import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Cunning: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "cunning",
    names: [
        {value: "Cunning"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned this badge by playing an Architect mission marked as Rogue content."}],
    acquisition: "Complete a Mission Architect storyarc marked as Rogue alignment.",
    links: [
        {title: "Cunning Badge", href: "https://paragonwiki.com/wiki/Cunning_Badge"}
    ],
    imageKeys: [{value: "core.ae.cunning"}]
};
