import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Leader: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "leader",
    setTitleId: 244,
    setTitleIdPraetorian: 1704,
    names: [
        {value: "Leader"},
        {type: Alternate.P, value: "The Chosen One"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "Your very name instills both hope and inspiration to the people of Paragon City, you truly are " +
                "a Leader."
        },
        {
            type: Alternate.V, value: "Your very name strikes both fear and awe into the hearts of the citizens of the Rogue Isles.  " +
                "You are considered a Leader."
        },
        {
            type: Alternate.P, value: "Could it be that all along there has been some hand of fate at work here? Your name commands " +
                "such weight, you now dare to dream that Praetoria's future may be in your hands after all..."
        }
    ],
    acquisition: "Earn 500,000,000 influence",
    links: [
        {title: "Leader Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Leader_Badge"},
        {title: "The Chosen One Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Chosen_One_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png"}
    ],
};
