import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gamer: IBadgeData = {
    type: BadgeType.AE,
    key: "gamer",
    names: [
        {value: "Gamer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've experienced your first player created story arc in the Mission Architect."}],
    acquisition: "Play one Mission Architect story arc.",
    links: [
        {title: "Gamer Badge", href: "https://paragonwiki.com/wiki/Gamer_Badge"}
    ],
    icons: [{value: "core.ae.gamer"}]
};
