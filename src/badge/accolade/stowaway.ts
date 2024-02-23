import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";

export const Stowaway: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "stowaway",
    setTitleId: 2519,
    names: [
        {value: "Stowaway"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Striga has long been a Council stronghold but recent events have upset the delicate balance and created a power vaccum for opportunistic villains to exploit.`}
    ],
    acquisition: `Complete every villain story arc in [map:${StrigaIsle.key}]`,
    notes: `This badge rewards 20 reward merits.`,
    links: [
        {title: "Stowaway Badge", href: "https://homecoming.wiki/wiki/Stowaway_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png"}
    ]
};