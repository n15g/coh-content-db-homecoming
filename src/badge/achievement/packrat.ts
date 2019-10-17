import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Packrat: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "packrat",
    setTitleId: 2365,
    names: [
        {value: "Packrat"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Colllect 100 Souvenirs",
    links: [
        {title: "Packrat Badge", href: "https://paragonwiki.com/wiki/Packrat_Badge"}
    ],
};
