import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";
import {Hangman} from "../exploration/hangman";
import {Politician} from "../exploration/politician";
import {BroadShoulders} from "../exploration/broad-shoulders";
import {Piratical} from "../exploration/piratical";
import {HotDog} from "../exploration/hot-dog";
import {StillStanding} from "../exploration/still-standing";
import {Volatile} from "../exploration/volatile";
import {WastedResources} from "../exploration/wasted-resources";

export const AnsweredTheCall: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "answered-the-call",
    setTitleId: 2410,
    names: [
        {value: "Answered the Call"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Siren's Call.`}
    ],
    notes: `Visit all exploration badges in [map:${SirensCall.key}]`,
    links: [
        {title: "Answered the Call Badge", href: "https://paragonwiki.com/wiki/Answered_the_Call_Badge"}
    ],
    partials: [
            {key: Hangman.key, type: BadgePartialType.BADGE, badgeKey: Hangman.key},
            {key: Politician.key, type: BadgePartialType.BADGE, badgeKey: Politician.key},
            {key: BroadShoulders.key, type: BadgePartialType.BADGE, badgeKey: BroadShoulders.key},
            {key: Piratical.key, type: BadgePartialType.BADGE, badgeKey: Piratical.key},
            {key: HotDog.key, type: BadgePartialType.BADGE, badgeKey: HotDog.key},
            {key: StillStanding.key, type: BadgePartialType.BADGE, badgeKey: StillStanding.key},
            {key: Volatile.key, type: BadgePartialType.BADGE, badgeKey: Volatile.key},
            {key: WastedResources.key, type: BadgePartialType.BADGE, badgeKey: WastedResources.key}
    ]
};
