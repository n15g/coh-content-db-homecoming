import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const UnCivilSociety: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "un-civil-society",
    setTitleId: 1595,
    names: [{value: "Un-Civil Society"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NovaPraetoria.key,
    location: [-4518.0, 32.0, -256.0],
    badgeText: [{
        value: "We live in uncertain times, where discontent sows unrest and the sheep become the wolves."
    }],
    notes: "Located in [map:nova-praetoria] 116 yards W of the Magisterium marker.",
    links: [
        {title: "Un-Civil Society Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Un-Civil_Society_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "7"
};
