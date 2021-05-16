import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";

export const LifeOutOfDeath: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "life-out-of-death",
    setTitleId: 2185,
    names: [{value: "Life out of Death"}],
    alignment: ALIGNMENT_ANY,
    mapKey: DarkAstoria.key,
    location: [6197.0, 117.0, 2444.0],
    badgeText: [{
        value: `Mot's hunger is insatiable and its power to feast upon life is prodigious.
For sustenance, many innocent people have been spirited away into the haunted streets of Dark Astoria.
Not all who have been abducted have met their end, surviving against all odds.`
    }],
    notes: `Located in [map:${DarkAstoria.key}], in the St. Elegius neighborhood, southwest of Romero Heights, and near The Bulwark.
78 yards north of the neighborhood marker, on top of the hospital.`,
    links: [
        {title: "Life out of Death Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Life_Out_of_Death_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
