import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Sentry: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "sentry",
    setTitleId: 833,
    names: [
        {value: "Sentry"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 100 of the invading Rikti hordes!"}
    ],
    acquisition: "Defeat 100 Rikti during a Rikti World Invasion",
    links: [
        {title: "Sentry Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sentry_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/new-rikti.png"}
    ],
};
