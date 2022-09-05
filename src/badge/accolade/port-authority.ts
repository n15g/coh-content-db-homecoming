import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";

export const PortAuthority: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "port-authority",
    setTitleId: 2374,
    names: [
        {value: "Port Authority"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this accolade by completing every story arc within Striga Isle.`}
    ],
    acquisition: `Complete every story arc in [map:${StrigaIsle.key}]`,
    notes: `This badge rewards 20 reward merits.`,
    links: [
        {title: "Port Authority Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Port_Authority_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"}
    ]
};
