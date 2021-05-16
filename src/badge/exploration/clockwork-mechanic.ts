import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNova} from "../../map/underground-nova";

export const ClockworkMechanic: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "clockwork-mechanic",
    setTitleId: 1636,
    names: [{value: "Clockwork Mechanic"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNova.key,
    location: [-3504.0, 512.0, -783.0],
    badgeText: [{
        value: "Beneath the City Maintenance Facility lies the Maintenance & Treatment Chamber, where malfunctioning Clockwork are stored to prevent their" +
            " errant code from infecting others of their kind."
    }],
    notes: "Located in [map:underground-nova] approximately 240 yards NE of City Access B.",
    links: [
        {title: "Clockwork Mechanic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Clockwork_Mechanic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
