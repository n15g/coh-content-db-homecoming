import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Imprisoned: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "imprisoned",
    setTitleId: 20,
    setTitleIdPraetorian: 1695,
    names: [
        {type: Alternate.H, value: "Imprisoned"},
        {type: Alternate.V, value: "Dazed and Confused"},
        {type: Alternate.P, value: "Trapped"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Your skill at being held immobile and not being able to do anything is unmatched."},
        {type: Alternate.V, value: "That's 1 hour you've spent on your back Slept, Immobilized or Held. Yet still you fight on."},
        {
            type: Alternate.P, value: "With all the time you spend in invisible boxes and cages, have you considered a career as a " +
                "mime?"
        }
    ],
    acquisition: "Be held for 60 minutes",
    links: [
        {title: "Imprisoned Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Imprisoned_Badge"},
        {title: "Dazed and Confused Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dazed_and_Confused_Badge"},
        {title: "Trapped Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Trapped_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png"}
    ],
};
