import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {BadLuck} from "../accomplishment/bad-luck";
import {Deathless} from "../achievement/deathless";
import {FreakOfNature} from "../exploration/freak-of-nature";
import {Gangbuster} from "../defeat/gangbuster";
import {LockedAndLoaded} from "../exploration/locked-and-loaded";
import {SpiderSmasher} from "../defeat/spider-smasher";
import {Technofreak} from "../history/technofreak";

export const GottenSoft: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "gotten-soft",
    setTitleId: 535,
    names: [
        {type: Alternate.H, value: "Gotten Soft"},
        {type: Alternate.V, value: "High Pain Threshold"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `You once had a incredibly High Pain Threshold, but it seems you've grown a little soft after coming to Paragon City.`},
        {type: Alternate.V, value: `You've got an incredibly High Pain Threshold, an after effect of which is that your Hit Points are 10% greater than normal.`}
    ],
    notes: `Awards +10% Max Health`,
    links: [
        {title: "Gotten Soft Badge", href: "https://paragonwiki.com/wiki/Gotten_Soft_Badge"},
        {title: "High Pain Threshold Badge", href: "https://paragonwiki.com/wiki/High_Pain_Threshold_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/gotten-soft.png"}
    ],
    effect: `+10% Max Health`,
    partials: [
            {key: BadLuck.key, type: BadgePartialType.BADGE, badgeKey: BadLuck.key},
            {key: Deathless.key, type: BadgePartialType.BADGE, badgeKey: Deathless.key},
            {key: FreakOfNature.key, type: BadgePartialType.BADGE, badgeKey: FreakOfNature.key},
            {key: Gangbuster.key, type: BadgePartialType.BADGE, badgeKey: Gangbuster.key},
            {key: LockedAndLoaded.key, type: BadgePartialType.BADGE, badgeKey: LockedAndLoaded.key},
            {key: SpiderSmasher.key, type: BadgePartialType.BADGE, badgeKey: SpiderSmasher.key},
            {key: Technofreak.key, type: BadgePartialType.BADGE, badgeKey: Technofreak.key}
    ]
};