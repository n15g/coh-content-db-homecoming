import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {EchoFaultline} from "../../map/echo-faultline";
import {Newsman} from "../exploration/newsman";
import {FaultlessMystic} from "../exploration/faultless-mystic";
import {Apex} from "../exploration/apex";
import {Forsaken} from "../exploration/forsaken";
import {Pristine} from "../exploration/pristine";
import {ClaimDenied} from "../exploration/claim-denied";
import {SpareParts} from "../exploration/spare-parts";
import {DugTooDeep} from "../exploration/dug-too-deep";

export const Epicenter: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "epicenter",
    setTitleId: 2398,
    names: [
        {value: "Epicenter"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Echo: Faultline.`}
    ],
    notes: `Visit all exploration badges in [map:${EchoFaultline.key}]`,
    links: [
        {title: "Epicenter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Epicenter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: Newsman.key, type: BadgePartialType.BADGE, badgeKey: Newsman.key},
        {key: FaultlessMystic.key, type: BadgePartialType.BADGE, badgeKey: FaultlessMystic.key},
        {key: Apex.key, type: BadgePartialType.BADGE, badgeKey: Apex.key},
        {key: Forsaken.key, type: BadgePartialType.BADGE, badgeKey: Forsaken.key},
        {key: Pristine.key, type: BadgePartialType.BADGE, badgeKey: Pristine.key},
        {key: ClaimDenied.key, type: BadgePartialType.BADGE, badgeKey: ClaimDenied.key},
        {key: SpareParts.key, type: BadgePartialType.BADGE, badgeKey: SpareParts.key},
        {key: DugTooDeep.key, type: BadgePartialType.BADGE, badgeKey: DugTooDeep.key}
    ]
};
