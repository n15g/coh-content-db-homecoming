import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Authority} from "../history/authority";
import {Brawler} from "../exploration/brawler";
import {Gearsmasher} from "../defeat/gearsmasher";
import {KeenSighted} from "../exploration/keen-sighted";
import {NimbleMynx} from "../exploration/nimble-mynx";
import {Purifier} from "../exploration/purifier";
import {Regal} from "../exploration/regal";
import {Summoned} from "../exploration/summoned";
import {TankBuster} from "../defeat/tank-buster";
import {Unveiler} from "../defeat/unveiler";
import {Vigorous} from "../exploration/vigorous";

export const FreedomPhalanxReserveMember: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "freedom-phalanx-reserve-member",
    setTitleId: 161,
    names: [
        {type: Alternate.H, value: "Freedom Phalanx Reserve Member"},
        {type: Alternate.V, value: "Freedom Phalanx Fallen"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `You have earned a reserve membership into Paragon City's premier Super Group: Freedom Phalanx. This privilege comes with the added perk of +10% Hit Points.`},
        {type: Alternate.V, value: `The Freedom Phalanx has stricken you from their rolls. All associated rights and privileges have been revoked.`}
    ],
    notes: `Awards +10% Max Health`,
    links: [
        {title: "Freedom Phalanx Reserve Member Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Freedom_Phalanx_Reserve_Member_Badge"},
        {title: "Freedom Phalanx Fallen Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Freedom_Phalanx_Fallen_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/freedom-phalanx-reserve-member.png"}
    ],
    effect: `+10% Max Health`,
    partials: [
        {key: Authority.key, type: BadgePartialType.BADGE, badgeKey: Authority.key},
        {key: Brawler.key, type: BadgePartialType.BADGE, badgeKey: Brawler.key},
        {key: Gearsmasher.key, type: BadgePartialType.BADGE, badgeKey: Gearsmasher.key},
        {key: KeenSighted.key, type: BadgePartialType.BADGE, badgeKey: KeenSighted.key},
        {key: NimbleMynx.key, type: BadgePartialType.BADGE, badgeKey: NimbleMynx.key},
        {key: Purifier.key, type: BadgePartialType.BADGE, badgeKey: Purifier.key},
        {key: Regal.key, type: BadgePartialType.BADGE, badgeKey: Regal.key},
        {key: Summoned.key, type: BadgePartialType.BADGE, badgeKey: Summoned.key},
        {key: TankBuster.key, type: BadgePartialType.BADGE, badgeKey: TankBuster.key},
        {key: Unveiler.key, type: BadgePartialType.BADGE, badgeKey: Unveiler.key},
        {key: Vigorous.key, type: BadgePartialType.BADGE, badgeKey: Vigorous.key}
    ]
};
