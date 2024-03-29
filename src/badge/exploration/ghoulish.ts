import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const Ghoulish: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ghoulish",
    setTitleId: 258,
    names: [{value: "Ghoulish"}],
    alignment: ALIGNMENT_ANY,
    mapKey: BloodyBay.key,
    location: [91.0, 65.0, 360.0],
    badgeText: [{value: "The shards must be vibrating the very bones of the graves. You are almost sure you can hear scratching and clawing from the inside of the mausoleums."}],
    notes: "The Ghoulish Badge is 185 yards east and slightly north of the Ground Zero neighborhood in Bloody Bay near the center of the map." +
        " There is a small building with a tunnel through it over the stone walkway." +
        " The badge marker is inside that small building.",
    links: [
        {title: "Ghoulish Badge", href: "https://homecoming.wiki/wiki/Ghoulish_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "4"
};
