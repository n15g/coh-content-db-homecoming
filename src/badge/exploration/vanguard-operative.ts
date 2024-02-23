import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const VanguardOperative: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "vanguard-operative",
    setTitleId: 747,
    names: [{value: "Vanguard Operative"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [328.0, -69.0, -2444.5],
    badgeText: [{value: "You have entered the Vanguard base where all your efforts will now go towards fighting the Rikti. The Vanguard and your natural enemies are now your allies."}],
    notes: `The Vanguard Operative Badge is located in Vanguard Base in the [map:${RiktiWarZone.key}].
    
    The badge marker is invisible, located about 25 feet in front of the contact Borea.`,
    links: [
        {title: "Vanguard Operative Badge", href: "hhttps://homecoming.wiki/wiki/Vanguard_Operative_Badge"},
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "1"
};
