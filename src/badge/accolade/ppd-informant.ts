import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";
import {Summoned} from "../exploration/summoned";
import {Upgraded} from "../exploration/upgraded";
import {MysticKing} from "../exploration/mystic-king";
import {KeenSighted} from "../exploration/keen-sighted";
import {Smokey} from "../exploration/smokey";
import {Pwned} from "../exploration/pwned";
import {WentworthHistoryBuff} from "../exploration/wentworth-history-buff";
import {ManOfVengeance} from "../exploration/man-of-vengeance";

export const PPDInformant: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "ppd-informant",
    setTitleId: 1529,
    names: [
        {type: Alternate.H, value: "PPD Informant"},
        {type: Alternate.V, value: "Former PPD Stoolie"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Kings Row.`}
    ],
    notes: `Visit all exploration badges in [map:${KingsRow.key}]`,
    links: [
        {title: "PPD Informant Badge", href: "https://homecoming.wiki/wiki/PPD_Informant_Badge"},
        {title: "Former PPD Stoolie Badge", href: "https://homecoming.wiki/wiki/Former_PPD_Stoolie_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: Summoned.key, type: BadgePartialType.BADGE, badgeKey: Summoned.key},
        {key: Upgraded.key, type: BadgePartialType.BADGE, badgeKey: Upgraded.key},
        {key: MysticKing.key, type: BadgePartialType.BADGE, badgeKey: MysticKing.key},
        {key: KeenSighted.key, type: BadgePartialType.BADGE, badgeKey: KeenSighted.key},
        {key: Smokey.key, type: BadgePartialType.BADGE, badgeKey: Smokey.key},
        {key: WentworthHistoryBuff.key, type: BadgePartialType.BADGE, badgeKey: WentworthHistoryBuff.key},
        {key: Pwned.key, type: BadgePartialType.BADGE, badgeKey: Pwned.key},
        {key: ManOfVengeance.key, type: BadgePartialType.BADGE, badgeKey: ManOfVengeance.key}
    ]
};
