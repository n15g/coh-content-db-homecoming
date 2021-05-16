import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Privateer: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "privateer",
    setTitleId: 52,
    names: [
        {value: "Privateer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have put a huge dent into the pocketbooks of the Sky Raiders by destroying their most " +
                "expensive equipment, the Sky Skiffs."
        }
    ],
    acquisition: "Defeat 100 Sky Raiders Sky Skiffs",
    links: [
        {title: "Privateer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Privateer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/privateer.png"}
    ],
};
