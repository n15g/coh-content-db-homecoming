import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";

export const Sanctuary: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sanctuary",
    setTitleId: 2463,
    names: [{value: "Sanctuary"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The Temple of Phoebas offers refuge to wives and widows of Cimeroran soldiers, including those loyal to Romulus. Despite Imperious' concerns about enemy spies, Sister Solaris will only permit guards to remain at the gates as long as they are allowed entry.`}],
    mapKey: Cimerora.key,
    location: [1633.5, -55.3, 5206.5],
    notes: `Located in [map:cimerora] in front of the temple entrance along the beach, 182 yards southwest of the Phoebas Point neighborhood marker.`,
    links: [
        {title: "Sanctuary Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sanctuary_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "3"
};