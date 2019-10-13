import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {HydraMissionMap} from "../../map/hydra-missions";

export const Multidimensional: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "multidimensional",
    names: [{value: "Multidimensional"}],
    alignment: ALIGNMENT_ANY,
    mapKey: HydraMissionMap.key,
    badgeText: [{
        value: "The Hydra that lives under Paragon City is rumored to be a refugee from this dimension."
    }],
    notes: "This badge is awarded for spending any amount of time on the mission map that appears in either of the Hydra missions from [Tina Macintyre](https://paragonwiki.com/wiki/Tina_Macintyre)," +
        " or the Hydra mission from [Unai Kemen](https://paragonwiki.com/wiki/Unai_Kemen).\n" +
        "\n" +
        "The badge is awarded after a random period of time while on the map, or will be rewarded immediately if you leave the map.",
    links: [
        {title: "Multidimensional Badge", href: "https://paragonwiki.com/wiki/Multidimensional_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}]
};
