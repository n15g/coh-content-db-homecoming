import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {PurePraetorian} from "./pure-praetorian";
import {EmperorForADay} from "./emperor-for-a-day";
import {KnowsNovasNooks} from "./knows-novas-nooks";
import {BeneathTheEmpire} from "./beneath-the-empire";
import {ANeuMan} from "./a-neu-man";
import {NeuYouCouldDoIt} from "./neu-you-could-do-it";
import {RailRider} from "../exploration/rail-rider";
import {GoingRouge} from "../exploration/going-rouge";

export const VivaPraetoria: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "viva-praetoria",
    setTitleId: 1431,
    names: [
        {value: "Viva Praetoria"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Long live Praetoria.  You are a well-traveled citizen.`}
    ],
    notes: `Visit all exploration badges in Praetoria`,
    links: [
        {title: "Viva Praetoria Badge", href: "https://homecoming.wiki/wiki/Viva_Praetoria_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/viva-praetoria.png"}
    ],
    partials: [
        {key: PurePraetorian.key, type: BadgePartialType.BADGE, badgeKey: PurePraetorian.key},
        {key: EmperorForADay.key, type: BadgePartialType.BADGE, badgeKey: EmperorForADay.key},
        {key: KnowsNovasNooks.key, type: BadgePartialType.BADGE, badgeKey: KnowsNovasNooks.key},
        {key: BeneathTheEmpire.key, type: BadgePartialType.BADGE, badgeKey: BeneathTheEmpire.key},
        {key: ANeuMan.key, type: BadgePartialType.BADGE, badgeKey: ANeuMan.key},
        {key: NeuYouCouldDoIt.key, type: BadgePartialType.BADGE, badgeKey: NeuYouCouldDoIt.key},
        {key: RailRider.key, type: BadgePartialType.BADGE, badgeKey: RailRider.key},
        {key: GoingRouge.key, type: BadgePartialType.BADGE, badgeKey: GoingRouge.key}
    ]
};
