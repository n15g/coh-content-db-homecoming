import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";
import {TheHollows} from "../../map/the-hollows";

export const Digger: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "digger",
    setTitleId: 190,
    names: [
        {value: "Digger"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have learned the history behind the Hollowing.`}
    ],
    links: [
        {title: "Digger Badge", href: "https://paragonwiki.com/wiki/Digger_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png"}
    ],
    partials: [
        {
            key: "digg-0",
            type: BadgePartialType.PLAQUE,
            mapKey: AtlasPark.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [1155.3, 46.1, -812.1],
            inscription: `On this site, the Trolls Task Force was formed in response to the devastating event known as the Hollowing. Police Chief James Wilson said 'The police department will not stop until the residents of Eastgate can go home again.'`,
            notes: `This plaque is in [map:${AtlasPark.key}], 7 feet north of the Prometheus Park neighborhood marker, on the overpass overlooking a lake. It is also 112 feet west and slightly north of the Fort Trident marker.`,
            vidiotMapKey: "6"
        },
        {
            key: "digg-1",
            type: BadgePartialType.PLAQUE,
            mapKey: TheHollows.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [1351.0, 11.0, -3065.0],
            inscription: `This water treatment facility used to desalinate the water from Eastgate Bay for use by Paragon City citizens. In the wake of the Hollowing, the facility became unusable, creating a serious water crisis for post-war Paragon City.`,
            notes: `This plaque is in [map:${TheHollows.key}], 196 yards south of the Cherry Hills neighborhood marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "digg-2",
            type: BadgePartialType.PLAQUE,
            mapKey: TheHollows.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-2250.0, 5.0, -2365.0],
            inscription: `This building once housed the lab of Dr. Calvin Stewart, who pioneered Eastgate Bay's Seaview project. Since the Hollowing, Dr. Stewart has been forced to abandon the lab, and communication with the Seaview project has been erratic. Very little is known by the public about the scientists' activities in Eastgate Bay.`,
            notes: `This plaque is in [map:${TheHollows.key}], 740 yards southeast of the Four Seasons neighborhood marker.`,
            vidiotMapKey: "2"
        },
        {
            key: "digg-3",
            type: BadgePartialType.PLAQUE,
            mapKey: TheHollows.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [1612.0, 4.0, -1949.0],
            inscription: `During the Hollowing, many buildings in this area collapsed. If not for the rapid response of several heroes, led by the valiant Luminary, many of Eastgate's residents would have been buried under the rubble. Luminary and her companions managed to save 437 lives on that devastating day, guaranteeing them a place in Paragon City's history.`,
            notes: `This plaque is in [map:${TheHollows.key}], 571 yards south of the Cherry Hills neighborhood marker.`,
            vidiotMapKey: "3"
        },
        {
            key: "digg-4",
            type: BadgePartialType.PLAQUE,
            mapKey: TheHollows.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [872.0, 68.0, 3344.0],
            inscription: `Before the Hollowing this spot, known as Lookout Point, was a favorite destination for lovers on a midnight stroll. Now, it is a vantage point from which heroes keep their eyes on the mystical antics of the Circle of Thorns.`,
            notes: `This plaque is in [map:${TheHollows.key}], 571 yards east and slightly south of the Skyway City Entrance marker and 714 yards due south of the Red River Marker.`,
            vidiotMapKey: "4"
        }
    ]
};
