import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Scoundrel: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "scoundrel",
    setTitleId: 1452,
    names: [
        {value: "Scoundrel"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You take consideration of all the angles and know when making deals instead of wreaking blind " +
                "havoc puts you farther ahead. You have completed a Rogue Morality Mission earning yourself " +
                "this badge."
        }
    ],
    acquisition: "Complete a Rogue Morality mission",
    links: [
        {title: "Scoundrel Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Scoundrel_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/rogue-align.png"}
    ],
};
