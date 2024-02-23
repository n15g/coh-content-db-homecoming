import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {SkywayCity} from "../../map/skyway-city";
import {Purifier} from "../exploration/purifier";
import {Solace} from "../exploration/solace";
import {Dauntless} from "../exploration/dauntless";
import {HealingNode} from "../exploration/healing-node";
import {BetterDays} from "../exploration/better-days";
import {RoomForExpansion} from "../exploration/room-for-expansion";
import {LeftBehind} from "../exploration/left-behind";
import {BridgeToNowhere} from "../exploration/bridge-to-nowhere";

export const SkyGazer: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "sky-gazer",
    setTitleId: 1539,
    names: [
        {value: "Sky Gazer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Skyway City.`}
    ],
    notes: `Visit all exploration badges in [map:${SkywayCity.key}]`,
    links: [
        {title: "Sky Gazer Badge", href: "https://homecoming.wiki/wiki/Sky_Gazer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: Purifier.key, type: BadgePartialType.BADGE, badgeKey: Purifier.key},
        {key: Solace.key, type: BadgePartialType.BADGE, badgeKey: Solace.key},
        {key: Dauntless.key, type: BadgePartialType.BADGE, badgeKey: Dauntless.key},
        {key: HealingNode.key, type: BadgePartialType.BADGE, badgeKey: HealingNode.key},
        {key: BetterDays.key, type: BadgePartialType.BADGE, badgeKey: BetterDays.key},
        {key: RoomForExpansion.key, type: BadgePartialType.BADGE, badgeKey: RoomForExpansion.key},
        {key: LeftBehind.key, type: BadgePartialType.BADGE, badgeKey: LeftBehind.key},
        {key: BridgeToNowhere.key, type: BadgePartialType.BADGE, badgeKey: BridgeToNowhere.key}
    ]
};
