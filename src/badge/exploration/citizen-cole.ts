import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const CitizenCole: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "citizen-cole",
    setTitleId: 1401,
    names: [{value: "Citizen Cole"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Citizens who appreciate all the marvelous things that Emperor Cole has done for them have the best view of Praetoria from here.`},
        {type: Alternate.V, value: `Citizens who appreciate all the marvelous things that President Cole has done for them have the best view of Praetoria from here.`}
    ],
    mapKey: NovaPraetoria.key,
    location: [-3090.0, -4.0, -255.0],
    notes: "Located in [map:nova-praetoria] between two bridges to Imperial City in the W part of the Elyssian Avenue neighborhood, 592 yards W of the Magisterium marker.",
    links: [
        {title: "Citizen Cole Badge", href: "https://homecoming.wiki/wiki/Citizen_Cole_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "2"
};
