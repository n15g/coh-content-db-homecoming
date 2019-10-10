import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SafeguardAtlasPark} from "../../map/safeguard-atlas-park";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";

export const HeartOfTheCity: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "heart-of-the-city",
    names: [
        {type: Alternate.H, value: "Heart of the City"},
        {type: Alternate.V, value: "Hate of the City"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardAtlasPark.key,
    badgeText: [{value: "Due to a glitch in the Paragon Nav System, Jose \"Broken\" Brogan stood here, but many heroes had trouble finding him."}],
    location: [1498.0, 0.0, -399.0],
    notes: "The Heart of the City Badge is located in the Atlas Park Safeguard Mission.\n" +
        "\n" +
        "It is located just east of the mission entrance, next to a mailbox.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Heart of the City Badge", href: "https://paragonwiki.com/wiki/Heart_of_the_City_Badge"},
        {title: "Hate of the City Badge", href: "https://paragonwiki.com/wiki/Hate_of_the_City_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
