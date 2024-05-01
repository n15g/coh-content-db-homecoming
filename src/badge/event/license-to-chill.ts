import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LicenseToChill: IBadgeData = {
    type: BadgeType.EVENT,
    key: "license-to-chill",
    setTitleId: 2492,
    names: [
        {value: "License to Chill"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Winter is a time when things slow down. Relax. Take it easy. Chill.`},
    ],
    acquisition: "Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "License to Chill Badge", href: "https://homecoming.wiki/wiki/License_to_Chill_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/winter-login.png"}]
};
