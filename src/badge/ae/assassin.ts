import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Assassin: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "assassin",
    names: [
        {value: "Assassin"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've defeated your first custom enemy during a published Architect mission earning yourself the Assassin badge."}],
    acquisition: "Defeat one custom enemy inside a published Mission Architect arc.",
    links: [
        {title: "Assassin Badge", href: "https://paragonwiki.com/wiki/Assassin_Badge"}
    ],
    imageKeys: [{value: "core.ae.assassin"}]
};
