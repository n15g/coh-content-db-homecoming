import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Assassin: IBadgeData = {
    type: BadgeType.AE,
    key: "assassin",
    setTitleId: 1319,
    names: [
        {value: "Assassin"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've defeated your first custom enemy during a published Architect mission earning yourself the Assassin badge."}],
    acquisition: "Defeat one custom enemy inside a published Mission Architect arc.",
    links: [
        {title: "Assassin Badge", href: "https://homecoming.wiki/wiki/Assassin_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/assassin.png"}]
};
