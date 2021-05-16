import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {PocketD} from "../../map/pocket-d";

export const Trucker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "trucker",
    setTitleId: 731,
    names: [{value: "Trucker"}],
    alignment: ALIGNMENT_ANY,
    mapKey: PocketD.key,
    location: [200.0, -3.0, -1101.0],
    badgeText: [{value: "You've visited the floating truck in Pocket D."}],
    notes: "On the floating truck outside of Pocket D.\n" +
        "\n" +
        "From the Chalet island, a character will need to fly, teleport, or super jump to reach the truck.\n" +
        "\n" +
        "Note that despite being only accessible during the Winter Event on live, Homecoming appears to have made the Ski Chalet permanently accessible, making this badge also always available.",
    links: [
        {title: "Trucker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Trucker_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
