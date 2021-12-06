import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Crystallized: IBadgeData = {
    type: BadgeType.EVENT,
    key: "crystallized",
    setTitleId: 704,
    names: [
        {value: "Crystallized"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The chill of the season has strange effects."},
    ],
    acquisition: `Select as a reward for completing Father Time's mission during the Winter Event.`,
    links: [
        {title: "Crystallized Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Crystallized_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/crystallized.png"}]
};
