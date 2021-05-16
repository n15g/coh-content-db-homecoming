import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Hunter: IBadgeData = {
    type: BadgeType.EVENT,
    key: "hunter",
    setTitleId: 185,
    names: [
        {value: "Hunter"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 20 of the nefarious Vampires who rose from their graves on Halloween."},
    ],
    acquisition: "Defeat 20 Nefarious Vampires during the Halloween event.",
    links: [
        {title: "Hunter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hunter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/hunter.png"}]
};
