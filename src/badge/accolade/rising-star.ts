import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const RisingStar: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "rising-star",
    setTitleId: 2342,
    names: [
        {value: "Rising Star"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this accolade by completing every story arc within Imperial City.`}
    ],
    notes: `Complete every story arc in [map:${ImperialCity.key}] to earn this badge. [Rewards 20 Merits]`,
    links: [
        {title: "Rising Star Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Rising_Star_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png"}
    ]
};
