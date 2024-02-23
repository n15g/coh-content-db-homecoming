import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheImperiousTaskForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-the-imperious-task-force",
    setTitleId: 1375,
    names: [
        {value: "Master of the Imperious Task Force"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have proven yourself Master of the Imperious Task Force"}
    ],
    acquisition: `Complete the Master of the Imperious Task Force challenge (zero defeats, temporary and incarnate powers disabled)`,
    links: [
        {title: "Master of the Imperious Task Force Badge", href: "https://homecoming.wiki/wiki/Master_of_the_Imperious_Task_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-imperious-task-force.png"}
    ],
};
