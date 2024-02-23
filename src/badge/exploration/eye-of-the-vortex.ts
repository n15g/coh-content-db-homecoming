import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {FirstWard} from "../../map/first-ward";

export const EyeOfTheVortex: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "eye-of-the-vortex",
    setTitleId: 2049,
    names: [{value: "Eye of the Vortex"}],
    alignment: ALIGNMENT_ANY,
    mapKey: FirstWard.key,
    location: [178.0, 947.0, -173.0],
    badgeText: [{
        value: `Mystical energies seethe and whirl overhead; hypnotizing in its terrible beauty.
Standing this close to it one feels a charge in the air: the skin tingles with barely contained energy, the teeth ache to its harmonic vibration, the mind contemplates alien thoughts.
You may feel as though you could fall upwards into it, be absorbed into it, become one with the vortex`
    }],
    notes: `Located in [map:${FirstWard.key}] in the Sunken City neighborhood, slightly west of the Westerman Building marker,
though at the top of the building; on the ledge directly behind Diabolique.`,
    links: [
        {title: "Eye of the Vortex Badge", href: "https://homecoming.wiki/wiki/Eye_of_the_Vortex_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "2"
};
