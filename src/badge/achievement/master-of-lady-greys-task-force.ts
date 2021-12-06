import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfLadyGreysTaskForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-lady-greys-task-force",
    setTitleId: 1584,
    names: [
        {value: "Master of Lady Grey's Task Force"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have proven yourself Master of Lady Grey's Task Force."}
    ],
    acquisition: `Complete the Master of Lady Grey's Task Force challenge (zero defeats, temporary and incarnate powers disabled)`,
    links: [
        {title: "Master of Lady Grey's Task Force Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_Lady_Grey%27s_Task_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-lady-greys-task-force.png"}
    ],
};
