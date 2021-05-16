import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemPeregrineIsland} from "../../map/mayhem-peregrine-island";

export const GateCloser: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "gate-closer",
    setTitleId: 563,
    names: [
        {type: Alternate.H, value: "Gate Closer"},
        {type: Alternate.V, value: "Gate Crasher"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemPeregrineIsland.key,
    badgeText: [{
        type: Alternate.H, value: "You'd hate to have to defend Portal Corps from the Arachnos Flyer should it ever return to Peregrine Island."
    }, {
        type: Alternate.V, value: "Even this gateway to Portal Corps in Peregrine Island couldn't keep you out with the help of the Arachnos Flyer."
    }],
    location: [-1154.0, 0.0, -3079.0],
    notes: "Located at the fence in front of you as you zone in.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Gate Closer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gate_Closer_Badge"},
        {title: "Gate Crasher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gate_Crasher_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
