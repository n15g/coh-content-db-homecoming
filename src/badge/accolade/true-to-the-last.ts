import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";

export const TrueToTheLast: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "true-to-the-last",
    setTitleId: 2351,
    names: [
        {value: "True to the Last"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Wherever you must go, whatever you must do, Praetoria will always & forever be your home, and to it you shall be True to the Last.`}
    ],
    notes: `Complete every story arc in [map:${Neutropolis.key}] to earn this badge. [Rewards 20 Merits]`,
    links: [
        {title: "True to the Last Badge", href: "https://hcwiki.cityofheroes.dev/wiki/True_to_the_Last_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png"}
    ]
};
