import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";

export const WeaponInspector: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "weapon-inspector",
    setTitleId: 291,
    names: [
        {type: Alternate.H, value: "Weapon Inspector"},
        {type: Alternate.V, value: "Weapon of Mass Destruction"}
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: Warburg.key,
    location: [-768.0, 144.0, 0.0],
    badgeText: [{value: "Warburg is home to many a nefarious ploy. Recluse's VENOM rocket is one of the most blatant."}],
    notes: "The Weapon Inspector Badge is located in Warburg. The badge marker is located in the center of the top of the western scaffolding surrounding the missile silo.",
    links: [
        {title: "Weapon Inspector Badge", href: "https://paragonwiki.com/wiki/Weapon_Inspector_Badge"},
        {title: "Weapon of Mass Destruction Badge", href: "https://paragonwiki.com/wiki/Weapon_of_Mass_Destruction_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
