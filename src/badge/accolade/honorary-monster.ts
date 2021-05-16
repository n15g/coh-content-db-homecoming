import {ALIGNMENT_VILLAIN, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {MonsterIsland} from "../../map/monster-island";
import {DarkGarden} from "../exploration/dark-garden";
import {GrimFandango} from "../exploration/grim-fandango";
import {MisfitMonstrosity} from "../exploration/misfit-monstrosity";
import {MonsterFactory} from "../exploration/monster-factory";
import {MonsterIslander} from "../exploration/monster-islander";
import {MonstersPlaythings} from "../exploration/monsters-playthings";
import {RiktiMonkeyIsland} from "../exploration/rikti-monkey-island";
import {TheRoarOfTheBeast} from "../exploration/the-roar-of-the-beast";

export const HonoraryMonster: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "honorary-monster",
    setTitleId: 1891,
    names: [
        {value: "Honorary Monster"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Monster Island.`}
    ],
    notes: `Visit all exploration badges in [map:${MonsterIsland.key}]`,
    links: [
        {title: "Honorary Monster Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Honorary_Monster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: DarkGarden.key, type: BadgePartialType.BADGE, badgeKey: DarkGarden.key},
        {key: GrimFandango.key, type: BadgePartialType.BADGE, badgeKey: GrimFandango.key},
        {key: MisfitMonstrosity.key, type: BadgePartialType.BADGE, badgeKey: MisfitMonstrosity.key},
        {key: MonsterFactory.key, type: BadgePartialType.BADGE, badgeKey: MonsterFactory.key},
        {key: MonsterIslander.key, type: BadgePartialType.BADGE, badgeKey: MonsterIslander.key},
        {key: MonstersPlaythings.key, type: BadgePartialType.BADGE, badgeKey: MonstersPlaythings.key},
        {key: RiktiMonkeyIsland.key, type: BadgePartialType.BADGE, badgeKey: RiktiMonkeyIsland.key},
        {key: TheRoarOfTheBeast.key, type: BadgePartialType.BADGE, badgeKey: TheRoarOfTheBeast.key}
    ]
};
