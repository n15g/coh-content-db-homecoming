import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MercyIsland} from "../../map/mercy-island";

export const SnakeCharmer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "snake-charmer",
    names: [{value: "Snake Charmer"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MercyIsland.key,
    location: [-385.0, 42.0, -1712.0],
    badgeText: [{
        value: `This is the main entrance to the Snakes' underground lair. You really don't want to go down there.`
    }],
    notes: `Located on [map:${MercyIsland.key}], in a snake pit approximately 507 yards due west of the Darwin's Landing marker in Mercy Island. It is in the Darwin's Landing neighborhood.`,
    links: [
        {title: "Snake Charmer Badge", href: "https://paragonwiki.com/wiki/Snake_Charmer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "2"
};
