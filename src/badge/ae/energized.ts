import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Energized: IBadgeData = {
    type: BadgeType.AE,
    key: "energized",
    setTitleId: 1206,
    names: [
        {value: "Energized"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned your first Inspiration while playing an Architect Mission, earning yourself the Energized badge."}],
    acquisition: "Earn one inspiration drop while playing a published Mission Architect mission.",
    links: [
        {title: "Energized Badge", href: "https://paragonwiki.com/wiki/Energized_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/energized.png"}]
};
