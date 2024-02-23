import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {EchoRiktiCrashSite} from "../../map/echo-rikti-crash-site";

export const UnderFire: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "under-fire",
    setTitleId: 751,
    names: [{value: "Under Fire"}],
    alignment: ALIGNMENT_ANY,
    mapKey: EchoRiktiCrashSite.key,
    location: [1628.6, 0.3, -1047.3],
    badgeText: [{value: "You just stepped into a major battle zone. Was this all that you signed up for?"}],
    notes: "**Moved from [map:rikti-war-zone] in Issue 25.**\n" +
        "\n" +
        "Next to the road.",
    links: [
        {title: "Under Fire Badge", href: "https://homecoming.wiki/wiki/Under_Fire_Badge"},
        {title: "Echo: Rikti Crash Site Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "3"
};
