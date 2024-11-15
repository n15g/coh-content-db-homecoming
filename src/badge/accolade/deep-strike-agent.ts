import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {BinderOfBeasts} from "../accomplishment/binder-of-beasts";
import {Leviathan} from "../accomplishment/leviathan";
import {PirateHunter} from "../accomplishment/pirate-hunter";
import {CrystalKeeper} from "../accomplishment/crystal-keeper";
import {GoldStandard} from "../accomplishment/gold-standard";

export const DeepStrikeAgent: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "deep-strike-agent",
    setTitleId: 2542,
    names: [
        {type: Alternate.H, value: "Deep Strike Agent"},
        {type: Alternate.V, value: "Strike Force Commander"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `You have successfully taken part in many of the most impactful operations and Strike Forces executed by Arachnos and their 'Destined Ones'. You can break free from many effects out of sheer spite, due to your remarkable tenacity.`},
        {type: Alternate.V, value: `You successfully infiltrated the most impactful operations and Strike Forces executed by Arachnos and their 'Destined Ones'. You can break free from many effects out of sheer spite.`}
    ],
    notes: `Awards the Sheer Willpower power.`,
    links: [
        {title: "Deep Strike Agent Badge", href: "https://homecoming.wiki/wiki/Deep_Strike_Agent_Badge"},
        {title: "Strike Force Commander Badge", href: "https://homecoming.wiki/wiki/Strike_Force_Commander_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/deep-strike-agent.png"}
    ],
    effect: `Sheer Willpower`,
    partials: [
        {key: BinderOfBeasts.key, type: BadgePartialType.BADGE, badgeKey: BinderOfBeasts.key},
        {key: Leviathan.key, type: BadgePartialType.BADGE, badgeKey: Leviathan.key},
        {key: PirateHunter.key, type: BadgePartialType.BADGE, badgeKey: PirateHunter.key},
        {key: CrystalKeeper.key, type: BadgePartialType.BADGE, badgeKey: CrystalKeeper.key},
        {key: GoldStandard.key, type: BadgePartialType.BADGE, badgeKey: GoldStandard.key}
    ]
};
