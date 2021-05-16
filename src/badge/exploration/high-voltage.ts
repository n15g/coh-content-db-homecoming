import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TerraVolta} from "../../map/terra-volta";

export const HighVoltage: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "high-voltage",
    setTitleId: 1841,
    names: [{value: "High Voltage!"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TerraVolta.key,
    location: [290.0, 188.0, -3862.0],
    badgeText: [{
        value: `The air crackles with electricity and the odor of ozone fills your nostrils.
Power fills the air here and it draws the Freakshow like moths to a flame.
Juicers and Tanks bellow and cheer as free electrons dance along their synapses, filling them with a battle lust they long to vent upon you.
They challenge you to join them and dance among the volts that skitter across the ground like faerie fire.`
    }],
    notes: `230 yards SSW of the Walker Energy marker, in a square-shaped building just northeast of the reactor.`,
    links: [
        {title: "High Voltage! Badge", href: "https://hcwiki.cityofheroes.dev/wiki/High_Voltage!_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
