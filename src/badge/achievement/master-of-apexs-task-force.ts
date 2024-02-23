import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfApexsTaskForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-apexs-task-force",
    setTitleId: 1939,
    names: [
        {value: "Master of Apex's Task Force"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have gone through the Alpha and the Omega of Apex's Task Force."}
    ],
    acquisition: "Earn the Drone Protector, Burden Bearer, and Already Dead badges",
    links: [
        {title: "Master of Apex's Task Force Badge", href: "https://homecoming.wiki/wiki/Master_of_Apex%27s_Task_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-apexs-task-force.png"}
    ],
};
