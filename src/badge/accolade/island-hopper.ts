import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";
import {Minotaur} from "../exploration/minotaur";
import {NatureLover} from "../exploration/nature-lover";
import {Whitecap} from "../exploration/whitecap";
import {LastLineOfDefense} from "../exploration/last-line-of-defense";
import {TheOldMe} from "../exploration/the-old-me";
import {BridgeHolder} from "../exploration/bridge-holder";
import {OvertimeWorker} from "../exploration/overtime-worker";
import {SpankysCompetitor} from "../exploration/spankys-competitor";

export const IslandHopper: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "island-hopper",
    setTitleId: 1551,
    names: [
        {value: "Island Hopper"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Talos Island.`}
    ],
    notes: `Visit all exploration badges in [map:${TalosIsland.key}]`,
    links: [
        {title: "Island Hopper Badge", href: "https://paragonwiki.com/wiki/Island_Hopper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
            {key: Minotaur.key, type: BadgePartialType.BADGE, badgeKey: Minotaur.key},
            {key: NatureLover.key, type: BadgePartialType.BADGE, badgeKey: NatureLover.key},
            {key: Whitecap.key, type: BadgePartialType.BADGE, badgeKey: Whitecap.key},
            {key: LastLineOfDefense.key, type: BadgePartialType.BADGE, badgeKey: LastLineOfDefense.key},
            {key: TheOldMe.key, type: BadgePartialType.BADGE, badgeKey: TheOldMe.key},
            {key: BridgeHolder.key, type: BadgePartialType.BADGE, badgeKey: BridgeHolder.key},
            {key: OvertimeWorker.key, type: BadgePartialType.BADGE, badgeKey: OvertimeWorker.key},
            {key: SpankysCompetitor.key, type: BadgePartialType.BADGE, badgeKey: SpankysCompetitor.key}
    ]
};