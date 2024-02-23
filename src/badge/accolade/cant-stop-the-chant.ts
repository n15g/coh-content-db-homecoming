import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";
import {Bereaved} from "../exploration/bereaved";
import {Demiurge} from "../exploration/demiurge";
import {Dispossessed} from "../exploration/dispossessed";
import {KingOfPain} from "../exploration/king-of-pain";
import {Misbegotten} from "../exploration/misbegotten";
import {Penitent} from "../exploration/penitent";
import {RedFog} from "../exploration/red-fog";
import {Unfettered} from "../exploration/unfettered";

export const CantStopTheChant: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "cant-stop-the-chant",
    setTitleId: 1883,
    names: [
        {value: "Can't Stop the Chant"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within the Chantry.`}
    ],
    notes: `Visit all exploration badges in [map:${TheChantry.key}]`,
    links: [
        {title: "Can't Stop the Chant Badge", href: "https://homecoming.wiki/wiki/Can%27t_Stop_the_Chant_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: Bereaved.key, type: BadgePartialType.BADGE, badgeKey: Bereaved.key},
        {key: Demiurge.key, type: BadgePartialType.BADGE, badgeKey: Demiurge.key},
        {key: Dispossessed.key, type: BadgePartialType.BADGE, badgeKey: Dispossessed.key},
        {key: KingOfPain.key, type: BadgePartialType.BADGE, badgeKey: KingOfPain.key},
        {key: Misbegotten.key, type: BadgePartialType.BADGE, badgeKey: Misbegotten.key},
        {key: Penitent.key, type: BadgePartialType.BADGE, badgeKey: Penitent.key},
        {key: RedFog.key, type: BadgePartialType.BADGE, badgeKey: RedFog.key},
        {key: Unfettered.key, type: BadgePartialType.BADGE, badgeKey: Unfettered.key}
    ]
};
