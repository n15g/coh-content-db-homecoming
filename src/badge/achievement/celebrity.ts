import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Celebrity: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "celebrity",
    setTitleId: 5,
    setTitleIdPraetorian: 1699,
    names: [
        {type: Alternate.H, value: "Celebrity"},
        {type: Alternate.V, value: "Bling"},
        {type: Alternate.P, value: "Who's Who"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Talk shows are calling you all the time."},
        {type: Alternate.V, value: "You've earned enough Infamy to sport a little bling."},
        {
            type: Alternate.P, value: "You've earned an entry in \"Who's Who in Praetoria.\" You can't help but wonder if this just " +
                "makes you a bigger target for your enemies."
        }
    ],
    acquisition: "Earn 500,000 influence",
    links: [
        {title: "Celebrity Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Celebrity_Badge"},
        {title: "Bling Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bling_Badge"},
        {title: "Who's Who Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Who%27s_Who_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png"}
    ],
};
