import {ALIGNMENT_VILLAIN, BadgePartialType, BadgeType, IBadgeData, mapReference} from "coh-content-db";
import {Cesspool} from "../exploration/cesspool";
import {SnakeCharmer} from "../exploration/snake-charmer";
import {Chum} from "../exploration/chum";
import {Fortified} from "../exploration/fortified";
import {TheNextBigThing} from "../exploration/the-next-big-thing";
import {FirstRule} from "../exploration/first-rule";
import {TikiFan} from "../exploration/tiki-fan";
import {MercyIsland} from "../../map/mercy-island";
import {Widower} from "../exploration/widower";

export const MercyMariner: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "mercy-mariner",
    setTitleId: 1486,
    names: [
        {value: "Mercy Mariner"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Mercy Island.`}
    ],
    notes: `Visit all exploration badges in ${mapReference(MercyIsland)}`,
    links: [
        {title: "Mercy Mariner Badge", href: "https://paragonwiki.com/wiki/Mercy_Mariner_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png"}
    ],
    partials: [
        {key: Cesspool.key, type: BadgePartialType.BADGE, badgeKey: Cesspool.key},
        {key: SnakeCharmer.key, type: BadgePartialType.BADGE, badgeKey: SnakeCharmer.key},
        {key: Chum.key, type: BadgePartialType.BADGE, badgeKey: Chum.key},
        {key: Fortified.key, type: BadgePartialType.BADGE, badgeKey: Fortified.key},
        {key: TheNextBigThing.key, type: BadgePartialType.BADGE, badgeKey: TheNextBigThing.key},
        {key: Widower.key, type: BadgePartialType.BADGE, badgeKey: Widower.key},
        {key: FirstRule.key, type: BadgePartialType.BADGE, badgeKey: FirstRule.key},
        {key: TikiFan.key, type: BadgePartialType.BADGE, badgeKey: TikiFan.key}
    ]
};
