import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const Imploding: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "imploding",
    names: [{value: "Imploding"}],
    alignment: ALIGNMENT_ANY,
    mapKey: BloodyBay.key,
    location: [1885.0, 129.0, 1337.0],
    badgeText: [{value: "In this building the first of Cape Canaveral's scientists was infected and transformed by the Shiva Shard, eventually causing him to implode."}],
    notes: "The Imploding Badge marker is located on a building rooftop 110 yards north and slightly east of Meteor Teen.",
    links: [
        {title: "Imploding Badge", href: "https://paragonwiki.com/wiki/Imploding_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "core.exploration.hero"},
        {type: Alternate.V, value: "core.exploration.villain"}
    ],
    vidiotMapKey: "3"
};
