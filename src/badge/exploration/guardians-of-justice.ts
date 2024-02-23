import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const GuardiansOfJustice: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "guardians-of-justice",
    setTitleId: 1593,
    names: [{value: "Guardians of Justice"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NovaPraetoria.key,
    location: [-5097.0, 290.0, -830.0],
    badgeText: [{
        value: "From its heavily fortified bunker, the Praetorian Police Department extends the sheltering arms of Imperial Justice to all citizens."
    }],
    notes: "Located in [map:nova-praetoria] on top of the PPD headquarters building, 223 yards north of the Magisterium marker.",
    links: [
        {title: "Guardians of Justice Badge", href: "https://homecoming.wiki/wiki/Guardians_of_Justice_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "4"
};
