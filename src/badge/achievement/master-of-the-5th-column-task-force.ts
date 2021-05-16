import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfThe5thColumnTaskForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-the-5th-column-task-force",
    setTitleId: 1374,
    names: [
        {value: "Master of the 5th Column Task Force"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have proven yourself Master of the 5th Column Task Force"}
    ],
    acquisition: "Complete the Dr. Kahn Task Force with No Temporary Powers and Zero Team Defeats",
    links: [
        {title: "Master of the 5th Column Task Force Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_the_5th_Column_Task_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-5th-column-task-force.png"}
    ],
};
