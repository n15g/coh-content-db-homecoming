import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemFoundersFalls} from "../../map/mayhem-founders-falls";

export const Libertarian: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "libertarian",
    names: [
        {type: Alternate.H, value: "Libertarian"},
        {type: Alternate.V, value: "Anarchist"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemFoundersFalls.key,
    badgeText: [{
        value: "It is here that the Devouring Earth nearly set off a biological bomb to infect the citizens of Founder's Falls."
    }],
    location: [-3802.0, 4.0, 2687.0],
    notes: "Located under the edge of a fountain, approximately 140 yards east of the bank.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Libertarian Badge", href: "https://paragonwiki.com/wiki/Libertarian_Badge"},
        {title: "Anarchist Badge", href: "https://paragonwiki.com/wiki/Anarchist_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}]
};
