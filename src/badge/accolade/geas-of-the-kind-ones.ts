import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {BaneOfDannan} from "../defeat/bane-of-dannan";
import {Believer} from "../defeat/believer";
import {Cabalist} from "../accomplishment/cabalist";
import {CapBuster} from "../defeat/cap-buster";
import {GiantKiller} from "../defeat/giant-killer";
import {Haunted} from "../defeat/haunted";
import {PumpkinKing} from "../defeat/pumpkin-king";
import {PumpkinMaster} from "../defeat/pumpkin-master";
import {Spellbinding} from "../defeat/spellbinding";

export const GeasOfTheKindOnes: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "geas-of-the-kind-ones",
    setTitleId: 435,
    names: [
        {value: "Geas of the Kind Ones"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Whatever spirits watch over Croatoa have bestowed their blessing upon you. Of course, sometimes a blessing can be more like a curse.`},
        {type: Alternate.V, value: `Whatever spirits watch over Croatoa have taken back their blessing from you. Apparently they feel you are no longer worthy.`}
    ],
    notes: `Awards the Geas of the Kind Ones power`,
    links: [
        {title: "Geas of the Kind Ones Badge", href: "https://homecoming.wiki/wiki/Geas_of_the_Kind_Ones_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/geas-of-the-kind-ones.png"}
    ],
    effect: `Geas of the Kind Ones`,
    partials: [
        {key: BaneOfDannan.key, type: BadgePartialType.BADGE, badgeKey: BaneOfDannan.key},
        {key: Believer.key, type: BadgePartialType.BADGE, badgeKey: Believer.key},
        {key: Cabalist.key, type: BadgePartialType.BADGE, badgeKey: Cabalist.key},
        {key: CapBuster.key, type: BadgePartialType.BADGE, badgeKey: CapBuster.key},
        {key: GiantKiller.key, type: BadgePartialType.BADGE, badgeKey: GiantKiller.key},
        {key: Haunted.key, type: BadgePartialType.BADGE, badgeKey: Haunted.key},
        {key: PumpkinKing.key, type: BadgePartialType.BADGE, badgeKey: PumpkinKing.key},
        {key: PumpkinMaster.key, type: BadgePartialType.BADGE, badgeKey: PumpkinMaster.key},
        {key: Spellbinding.key, type: BadgePartialType.BADGE, badgeKey: Spellbinding.key}
    ]
};
