import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ThrillSeeker} from "../exploration/thrill-seeker";
import {Gamer} from "../ae/gamer";
import {TicketTaker} from "../ae/ticket-taker";
import {Author} from "../ae/author";
import {Recognized} from "../ae/recognized";
import {EarlyBird} from "../ae/early-bird";
import {Customizer} from "../ae/customizer";
import {BugFixer} from "../ae/bug-fixer";

export const MissionEngineer: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "mission-engineer",
    setTitleId: 1134,
    names: [
        {value: "Mission Engineer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Your overall expertise in everything relating to the Mission Architect system has earned you the title of Mission Engineer.  Owning this Accolade will grant you the ability to remotely create and edit Mission Architect content.`}
    ],
    notes: `Awards usage of the Architect Comlink macro`,
    links: [
        {title: "Mission Engineer Badge", href: "https://paragonwiki.com/wiki/Mission_Engineer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/mission-engineer.png"}
    ],
    effect: `Architect Comlink`,
    partials: [
            {key: ThrillSeeker.key, type: BadgePartialType.BADGE, badgeKey: ThrillSeeker.key},
            {key: Gamer.key, type: BadgePartialType.BADGE, badgeKey: Gamer.key},
            {key: TicketTaker.key, type: BadgePartialType.BADGE, badgeKey: TicketTaker.key},
            {key: Author.key, type: BadgePartialType.BADGE, badgeKey: Author.key},
            {key: Recognized.key, type: BadgePartialType.BADGE, badgeKey: Recognized.key},
            {key: EarlyBird.key, type: BadgePartialType.BADGE, badgeKey: EarlyBird.key},
            {key: Customizer.key, type: BadgePartialType.BADGE, badgeKey: Customizer.key},
            {key: BugFixer.key, type: BadgePartialType.BADGE, badgeKey: BugFixer.key}
    ]
};