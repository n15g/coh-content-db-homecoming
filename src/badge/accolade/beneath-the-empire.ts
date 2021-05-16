import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";
import {BrokenMind} from "../exploration/broken-mind";
import {Condemning} from "../exploration/condemning";
import {Engineer} from "../exploration/engineer";
import {EyesOfTheDark} from "../exploration/eyes-of-the-dark";
import {Hoarder} from "../exploration/hoarder";
import {Lowlife} from "../exploration/lowlife";
import {SilentWitness} from "../exploration/silent-witness";
import {UndergroundExplorer} from "../exploration/underground-explorer";

export const BeneathTheEmpire: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "beneath-the-empire",
    setTitleId: 1653,
    names: [
        {value: "Beneath the Empire"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Imperial City's Underground.`}
    ],
    notes: `Visit all exploration badges in [map:${UndergroundImperial.key}]`,
    links: [
        {title: "Beneath the Empire Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Beneath_the_Empire_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png"}
    ],
    partials: [
        {key: BrokenMind.key, type: BadgePartialType.BADGE, badgeKey: BrokenMind.key},
        {key: Condemning.key, type: BadgePartialType.BADGE, badgeKey: Condemning.key},
        {key: Engineer.key, type: BadgePartialType.BADGE, badgeKey: Engineer.key},
        {key: EyesOfTheDark.key, type: BadgePartialType.BADGE, badgeKey: EyesOfTheDark.key},
        {key: Hoarder.key, type: BadgePartialType.BADGE, badgeKey: Hoarder.key},
        {key: Lowlife.key, type: BadgePartialType.BADGE, badgeKey: Lowlife.key},
        {key: SilentWitness.key, type: BadgePartialType.BADGE, badgeKey: SilentWitness.key},
        {key: UndergroundExplorer.key, type: BadgePartialType.BADGE, badgeKey: UndergroundExplorer.key}
    ]
};
