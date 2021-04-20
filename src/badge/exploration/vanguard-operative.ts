import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const VanguardOperative: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "vanguard-operative",
    setTitleId: 747,
    names: [{value: "Vanguard Operative"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [328.0, -1188.2, -2444.5],
    badgeText: [{value: "You have entered the Vanguard base where all your efforts will now go towards fighting the Rikti. The Vanguard and your natural enemies are now your allies."}],
    notes: "The Vanguard Operative Badge is located in Vanguard Base in the [map:${RiktiWarZone.key}].\n" +
        "\n" +
        "The badge marker is invisible, located directly under the feet of the contact Borea.",
    links: [
        {title: "Vanguard Operative Badge", href: "https://paragonwiki.com/wiki/Vanguard_Operative_Badge"},
        {title: "Updated RWZ Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "1"
};
