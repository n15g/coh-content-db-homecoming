import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const IntoTheWild: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "into-the-wild",
    setTitleId: 1596,
    names: [{value: "Into the Wild"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NovaPraetoria.key,
    location: [-6637.0, -12.0, 1728.0],
    badgeText: [{
        value: "Dangers lurk beyond the secure bubble of the State. The sonic fence keeps the wilderness at bay while also protecting the careless from falling prey to it."
    }],
    notes: "Located in [map:nova-praetoria] along the SE edge of the island and 0.5 miles SE of the Magisterium marker.\n" +
        "\n" +
        "It's tucked into the corner of the rail by the water.",
    links: [
        {title: "Into the Wild Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Into_the_Wild_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "5"
};
