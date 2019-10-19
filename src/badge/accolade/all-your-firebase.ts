import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";
import {AlphaRanger} from "../exploration/alpha-ranger";
import {DancerWithDeath} from "../exploration/dancer-with-death";
import {DefyingGravity} from "../exploration/defying-gravity";
import {DimensionalSojourner} from "../exploration/dimensional-sojourner";
import {ShadowArchitect} from "../exploration/shadow-architect";
import {ShardLeaper} from "../exploration/shard-leaper";
import {Stormwatcher} from "../exploration/stormwatcher";
import {XRaySpectator} from "../exploration/x-ray-spectator";

export const AllYourFirebase: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "all-your-firebase",
    setTitleId: 1881,
    names: [
        {value: "All Your Firebase..."}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Firebase Zulu.`}
    ],
    notes: `Visit all exploration badges in [map:${FirebaseZulu.key}]`,
    links: [
        {title: "All Your Firebase... Badge", href: "https://paragonwiki.com/wiki/All_Your_Firebase..._Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
            {key: AlphaRanger.key, type: BadgePartialType.BADGE, badgeKey: AlphaRanger.key},
            {key: DancerWithDeath.key, type: BadgePartialType.BADGE, badgeKey: DancerWithDeath.key},
            {key: DefyingGravity.key, type: BadgePartialType.BADGE, badgeKey: DefyingGravity.key},
            {key: DimensionalSojourner.key, type: BadgePartialType.BADGE, badgeKey: DimensionalSojourner.key},
            {key: ShadowArchitect.key, type: BadgePartialType.BADGE, badgeKey: ShadowArchitect.key},
            {key: ShardLeaper.key, type: BadgePartialType.BADGE, badgeKey: ShardLeaper.key},
            {key: Stormwatcher.key, type: BadgePartialType.BADGE, badgeKey: Stormwatcher.key},
            {key: XRaySpectator.key, type: BadgePartialType.BADGE, badgeKey: XRaySpectator.key}
    ]
};