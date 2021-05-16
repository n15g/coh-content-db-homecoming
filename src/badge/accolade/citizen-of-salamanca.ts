import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Croatoa} from "../../map/croatoa";
import {GrimWanderer} from "../exploration/grim-wanderer";
import {Spiritual} from "../exploration/spiritual";
import {Ensorcelled} from "../exploration/ensorcelled";
import {BarrierHolder} from "../exploration/barrier-holder";
import {SallySightseer} from "../exploration/sally-sightseer";
import {JacksWrath} from "../exploration/jacks-wrath";
import {WaylonsObserver} from "../exploration/waylons-observer";
import {MidnightersPerseverance} from "../exploration/midnighters-perseverance";

export const CitizenOfSalamanca: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "citizen-of-salamanca",
    setTitleId: 1545,
    names: [
        {value: "Citizen of Salamanca"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Croatoa.`}
    ],
    notes: `Visit all exploration badges in [map:${Croatoa.key}]`,
    links: [
        {title: "Citizen of Salamanca Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Citizen_of_Salamanca_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: GrimWanderer.key, type: BadgePartialType.BADGE, badgeKey: GrimWanderer.key},
        {key: Spiritual.key, type: BadgePartialType.BADGE, badgeKey: Spiritual.key},
        {key: Ensorcelled.key, type: BadgePartialType.BADGE, badgeKey: Ensorcelled.key},
        {key: BarrierHolder.key, type: BadgePartialType.BADGE, badgeKey: BarrierHolder.key},
        {key: SallySightseer.key, type: BadgePartialType.BADGE, badgeKey: SallySightseer.key},
        {key: JacksWrath.key, type: BadgePartialType.BADGE, badgeKey: JacksWrath.key},
        {key: WaylonsObserver.key, type: BadgePartialType.BADGE, badgeKey: WaylonsObserver.key},
        {key: MidnightersPerseverance.key, type: BadgePartialType.BADGE, badgeKey: MidnightersPerseverance.key}
    ]
};
