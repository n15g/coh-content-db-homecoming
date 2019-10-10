import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {SafeguardSteelCanyon} from "../../map/safeguard-steel-canyon";

export const FreedomsDefender: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "freedoms-defender",
    names: [
        {type: Alternate.H, value: "Freedom's Defender"},
        {type: Alternate.V, value: "Freedom's Crusher"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardSteelCanyon.key,
    badgeText: [{value: "The Hellions attempted to burn Steel Canyon to the ground. This block is where one of the first fires was started."}],
    location: [-4253.0, 122.0, -641.0],
    notes: "The Freedom's Defender Badge is located in the Steel Canyon Safeguard Mission.\n" +
        "\n" +
        "It is in the bottom right (southwestern) cutaway corner of a four-story apartment building in the central western part of the map.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Freedom's Defender Badge", href: "https://paragonwiki.com/wiki/Freedom%27s_Defender_Badge"},
        {title: "Freedom's Crusher Badge", href: "https://paragonwiki.com/wiki/Freedom%27s_Crusher_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
