import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gamer: IBadgeData = {
    type: BadgeType.AE,
    key: "gamer",
    setTitleId: 1106,
    names: [
        {value: "Gamer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've experienced your first player created story arc in the Mission Architect."}],
    acquisition: "Play one Mission Architect story arc.",
    links: [
        {title: "Gamer Badge", href: "https://paragonwiki.com/wiki/Gamer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/gamer.png"}]
};
