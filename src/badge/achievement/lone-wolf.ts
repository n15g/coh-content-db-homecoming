import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LoneWolf: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "lone-wolf",
    setTitleId: 2202,
    names: [
        {value: "Lone Wolf"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You fought against the armies of the Banished Pantheon by yourself, choosing to have the other " +
                "Incarnates support the rest of Astoria."
        }
    ],
    acquisition: "Refuse help from other Incarnate NPCs in the final mission from Dream Doctor",
    links: [
        {title: "Lone Wolf Badge", href: "https://homecoming.wiki/wiki/Lone_Wolf_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png"}
    ],
};
