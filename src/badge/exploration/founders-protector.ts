import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {SafeguardFoundersFalls} from "../../map/safeguard-founders-falls";

export const FoundersProtector: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "founders-protector",
    setTitleId: 655,
    names: [
        {type: Alternate.H, value: "Founders' Protector"},
        {type: Alternate.V, value: "Founders' Invader"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardFoundersFalls.key,
    badgeText: [{value: "After a hostile takeover by the Council, this was one of the last places the few 5th Column troops were seen retreating."}],
    location: [3233.0, 0.0, 2055.0],
    notes: "The Founders' Protector Badge is located in the Founders' Falls Safeguard Mission.\n" +
        "\n" +
        "It is located at the bottom of the northern ramp outside the police station, almost against the northern force field in the zone.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Founders' Protector Badge", href: "https://paragonwiki.com/wiki/Founders%27_Protector_Badge"},
        {title: "Founders' Invader Badge", href: "https://paragonwiki.com/wiki/Founders%27_Invader_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
	],
    vidiotMapKey: "1"
};
