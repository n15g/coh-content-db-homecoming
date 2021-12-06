import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Joyful: IBadgeData = {
    type: BadgeType.EVENT,
    key: "joyful",
    setTitleId: 702,
    names: [
        {value: "Joyful"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The power of the season finds you overcome with joy."},
    ],
    acquisition: "Select as a reward for completing Father Time's mission during the Winter Event or purchase from the Candy Keeper during the Winter Event for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "Joyful Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Joyful_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/joyful.png"}]
};
