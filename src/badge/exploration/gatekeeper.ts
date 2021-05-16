import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {SafeguardPeregrineIsland} from "../../map/safeguard-peregrine-island";

export const Gatekeeper: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "gatekeeper",
    setTitleId: 656,
    names: [
        {type: Alternate.H, value: "Gatekeeper"},
        {type: Alternate.V, value: "Keymaster"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SafeguardPeregrineIsland.key,
    badgeText: [{value: "The whimsical Gamester placed several presents all throughout Peregrine Island during the holidays. This block had a few of them."}],
    location: [-635.0, 0.0, -2868.0],
    notes: "The Gatekeeper Badge is located in the Peregrine Island Safeguard Mission.\n" +
        "\nIt is located in a walled-in area southeast of a Blackwell store almost in the geographic center of the mission zone. (It's the building with the radio antenna on top of it.)\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Gatekeeper Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gatekeeper_Badge"},
        {title: "Keymaster Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Keymaster_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "1"
};
