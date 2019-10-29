import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemAtlasPark} from "../../map/mayhem-atlas-park";

export const GlobalGuardian: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "global-guardian",
    setTitleId: 555,
    names: [
        {type: Alternate.H, value: "Global Guardian"},
        {type: Alternate.V, value: "Global Threat"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemAtlasPark.key,
    badgeText: [{
        type: Alternate.H, value: "As a villain you struck at Atlas Park, the very heart of Paragon City, proving you must always be vigilant in its defense."
    }, {
        type: Alternate.V, value: "You've struck at Atlas Park, the very heart of Paragon City, proving nowhere is safe from villainy!"
    }],
    location: [1543.0, 0.0, 660.0],
    notes: "Located on the sidewalk just inside the mission from the entrance point.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Global Guardian Badge", href: "https://paragonwiki.com/wiki/Global_Guardian_Badge"},
        {title: "Global Threat Badge", href: "https://paragonwiki.com/wiki/Global_Threat_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
	],
    vidiotMapKey: "1"
};
