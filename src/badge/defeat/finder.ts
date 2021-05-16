import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Finder: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "finder",
    setTitleId: 51,
    names: [
        {value: "Finder"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are beginning to uncover the mystery that is the Lost."}
    ],
    acquisition: "Defeat 100 The Lost bosses",
    links: [
        {title: "Finder Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Finder_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/finder.png"}
    ],
};
