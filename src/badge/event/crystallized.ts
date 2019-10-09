import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Crystallized: IBadgeData = {
    type: BadgeType.EVENT,
    key: "crystallized",
    names: [
        {value: "Crystallized"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The chill of the season has strange effects."},
    ],
    acquisition: "Select as a reward for completing Father Time's mission during the Winter Event or purchase from the Candy Keeper during the Winter Event for 10 Candy Canes and 500 inf.",
    links: [
        {title: "Crystallized Badge", href: "https://paragonwiki.com/wiki/Crystallized_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/crystallized.png"}]
};
