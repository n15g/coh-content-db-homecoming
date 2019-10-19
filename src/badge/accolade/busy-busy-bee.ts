import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";
import {AmongTheGiants} from "../exploration/among-the-giants";
import {BabeInTheWoods} from "../exploration/babe-in-the-woods";
import {ForestOfStone} from "../exploration/forest-of-stone";
import {HeartOfTheHamidon} from "../exploration/heart-of-the-hamidon";
import {TheSoundOfThunder} from "../exploration/the-sound-of-thunder";
import {TheWoundedEarth} from "../exploration/the-wounded-earth";
import {TimeBandit} from "../exploration/time-bandit";
import {WildAtHeart} from "../exploration/wild-at-heart";

export const BusyBusyBee: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "busy-busy-bee",
    setTitleId: 1888,
    names: [
        {value: "Busy, Busy Bee"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within the Hive.`}
    ],
    notes: `Visit all exploration badges in [map:${TheHive.key}]`,
    links: [
        {title: "Busy, Busy Bee Badge", href: "https://paragonwiki.com/wiki/Busy%2C_Busy_Bee_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
            {key: AmongTheGiants.key, type: BadgePartialType.BADGE, badgeKey: AmongTheGiants.key},
            {key: BabeInTheWoods.key, type: BadgePartialType.BADGE, badgeKey: BabeInTheWoods.key},
            {key: ForestOfStone.key, type: BadgePartialType.BADGE, badgeKey: ForestOfStone.key},
            {key: HeartOfTheHamidon.key, type: BadgePartialType.BADGE, badgeKey: HeartOfTheHamidon.key},
            {key: TheSoundOfThunder.key, type: BadgePartialType.BADGE, badgeKey: TheSoundOfThunder.key},
            {key: TheWoundedEarth.key, type: BadgePartialType.BADGE, badgeKey: TheWoundedEarth.key},
            {key: TimeBandit.key, type: BadgePartialType.BADGE, badgeKey: TimeBandit.key},
            {key: WildAtHeart.key, type: BadgePartialType.BADGE, badgeKey: WildAtHeart.key}
    ]
};