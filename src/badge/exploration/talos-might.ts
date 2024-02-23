import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {SafeguardTalosIsland} from "../../map/safeguard-talos-island";

export const TalosMight: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "talos-might",
    setTitleId: 653,
    names: [
        {type: Alternate.H, value: "Talos' Might"},
        {type: Alternate.V, value: "Talos' Blight"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardTalosIsland.key,
    badgeText: [{value: "Years ago, Rularuu tore down the barriers between our dimensions and sent one of many invasion forces to this block. Heroes from all over fought back the invaders."}],
    location: [-1452.0, 160.0, 6739.0],
    notes: "The Talos' Might Badge is located in the Talos Island Safeguard Mission.\n" +
        "\n" +
        "It is in the middle of the northernmost alley between the stores that line the central part of the Talos Island safeguard mission map.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Talos' Might Badge", href: "https://homecoming.wiki/wiki/Talos%27_Might_Badge"},
        {title: "Talos' Blight Badge", href: "https://homecoming.wiki/wiki/Talos%27_Blight_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "1"
};
