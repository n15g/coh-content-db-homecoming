import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";
import {AstoriasLastStand} from "../exploration/astorias-last-stand";
import {CairnWarder} from "../exploration/cairn-warder";
import {DarkMystic} from "../exploration/dark-mystic";
import {PhantomRadio} from "../exploration/phantom-radio";
import {SeekerOfTheUnknown} from "../exploration/seeker-of-the-unknown";
import {TheSleeperBelow} from "../exploration/the-sleeper-below";
import {TooDarkPark} from "../exploration/too-dark-park";
import {WhispererOnWitchburnHill} from "../exploration/whisperer-on-witchburn-hill";

export const ALightInDarkAstoria: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "a-light-in-dark-astoria",
    setTitleId: 1878,
    names: [
        {value: "A Light in Dark Astoria"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Dark Astoria.`}
    ],
    notes: `Visit all exploration badges in [map:${EchoDarkAstoria.key}]`,
    links: [
        {title: "A Light in Dark Astoria Badge", href: "https://homecoming.wiki/wiki/A_Light_in_Dark_Astoria_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: AstoriasLastStand.key, type: BadgePartialType.BADGE, badgeKey: AstoriasLastStand.key},
        {key: CairnWarder.key, type: BadgePartialType.BADGE, badgeKey: CairnWarder.key},
        {key: DarkMystic.key, type: BadgePartialType.BADGE, badgeKey: DarkMystic.key},
        {key: PhantomRadio.key, type: BadgePartialType.BADGE, badgeKey: PhantomRadio.key},
        {key: SeekerOfTheUnknown.key, type: BadgePartialType.BADGE, badgeKey: SeekerOfTheUnknown.key},
        {key: TheSleeperBelow.key, type: BadgePartialType.BADGE, badgeKey: TheSleeperBelow.key},
        {key: TooDarkPark.key, type: BadgePartialType.BADGE, badgeKey: TooDarkPark.key},
        {key: WhispererOnWitchburnHill.key, type: BadgePartialType.BADGE, badgeKey: WhispererOnWitchburnHill.key}
    ]
};
