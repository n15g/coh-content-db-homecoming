import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FrozenFury: IBadgeData = {
    type: BadgeType.EVENT,
    key: "frozen-fury",
    names: [
        {value: "Frozen Fury"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You helped defeat a manifestation of the Winter Lord, who brought his cold wrath to Paragon City."},
    ],
    acquisition: "Defeat a Winter Lord during the Winter Event.",
    links: [
        {title: "Frozen Fury Badge", href: "https://paragonwiki.com/wiki/Frozen_Fury_Badge"}
    ],
    icons: [{value: "core.event.frozen-fury"}]
};
