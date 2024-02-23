import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const VillainOfTheMonth: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "villain-of-the-month",
    setTitleId: 2259,
    names: [
        {value: "Villain of the Month"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You publically put down every attempt on your life, and then smashed apart Wu Yin's entire " +
                "operation. The public is calling you the 'Villain of the Month'."
        }
    ],
    acquisition: "Complete the second story arc from Mr. G (Primal Earth)",
    links: [
        {title: "Villain of the Month Badge", href: "https://homecoming.wiki/wiki/Villain_of_the_Month_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png"}
    ],
};
