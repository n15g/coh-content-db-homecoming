import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Dastardly: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "dastardly",
    setTitleId: 1453,
    names: [
        {value: "Dastardly"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "The mere mention of your name causes those that hear it to shiver in fear. You have completed " +
                "a Villain Morality Mission earning yourself this badge."
        }
    ],
    acquisition: "Complete a Villain Morality mission",
    links: [
        {title: "Dastardly Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dastardly_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dastardly.png"}
    ],
};
