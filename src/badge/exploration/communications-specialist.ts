import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {EchoRiktiCrashSite} from "../../map/echo-rikti-crash-site";

export const CommunicationsSpecialist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "communications-specialist",
    setTitleId: 2328,
    names: [{value: "Communications Specialist"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `These communications towers are critical for boosting signals with enough power to overcome Rikti jamming technology.`}],
    mapKey: EchoRiktiCrashSite.key,
    location: [959.6, 171.3, -1174.4],
    notes: "Next to a red and white communications tower antenna.",
    links: [
        {title: "Echo: Rikti Crash Site Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "7"
};
