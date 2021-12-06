import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Frosty: IBadgeData = {
    type: BadgeType.EVENT,
    key: "frosty",
    setTitleId: 703,
    names: [
        {value: "Frosty"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "A chill down your spine makes you feel Frosty."},
    ],
    acquisition: `Select as a reward for completing Father Time's mission during the Winter Event.`,
    links: [
        {title: "Frosty Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Frosty_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/frosty.png"}]
};
