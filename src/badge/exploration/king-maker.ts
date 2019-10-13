import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemKingsRow} from "../../map/mayhem-kings-row";

export const KingMaker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "king-maker",
    names: [{value: "King Maker"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemKingsRow.key,
    badgeText: [{
        value: "This is the spot in Kings Row of a famous bloodbath where the Marcone made a vicious power play against the Verandi."
    }],
    location: [-252.0, -42.0, -2515.0],
    notes: "Located approximately 113 yards northeast of the Bank.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "King Maker Badge", href: "https://paragonwiki.com/wiki/King_Maker_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}]
};
