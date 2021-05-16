import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const JunkyardDog: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "junkyard-dog",
    setTitleId: 755,
    names: [{value: "Junkyard Dog"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [1474.0, 0.0, -3722.0],
    badgeText: [{value: "This is where some military vehicles went to die."}],
    notes: "The Junkyard Dog Badge is located in Heartbreak Ridge neighborhood of the [map:${RiktiWarZone.key}]. It can be found 118 east of the Heartbreak Ridge zone marker.",
    links: [
        {title: "Junkyard Dog Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Junkyard_Dog_Badge"},
        {title: "Updated RWZ Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "7"
};
