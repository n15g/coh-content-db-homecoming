import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TourGuide: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "tour-guide",
    setTitleId: 1997,
    names: [
        {value: "Tour Guide"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "While escorting Desdemona through the Underground, you never let her drop below half health."}
    ],
    acquisition: "Don't let Desdemona's health go below 50% during The Underground Trial",
    links: [
        {title: "Tour Guide Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Tour_Guide_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png"}
    ],
};
