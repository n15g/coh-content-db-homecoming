import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const BroadShoulders: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "broad-shoulders",
    setTitleId: 261,
    names: [{value: "Broad Shoulders"}],
    alignment: ALIGNMENT_ANY,
    mapKey: SirensCall.key,
    location: [257.5, -63.9, 361.0],
    badgeText: [{value: "Talos spent a good part of his childhood here."}],
    notes: "The Broad Shoulders Badge marker is located at the base of the meteor monument just southwest of the inset corner east of the hero base in [map:${SirensCall.key}].",
    links: [{title: "Broad Shoulders Badge", href: "https://homecoming.wiki/wiki/Broad_Shoulders_Badge"}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "3"
};
