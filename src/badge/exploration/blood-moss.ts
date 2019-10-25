import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";

export const BloodMoss: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "blood-moss",
    setTitleId: 1775,
    names: [{value: "Blood Moss"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PerezPark.key,
    location: [-2030.0, -26.0, 1116.0],
    badgeText: [{
        value: "The Circle of Thorns believe that mystical energy emanates from this moss covered rock, energy that draws various unscrupulous practitioners of the dark arts to this isolated" +
            " corner of Perez Park." +
            " Whether it contributes to their magical rites is a matter of debate, as M.A.G.I. has conducted surveys that have found no evidence of any such energy." +
            " S.E.R.A.P.H., however, has detected trace amounts of exotic particles streaming from the stone, coinciding with other stellar phenomena."
    }],
    notes: "Located in [map:perez-park] 171 yards NNE of the Perez Park marker on the map.\n" +
        "\n" +
        "This can be tricky to find since it's hidden in the trees, but there's a clearing 194 yards north and a little to the west of the Perez Park marker." +
        " Drop into this clearing from above, then take the path to the east to reach the badge.",
    links: [
        {title: "Blood Moss Badge", href: "https://paragonwiki.com/wiki/Blood_Moss_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};
