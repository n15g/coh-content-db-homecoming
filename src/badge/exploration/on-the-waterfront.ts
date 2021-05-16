import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const OnTheWaterfront: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "on-the-waterfront",
    setTitleId: 1594,
    names: [{value: "On the Waterfront"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NovaPraetoria.key,
    location: [-6748.0, -76.0, 72.0],
    badgeText: [{
        value: "Many retreat to the quiet of the waterfront to get away from the hustle and bustle of the Magisterium."
    }],
    notes: "Located in [map:nova-praetoria] on the lower ledge along the river, 211 yards south of Underground Access B.",
    links: [
        {title: "On the Waterfront Badge", href: "https://hcwiki.cityofheroes.dev/wiki/On_the_Waterfront_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "8"
};
