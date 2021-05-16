import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Trickster: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "trickster",
    setTitleId: 1456,
    names: [
        {value: "Trickster"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You completed a Rogue Morality Mission and then maintained your Rogue alignment for 7 days " +
                "earning yourself this badge."
        }
    ],
    acquisition: "Maintain a Rogue alignment for 7 days",
    links: [
        {title: "Trickster Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Trickster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/trickster.png"}
    ],
};
