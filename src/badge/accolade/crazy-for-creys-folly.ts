import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {CreysFolly} from "../../map/creys-folly";
import {BurningTheMidnightOil} from "../exploration/burning-the-midnight-oil";
import {CreyCares} from "../exploration/crey-cares";
import {CreyWatcher} from "../exploration/crey-watcher";
import {EyesOfNemesis} from "../exploration/eyes-of-nemesis";
import {FreaksFolly} from "../exploration/freaks-folly";
import {HammerOfTheRikti} from "../exploration/hammer-of-the-rikti";
import {VeniVidiVici} from "../exploration/veni-vidi-vici";
import {CirqueDuFreak} from "../exploration/cirque-du-freak";

export const CrazyForCreysFolly: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "crazy-for-creys-folly",
    setTitleId: 1880,
    names: [
        {value: "Crazy for Crey's Folly"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Crey's Folly.`}
    ],
    notes: `Visit all exploration badges in [map:${CreysFolly.key}]`,
    links: [
        {title: "Crazy for Crey's Folly Badge", href: "https://homecoming.wiki/wiki/Crazy_for_Crey%27s_Folly_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: BurningTheMidnightOil.key, type: BadgePartialType.BADGE, badgeKey: BurningTheMidnightOil.key},
        {key: CirqueDuFreak.key, type: BadgePartialType.BADGE, badgeKey: CirqueDuFreak.key},
        {key: CreyCares.key, type: BadgePartialType.BADGE, badgeKey: CreyCares.key},
        {key: CreyWatcher.key, type: BadgePartialType.BADGE, badgeKey: CreyWatcher.key},
        {key: EyesOfNemesis.key, type: BadgePartialType.BADGE, badgeKey: EyesOfNemesis.key},
        {key: FreaksFolly.key, type: BadgePartialType.BADGE, badgeKey: FreaksFolly.key},
        {key: HammerOfTheRikti.key, type: BadgePartialType.BADGE, badgeKey: HammerOfTheRikti.key},
        {key: VeniVidiVici.key, type: BadgePartialType.BADGE, badgeKey: VeniVidiVici.key}
    ]
};
