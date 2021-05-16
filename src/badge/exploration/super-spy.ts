import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";

export const SuperSpy: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "super-spy",
    setTitleId: 196,
    names: [{value: "Super Spy"}],
    alignment: ALIGNMENT_HERO,
    mapKey: StrigaIsle.key,
    location: [-6655.0, -15.0, -2460.0],
    badgeText: [{
        value: "The Council's expert security forces keep most heroes from venturing this far into their base."
    }],
    notes: "Located in [map:striga-isle] on the hinge of a large set of steel doors along the NW short of the island.",
    links: [
        {title: "Super Spy Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Super_Spy_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
