import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MirrorImage: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "mirror-image",
    setTitleId: 2524,
    names: [
        {value: "Mirror Image"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: `Sometimes experiences can be uncanny, and when you stop to look around you'll notice peculiarities that surely can't be happenstance... Regardless, you've banded together with your same-Archetype comrades and emerged triumphant!`
        }
    ],
    acquisition: `Complete a Task or Strike Force with a team that qualifies for Archetype Duplication.`,
    links: [
        {title: "Mirror Image Badge", href: "https://homecoming.wiki/wiki/Mirror_Image_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mirror-image.png"}
    ],
};