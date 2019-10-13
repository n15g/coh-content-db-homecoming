import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TerraVolta} from "../../map/terra-volta";

export const GuardianOfTheVolts: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "guardian-of-the-volts",
    names: [{value: "Guardian of the Volts"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TerraVolta.key,
    location: [1313.0, 40.0, -6016.0],
    badgeText: [{
        value: `You stand along the vital corridor through which flows the power of Terra Volta's reactor.
This place is a frequent target for attacks by those determined to cripple Paragon City and deserves protecting.
If you like your hair dryers, your video games, your mass-spectrometers, or your q-bind amalgimatrix devices to function without pause, you'd better ensure that nothing happens to these power lines.`
    }],
    notes: `210 yards South of the Coroman Manufacturing marker on top of the first right hand Pylon in Gordon Trench.`,
    links: [
        {title: "Guardian of the Volts Badge", href: "https://paragonwiki.com/wiki/Guardian_of_the_Volts_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
