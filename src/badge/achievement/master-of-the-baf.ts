import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheBAF: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-the-baf",
    setTitleId: 1979,
    names: [
        {value: "Master of the B.A.F."}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: Behavioral Adjustment Facility."}
    ],
    acquisition: "Earn the Not On My Watch, Alarm Raiser, Gotta Keep 'Em Separated, and Strong and Pretty badges",
    links: [
        {title: "Master of the B.A.F. Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_the_B.A.F._Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-baf.png"}
    ],
};
