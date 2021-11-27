import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";
import {DepthsOfTime} from "../exploration/depths-of-time";
import {BattleHardened} from "../exploration/battle-hardened";
import {Sanctuary} from "../exploration/sanctuary";
import {VoiceOfTheOracle} from "../exploration/voice-of-the-oracle";
import {OutOfBounds} from "../exploration/out-of-bounds";
import {HumanNature} from "../exploration/human-nature";
import {VisionOfAmbition} from "../exploration/vision-of-ambition";
import {DarknessUnleashed} from "../exploration/darkness-unleashed";

export const HistoryInTheMaking: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "history-in-the-making",
    setTitleId: 2462,
    names: [
        {value: "History in the Making"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Cimerora.`}
    ],
    notes: `Visit all exploration badges in [map:${Cimerora.key}] [Rewards 5 Merits]`,
    links: [
        {title: "History in the Making Badge", href: "https://hcwiki.cityofheroes.dev/wiki/History_in_the_Making_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png"}
    ],
	partials: [
        {key: DepthsOfTime.key, type: BadgePartialType.BADGE, badgeKey: DepthsOfTime.key},
        {key: BattleHardened.key, type: BadgePartialType.BADGE, badgeKey: BattleHardened.key},
        {key: Sanctuary.key, type: BadgePartialType.BADGE, badgeKey: Sanctuary.key},
        {key: VoiceOfTheOracle.key, type: BadgePartialType.BADGE, badgeKey: VoiceOfTheOracle.key},
        {key: OutOfBounds.key, type: BadgePartialType.BADGE, badgeKey: OutOfBounds.key},
        {key: HumanNature.key, type: BadgePartialType.BADGE, badgeKey: HumanNature.key},
        {key: VisionOfAmbition.key, type: BadgePartialType.BADGE, badgeKey: VisionOfAmbition.key},
        {key: DarknessUnleashed.key, type: BadgePartialType.BADGE, badgeKey: DarknessUnleashed.key}
    ]
};