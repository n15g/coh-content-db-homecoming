import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";
import {AroundTheBendis} from "../exploration/around-the-bendis";
import {Avatar} from "../exploration/avatar";
import {BloodMoss} from "../exploration/blood-moss";
import {DocWhedon} from "../exploration/doc-whedon";
import {JusticeAvenger} from "../exploration/justice-avenger";
import {NebulasMemory} from "../exploration/nebulas-memory";
import {OpheliasFinalScene} from "../exploration/ophelias-final-scene";
import {Territorial} from "../exploration/territorial";

export const PerezParkPerfection: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "perez-park-perfection",
    setTitleId: 1876,
    names: [
        {value: "Perez Park Perfection"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Perez Park.`}
    ],
    notes: `Visit all exploration badges in [map:${PerezPark.key}]`,
    links: [
        {title: "Perez Park Perfection Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Perez_Park_Perfection_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: AroundTheBendis.key, type: BadgePartialType.BADGE, badgeKey: AroundTheBendis.key},
        {key: Avatar.key, type: BadgePartialType.BADGE, badgeKey: Avatar.key},
        {key: BloodMoss.key, type: BadgePartialType.BADGE, badgeKey: BloodMoss.key},
        {key: DocWhedon.key, type: BadgePartialType.BADGE, badgeKey: DocWhedon.key},
        {key: JusticeAvenger.key, type: BadgePartialType.BADGE, badgeKey: JusticeAvenger.key},
        {key: NebulasMemory.key, type: BadgePartialType.BADGE, badgeKey: NebulasMemory.key},
        {key: OpheliasFinalScene.key, type: BadgePartialType.BADGE, badgeKey: OpheliasFinalScene.key},
        {key: JusticeAvenger.key, type: BadgePartialType.BADGE, badgeKey: JusticeAvenger.key},
        {key: Territorial.key, type: BadgePartialType.BADGE, badgeKey: Territorial.key}
    ]
};
