import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Dreamwalker: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "dreamwalker",
    setTitleId: 2079,
    names: [
        {type: Alternate.H, value: "Dreamwalker"},
        {type: Alternate.V, value: "Dreamkiller"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Through persistence or madness, you have faced down the many nightmares of Malaise while " +
                "battling him in the dreamscape of the Minds of Mayhem."
        }
    ],
    acquisition: "Defeat all of Malaise's possible nightmares at least once during the Minds of Mayhem Trial",
    links: [
        {title: "Dreamwalker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dreamwalker_Badge"},
        {title: "Dreamkiller Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dreamkiller_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-mom.png"}
    ],
};
