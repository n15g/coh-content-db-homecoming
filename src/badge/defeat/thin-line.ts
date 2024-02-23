import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ThinLine: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "thin-line",
    setTitleId: 552,
    names: [
        {type: Alternate.H, value: "Thin Line"},
        {type: Alternate.V, value: "Outlaw"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            type: Alternate.H, value: "The Paragon Police Department has an entire squad tracking you. They've let you know that you " +
                "walk a Thin Line here in Paragon."
        },
        {type: Alternate.V, value: "The Paragon Police Department can't come close to keeping you behind bars."}
    ],
    acquisition: "Defeat 1000 Paragon Police (all kinds) in Mayhem Missions",
    links: [
        {title: "Thin Line Badge", href: "https://homecoming.wiki/wiki/Thin_Line_Badge"},
        {title: "Outlaw Badge", href: "https://homecoming.wiki/wiki/Outlaw_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/thin-line.png"}
    ],
};
