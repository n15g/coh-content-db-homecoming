import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";
import {WeaponInspector} from "../exploration/weapon-inspector";
import {TunnelRat} from "../exploration/tunnel-rat";
import {Triumphant} from "../exploration/triumphant";
import {Nuclear} from "../exploration/nuclear";
import {ForciblyEvicted} from "../exploration/forcibly-evicted";
import {Disassembled} from "../exploration/disassembled";
import {GameOver} from "../exploration/game-over";
import {Herculean} from "../exploration/herculean";

export const Warlord: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "warlord",
    setTitleId: 2420,
    names: [
        {value: "Warlord"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Warburg.`}
    ],
    notes: `Visit all exploration badges in [map:${Warburg.key}]`,
    links: [
        {title: "Warlord Badge", href: "https://paragonwiki.com/wiki/Warlord_Badge"}
    ],
    partials: [
            {key: WeaponInspector.key, type: BadgePartialType.BADGE, badgeKey: WeaponInspector.key},
            {key: TunnelRat.key, type: BadgePartialType.BADGE, badgeKey: TunnelRat.key},
            {key: Triumphant.key, type: BadgePartialType.BADGE, badgeKey: Triumphant.key},
            {key: Nuclear.key, type: BadgePartialType.BADGE, badgeKey: Nuclear.key},
            {key: ForciblyEvicted.key, type: BadgePartialType.BADGE, badgeKey: ForciblyEvicted.key},
            {key: Disassembled.key, type: BadgePartialType.BADGE, badgeKey: Disassembled.key},
            {key: GameOver.key, type: BadgePartialType.BADGE, badgeKey: GameOver.key},
            {key: Herculean.key, type: BadgePartialType.BADGE, badgeKey: Herculean.key}
    ]
};