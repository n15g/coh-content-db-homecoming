import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {OuroborosMender} from "../ouroboros/ouroboros-mender";
import {PraetorianTourist} from "../ouroboros/praetorian-tourist";
import {Demarcated} from "../ouroboros/demarcated";
import {Intrepid} from "../ouroboros/intrepid";
import {Marginalized} from "../ouroboros/marginalized";
import {Suspended} from "../ouroboros/suspended";
import {Temerarious} from "../ouroboros/temerarious";
import {Undertaker} from "../ouroboros/undertaker";
import {Unenhanced} from "../ouroboros/unenhanced";
import {Uninspired} from "../ouroboros/uninspired";
import {GoldMedalist} from "../ouroboros/gold-medalist";
import {AllForOneOneForAll} from "../ouroboros/all-for-one-one-for-all";

export const Chronomaster: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "chronomaster",
    setTitleId: 946,
    names: [
        {value: "Chronomaster"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/chronomaster.png"}],
    badgeText: [
        {value: `You are a proven master of Time Travel.`}
    ],
    notes: `Earn the following Ouroboros badges to earn this badge: [badge:ouroboros-mender], [badge:praetorian-tourist], [badge:demarcated], [badge:intrepid], [badge:marginalized], [badge:suspended], [badge:temerarious], [badge:undertaker], [badge:unenhanced], [badge:uninspired], [badge:gold-medalist] and [badge:all-for-one-one-for-all].`,
    links: [
        {title: "Chronomaster Badge", href: "https://homecoming.wiki/wiki/Chronomaster_Badge"}
    ],
    partials: [
        {key: OuroborosMender.key, type: BadgePartialType.BADGE, badgeKey: OuroborosMender.key},
        {key: PraetorianTourist.key, type: BadgePartialType.BADGE, badgeKey: PraetorianTourist.key},
        {key: Demarcated.key, type: BadgePartialType.BADGE, badgeKey: Demarcated.key},
        {key: Intrepid.key, type: BadgePartialType.BADGE, badgeKey: Intrepid.key},
        {key: Marginalized.key, type: BadgePartialType.BADGE, badgeKey: Marginalized.key},
        {key: Suspended.key, type: BadgePartialType.BADGE, badgeKey: Suspended.key},
        {key: Temerarious.key, type: BadgePartialType.BADGE, badgeKey: Temerarious.key},
        {key: Undertaker.key, type: BadgePartialType.BADGE, badgeKey: Undertaker.key},
        {key: Unenhanced.key, type: BadgePartialType.BADGE, badgeKey: Unenhanced.key},
        {key: Uninspired.key, type: BadgePartialType.BADGE, badgeKey: Uninspired.key},
        {key: GoldMedalist.key, type: BadgePartialType.BADGE, badgeKey: GoldMedalist.key},
        {key: AllForOneOneForAll.key, type: BadgePartialType.BADGE, badgeKey: AllForOneOneForAll.key}
    ]
};
