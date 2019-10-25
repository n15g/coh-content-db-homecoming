import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNova} from "../../map/underground-nova";

export const SecretPrisoner: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "secret-prisoner",
    setTitleId: 1640,
    names: [{value: "Secret Prisoner"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNova.key,
    badgeText: [{
        value: "You have found one of the most forbidden of places in Praetoria: the secret interrogation chamber beneath the PPD Precinct where the officers take the most recalcitrant" +
            " prisoners for enhanced interrogations."
    }],
    notes: "The Secret Prisoner Badge has two locations in [map:underground-nova].\n" +
        "\n" +
        "Its coordinates are either (-1424, 511, 1957) or (-2192, 511, -2888) (534 yds NE of the Imperial Tunnel access). It is necessary to visit only one location to earn this badge.",
    links: [
        {title: "Secret Prisoner Badge", href: "https://paragonwiki.com/wiki/Secret_Prisoner_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "5"
};
