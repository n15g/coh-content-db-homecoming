import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";
import {BoomtownRefugee} from "../exploration/boomtown-refugee";
import {FromBeneathYou} from "../exploration/from-beneath-you";
import {HadesAspirant} from "../exploration/hades-aspirant";
import {LivingDark} from "../exploration/living-dark";
import {PersephoneSupplicant} from "../exploration/persephone-supplicant";
import {SecretOfTheCity} from "../exploration/secret-of-the-city";
import {SprawlSurvivor} from "../exploration/sprawl-survivor";
import {TheUnderlord} from "../exploration/the-underlord";

export const MasterPlumber: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "master-plumber",
    setTitleId: 1884,
    names: [
        {value: "Master Plumber"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within the Abandoned Sewer Network.`}
    ],
    notes: `Visit all exploration badges in [map:${AbandonedSewerNetwork.key}]`,
    links: [
        {title: "Master Plumber Badge", href: "https://homecoming.wiki/wiki/Master_Plumber_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: BoomtownRefugee.key, type: BadgePartialType.BADGE, badgeKey: BoomtownRefugee.key},
        {key: FromBeneathYou.key, type: BadgePartialType.BADGE, badgeKey: FromBeneathYou.key},
        {key: HadesAspirant.key, type: BadgePartialType.BADGE, badgeKey: HadesAspirant.key},
        {key: LivingDark.key, type: BadgePartialType.BADGE, badgeKey: LivingDark.key},
        {key: PersephoneSupplicant.key, type: BadgePartialType.BADGE, badgeKey: PersephoneSupplicant.key},
        {key: SecretOfTheCity.key, type: BadgePartialType.BADGE, badgeKey: SecretOfTheCity.key},
        {key: SprawlSurvivor.key, type: BadgePartialType.BADGE, badgeKey: SprawlSurvivor.key},
        {key: TheUnderlord.key, type: BadgePartialType.BADGE, badgeKey: TheUnderlord.key}
    ]
};
