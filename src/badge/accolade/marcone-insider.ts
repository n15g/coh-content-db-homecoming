import {ALIGNMENT_VILLAIN, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";
import {ScurvyDog} from "../exploration/scurvy-dog";
import {WashedUp} from "../exploration/washed-up";
import {PowderMonkey} from "../exploration/powder-monkey";
import {Driller} from "../exploration/driller";
import {LongWalk} from "../exploration/long-walk";
import {BigSpider} from "../exploration/big-spider";
import {CommutersWoe} from "../exploration/commuters-woe";
import {HiddenGetaway} from "../exploration/hidden-getaway";

export const MarconeInsider: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "marcone-insider",
    setTitleId: 1491,
    names: [
        {value: "Marcone Insider"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Port Oakes.`}
    ],
    notes: `Visit all exploration badges in [map:${PortOakes.key}]`,
    links: [
        {title: "Marcone Insider Badge", href: "https://paragonwiki.com/wiki/Marcone_Insider_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png"}
    ],
    partials: [
            {key: ScurvyDog.key, type: BadgePartialType.BADGE, badgeKey: ScurvyDog.key},
            {key: WashedUp.key, type: BadgePartialType.BADGE, badgeKey: WashedUp.key},
            {key: PowderMonkey.key, type: BadgePartialType.BADGE, badgeKey: PowderMonkey.key},
            {key: Driller.key, type: BadgePartialType.BADGE, badgeKey: Driller.key},
            {key: LongWalk.key, type: BadgePartialType.BADGE, badgeKey: LongWalk.key},
            {key: BigSpider.key, type: BadgePartialType.BADGE, badgeKey: BigSpider.key},
            {key: CommutersWoe.key, type: BadgePartialType.BADGE, badgeKey: CommutersWoe.key},
            {key: HiddenGetaway.key, type: BadgePartialType.BADGE, badgeKey: HiddenGetaway.key}
    ]
};