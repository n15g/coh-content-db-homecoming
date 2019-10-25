import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const FlyingShark: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "flying-shark",
    setTitleId: 1565,
    names: [{value: "Flying Shark"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Brickstown.key,
    location: [-2190.0, 573.0, 1162.0],
    badgeText: [{
        value: "The roof of the Zig is the site of the first breakout by Arachnos." +
            " Captain Mako had been captured by some heroes, only to escape, tearing a path of destruction through the Zig." +
            " It ended up on the roof, where he commandeered a Longbow Skiff to fly himself out." +
            " Mako was seen leaping from skiff to skiff during the aerial battle with Longbow until he dove into the waters of Talos to swim back to the Isles."
    }],
    notes: "Located on the roof of the Zig in [map:brickstown], 36 yards northwest of the neighborhood marker.",
    links: [
        {title: "Flying Shark Badge", href: "https://paragonwiki.com/wiki/Flying_Shark_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
