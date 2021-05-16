import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";
import {Globetrotter} from "../exploration/globetrotter";
import {Ragnarok} from "../exploration/ragnarok";
import {TemporalFighter} from "../exploration/temporal-fighter";
import {LastStand} from "../exploration/last-stand";
import {AScarInTime} from "../exploration/a-scar-in-time";
import {TrueNeutral} from "../exploration/true-neutral";
import {WatchYourBack} from "../exploration/watch-your-back";
import {SickOfTimeTravel} from "../exploration/sick-of-time-travel";

export const ShatteredTime: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "shattered-time",
    setTitleId: 2421,
    names: [
        {value: "Shattered Time"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png"}],
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Recluse's Victory.`}
    ],
    notes: `Visit all exploration badges in [map:${ReclusesVictory.key}]`,
    links: [
        {title: "Shattered Time Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Shattered_Time_Badge"}
    ],
    partials: [
        {key: Globetrotter.key, type: BadgePartialType.BADGE, badgeKey: Globetrotter.key},
        {key: Ragnarok.key, type: BadgePartialType.BADGE, badgeKey: Ragnarok.key},
        {key: TemporalFighter.key, type: BadgePartialType.BADGE, badgeKey: TemporalFighter.key},
        {key: LastStand.key, type: BadgePartialType.BADGE, badgeKey: LastStand.key},
        {key: AScarInTime.key, type: BadgePartialType.BADGE, badgeKey: AScarInTime.key},
        {key: TrueNeutral.key, type: BadgePartialType.BADGE, badgeKey: TrueNeutral.key},
        {key: WatchYourBack.key, type: BadgePartialType.BADGE, badgeKey: WatchYourBack.key},
        {key: SickOfTimeTravel.key, type: BadgePartialType.BADGE, badgeKey: SickOfTimeTravel.key}
    ]
};
