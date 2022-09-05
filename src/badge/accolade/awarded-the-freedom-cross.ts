import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const AwardedTheFreedomCross: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "awarded-the-freedom-cross",
    setTitleId: 180,
    names: [
        {type: Alternate.H, value: "Awarded the Freedom Cross"},
        {type: Alternate.V, value: "Stripped of the Freedom Cross"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `Powerful energies of the Terra Volta reactor have permanently fused with your own, modifying them in dramatic ways.`}
    ],
    acquisition: `Complete the third Terra Volta Respecification Trial`,
    notes: `The third (level 44-50) Terra Volta Respecification Trial is available from Major Richard Flagg in Peregrine Island.`,
    links: [
        {title: "Awarded the Freedom Cross Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Awarded_the_Freedom_Cross_Badge"},
        {title: "Stripped of the Freedom Cross Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Stripped_of_the_Freedom_Cross_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/awarded-the-freedom-cross.png"}
    ]
};
