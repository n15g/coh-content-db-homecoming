import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Dedicated: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "dedicated",
    setTitleId: 632,
    names: [
        {value: "Dedicated"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Few can match your dedication to fighting for good and Justice. You've achieved twenty-seven Veteran levels.`},
        {type: Alternate.V, value: `Few can trounce your dedication to your villainous craft. You have attained twenty-seven Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 27",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-27.png"}]
};
