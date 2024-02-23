import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const MedicalSpecialist: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "medical-specialist",
    setTitleId: 236,
    setTitleIdPraetorian: 1690,
    names: [
        {value: "Medical Specialist"},
        {type: Alternate.P, value: "To the Rescue"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped your fellow heroes by healing them for three million hit points."},
        {
            type: Alternate.P, value: "Your allies are renewed in spirit and body whenever you arrive. Always in time, and always To " +
                "The Rescue."
        }
    ],
    acquisition: "Heal others for 3,000,000 hit points",
    links: [
        {title: "Medical Specialist Badge", href: "https://homecoming.wiki/wiki/Medical_Specialist_Badge"},
        {title: "To the Rescue Badge", href: "https://homecoming.wiki/wiki/To_the_Rescue_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png"}
    ],
};
