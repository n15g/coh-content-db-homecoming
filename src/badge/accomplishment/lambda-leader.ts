import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LambdaLeader: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "lambda-leader",
    setTitleId: 1983,
    names: [
        {value: "Lambda Leader"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Incarnate Trial: Lambda Sector."}
    ],
    acquisition: "Complete the Lambda Sector Incarnate Trial",
    links: [
        {title: "Lambda Leader Badge", href: "https://homecoming.wiki/wiki/Lambda_Leader_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/lambda-leader.png"}
    ],
};
