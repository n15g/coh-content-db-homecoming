import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const Chaotician: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "chaotician",
    names: [{value: "Chaotician"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FoundersFalls.key,
    location: [815.0, -21.0, 2402.0],
    badgeText: [{
        value: "Professor Xaos brought Paragon City to its knees shortly after the Rikti War with his Mandelbrot Device. Synapse and Positron were able to work together for once and saved the city."
    }],
    notes: "Located in The Gaspee neighborhood of [map:founders-falls]." +
        " It is located in the water 90 yards east-southeast of The Gaspee marker in a northwest-southeast tunnel under the city block.\n" +
        "\n" +
        "The marker is halfway into the tunnel entrance closest to The Gaspee marker.",
    links: [
        {title: "Chaotician Badge", href: "https://paragonwiki.com/wiki/Chaotician_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
