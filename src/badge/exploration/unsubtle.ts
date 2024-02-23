import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const Unsubtle: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "unsubtle",
    setTitleId: 1570,
    names: [{value: "Unsubtle"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Brickstown.key,
    location: [-2260.0, -64.0, -1579.0],
    badgeText: [{
        value: "Clamor of the Freakshow used this warehouse as a hideout after escaping from the Zig - sort of." +
            " She lasted barely an hour in hiding before bursting out of the warehouse to attack PPD searching for her." +
            " This spilled out into an all-out brawl with nearby Council and 5th Column, allowing Bile to swoop in and pull Clamor out from the chaos."
    }],
    notes: "Located in the Abyss Towers neighborhood in [map:brickstown].\n" +
        "\n" +
        "The best way to reach it is to enter the underneath section of the neighborhood from the east side. The badge is in front of the first building on your left.",
    links: [
        {title: "Unsubtle Badge", href: "https://homecoming.wiki/wiki/Unsubtle_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "8"
};
