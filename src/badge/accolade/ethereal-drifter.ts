import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";
import {NocturnalPilgrim} from "../exploration/nocturnal-pilgrim";
import {HappyCamper} from "../exploration/happy-camper";
import {HouseHunter} from "../exploration/house-hunter";
import {AbandonedSoul} from "../exploration/abandoned-soul";
import {DeadButDreaming} from "../exploration/dead-but-dreaming";
import {FollowTheLight} from "../exploration/follow-the-light";
import {Monolithic} from "../exploration/monolithic";
import {Stargazer} from "../exploration/stargazer";

export const EtherealDrifter: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "ethereal-drifter",
    setTitleId: 2234,
    names: [
        {value: "Ethereal Drifter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Night Ward`}
    ],
    notes: `Visit all exploration badges in [map:${NightWard.key}]`,
    links: [
        {title: "Ethereal Drifter Badge", href: "https://homecoming.wiki/wiki/Ethereal_Drifter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png"}
    ],
    partials: [
        {key: NocturnalPilgrim.key, type: BadgePartialType.BADGE, badgeKey: NocturnalPilgrim.key},
        {key: HappyCamper.key, type: BadgePartialType.BADGE, badgeKey: HappyCamper.key},
        {key: HouseHunter.key, type: BadgePartialType.BADGE, badgeKey: HouseHunter.key},
        {key: AbandonedSoul.key, type: BadgePartialType.BADGE, badgeKey: AbandonedSoul.key},
        {key: DeadButDreaming.key, type: BadgePartialType.BADGE, badgeKey: DeadButDreaming.key},
        {key: FollowTheLight.key, type: BadgePartialType.BADGE, badgeKey: FollowTheLight.key},
        {key: Monolithic.key, type: BadgePartialType.BADGE, badgeKey: Monolithic.key},
        {key: Stargazer.key, type: BadgePartialType.BADGE, badgeKey: Stargazer.key}
    ]
};
