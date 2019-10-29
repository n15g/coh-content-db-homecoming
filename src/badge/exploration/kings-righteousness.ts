import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {SafeguardKingsRow} from "../../map/safeguard-kings-row";

export const KingsRighteousness: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "kings-righteousness",
    setTitleId: 649,
    names: [
        {type: Alternate.H, value: "King's Righteousness"},
        {type: Alternate.V, value: "King's Capriciousness"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardKingsRow.key,
    badgeText: [{value: "The Clockwork Paladin, a menace to the city, was once spotted running around in this area."}],
    location: [670.0, -42.0, -2350.0],
    notes: "The King's Righteousness Badge is located in the Kings Row Safeguard Mission.\n" +
        "\n" +
        "It is located between two large crates just north of the large building in the southwestern area of the zone, 171 yards north-east of the south-western corner of the zone.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "King's Righteousness Badge", href: "https://paragonwiki.com/wiki/King%27s_Righteousness_Badge"},
        {title: "King's Capriciousness Badge", href: "https://paragonwiki.com/wiki/King%27s_Capriciousness_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
	],
    vidiotMapKey: "1"
};
