import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";
import {SewerNetwork} from "../../map/sewer-network";

export const SecretOfTheCity: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "secret-of-the-city",
    setTitleId: 1823,
    names: [{value: "Secret of the City"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AbandonedSewerNetwork.key,
    location: [-1664.0, 0.0, -1728.0],
    badgeText: [{
        value: "The dislocated voices of Steel Canyon's throngs filter down to this place, echoing through the miles of pipes and corridors to reverberate here." +
            " If you listen long enough you can catch snippets of lost conversations." +
            " Street lore says that for those with the ability to filter out the dross, these collected voices tell the secrets of the city."
    }],
    notes: `Located in [map:abandoned-sewer-network] 66 yards west of the [map:${SewerNetwork.key}] transfer point in Steel Canyon Sector, on the path leading into the sewers.`,
    links: [
        {title: "Secret of the City Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Secret_of_the_City_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
