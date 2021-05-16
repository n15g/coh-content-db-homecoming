import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Exterminator} from "../accomplishment/exterminator";
import {Pirate} from "../defeat/pirate";
import {PrimalInstinct} from "../exploration/primal-instinct";
import {HammerDown} from "../defeat/hammer-down";
import {Swashbuckler} from "../history/swashbuckler";
import {Triumphant} from "../exploration/triumphant";
import {Adamant} from "../achievement/adamant";

export const BornInBattle: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "born-in-battle",
    setTitleId: 534,
    names: [
        {value: "Born in Battle"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `You may have proven yourself as Born in Battle, but in Paragon City other virtues matter more.`},
        {type: Alternate.V, value: `You've proven yourself as Born in Battle, adding 5% to both your Endurance and Hit Point totals.`}
    ],
    notes: `Awards +5% Max Health and +5 Max Endurance`,
    links: [
        {title: "Born in Battle Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Born_in_Battle_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/born-in-battle.png"}
    ],
    effect: `+5% Max Health and +5 Max Endurance`,
    partials: [
        {key: Exterminator.key, type: BadgePartialType.BADGE, badgeKey: Exterminator.key},
        {key: Pirate.key, type: BadgePartialType.BADGE, badgeKey: Pirate.key},
        {key: PrimalInstinct.key, type: BadgePartialType.BADGE, badgeKey: PrimalInstinct.key},
        {key: HammerDown.key, type: BadgePartialType.BADGE, badgeKey: HammerDown.key},
        {key: Swashbuckler.key, type: BadgePartialType.BADGE, badgeKey: Swashbuckler.key},
        {key: Triumphant.key, type: BadgePartialType.BADGE, badgeKey: Triumphant.key},
        {key: Adamant.key, type: BadgePartialType.BADGE, badgeKey: Adamant.key}
    ]
};
