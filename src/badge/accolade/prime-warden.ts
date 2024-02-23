import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {FirstWard} from "../../map/first-ward";
import {DearlyDeparted} from "../exploration/dearly-departed";
import {EyeOfTheVortex} from "../exploration/eye-of-the-vortex";
import {FearlessInsurgent} from "../exploration/fearless-insurgent";
import {ShellShocked} from "../exploration/shell-shocked";
import {MayhemsProdigal} from "../exploration/mayhems-prodigal";
import {ShadowWalker} from "../exploration/shadow-walker";
import {VengeanceSeeker} from "../exploration/vengeance-seeker";
import {WitnessForTheFallen} from "../exploration/witness-for-the-fallen";

export const PrimeWarden: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "prime-warden",
    setTitleId: 2056,
    names: [
        {value: "Prime Warden"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within First Ward.`}
    ],
    notes: `Visit all exploration badges in [map:${FirstWard.key}]`,
    links: [
        {title: "Prime Warden Badge", href: "https://homecoming.wiki/wiki/Prime_Warden_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png"}
    ],
    partials: [
        {key: DearlyDeparted.key, type: BadgePartialType.BADGE, badgeKey: DearlyDeparted.key},
        {key: EyeOfTheVortex.key, type: BadgePartialType.BADGE, badgeKey: EyeOfTheVortex.key},
        {key: FearlessInsurgent.key, type: BadgePartialType.BADGE, badgeKey: FearlessInsurgent.key},
        {key: ShellShocked.key, type: BadgePartialType.BADGE, badgeKey: ShellShocked.key},
        {key: MayhemsProdigal.key, type: BadgePartialType.BADGE, badgeKey: MayhemsProdigal.key},
        {key: ShadowWalker.key, type: BadgePartialType.BADGE, badgeKey: ShadowWalker.key},
        {key: VengeanceSeeker.key, type: BadgePartialType.BADGE, badgeKey: VengeanceSeeker.key},
        {key: WitnessForTheFallen.key, type: BadgePartialType.BADGE, badgeKey: WitnessForTheFallen.key}
    ]
};
