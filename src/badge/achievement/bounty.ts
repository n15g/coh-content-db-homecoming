import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Bounty: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "bounty",
    setTitleId: 2362,
    names: [
        {value: "Bounty"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/bounty.png"}],
    badgeText: [
        {value: "You have held on to a few souvenirs that remind you of your interesting adventures."}
    ],
    acquisition: "Collect 10 Souvenirs",
    links: [
        {title: "Bounty Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bounty_Badge"}
    ],
};
