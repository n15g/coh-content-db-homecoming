import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Overhauler: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "overhauler",
    names: [
        {value: "Overhauler"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 40 story arcs."},
    ],
    acquisition: "Complete 40 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Overhauler Badge", href: "https://paragonwiki.com/wiki/Overhauler_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.overhauler"}]
};
