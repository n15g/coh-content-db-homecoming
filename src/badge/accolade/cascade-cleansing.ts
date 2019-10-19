import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {CascadeArchipelago} from "../../map/cascade-archipelago";
import {BeingAndNothingness} from "../exploration/being-and-nothingness";
import {Castaway} from "../exploration/castaway";
import {HearingVoices} from "../exploration/hearing-voices";
import {LiquidMemory} from "../exploration/liquid-memory";
import {NoTurningBackNow} from "../exploration/no-turning-back-now";
import {PeaceWalker} from "../exploration/peace-walker";
import {TheHeartOfMemory} from "../exploration/the-heart-of-memory";
import {UsurperOfWorlds} from "../exploration/usurper-of-worlds";

export const CascadeCleansing: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "cascade-cleansing",
    setTitleId: 1882,
    names: [
        {value: "Cascade Cleansing"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Cascade Archipelago.`}
    ],
    notes: `Visit all exploration badges in [map:${CascadeArchipelago.key}]`,
    links: [
        {title: "Cascade Cleansing Badge", href: "https://paragonwiki.com/wiki/Cascade_Cleansing_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
            {key: BeingAndNothingness.key, type: BadgePartialType.BADGE, badgeKey: BeingAndNothingness.key},
            {key: Castaway.key, type: BadgePartialType.BADGE, badgeKey: Castaway.key},
            {key: HearingVoices.key, type: BadgePartialType.BADGE, badgeKey: HearingVoices.key},
            {key: LiquidMemory.key, type: BadgePartialType.BADGE, badgeKey: LiquidMemory.key},
            {key: NoTurningBackNow.key, type: BadgePartialType.BADGE, badgeKey: NoTurningBackNow.key},
            {key: PeaceWalker.key, type: BadgePartialType.BADGE, badgeKey: PeaceWalker.key},
            {key: TheHeartOfMemory.key, type: BadgePartialType.BADGE, badgeKey: TheHeartOfMemory.key},
            {key: UsurperOfWorlds.key, type: BadgePartialType.BADGE, badgeKey: UsurperOfWorlds.key}
    ]
};