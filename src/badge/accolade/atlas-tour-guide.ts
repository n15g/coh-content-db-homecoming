import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";
import {Undefeated} from "../exploration/undefeated";
import {SilentSentinel} from "../exploration/silent-sentinel";
import {HeroCorpsInsider} from "../exploration/hero-corps-insider";
import {Patriot} from "../exploration/patriot";
import {TopDog} from "../exploration/top-dog";
import {Freedom} from "../exploration/freedom";
import {EdgeOfChaos} from "../exploration/edge-of-chaos";
import {Observant} from "../exploration/observant";

export const AtlasTourGuide: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "atlas-tour-guide",
    setTitleId: 1517,
    names: [
        {value: "Atlas Tour Guide"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Atlas Park.`}
    ],
    notes: `Visit all exploration badges in [map:${AtlasPark.key}]`,
    links: [
        {title: "Atlas Tour Guide Badge", href: "https://paragonwiki.com/wiki/Atlas_Tour_Guide_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
            {key: Undefeated.key, type: BadgePartialType.BADGE, badgeKey: Undefeated.key},
            {key: SilentSentinel.key, type: BadgePartialType.BADGE, badgeKey: SilentSentinel.key},
            {key: HeroCorpsInsider.key, type: BadgePartialType.BADGE, badgeKey: HeroCorpsInsider.key},
            {key: Patriot.key, type: BadgePartialType.BADGE, badgeKey: Patriot.key},
            {key: TopDog.key, type: BadgePartialType.BADGE, badgeKey: TopDog.key},
            {key: Freedom.key, type: BadgePartialType.BADGE, badgeKey: Freedom.key},
            {key: EdgeOfChaos.key, type: BadgePartialType.BADGE, badgeKey: EdgeOfChaos.key},
            {key: Observant.key, type: BadgePartialType.BADGE, badgeKey: Observant.key}
    ]
};