import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Entangled: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "entangled",
    setTitleId: 19,
    setTitleIdPraetorian: 1694,
    names: [
        {type: Alternate.H, value: "Entangled"},
        {type: Alternate.V, value: "Sleepy"},
        {type: Alternate.P, value: "Locked Out"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You continue to show aptitude at missing all the action."},
        {type: Alternate.V, value: "You've spent over 30 minutes Slept, Immobilized, or Held. Lord Recluse is not impressed."},
        {type: Alternate.P, value: "Eventually, you will remember that you can purchase Break Free Inspirations. Eventually."}
    ],
    acquisition: "Be held for 30 minutes",
    links: [
        {title: "Entangled Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Entangled_Badge"},
        {title: "Sleepy Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sleepy_Badge"},
        {title: "Locked Out Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Locked_Out_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png"}
    ],
};
