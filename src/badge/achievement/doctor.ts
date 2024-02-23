import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Doctor: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "doctor",
    setTitleId: 4,
    setTitleIdPraetorian: 1689,
    names: [
        {type: Alternate.H, value: "Doctor"},
        {type: Alternate.V, value: "Mad Scientist"},
        {type: Alternate.P, value: "Clutch"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have helped your fellow heroes by healing them for two million hit points."},
        {type: Alternate.V, value: "You've healed over two million points of damage during your nefarious adventures."},
        {
            type: Alternate.P, value: "There have been many times where a well-timed heal has snatched victory from the jaws of " +
                "defeat, and it always seems to be your doing."
        }
    ],
    acquisition: "Heal others for 2,000,000 hit points",
    links: [
        {title: "Doctor Badge", href: "https://homecoming.wiki/wiki/Doctor_Badge"},
        {title: "Mad Scientist Badge", href: "https://homecoming.wiki/wiki/Mad_Scientist_Badge"},
        {title: "Clutch Badge", href: "https://homecoming.wiki/wiki/Clutch_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png"}
    ],
};
