import {ALIGNMENT_PRAETORIAN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PraetoriasSon: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "praetorias-son",
    setTitleId: 1658,
    names: [
        {type: Alternate.M, value: "Praetoria's Son"},
        {type: Alternate.F, value: "Praetoria's Daughter"}
    ],
    alignment: ALIGNMENT_PRAETORIAN,
    badgeText: [
        {value: `Praetoria is your world, for better or worse.`}
    ],
    notes: `Awarded on any character creation`,
    links: [
        {title: "Praetoria's Son Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Praetoria%27s_Son_Badge"},
        {title: "Praetoria's Daughter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Praetoria%27s_Daughter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/vip.png"}
    ]
};
