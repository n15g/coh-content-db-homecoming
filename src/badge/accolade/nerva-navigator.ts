import {ALIGNMENT_VILLAIN, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";
import {WatcherOnTheKnoll} from "../exploration/watcher-on-the-knoll";
import {LockedAndLoaded} from "../exploration/locked-and-loaded";
import {NervaWreck} from "../exploration/nerva-wreck";
import {PrimalInstinct} from "../exploration/primal-instinct";
import {TreeHugger} from "../exploration/tree-hugger";
import {UnethicalTourist} from "../exploration/unethical-tourist";
import {BlindEye} from "../exploration/blind-eye";
import {Soother} from "../exploration/soother";

export const NervaNavigator: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "nerva-navigator",
    setTitleId: 1504,
    names: [
        {value: "Nerva Navigator"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Nerva Archipelago.`}
    ],
    notes: `Visit all exploration badges in [map:${NervaArchipelago.key}]`,
    links: [
        {title: "Nerva Navigator Badge", href: "https://paragonwiki.com/wiki/Nerva_Navigator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png"}
    ],
    partials: [
            {key: WatcherOnTheKnoll.key, type: BadgePartialType.BADGE, badgeKey: WatcherOnTheKnoll.key},
            {key: LockedAndLoaded.key, type: BadgePartialType.BADGE, badgeKey: LockedAndLoaded.key},
            {key: NervaWreck.key, type: BadgePartialType.BADGE, badgeKey: NervaWreck.key},
            {key: PrimalInstinct.key, type: BadgePartialType.BADGE, badgeKey: PrimalInstinct.key},
            {key: TreeHugger.key, type: BadgePartialType.BADGE, badgeKey: TreeHugger.key},
            {key: UnethicalTourist.key, type: BadgePartialType.BADGE, badgeKey: UnethicalTourist.key},
            {key: BlindEye.key, type: BadgePartialType.BADGE, badgeKey: BlindEye.key},
            {key: Soother.key, type: BadgePartialType.BADGE, badgeKey: Soother.key}
    ]
};