import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Boomtown} from "../../map/boomtown";

export const DestinedForValhalla: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "destined-for-valhalla",
    setTitleId: 117,
    names: [{value: "Destined for Valhalla"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Boomtown.key,
    location: [-4098.0, 352.0, 2473.0],
    badgeText: [{
        value: "Valkyrie proved herself to Positron by battling the Clockwork King on this spot." +
            " Although she did not succeed in defeating him, he was severely damaged and Clockwork activity came to a halt for several weeks afterwards."
    }],
    notes: "The Destined for Valhalla Badge is located in the Powderkeg neighborhood of Boomtown." +
        "\n\nIt can be found approximately 560 yards east and slightly south of the Powderkeg marker, on top of a small landing where a tall builing is leaning into another.",
    links: [
        {title: "Destined for Valhalla Badge", href: "https://paragonwiki.com/wiki/Destined_for_Valhalla_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
