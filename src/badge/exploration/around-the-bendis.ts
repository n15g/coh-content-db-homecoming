import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";

export const AroundTheBendis: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "around-the-bendis",
    setTitleId: 103,
    names: [{value: "Around the Bendis"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PerezPark.key,
    location: [-875.0, -31.0, 3658.0],
    badgeText: [{
        value: "This old boathouse used to be a popular spot in Perez Park, but since the gangs moved in it has been abandoned."
    }],
    notes: "Located in [map:perez-park] 343 yards northwest of the [map:skyway-city] entrance.",
    links: [
        {title: "Around the Bendis Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Around_the_Bendis_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
