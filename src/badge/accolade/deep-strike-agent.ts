import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {BinderOfBeasts} from "../accomplishment/binder-of-beasts";
import {Leviathan} from "../accomplishment/leviathan";
import {AirPirate} from "../accomplishment/air-pirate";
import {CrystalKeeper} from "../accomplishment/crystal-keeper";
import {GoldStandard} from "../accomplishment/gold-standard";

export const StrikeForceCommander: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "deep-strike-agent",
    setTitleId: 2542,
    names: [
        {type: Alternate.H, value: "Deep Strike Agent"},
        {type: Alternate.V, value: "Strike Force Commander"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You have successfully taken part in many of the most impactful operations and Strike Forces executed by Arachnos and their 'Destined Ones'. You can break free from many effects out of sheer spite, due to your remarkable tenacity.`},
    ],
    notes: `Awards the Sheer Willpower power.`,
    links: [
        {title: "Strike Force Commander Badge", href: "https://homecoming.wiki/wiki/Strike_Force_Commander_Badge"},
        {title: "Deep Strike Agent Badge", href: "https://homecoming.wiki/wiki/Strike_Force_Commander_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/strike-force-commander.png"}
    ],
    effect: `Sheer Willpower`,
    partials: [
        {key: BinderOfBeasts.key, type: BadgePartialType.BADGE, badgeKey: BinderOfBeasts.key},
        {key: Leviathan.key, type: BadgePartialType.BADGE, badgeKey: Leviathan.key},
        {key: AirPirate.key, type: BadgePartialType.BADGE, badgeKey: AirPirate.key},
        {key: CrystalKeeper.key, type: BadgePartialType.BADGE, badgeKey: CrystalKeeper.key},
        {key: GoldStandard.key, type: BadgePartialType.BADGE, badgeKey: GoldStandard.key}
    ]
};
