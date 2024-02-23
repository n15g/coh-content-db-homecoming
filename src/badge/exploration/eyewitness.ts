import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {EchoRiktiCrashSite} from "../../map/echo-rikti-crash-site";

export const Eyewitness: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "eyewitness",
    setTitleId: 759,
    names: [{value: "Eyewitness"}],
    alignment: ALIGNMENT_ANY,
    mapKey: EchoRiktiCrashSite.key,
    location: [1820.3, 471.3, -4605.7],
    badgeText: [{value: "This is an excellent vantage point for keeping an eye on the crash site."}],
    notes: "**Moved from [map:rikti-war-zone] in Issue 25.**\n" +
        "\n" +
        "On the tippy top point of the tallest building overlooking the downed ship.",
    links: [
        {title: "Eyewitness Badge", href: "https://homecoming.wiki/wiki/Eyewitness_Badge"},
        {title: "Echo: Rikti Crash Site Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "6"
};
