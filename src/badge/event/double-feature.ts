import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DoubleFeature: IBadgeData = {
    type: BadgeType.EVENT,
    key: "double-feature",
    names: [
        {value: "Double Feature"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Summer Blockbuster Double Feature."},
    ],
    acquisition: "Complete both the 'Time Gladiator' and 'Casino Heist' parts of the Summer Blockbuster Event.",
    links: [
        {title: "Double Feature Badge", href: "https://paragonwiki.com/wiki/Double_Feature_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/double-feature.png"}]
};
