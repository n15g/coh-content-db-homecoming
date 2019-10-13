import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {MercyIsland} from "../../map/mercy-island";

export const Widower: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "widower",
    names: [
        {type: Alternate.M, value: "Widower"},
        {type: Alternate.F, value: "Widow"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MercyIsland.key,
    location: [-3890.0, 407.0, 354.0],
    badgeText: [{value: "They say that lonely tower is the home of Ghost Widow, Lord Recluse's phantom servant."}],
    notes: `Located on [map:${MercyIsland.key}], outside the door of the very tall tower in the northeast corner of Fort Cerberus.`,
    links: [
        {title: "Widower Badge", href: "https://paragonwiki.com/wiki/Widower_Badge"},
        {title: "Widow Badge", href: "https://paragonwiki.com/wiki/Widow_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "6"
};
