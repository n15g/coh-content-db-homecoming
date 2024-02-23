import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, badgeReference, BadgeType, IBadgeData} from "coh-content-db";
import {Grounded} from "../day-job/grounded";
import {ArachnosTraitor} from "../day-job/arachnos-traitor";

export const BroodLeaver: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "brood-leaver",
    setTitleId: 1074,
    names: [
        {type: Alternate.H, value: "Brood Leaver"},
        {type: Alternate.V, value: "Brood Leader"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `High status within Arachnos was not enough to keep you bound to the Rogue Isles. Your exit caused a power vacuum which some other young upstart quickly filled.`},
        {
            type: Alternate.V,
            value: `You have climbed the ranks of Arachnos by being both a pilot and a city official earning you the Brood Leader Accolade.  While logged out in either Grandville or near a Black Helicoper you will earn fuel for your Traveler's Jet Pack at an accelerated rate.`
        }
    ],
    notes: `Earn the ${badgeReference(Grounded)} and ${badgeReference(ArachnosTraitor)} Day Jobs`,
    links: [
        {title: "Brood Leaver Badge", href: "https://homecoming.wiki/wiki/Brood_Leaver_Badge"},
        {title: "Brood Leader Badge", href: "https://homecoming.wiki/wiki/Brood_Leader_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/brood-leaver.png"}
    ],
    partials: [
        {key: Grounded.key, type: BadgePartialType.BADGE, badgeKey: Grounded.key},
        {key: ArachnosTraitor.key, type: BadgePartialType.BADGE, badgeKey: ArachnosTraitor.key}
    ]
};
