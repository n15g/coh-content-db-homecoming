import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Eden} from "../../map/eden";
import {CallOfNature} from "../exploration/call-of-nature";
import {CreyFish} from "../exploration/crey-fish";
import {HiveMind} from "../exploration/hive-mind";
import {NaturalLaw} from "../exploration/natural-law";
import {NaturalSelection} from "../exploration/natural-selection";
import {NaturesWrath} from "../exploration/natures-wrath";
import {TheDevouringEarthAbides} from "../exploration/the-devouring-earth-abides";
import {Unspoiled} from "../exploration/unspoiled";

export const AdamInWaiting: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "adam-in-waiting",
    setTitleId: 1887,
    names: [
        {type: Alternate.M, value: "Adam in Waiting"},
        {type: Alternate.F, value: "Eve in Waiting"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Eden.`}
    ],
    notes: `Visit all exploration badges in [map:${Eden.key}]`,
    links: [
        {title: "Adam in Waiting Badge", href: "https://homecoming.wiki/wiki/Adam_in_Waiting_Badge"},
        {title: "Eve in Waiting Badge", href: "https://homecoming.wiki/wiki/Eve_in_Waiting_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: CallOfNature.key, type: BadgePartialType.BADGE, badgeKey: CallOfNature.key},
        {key: CreyFish.key, type: BadgePartialType.BADGE, badgeKey: CreyFish.key},
        {key: HiveMind.key, type: BadgePartialType.BADGE, badgeKey: HiveMind.key},
        {key: NaturalLaw.key, type: BadgePartialType.BADGE, badgeKey: NaturalLaw.key},
        {key: NaturalSelection.key, type: BadgePartialType.BADGE, badgeKey: NaturalSelection.key},
        {key: NaturesWrath.key, type: BadgePartialType.BADGE, badgeKey: NaturesWrath.key},
        {key: TheDevouringEarthAbides.key, type: BadgePartialType.BADGE, badgeKey: TheDevouringEarthAbides.key},
        {key: Unspoiled.key, type: BadgePartialType.BADGE, badgeKey: Unspoiled.key}
    ]
};
