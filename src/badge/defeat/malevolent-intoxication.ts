import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MalevolentIntoxication: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "malevolent-intoxication",
    setTitleId: 2533,
    names: [
        {value: "Malevolent Intoxication"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `The Labyrinth of Fog is an unnatural dungeon where a mythical fog, steeped in malevolence, coagulates of its own volition, and you've taken advantage of the opportunity to claim their powers for yourself.`}
    ],
    acquisition: "Defeat 5 Malevolent Fogs.",
    links: [
        {title: "Malevolent Intoxication Badge", href: "https://homecoming.wiki/wiki/Malevolent_Intoxication_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/malevolent-intoxication.png"}
    ],
};
