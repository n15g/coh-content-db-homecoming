import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";

export const Stargazer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "stargazer",
    setTitleId: 2233,
    names: [{value: "Stargazer"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NightWard.key,
    location: [178.0, 944.0, -227.0],
    badgeText: [{
        value: `Throwing caution aside you reach the uppermost point of Night Ward.
Here, scattered spirits soar overhead like shooting stars in the night sky, forever doomed to the limbo of Night Ward as she drifts ever further from the land of the dead.`
    }],
    notes: `Located in [map:${NightWard.key}], in the City of Souls neighborhood, 433 yards NE of the map marker; at the top of the Night Ward version of the Westerman Building.`,
    links: [
        {title: "Stargazer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Stargazer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "8"
};
