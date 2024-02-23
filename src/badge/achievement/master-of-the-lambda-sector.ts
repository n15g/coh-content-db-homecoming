import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheLambdaSector: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-lambda-sector",
    setTitleId: 1988,
    names: [
        {value: "Master of the Lambda Sector"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: Lambda Sector."}
    ],
    acquisition: "Earn the Synchronized, Well-Stocked, Antacid, and Lambda Looter badges",
    links: [
        {title: "Master of the Lambda Sector Badge", href: "https://homecoming.wiki/wiki/Master_of_the_Lambda_Sector_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-lambda-sector.png"}
    ],
};
