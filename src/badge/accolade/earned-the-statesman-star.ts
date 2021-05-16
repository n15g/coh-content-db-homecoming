import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const EarnedTheStatesmanStar: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "earned-the-statesman-star",
    setTitleId: 179,
    names: [
        {type: Alternate.H, value: "Earned the Statesman Star"},
        {type: Alternate.V, value: "Denied the Statesman Star"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `Your Terra Volta experience has altered your powers in ways no one could imagine.`}
    ],
    notes: `Complete the level 34-43 Terra Volta Respecification Trial from Captain James Harlan`,
    links: [
        {title: "Earned the Statesman Star Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Earned_the_Statesman_Star_Badge"},
        {title: "Denied the Statesman Star Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Denied_the_Statesman_Star_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/earned-the-statesman-star.png"}
    ]
};
