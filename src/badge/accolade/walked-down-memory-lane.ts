import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";
import {Trustworthy} from "../exploration/trustworthy";
import {Knowledgeable} from "../exploration/knowledgeable";
import {Virtuous} from "../exploration/virtuous";
import {Rookie} from "../exploration/rookie";
import {Condemned} from "../exploration/condemned";
import {Resilient} from "../exploration/resilient";
import {OutOfHarmsWay} from "../exploration/out-of-harms-way";
import {CityTraveler} from "../exploration/city-traveler";

export const WalkedDownMemoryLane: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "walked-down-memory-lane",
    setTitleId: 2325,
    names: [
        {value: "Walked Down Memory Lane"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Echo: Atlas Park.`}
    ],
    notes: `Visit all exploration badges in [map:${EchoAtlasPark.key}]`,
    links: [
        {title: "Walked Down Memory Lane Badge", href: "https://paragonwiki.com/wiki/Walked_Down_Memory_Lane_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
            {key: Trustworthy.key, type: BadgePartialType.BADGE, badgeKey: Trustworthy.key},
            {key: Knowledgeable.key, type: BadgePartialType.BADGE, badgeKey: Knowledgeable.key},
            {key: Virtuous.key, type: BadgePartialType.BADGE, badgeKey: Virtuous.key},
            {key: Rookie.key, type: BadgePartialType.BADGE, badgeKey: Rookie.key},
            {key: Condemned.key, type: BadgePartialType.BADGE, badgeKey: Condemned.key},
            {key: Resilient.key, type: BadgePartialType.BADGE, badgeKey: Resilient.key},
            {key: OutOfHarmsWay.key, type: BadgePartialType.BADGE, badgeKey: OutOfHarmsWay.key},
            {key: CityTraveler.key, type: BadgePartialType.BADGE, badgeKey: CityTraveler.key}
    ]
};