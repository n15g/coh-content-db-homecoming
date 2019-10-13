import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemBrickstown} from "../../map/mayhem-brickstown";

export const Brickhouse: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "brickhouse",
    names: [{value: "Brickhouse"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemBrickstown.key,
    badgeText: [{
        value: "You have discovered an underground safe in Brickstown kept right under the noses of the PPD."
    }],
    location: [-161.0, 0.0, -147.0],
    notes: "Located in an alley behind the Paragon Police Station.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Brickhouse Badge", href: "https://paragonwiki.com/wiki/Brickhouse_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}]
};
