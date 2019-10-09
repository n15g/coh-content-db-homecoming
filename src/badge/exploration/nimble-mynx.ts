import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const NimbleMynx: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "nimble-mynx",
    names: [{value: "Nimble Mynx"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-2428.0, 48.0, -3408.0],
    badgeText: [{
        value: "This spot is where Synapse first found Mynx and began training her."
    }],
    notes: "The Nimble Mynx Badge is in the Silver Lake neighborhood of Steel Canyon." +
        "\n\nIt is located on the back right (northeastern) side of the building just west of the entrance to Boomtown.",
    links: [
        {title: "Nimble Mynx Badge", href: "https://paragonwiki.com/wiki/Nimble_Mynx_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
