import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const Hungry: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hungry",
    setTitleId: 256,
    names: [
        {type: Alternate.H, value: "Hungry"},
        {type: Alternate.V, value: "All Consuming"}
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: BloodyBay.key,
    location: [-1194.0, 0.0, -743.0],
    badgeText: [{value: "The Shiva Shard fed on the dead here, causing the trees to grow larger and stronger around the old graveyard."}],
    notes: "The All Consuming Badge is in the Forgotten Forest neighborhood of Bloody Bay. The badge marker is located about 100 feet south of Meteor Panch.",
    links: [
        {title: "Hungry Badge", href: "https://paragonwiki.com/wiki/Hungry_Badge"},
        {title: "All Consuming Badge", href: "https://paragonwiki.com/wiki/All_Consuming_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "2"
};
