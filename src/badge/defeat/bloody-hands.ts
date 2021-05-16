import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const BloodyHands: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "bloody-hands",
    setTitleId: 549,
    names: [
        {type: Alternate.H, value: "Bloody Hands"},
        {type: Alternate.V, value: "Hero Slayer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "The memory of the heroes you defeated haunts you throughout Paragon."},
        {type: Alternate.V, value: "Not even the best of the best can stop you!"}
    ],
    acquisition: "Defeat 25 Heroes in Mayhem Missions",
    links: [
        {title: "Bloody Hands Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bloody_Hands_Badge"},
        {title: "Hero Slayer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hero_Slayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/bloody-hands.png"}
    ],
};
