import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";

export const NocturnalPilgrim: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "nocturnal-pilgrim",
    setTitleId: 2226,
    names: [{value: "Nocturnal Pilgrim"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NightWard.key,
    location: [-2334.0, 84.0, -37.0],
    badgeText: [{
        value: `An arduous trek across Night Ward's misty plain has brought you at last to Lichgate's Chapel of Enduring Light.
Your faith grows fleeting as you observe the disheartened souls around you, lying in wait to be ferried to the other side.
You begin to feel as though perhaps your journey to this land has been in vain.
Perhaps you have been led this far only to have your spirits broken like so many of those around you.
Night Ward can be a cruel mistress.`
    }],
    notes: `Located in [map:${NightWard.key}], in the The Digs neighborhood, 263 yards NNE of the map marker; near the merit vendor.`,
    links: [
        {title: "Nocturnal Pilgrim Badge", href: "https://paragonwiki.com/wiki/Nocturnal_Pilgrim_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
