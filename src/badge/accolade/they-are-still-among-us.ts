import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";
import {VanguardOperative} from "../exploration/vanguard-operative";
import {Trespasser} from "../exploration/trespasser";
import {Lifesaver} from "../exploration/lifesaver";
import {BaseJumper} from "../exploration/base-jumper";
import {Homewrecker} from "../exploration/homewrecker";
import {Luscious} from "../exploration/luscious";
import {JunkyardDog} from "../exploration/junkyard-dog";
import {Unabashed} from "../exploration/unabashed";

export const TheyAreStillAmongUs: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "they-are-still-among-us",
    setTitleId: 2331,
    names: [
        {value: "They Are Still Among Us"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge in the Rikti War Zone.`}
    ],
    notes: `Visit all exploration badges in [map:${RiktiWarZone.key}]`,
    links: [
        {title: "They Are Still Among Us Badge", href: "https://paragonwiki.com/wiki/They_Are_Still_Among_Us_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
			{key: VanguardOperative.key, type: BadgePartialType.BADGE, badgeKey: VanguardOperative.key},
			{key: Trespasser.key, type: BadgePartialType.BADGE, badgeKey: Trespasser.key},
			{key: Lifesaver.key, type: BadgePartialType.BADGE, badgeKey: Lifesaver.key},
			{key: BaseJumper.key, type: BadgePartialType.BADGE, badgeKey: BaseJumper.key},
			{key: Homewrecker.key, type: BadgePartialType.BADGE, badgeKey: Homewrecker.key},
			{key: Luscious.key, type: BadgePartialType.BADGE, badgeKey: Luscious.key},
			{key: JunkyardDog.key, type: BadgePartialType.BADGE, badgeKey: JunkyardDog.key},
			{key: Unabashed.key, type: BadgePartialType.BADGE, badgeKey: Unabashed.key},
    ]
};