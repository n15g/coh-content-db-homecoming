import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {SafeguardBrickstown} from "../../map/safeguard-brickstown";

export const Cornerstone: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "cornerstone",
    setTitleId: 654,
    names: [
        {type: Alternate.H, value: "Cornerstone"},
        {type: Alternate.V, value: "Weak Point"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardBrickstown.key,
    badgeText: [{value: "The Freedom Phalanx and WISDOM stopped a massive Banished Pantheon attack in this area."}],
    location: [-406.0, 0.0, -130.0],
    notes: "The Cornerstone Badge is located in the Brickstown Safeguard Mission.\n" +
        "\n" +
        "It is on the ground just left (west) of the warehouse building in the northeastern corner of the zone, between the two right (eastern) legs of a large power line tower.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Cornerstone Badge", href: "https://paragonwiki.com/wiki/Cornerstone_Badge"},
        {title: "Weak Point Badge", href: "https://paragonwiki.com/wiki/Weak_Point_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
	],
    vidiotMapKey: "1"
};
