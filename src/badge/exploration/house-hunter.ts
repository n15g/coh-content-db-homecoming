import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";

export const HouseHunter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "house-hunter",
    names: [{value: "House Hunter"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NightWard.key,
    location: [1699.0, -577.0, -1975.0],
    badgeText: [{
        value: `Chance holds little sway over the fate of Night Ward's visitors, and your happening upon the Midnighter Mansion was no exception.
Despite the gloomy facade of this old Victorian house you feel eerily at home within its walls.`
    }],
    notes: `Located in [map:${NightWard.key}], is located in the The Arcane Quarter neighborhood, just inside the door to the Midnighter Mansion.

To get into the mansion you have to enter through another entrance to obtain the badge.
The coordinates for the entrance is 1797.9 109.6 -2416.4 (It's a greenish colored building on top of a hill 94 yards from the Tunnel entry on your map).`,
    links: [
        {title: "House Hunter Badge", href: "https://paragonwiki.com/wiki/House_Hunter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "3"
};
