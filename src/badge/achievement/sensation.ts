import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Sensation: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "sensation",
    setTitleId: 6,
    setTitleIdPraetorian: 1700,
    names: [
        {type: Alternate.H, value: "Sensation"},
        {type: Alternate.MV, value: "Mr. Big"},
        {type: Alternate.FV, value: "Ms. Big"},
        {type: Alternate.P, value: "Acclaimed"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Dinner at the White House is passe for you now."},
        {type: Alternate.V, value: "You've earned enough Infamy to run your own crews."},
        {
            type: Alternate.P, value: "There's a certain allure in knowing that as your stockpile of resources and contacts grow, it " +
                "will make your future challenges that much easier."
        }
    ],
    acquisition: "Earn 2,500,000 influence",
    links: [
        {title: "Sensation Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sensation_Badge"},
        {title: "Mr. Big Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Mr._Big_Badge"},
        {title: "Ms. Big Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ms._Big_Badge"},
        {title: "Acclaimed Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Acclaimed_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png"}
    ],
};
