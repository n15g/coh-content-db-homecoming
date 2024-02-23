import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNova} from "../../map/underground-nova";
import {ClockworkMechanic} from "../exploration/clockwork-mechanic";
import {Disappeared} from "../exploration/disappeared";
import {FerrymanOfTheDamned} from "../exploration/ferryman-of-the-damned";
import {Morbid} from "../exploration/morbid";
import {SecretPrisoner} from "../exploration/secret-prisoner";
import {Trainspotter} from "../exploration/trainspotter";
import {UrbanSpelunker} from "../exploration/urban-spelunker";
import {WarriorAtTheGate} from "../exploration/warrior-at-the-gate";

export const KnowsNovasNooks: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "knows-novas-nooks",
    setTitleId: 1644,
    names: [
        {value: "Knows Nova's Nooks"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Nova Praetoria's Underground.`}
    ],
    notes: `Visit all exploration badges in [map:${UndergroundNova.key}]`,
    links: [
        {title: "Knows Nova's Nooks Badge", href: "https://homecoming.wiki/wiki/Knows_Nova%27s_Nooks_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png"}
    ],
    partials: [
        {key: ClockworkMechanic.key, type: BadgePartialType.BADGE, badgeKey: ClockworkMechanic.key},
        {key: Disappeared.key, type: BadgePartialType.BADGE, badgeKey: Disappeared.key},
        {key: FerrymanOfTheDamned.key, type: BadgePartialType.BADGE, badgeKey: FerrymanOfTheDamned.key},
        {key: Morbid.key, type: BadgePartialType.BADGE, badgeKey: Morbid.key},
        {key: SecretPrisoner.key, type: BadgePartialType.BADGE, badgeKey: SecretPrisoner.key},
        {key: Trainspotter.key, type: BadgePartialType.BADGE, badgeKey: Trainspotter.key},
        {key: UrbanSpelunker.key, type: BadgePartialType.BADGE, badgeKey: UrbanSpelunker.key},
        {key: WarriorAtTheGate.key, type: BadgePartialType.BADGE, badgeKey: WarriorAtTheGate.key}
    ]
};
