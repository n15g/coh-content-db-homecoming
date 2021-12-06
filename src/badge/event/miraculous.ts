import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Miraculous: IBadgeData = {
    type: BadgeType.EVENT,
    key: "miraculous",
    setTitleId: 701,
    names: [
        {value: "Miraculous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "A season of miracles, it has been called."},
    ],
    acquisition: `Select as a reward for completing Father Time's mission during the Winter Event or purchase from the Candy Keeper during the Winter Event for 25 Candy Canes and 30,000 inf.`,
    links: [
        {title: "Miraculous Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Miraculous_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/miraculous.png"}]
};
