import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";

export const BingeEater: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "binge-eater",
    setTitleId: 1741,
    names: [{value: "Binge Eater"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNeutropolis.key,
    location: [-82.0, -1024.0, -3495.0],
    badgeText: [{
        value: "This hospital sub-basement used to be a primary morgue, but was phased out due to the sheer number of Ghoul attacks it drew." +
            " As the Resistance say, nothing a chomper likes more than a well-stocked buffet."
    }],
    notes: "Located in [map:underground-neutropolis] in the green segment in the NW corner of the map, 99 yards East of City Access C.",
    links: [
        {title: "Binge Eater Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Binge_Eater_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
