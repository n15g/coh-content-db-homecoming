import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";
import {AtlasPark} from "../../map/atlas-park";
import {WalkedDownMemoryLane} from "./walked-down-memory-lane";
import {AtlasTourGuide} from "./atlas-tour-guide";

export const TheConstant: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "the-constant",
    setTitleId: 2001,
    names: [
        {value: "The Constant"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `Villains, heroes, time travel, trans-dimensional wars...  Come what may, in an ever-changing multiverse, you are The Constant which remains unchanged.`}
    ],
    notes: `Visit all exploration badges in [map:${AtlasPark.key}] and [map:${EchoAtlasPark.key}]`,
    links: [
        {title: "The Constant Badge", href: "https://paragonwiki.com/wiki/The_Constant_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/the-constant.png"}
    ],
    partials: [
        {key: WalkedDownMemoryLane.key, type: BadgePartialType.BADGE, badgeKey: WalkedDownMemoryLane.key},
        {key: AtlasTourGuide.key, type: BadgePartialType.BADGE, badgeKey: AtlasTourGuide.key}
    ]
};
