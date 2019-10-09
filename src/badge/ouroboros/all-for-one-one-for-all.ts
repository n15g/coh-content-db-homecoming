import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AllForOneOneForAll: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "all-for-one-one-for-all",
    names: [
        {value: "All For One, One For All"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback under the parameter of \"0 Defeats Allowed\" for the team."},
    ],
    acquisition: "Complete a Flashback arc with zero defeats.",
    links: [
        {title: "All For One, One For All Badge", href: "https://paragonwiki.com/wiki/All_For_One,_One_For_All_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/all-for-one-one-for-all.png"}]
};
