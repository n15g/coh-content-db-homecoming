import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Warden: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "warden",
    setTitleId: 49,
    names: [
        {type: Alternate.H, value: "Warden"},
        {type: Alternate.V, value: "Cruel Warden"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H, value: "You have made the Ziggurat a safer place by putting the escaped convicts back on the inside, " +
                "where they belong."
        },
        {
            type: Alternate.V, value: "Sending escaped convicts back to the Ziggurat cuts down on the competition. It's only " +
                "practical."
        }
    ],
    acquisition: "Defeat 500 Prisoners",
    links: [
        {title: "Warden Badge", href: "https://homecoming.wiki/wiki/Warden_Badge"},
        {title: "Cruel Warden Badge", href: "https://homecoming.wiki/wiki/Cruel_Warden_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/warden.png"}
    ],
};
