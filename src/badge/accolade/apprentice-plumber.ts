import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {SewerNetwork} from "../../map/sewer-network";
import {BaumtonAvenger} from "../exploration/baumton-avenger";
import {DownwardBound} from "../exploration/downward-bound";
import {Plutonian} from "../exploration/plutonian";
import {SeekerOfTheLost} from "../exploration/seeker-of-the-lost";
import {SewerKing} from "../exploration/sewer-king";
import {SewerStalker} from "../exploration/sewer-stalker";
import {SpiritOfTheCity} from "../exploration/spirit-of-the-city";
import {TerrorOfTheVahzilok} from "../exploration/terror-of-the-vahzilok";

export const ApprenticePlumber: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "apprentice-plumber",
    setTitleId: 1885,
    names: [
        {value: "Apprentice Plumber"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within the Sewer Network.`}
    ],
    notes: `Visit all exploration badges in [map:${SewerNetwork.key}]`,
    links: [
        {title: "Apprentice Plumber Badge", href: "https://homecoming.wiki/wiki/Apprentice_Plumber_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: BaumtonAvenger.key, type: BadgePartialType.BADGE, badgeKey: BaumtonAvenger.key},
        {key: DownwardBound.key, type: BadgePartialType.BADGE, badgeKey: DownwardBound.key},
        {key: Plutonian.key, type: BadgePartialType.BADGE, badgeKey: Plutonian.key},
        {key: SeekerOfTheLost.key, type: BadgePartialType.BADGE, badgeKey: SeekerOfTheLost.key},
        {key: SewerKing.key, type: BadgePartialType.BADGE, badgeKey: SewerKing.key},
        {key: SewerStalker.key, type: BadgePartialType.BADGE, badgeKey: SewerStalker.key},
        {key: SpiritOfTheCity.key, type: BadgePartialType.BADGE, badgeKey: SpiritOfTheCity.key},
        {key: TerrorOfTheVahzilok.key, type: BadgePartialType.BADGE, badgeKey: TerrorOfTheVahzilok.key}
    ]
};
