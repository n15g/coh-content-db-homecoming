import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ColdAsIce: IBadgeData = {
    type: BadgeType.EVENT,
    key: "cold-as-ice",
    setTitleId: 1951,
    names: [
        {value: "Cold as Ice"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You successfully iced Lady Winter's plans to freeze the Earth with her Arctic powers and snowy horde!"},
    ],
    acquisition: "Complete the Defeat Lady Winter! mission from Father Time during the Winter event.",
    links: [
        {title: "Cold as Ice Badge", href: "https://paragonwiki.com/wiki/Cold_as_Ice_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/cold-as-ice.png"}]
};
