import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Cunning: IBadgeData = {
    type: BadgeType.AE,
    key: "cunning",
    setTitleId: 1476,
    names: [
        {value: "Cunning"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned this badge by playing an Architect mission marked as Rogue content."}],
    acquisition: "Complete a Mission Architect storyarc marked as Rogue alignment.",
    links: [
        {title: "Cunning Badge", href: "https://homecoming.wiki/wiki/Cunning_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/cunning.png"}]
};
