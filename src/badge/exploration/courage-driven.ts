import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {SafeguardSkywayCity} from "../../map/safeguard-skyway-city";

export const CourageDriven: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "courage-driven",
    setTitleId: 650,
    names: [
        {type: Alternate.H, value: "Courage Driven"},
        {type: Alternate.V, value: "Rage Driven"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardSkywayCity.key,
    badgeText: [{value: "The major highway that runs alongside this warehouse is frequently used by the \"Dyne-addled\" Supa-Trolls."}],
    location: [-945.0, 0.0, -3555.0],
    notes: "The Courage Driven Badge is located in the Skyway City Safeguard Mission.\n" +
        "\n" +
        "It is located just north of the entrance door of the southeastern warehouse building, just next to a delivery truck with a bronze colored cab.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Courage Driven Badge", href: "https://paragonwiki.com/wiki/Courage_Driven_Badge"},
        {title: "Rage Driven Badge", href: "https://paragonwiki.com/wiki/Rage_Driven_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
