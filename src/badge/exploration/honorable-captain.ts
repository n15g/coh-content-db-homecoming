import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {SafeguardIndependencePort} from "../../map/safeguard-independence-port";

export const HonorableCaptain: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "honorable-captain",
    setTitleId: 652,
    names: [
        {type: Alternate.H, value: "Honorable Captain"},
        {type: Alternate.V, value: "Dishonorable Captain"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardIndependencePort.key,
    badgeText: [{value: "Synapse has been seen speeding along the monorail tracks all throughout the city. Independence Port is one of his favorites."}],
    location: [-1948.0, 0.0, -3172.0],
    notes: "The Honorable Captain Badge is located in the Independence Port Safeguard Mission.\n" +
        "\n" +
        "On the northeastern side of the inlet, there is a crane. Behind and to the right (northeast) of the the crane, there is a U-shaped building with two pay telephones next to a small alley," +
        " the badge is in that alley.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Honorable Captain Badge", href: "https://homecoming.wiki/wiki/Honorable_Captain_Badge"},
        {title: "Dishonorable Captain Badge", href: "https://homecoming.wiki/wiki/Dishonorable_Captain_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "1"
};
