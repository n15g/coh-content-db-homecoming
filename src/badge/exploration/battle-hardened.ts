import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Cimerora} from "../../map/cimerora";

export const BattleHardened: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "battle-hardened",
    setTitleId: 2371,
    names: [{value: "Battle-Hardened"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The loyal legions of Cimerora have prevailed in battle against an enemy wielding unimaginable power.`}],
    mapKey: Cimerora.key,
    location: [-1084.0, 172.2, 4690.0],
    notes: `Located in [map:cimerora] on a rampart overlooking the location where Imperious stands, 140 yards south of the Cimerora neighborhood marker.`,
    links: [
        {title: "Battle-Hardened Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Battle-Hardened_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "2"
};
