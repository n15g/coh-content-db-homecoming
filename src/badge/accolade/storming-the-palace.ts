import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {TheStormPalace} from "../../map/the-storm-palace";
import {AcolyteOfAnger} from "../exploration/acolyte-of-anger";
import {CourtingMadness} from "../exploration/courting-madness";
import {EveOfDestruction} from "../exploration/eve-of-destruction";
import {FistOfFury} from "../exploration/fist-of-fury";
import {HateMachine} from "../exploration/hate-machine";
import {LordOfStorms} from "../exploration/lord-of-storms";
import {MaliceAforethought} from "../exploration/malice-aforethought";
import {Tormented} from "../exploration/tormented";

export const StormingThePalace: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "storming-the-palace",
    setTitleId: 1889,
    names: [
        {value: "Storming the Palace"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within the Storm Palace.`}
    ],
    notes: `Visit all exploration badges in [map:${TheStormPalace.key}]`,
    links: [
        {title: "Storming the Palace Badge", href: "https://paragonwiki.com/wiki/Storming_the_Palace_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
            {key: AcolyteOfAnger.key, type: BadgePartialType.BADGE, badgeKey: AcolyteOfAnger.key},
            {key: CourtingMadness.key, type: BadgePartialType.BADGE, badgeKey: CourtingMadness.key},
            {key: EveOfDestruction.key, type: BadgePartialType.BADGE, badgeKey: EveOfDestruction.key},
            {key: FistOfFury.key, type: BadgePartialType.BADGE, badgeKey: FistOfFury.key},
            {key: HateMachine.key, type: BadgePartialType.BADGE, badgeKey: HateMachine.key},
            {key: LordOfStorms.key, type: BadgePartialType.BADGE, badgeKey: LordOfStorms.key},
            {key: MaliceAforethought.key, type: BadgePartialType.BADGE, badgeKey: MaliceAforethought.key},
            {key: Tormented.key, type: BadgePartialType.BADGE, badgeKey: Tormented.key}
    ]
};