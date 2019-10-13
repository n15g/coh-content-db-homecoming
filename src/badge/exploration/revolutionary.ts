import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemIndependencePort} from "../../map/mayhem-independence-port";

export const Revolutionary: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "revolutionary",
    names: [
        {type: Alternate.H, value: "Revolutionary"},
        {type: Alternate.V, value: "Tyrannical"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemIndependencePort.key,
    badgeText: [{
        type: Alternate.H, value: "The Family doesn't make as many deals on the beach in Independance Port since you started working in Paragon."
    }, {
        type: Alternate.V, value: "It isn't uncommon to see the Family taking associates for a walk with cement shoes at this beach in Independence Port."
    }],
    location: [-1211.0, -24.0, -2702.0],
    notes: "Located on the sandbank in the southwest part of the map, to the southwest end of the sandbank.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Revolutionary Badge", href: "https://paragonwiki.com/wiki/Revolutionary_Badge"},
        {title: "Tyrannical Badge", href: "https://paragonwiki.com/wiki/Tyrannical_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}]
};
