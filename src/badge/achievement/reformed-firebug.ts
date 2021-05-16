import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ReformedFirebug: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "reformed-firebug",
    setTitleId: 547,
    names: [
        {type: Alternate.H, value: "Reformed Firebug"},
        {type: Alternate.V, value: "Firebug"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            type: Alternate.H, value: "For your actions setting Paragon City ablaze, you've been prohibited from owning matches or " +
                "lighters of any sort."
        },
        {type: Alternate.V, value: "You have set Paragon City ablaze!"}
    ],
    acquisition: "Complete 10 Arson side missions in Mayhem Missions",
    links: [
        {title: "Reformed Firebug Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Reformed_Firebug_Badge"},
        {title: "Firebug Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Firebug_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reformed-firebug.png"}
    ],
};
