import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Caregiver: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "caregiver",
    names: [
        {type: Alternate.H, value: "Caregiver"},
        {type: Alternate.V, value: "Pain Specialist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H,
            value: "You have spent a great deal of time working in the hospitals of Paragon City during your free time earning the Caregiver Day Job." +
                " Logging out in a Hospital will earn you a Regeneration Bonus, when you log back in, for a short time."
        },
        {
            type: Alternate.V,
            value: "Your expertise in surgery and understanding pain has earned you the Pain Specialist Day Job." +
                " Logging out in a Hospital will earn you a Regeneration Bonus, when you log back in, for a short time."
        }
    ],
    acquisition: "Log out inside Hospitals for 100 hours.",
    effect: "Day Job: Out of combat Regeneration boost",
    links: [
        {title: "Caregiver Badge", href: "https://paragonwiki.com/wiki/Caregiver_Badge"},
        {title: "Pain Specialist Badge", href: "https://paragonwiki.com/wiki/Pain_Specialist_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/caregiver.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/pain-specialist.png"}
    ]
};
