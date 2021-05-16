import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";

export const Determined: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "determined",
    setTitleId: 2343,
    names: [
        {value: "Determined"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this accolade by completing every story arc within Dark Astoria.`}
    ],
    notes: `Complete every story arc in [map:${DarkAstoria.key}] to earn this badge. [Rewards 20 Merits]`,
    links: [
        {title: "Determined Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Determined_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png"}
    ]
};
