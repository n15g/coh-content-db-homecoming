import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";

export const CircleSeeker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "circle-seeker",
    setTitleId: 1519,
    names: [{value: "Circle Seeker"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHollows.key,
    location: [1729.0, 166.0, 2066.0],
    badgeText: [{
        value: "The Legacy Chain have been seeking the purpose of these strange structures that have been created by the Circle." +
            " They have been working together with their Rogue Isles branch, who are investigating similar structures in Cap au Diable." +
            " Some theorize they're teleporters, while others suggest they're beacons for powerful demons in the underworld."
    }],
    notes: "Located in the Eastgate Park neighborhood of The Hollows.\n" +
        "\n" +
        "It is on top of the northernmost Circle of Thorns structure, 260 yards north of the neighborhood marker.",
    links: [
        {title: "Circle Seeker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Circle_Seeker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
