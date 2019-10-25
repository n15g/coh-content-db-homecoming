import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";
import {TiberianOverseer} from "../exploration/tiberian-overseer";
import {PraetorianOfPrivilege} from "../exploration/praetorian-of-privilege";
import {GoldDigger} from "../exploration/gold-digger";
import {TunedIn} from "../exploration/tuned-in";
import {MercyMissionary} from "../exploration/mercy-missionary";
import {ParkRanger} from "../exploration/park-ranger";
import {Seen} from "../exploration/seen";
import {Seer} from "../exploration/seer";

export const EmperorForADay: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "emperor-for-a-day",
    setTitleId: 1635,
    names: [
        {value: "Emperor for a Day"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Imperial City.`}
    ],
    notes: `Visit all exploration badges in [map:${ImperialCity.key}]`,
    links: [
        {title: "Emperor for a Day Badge", href: "https://paragonwiki.com/wiki/Emperor_for_a_Day_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png"}
    ],
    partials: [
            {key: TiberianOverseer.key, type: BadgePartialType.BADGE, badgeKey: TiberianOverseer.key},
            {key: PraetorianOfPrivilege.key, type: BadgePartialType.BADGE, badgeKey: PraetorianOfPrivilege.key},
            {key: GoldDigger.key, type: BadgePartialType.BADGE, badgeKey: GoldDigger.key},
            {key: TunedIn.key, type: BadgePartialType.BADGE, badgeKey: TunedIn.key},
            {key: MercyMissionary.key, type: BadgePartialType.BADGE, badgeKey: MercyMissionary.key},
            {key: ParkRanger.key, type: BadgePartialType.BADGE, badgeKey: ParkRanger.key},
            {key: Seen.key, type: BadgePartialType.BADGE, badgeKey: Seen.key},
            {key: Seer.key, type: BadgePartialType.BADGE, badgeKey: Seer.key}
    ]
};