import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";
import {FollysVictim} from "../exploration/follys-victim";
import {PalaceOfStoneLeaves} from "../exploration/palace-of-stone-leaves";
import {AuspiceAvernus} from "../exploration/auspice-avernus";
import {WalkerOnTheProfaneAscent} from "../exploration/walker-on-the-profane-ascent";
import {WitnessOfOaths} from "../exploration/witness-of-oaths";
import {LifeOutOfDeath} from "../exploration/life-out-of-death";
import {OfThingsUnclean} from "../exploration/of-things-unclean";
import {DeathsHeadSupplicant} from "../exploration/deaths-head-supplicant";

export const FreeAmongTheDead: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "free-among-the-dead",
    setTitleId: 2187,
    names: [
        {value: "Free Among the Dead"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Dark Astoria.`}
    ],
    notes: `Visit all exploration badges in [map:${DarkAstoria.key}]`,
    links: [
        {title: "Free Among the Dead Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Free_Among_the_Dead_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: FollysVictim.key, type: BadgePartialType.BADGE, badgeKey: FollysVictim.key},
        {key: PalaceOfStoneLeaves.key, type: BadgePartialType.BADGE, badgeKey: PalaceOfStoneLeaves.key},
        {key: AuspiceAvernus.key, type: BadgePartialType.BADGE, badgeKey: AuspiceAvernus.key},
        {key: DeathsHeadSupplicant.key, type: BadgePartialType.BADGE, badgeKey: DeathsHeadSupplicant.key},
        {key: WalkerOnTheProfaneAscent.key, type: BadgePartialType.BADGE, badgeKey: WalkerOnTheProfaneAscent.key},
        {key: WitnessOfOaths.key, type: BadgePartialType.BADGE, badgeKey: WitnessOfOaths.key},
        {key: LifeOutOfDeath.key, type: BadgePartialType.BADGE, badgeKey: LifeOutOfDeath.key},
        {key: OfThingsUnclean.key, type: BadgePartialType.BADGE, badgeKey: OfThingsUnclean.key}
    ]
};
