import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";
import {Ambitious} from "../exploration/ambitious";
import {CitizenCole} from "../exploration/citizen-cole";
import {CivicMinded} from "../exploration/civic-minded";
import {GuardiansOfJustice} from "../exploration/guardians-of-justice";
import {IntoTheWild} from "../exploration/into-the-wild";
import {Technophile} from "../exploration/technophile";
import {UnCivilSociety} from "../exploration/un-civil-society";
import {OnTheWaterfront} from "../exploration/on-the-waterfront";

export const PurePraetorian: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "pure-praetorian",
    setTitleId: 1597,
    names: [
        {value: "Pure Praetorian"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Nova Praetoria.`}
    ],
    notes: `Visit all exploration badges in [map:${NovaPraetoria.key}]`,
    links: [
        {title: "Pure Praetorian Badge", href: "https://paragonwiki.com/wiki/Pure_Praetorian_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png"}
    ],
    partials: [
            {key: Ambitious.key, type: BadgePartialType.BADGE, badgeKey: Ambitious.key},
            {key: CitizenCole.key, type: BadgePartialType.BADGE, badgeKey: CitizenCole.key},
            {key: CivicMinded.key, type: BadgePartialType.BADGE, badgeKey: CivicMinded.key},
            {key: GuardiansOfJustice.key, type: BadgePartialType.BADGE, badgeKey: GuardiansOfJustice.key},
            {key: IntoTheWild.key, type: BadgePartialType.BADGE, badgeKey: IntoTheWild.key},
            {key: Technophile.key, type: BadgePartialType.BADGE, badgeKey: Technophile.key},
            {key: UnCivilSociety.key, type: BadgePartialType.BADGE, badgeKey: UnCivilSociety.key},
            {key: OnTheWaterfront.key, type: BadgePartialType.BADGE, badgeKey: OnTheWaterfront.key}
    ]
};