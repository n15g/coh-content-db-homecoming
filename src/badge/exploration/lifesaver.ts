import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Lifesaver: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "lifesaver",
    setTitleId: 750,
    names: [{value: "Lifesaver"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [-425.0, 15.0, -206.0],
    badgeText: [{value: "Rikti's continuous attacks on this hospital prompted Paragon City officials to shut it down."}],
    notes: "The Lifesaver Badge is located in the northeast corner of the Pavia neighborhood of the Rikti War Zone.",
    links: [
        {title: "Lifesaver Badge", href: "https://paragonwiki.com/wiki/Lifesaver_Badge"},
        {title: "Updated RWZ Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "3"
};
