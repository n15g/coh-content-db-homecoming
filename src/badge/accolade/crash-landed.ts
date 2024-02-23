import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {EchoRiktiCrashSite} from "../../map/echo-rikti-crash-site";
import {Powerful} from "../exploration/powerful";
import {UnderFire} from "../exploration/under-fire";
import {Scarred} from "../exploration/scarred";
import {Asunder} from "../exploration/asunder";
import {Eyewitness} from "../exploration/eyewitness";
import {Ace} from "../exploration/ace";
import {CommunicationsSpecialist} from "../exploration/communications-specialist";
import {Shielded} from "../exploration/shielded";

export const CrashLanded: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "crash-landed",
    setTitleId: 2330,
    names: [
        {value: "Crash Landed"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge in Echo: Rikti Crash Site.`}
    ],
    notes: `Visit all exploration badges in [map:${EchoRiktiCrashSite.key}]`,
    links: [
        {title: "Crash Landed Badge", href: "https://homecoming.wiki/wiki/Crash_Landed_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: Powerful.key, type: BadgePartialType.BADGE, badgeKey: Powerful.key},
        {key: UnderFire.key, type: BadgePartialType.BADGE, badgeKey: UnderFire.key},
        {key: Scarred.key, type: BadgePartialType.BADGE, badgeKey: Scarred.key},
        {key: Asunder.key, type: BadgePartialType.BADGE, badgeKey: Asunder.key},
        {key: Eyewitness.key, type: BadgePartialType.BADGE, badgeKey: Eyewitness.key},
        {key: Ace.key, type: BadgePartialType.BADGE, badgeKey: Ace.key},
        {key: CommunicationsSpecialist.key, type: BadgePartialType.BADGE, badgeKey: CommunicationsSpecialist.key},
        {key: Shielded.key, type: BadgePartialType.BADGE, badgeKey: Shielded.key}
    ]
};
