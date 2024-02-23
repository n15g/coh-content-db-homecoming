import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Synchronized: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "synchronized",
    setTitleId: 1984,
    names: [
        {value: "Synchronized"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You proved masterful coordination during a raid on Lambda Sector by your league destroying two " +
                "separate objectives simultaneously."
        }
    ],
    acquisition: "Destroy a Weapons Cache and a Containment Canister within 2 seconds of each other during the Lambda Sector Incarnate Trial",
    links: [
        {title: "Synchronized Badge", href: "https://homecoming.wiki/wiki/Synchronized_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png"}
    ],
};
