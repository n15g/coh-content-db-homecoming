import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";
import {SecretAdmirer} from "../exploration/secret-admirer";
import {HeroCorpsRecruit} from "../exploration/hero-corps-recruit";
import {NimbleMynx} from "../exploration/nimble-mynx";
import {BrightStar} from "../exploration/bright-star";
import {DanceLegend} from "../exploration/dance-legend";
import {Controversial} from "../exploration/controversial";
import {PetProject} from "../exploration/pet-project";
import {DirtyAttorney} from "../exploration/dirty-attorney";

export const CanyonCarver: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "canyon-carver",
    setTitleId: 1534,
    names: [
        {value: "Canyon Carver"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Steel Canyon.`}
    ],
    notes: `Visit all exploration badges in [map:${SteelCanyon.key}]`,
    links: [
        {title: "Canyon Carver Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Canyon_Carver_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: SecretAdmirer.key, type: BadgePartialType.BADGE, badgeKey: SecretAdmirer.key},
        {key: HeroCorpsRecruit.key, type: BadgePartialType.BADGE, badgeKey: HeroCorpsRecruit.key},
        {key: NimbleMynx.key, type: BadgePartialType.BADGE, badgeKey: NimbleMynx.key},
        {key: BrightStar.key, type: BadgePartialType.BADGE, badgeKey: BrightStar.key},
        {key: DanceLegend.key, type: BadgePartialType.BADGE, badgeKey: DanceLegend.key},
        {key: Controversial.key, type: BadgePartialType.BADGE, badgeKey: Controversial.key},
        {key: PetProject.key, type: BadgePartialType.BADGE, badgeKey: PetProject.key},
        {key: DirtyAttorney.key, type: BadgePartialType.BADGE, badgeKey: DirtyAttorney.key}
    ]
};
