import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Boomtown} from "../../map/boomtown";
import {BoomtownTroglodyte} from "../exploration/boomtown-troglodyte";
import {CorpseBox} from "../exploration/corpse-box";
import {DestinedForValhalla} from "../exploration/destined-for-valhalla";
import {EndOfTheLine} from "../exploration/end-of-the-line";
import {Phalanxer} from "../exploration/phalanxer";
import {Regal} from "../exploration/regal";
import {ToweringInferno} from "../exploration/towering-inferno";
import {VisionOfDespair} from "../exploration/vision-of-despair";

export const BoomGoesTheTown: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "boom-goes-the-town",
    setTitleId: 1877,
    names: [
        {value: "Boom... Goes the Town"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Boomtown.`}
    ],
    notes: `Visit all exploration badges in [map:${Boomtown.key}]`,
    links: [
        {title: "Boom... Goes the Town Badge", href: "https://homecoming.wiki/wiki/Boom..._Goes_the_Town_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: BoomtownTroglodyte.key, type: BadgePartialType.BADGE, badgeKey: BoomtownTroglodyte.key},
        {key: CorpseBox.key, type: BadgePartialType.BADGE, badgeKey: CorpseBox.key},
        {key: DestinedForValhalla.key, type: BadgePartialType.BADGE, badgeKey: DestinedForValhalla.key},
        {key: EndOfTheLine.key, type: BadgePartialType.BADGE, badgeKey: EndOfTheLine.key},
        {key: Phalanxer.key, type: BadgePartialType.BADGE, badgeKey: Phalanxer.key},
        {key: Regal.key, type: BadgePartialType.BADGE, badgeKey: Regal.key},
        {key: ToweringInferno.key, type: BadgePartialType.BADGE, badgeKey: ToweringInferno.key},
        {key: VisionOfDespair.key, type: BadgePartialType.BADGE, badgeKey: VisionOfDespair.key}
    ]
};
