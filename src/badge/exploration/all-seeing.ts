import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";

export const AllSeeing: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "all-seeing",
    names: [{value: "All-Seeing"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PeregrineIsland.key,
    location: [-712.0, 56.0, -2142.0],
    badgeText: [{
        value: "Tenants on the top floor in the apartment building have constantly complained that the nearby hero statue makes them feel uneasy." +
            " Many say it feels as if someone is constantly watching them." +
            " A former tenant claimed to see some sort of video camera in the eyes of the statue, though city officials deny this claim as 'unsubstantiated.'"
    }],
    notes: "Located in the Poseidon Square neighborhood of [map:peregrine-island].\n" +
        "\n" +
        "It is on the top of a fire escape 138 yards southwest of the neighborhood marker.",
    links: [
        {title: "All-Seeing Badge", href: "https://paragonwiki.com/wiki/All-Seeing_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};
