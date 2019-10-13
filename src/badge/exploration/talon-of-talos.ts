import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemTalosIsland} from "../../map/mayhem-talos-island";

export const TalonOfTalos: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "talon-of-talos",
    names: [{value: "Talon of Talos"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemTalosIsland.key,
    badgeText: [{
        type: Alternate.H, value: "You know all the possible places where criminals lurk to ambush people in Talos - knowledge that only someone from the other side could have."
    }, {
        type: Alternate.V, value: "Back alleys in Talos Island like this one are perfect for waiting in ambush."
    }],
    location: [-1438.0, 160.0, 6877.0],
    notes: "Located in an alley between buildings, almost directly East of the entrance point.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Talon of Talos Badge", href: "https://paragonwiki.com/wiki/Talon of_Talos_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}]
};
