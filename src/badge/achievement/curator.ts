import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Curator: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "curator",
    names: [
        {value: "Curator"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Colllect 200 Souvenirs",
    links: [
        {title: "Curator Badge", href: "https://paragonwiki.com/wiki/Curator_Badge"}
    ],
};
