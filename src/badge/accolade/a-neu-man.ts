import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";
import {Airlift} from "../exploration/airlift";
import {DontDrinkIt} from "../exploration/dont-drink-it";
import {EyesToTheFuture} from "../exploration/eyes-to-the-future";
import {MoarPower} from "../exploration/moar-power";
import {Longshoreman} from "../exploration/longshoreman";
import {Stockpiling} from "../exploration/stockpiling";
import {StuffOfLife} from "../exploration/stuff-of-life";
import {UrbanRenewal} from "../exploration/urban-renewal";

export const ANeuMan: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "a-neu-man",
    setTitleId: 1654,
    names: [
        {type: Alternate.M, value: "A Neu Man"},
        {type: Alternate.F, value: "A Neu Woman"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Neutropolis.`}
    ],
    notes: `Visit all exploration badges in [map:${Neutropolis.key}]`,
    links: [
        {title: "A Neu Man Badge", href: "https://hcwiki.cityofheroes.dev/wiki/A_Neu_Man_Badge"},
        {title: "A Neu Woman Badge", href: "https://hcwiki.cityofheroes.dev/wiki/A_Neu_Woman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png"}
    ],
    partials: [
        {key: Airlift.key, type: BadgePartialType.BADGE, badgeKey: Airlift.key},
        {key: DontDrinkIt.key, type: BadgePartialType.BADGE, badgeKey: DontDrinkIt.key},
        {key: EyesToTheFuture.key, type: BadgePartialType.BADGE, badgeKey: EyesToTheFuture.key},
        {key: MoarPower.key, type: BadgePartialType.BADGE, badgeKey: MoarPower.key},
        {key: Longshoreman.key, type: BadgePartialType.BADGE, badgeKey: Longshoreman.key},
        {key: Stockpiling.key, type: BadgePartialType.BADGE, badgeKey: Stockpiling.key},
        {key: StuffOfLife.key, type: BadgePartialType.BADGE, badgeKey: StuffOfLife.key},
        {key: UrbanRenewal.key, type: BadgePartialType.BADGE, badgeKey: UrbanRenewal.key}
    ]
};
