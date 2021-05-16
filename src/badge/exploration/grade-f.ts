import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";

export const GradeF: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "grade-f",
    setTitleId: 1744,
    names: [{value: "Grade F"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNeutropolis.key,
    location: [-3050.0, -1248.0, -2239.0],
    badgeText: [{
        value: "For some reason, you can usually find Failed Experiments in this area." +
            " Rumor has it that previously this room was used as part of their indoctrination and training phase." +
            " Maybe they still remember it in what's left of their broken minds."
    }],
    notes: "Located in [map:underground-neutropolis] approximately 90 yards NNE of the Eastern Sector B marker (there are two) by the Imperial Tunnel entrance.\n" +
        "\n" +
        "The route from the Sector B marker is not direct and the badge is more easily found by travelling 285 yards SE from the Loyalist Surface Access marker.",
    links: [
        {title: "Grade F Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Grade_F_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "4"
};
