import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const BaseJumper: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "base-jumper",
    setTitleId: 752,
    names: [{value: "Base Jumper"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [3434.0, 0.0, 511.0],
    badgeText: [{value: "The Council have taken over this building as their base of operations. You might want to check your back."}],
    notes: "The Base Jumper Badge is located in Pork Chop Hill neighborhood of the [map:${RiktiWarZone.key}].\n" +
        "\n" +
        "The badge is located in the foyer of a Council-owned building just southwest of the Pork Chop Hill neighborhood marker.\n" +
        "The building is marked with two large Council banners, with a cream colored foyer, and the marker is located inside behind the reception desk.",
    links: [
        {title: "Base Jumper Badge", href: "https://paragonwiki.com/wiki/Base_Jumper_Badge"},
        {title: "Updated RWZ Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "4"
};
