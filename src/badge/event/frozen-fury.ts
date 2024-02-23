import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FrozenFury: IBadgeData = {
    type: BadgeType.EVENT,
    key: "frozen-fury",
    setTitleId: 210,
    names: [
        {value: "Frozen Fury"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You helped defeat a manifestation of the Winter Lord, who brought his cold wrath to Paragon City."},
    ],
    acquisition: "Defeat a Winter Lord during the Winter Event.",
    links: [
        {title: "Frozen Fury Badge", href: "https://homecoming.wiki/wiki/Frozen_Fury_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/frozen-fury.png"}]
};
