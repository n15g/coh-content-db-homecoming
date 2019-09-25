import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Regal} from "../exploration/regal";
import {Brawler} from "../exploration/brawler";
import {Vigorous} from "../exploration/vigorous";
import {Summoned} from "../exploration/summoned";
import {KeenSighted} from "../exploration/keen-sighted";
import {Purifier} from "../exploration/purifier";
import {NimbleMynx} from "../exploration/nimble-mynx";
import {Authority} from "../history/authority";
import {TankBuster} from "../defeat/tank-buster";
import {Gearsmasher} from "../defeat/gearsmasher";
import {Unveiler} from "../defeat/unveiler";

export const FreedomPhalanxReserveMember: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "freedom-phalanx-reserve-member",
    names: [{value: "Freedom Phalanx Reserve Member"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: "You have earned a reserve membership into Paragon City's premier Super Group: Freedom Phalanx. This privilege comes with the added perk of +10% Hit Points."}],
    notes: "This badge is only awarded to characters of the hero or vigilante alignments." +
        " Although credit for this badge may be earned by villains or rogues, the badge will not be awarded to a character until they change alignment." +
        "\n\nCredit toward this badge may be earned using either of two methods:" +
        "\n\n**Traditional Method:** Earn the associated badges as a hero or vigilante." +
        "\n\n**Alternate method:** Earn the [badge:high-pain-threshold] badge as a villain or rogue.",
    links: [
        {title: "Freedom Phalanx Reserve Member Badge", href: "https://paragonwiki.com/wiki/Freedom_Phalanx_Reserve_Member_Badge"}
    ],
    imageKeys: [
        {value: "core.accolade.freedom-phalanx-reserve-member"}
    ],
    effect: "+10% Max Health",
    partials: [
        {key: Regal.key, type: BadgePartialType.BADGE, badgeKey: Regal.key},
        {key: Brawler.key, type: BadgePartialType.BADGE, badgeKey: Brawler.key},
        {key: Vigorous.key, type: BadgePartialType.BADGE, badgeKey: Vigorous.key},
        {key: Summoned.key, type: BadgePartialType.BADGE, badgeKey: Summoned.key},
        {key: KeenSighted.key, type: BadgePartialType.BADGE, badgeKey: KeenSighted.key},
        {key: Purifier.key, type: BadgePartialType.BADGE, badgeKey: Purifier.key},
        {key: NimbleMynx.key, type: BadgePartialType.BADGE, badgeKey: NimbleMynx.key},
        {key: Authority.key, type: BadgePartialType.BADGE, badgeKey: Authority.key},
        {key: TankBuster.key, type: BadgePartialType.BADGE, badgeKey: TankBuster.key},
        {key: Gearsmasher.key, type: BadgePartialType.BADGE, badgeKey: Gearsmasher.key},
        {key: Unveiler.key, type: BadgePartialType.BADGE, badgeKey: Unveiler.key}
    ]
};
