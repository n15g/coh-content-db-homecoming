import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const Inmate: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "inmate",
    setTitleId: 137,
    names: [{value: "Inmate"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Brickstown.key,
    location: [-1726.0, 24.0, 1153.0],
    badgeText: [{
        value: "Zigursky Penitentiary is where all criminals both mundane and super-powered end up."
    }],
    notes: "Located in The Ziggurat neighborhood of [map:brickstown].\n" +
        "\n" +
        "It can be found at the front entrance of the Zigursky Penitentiary located on the west side of the structure.",
    links: [
        {title: "Inmate Badge", href: "https://homecoming.wiki/wiki/Inmate_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
