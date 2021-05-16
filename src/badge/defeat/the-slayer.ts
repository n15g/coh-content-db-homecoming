import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TheSlayer: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "the-slayer",
    setTitleId: 35,
    names: [
        {value: "The Slayer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are a slayer of the darkest of Vampyri."}
    ],
    acquisition: "Defeat 200 Council Vampyri",
    links: [
        {title: "The Slayer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Slayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council.png"}
    ],
};
