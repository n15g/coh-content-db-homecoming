import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Homewrecker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "homewrecker",
    setTitleId: 753,
    names: [{value: "Homewrecker"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [3566.0, 0.0, -759.0],
    badgeText: [{value: "This is the base Malta likes to call home. Your name wasn't exactly on the welcome mat."}],
    notes: "The Homewrecker Badge is located in the Southwest corner of the Little Round Top neighborhood of the [map:${RiktiWarZone.key}].\n" +
        "\n" +
        "345 yards south-west of the Little Round Top zone marker.",
    links: [
        {title: "Homewrecker Badge", href: "https://homecoming.wiki/wiki/Homewrecker_Badge"},
        {title: "Updated RWZ Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "5"
};
