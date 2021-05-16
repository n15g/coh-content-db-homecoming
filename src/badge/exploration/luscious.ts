import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Luscious: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "luscious",
    setTitleId: 754,
    names: [{value: "Luscious"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [4243.0, -24.0, -1862.0],
    badgeText: [{value: "The Devouring Earth have chosen this spot to start bringing paradise back to a war-torn city."}],
    notes: "The Luscious Badge is located in Bloody Lane neighborhood of the [map:${RiktiWarZone.key}], 90 yds west of the Bloody Lane neighborhood marker.",
    links: [
        {title: "Luscious Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Luscious_Badge"},
        {title: "Updated RWZ Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "6"
};
