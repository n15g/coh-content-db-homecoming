import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";

export const HappyCamper: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "happy-camper",
    setTitleId: 2227,
    names: [{value: "Happy Camper"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NightWard.key,
    location: [104.0, 27.0, 2029.0],
    badgeText: [{
        value: `You have landed in the heart of the Black Knight's encampment.
Whether you stormed through with guns blazing or stealthily slinked past its many guards, Night Ward recognizes the bold of spirit and plays her next move accordingly.`
    }],
    notes: `Located in [map:${NightWard.key}], in the Howling Vale neighborhood, 514 yards NE of the map marker; near the center of the Black Knight's tent encampment.`,
    links: [
        {title: "Happy Camper Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Happy_Camper_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "2"
};
