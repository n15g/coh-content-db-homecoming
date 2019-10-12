import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";

export const FollowTheLight: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "follow-the-light",
    names: [{value: "Follow the Light"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NightWard.key,
    location: [1276.0, 49.0, -2134.0],
    badgeText: [{
        value: `You have discovered the first of many lighted paths in Night Ward.
The Carnival of Light has been working tirelessly to hold the darkness of this realm at bay by way of their protective luster.
With the light as your guide you are free to traverse Night Ward's darkest corners, undetected by the countless dangers that heed her call.`
    }],
    notes: `Located in [map:${NightWard.key}], in the The Arcane Quarter neighborhood, 99 yards S of the map marker; near the Mistress of Fate.`,
    links: [
        {title: "Follow the Light Badge", href: "https://paragonwiki.com/wiki/Follow_the_Light_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "6"
};
