import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BrotherlyLove: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "brotherly-love",
    setTitleId: 2176,
    names: [
        {value: "Brotherly Love"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You defeated both Shivan Obliterators at the end of Drowning in Blood within 30 seconds of " +
                "each other."
        }
    ],
    acquisition: "Defeat both Neo-Shivan Obliterators within 30 seconds of each other in the Drowning in Blood trial",
    links: [
        {title: "Brotherly Love Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Brotherly_Love_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/brotherly-love.png"}
    ],
};
