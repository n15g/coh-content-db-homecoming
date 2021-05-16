import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const PraetorianOfPrivilege: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "praetorian-of-privilege",
    setTitleId: 1633,
    names: [{value: "Praetorian of Privilege"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ImperialCity.key,
    location: [-1607.0, -13.0, 2426.0],
    badgeText: [{
        value: "For those who have contributed greatly to the prosperity of Praetoria, they are given the opportunity to relocate to the rarified air of Four Gables; a place of luxury and comfort."
    }],
    notes: "Located in [map:imperial-city] 151 yards NNW of the Four Gables marker.",
    links: [
        {title: "Praetorian of Privilege Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Praetorian_of_Privilege_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "4"
};
