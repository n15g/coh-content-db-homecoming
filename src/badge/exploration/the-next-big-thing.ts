import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MercyIsland} from "../../map/mercy-island";

export const TheNextBigThing: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-next-big-thing",
    names: [{value: "The Next Big Thing"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MercyIsland.key,
    location: [-1215.0, 239.0, -153.0],
    badgeText: [{
        value: `This is the good life. The higher up you get, the bigger you are.`
    }],
    notes: `Located on [map:${MercyIsland.key}], just inside the Mercy neighborhood at the top of the high wall surrounding it.

If you take the elevator up from Mongoose's location and walk straight towards Arbiter Richard, the badge marker is about halfway to the Arbiter.`,
    links: [
        {title: "The Next Big Thing Badge", href: "https://paragonwiki.com/wiki/The_Next_Big_Thing_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "5"
};
