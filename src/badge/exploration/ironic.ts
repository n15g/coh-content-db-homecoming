import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";

export const Ironic: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ironic",
    setTitleId: 1520,
    names: [{value: "Ironic"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHollows.key,
    location: [207.0, 129.0, -3162.0],
    badgeText: [{
        value: "The Pinnacle Apartments were some of the most sought after apartments in Eastgate, until the Hollowing." +
            " Now all that's left to remember them is this billboard. Some say it's ironic that it would be the last thing still standing."
    }],
    notes: "Located in the Cherry Hills neighborhood of The Hollows.\n" +
        "\n" +
        "It is on top of the building 433 yards ESE of the neighborhood marker.",
    links: [
        {title: "Ironic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ironic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
