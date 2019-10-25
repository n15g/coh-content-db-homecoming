import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Praetoria} from "../../map/praetoria";

export const RiverRat: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "river-rat",
    setTitleId: 1405,
    names: [{value: "River Rat"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Praetoria.key,
    badgeText: [{
        value: "An invigorating swim in the rich, clear waters of Praetoria always perks you up."
    }],
    notes: "The River Rat Badge has 19 locations in Praetoria, most of which are located under the bridges scattered throughout the zone." +
        " In locations not covered by a bridge, look for the life buoys." +
        " There are no exact coordinates for these badges; however, they can be approximated by traveling to the locations indicated on the image below." +
        " You will not receive the standard \"Badge Earned\" notification at each location. Instead, open your \"Badges\" window and select the category, \"Closest to Completion\"." +
        " Every time that a waypoint is reached successfully, the badge status will move up the rung towards the top. It is necessary to visit all 19 locations to earn this badge.\n" +
        "\n" +
        "This badge can be frustrating to get. Where possible, go under bridges in the water; you cannot hit the target location when on the bridge." +
        " The two easterly locations in [map:neutropolis] have bridges that are flush to the water surface; the locations are just off to one side of the bridge.\n" +
        "\n" +
        "It can also matter which zone you are in; the locations on the border between [map:nova-praetoria] and [map:imperial-city] can be approached in either zone." +
        " Of these four, the northernmost should be approached while in [map:nova-praetoria]; the others should be approached while in [map:imperial-city], as should those on the" +
        " [map:imperial-city] - [map:neutropolis] border.\n" +
        "\n" +
        "It is best to do this badge as soon as you arrive in Praetoria, even if you are very low level." +
        " There are no enemies in the water, and the method of watching \"Closest to Completion\" change only works if you have not unwittingly hit some of the waypoints already.",
    links: [
        {title: "River Rat Badge", href: "https://paragonwiki.com/wiki/River Rat_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}]
};
