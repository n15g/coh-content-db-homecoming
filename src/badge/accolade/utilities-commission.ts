import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {TerraVolta} from "../../map/terra-volta";
import {ConjunctionJunction} from "../exploration/conjunction-junction";
import {DangerDanger} from "../exploration/danger-danger";
import {GuardianOfTheVolts} from "../exploration/guardian-of-the-volts";
import {HighVoltage} from "../exploration/high-voltage";
import {Meltdown} from "../exploration/meltdown";
import {NervousDreck} from "../exploration/nervous-dreck";
import {PowerWalker} from "../exploration/power-walker";
import {ScrapheapOfHistory} from "../exploration/scrapheap-of-history";

export const UtilitiesCommission: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "utilities-commission",
    setTitleId: 1886,
    names: [
        {value: "Utilities Commission"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Terra Volta.`}
    ],
    notes: `Visit all exploration badges in [map:${TerraVolta.key}]`,
    links: [
        {title: "Utilities Commission Badge", href: "https://homecoming.wiki/wiki/Utilities_Commission_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: ConjunctionJunction.key, type: BadgePartialType.BADGE, badgeKey: ConjunctionJunction.key},
        {key: DangerDanger.key, type: BadgePartialType.BADGE, badgeKey: DangerDanger.key},
        {key: GuardianOfTheVolts.key, type: BadgePartialType.BADGE, badgeKey: GuardianOfTheVolts.key},
        {key: HighVoltage.key, type: BadgePartialType.BADGE, badgeKey: HighVoltage.key},
        {key: Meltdown.key, type: BadgePartialType.BADGE, badgeKey: Meltdown.key},
        {key: NervousDreck.key, type: BadgePartialType.BADGE, badgeKey: NervousDreck.key},
        {key: PowerWalker.key, type: BadgePartialType.BADGE, badgeKey: PowerWalker.key},
        {key: ScrapheapOfHistory.key, type: BadgePartialType.BADGE, badgeKey: ScrapheapOfHistory.key}
    ]
};
