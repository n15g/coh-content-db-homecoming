import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";
import {AbyssalGaze} from "../exploration/abyssal-gaze";
import {CagedBeast} from "../exploration/caged-beast";
import {Geneticist} from "../exploration/geneticist";
import {HamidonsIre} from "../exploration/hamidons-ire";
import {HereBeDragons} from "../exploration/here-be-dragons";
import {NoEscape} from "../exploration/no-escape";
import {Reborn} from "../exploration/reborn";
import {TheTreeOfWoe} from "../exploration/the-tree-of-woe";

export const TouchedBottom: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "touched-bottom",
    setTitleId: 1890,
    names: [
        {value: "Touched Bottom"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within the Abyss.`}
    ],
    notes: `Visit all exploration badges in [map:${TheAbyss.key}]`,
    links: [
        {title: "Touched Bottom Badge", href: "https://homecoming.wiki/wiki/Touched_Bottom_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: AbyssalGaze.key, type: BadgePartialType.BADGE, badgeKey: AbyssalGaze.key},
        {key: CagedBeast.key, type: BadgePartialType.BADGE, badgeKey: CagedBeast.key},
        {key: Geneticist.key, type: BadgePartialType.BADGE, badgeKey: Geneticist.key},
        {key: HamidonsIre.key, type: BadgePartialType.BADGE, badgeKey: HamidonsIre.key},
        {key: HereBeDragons.key, type: BadgePartialType.BADGE, badgeKey: HereBeDragons.key},
        {key: NoEscape.key, type: BadgePartialType.BADGE, badgeKey: NoEscape.key},
        {key: Reborn.key, type: BadgePartialType.BADGE, badgeKey: Reborn.key},
        {key: TheTreeOfWoe.key, type: BadgePartialType.BADGE, badgeKey: TheTreeOfWoe.key}
    ]
};
