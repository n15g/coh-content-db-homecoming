import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const SecretPath: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "secret-path",
    setTitleId: 1568,
    names: [{value: "Secret Path"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Brickstown.key,
    location: [270.0, -59.0, 2193.0],
    badgeText: [{
        value: "Tub Ci used this secret path beneath the basketball courts of Brickstown to make a clean escape from the Zig." +
            " Officers were unable to find this well hidden location until it was too late." +
            " The PPD now keep secret agents around the courts - specifically as basketball players - to prevent such a slip up from happening again."
    }],
    notes: "Located in the Seven Gates neighborhood in [map:brickstown]. The path to it starts at the basketball courts approximately 250 yards south of the hospital.",
    links: [
        {title: "Secret Path Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Secret_Path_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
