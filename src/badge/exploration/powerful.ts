import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {EchoRiktiCrashSite} from "../../map/echo-rikti-crash-site";

export const Powerful: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "powerful",
    setTitleId: 749,
    names: [{value: "Powerful"}],
    alignment: ALIGNMENT_ANY,
    mapKey: EchoRiktiCrashSite.key,
    location: [275.7, 84.3, -745.5],
    badgeText: [{value: "This power plant is the glue that holds the operation together. Without it, there would be chaos."}],
    notes: "**Moved from [map:rikti-war-zone] in Issue 25.**\n" +
        "\n" +
        "Eastern side of the power substation, on the ground.",
    links: [
        {title: "Powerful Badge", href: "https://homecoming.wiki/wiki/Powerful_Badge"},
        {title: "Echo: Rikti Crash Site Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "2"
};
