import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PainKiller: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "pain-killer",
    setTitleId: 1599,
    names: [
        {value: "Pain Killer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've completed the Cathedral of Pain and thwarted the Aspect of Rularuu's plans."}
    ],
    acquisition: "Complete the Cathedral of Pain trial.",
    links: [
        {title: "Pain Killer Badge", href: "https://homecoming.wiki/wiki/Pain_Killer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pain-killer.png"}
    ],
};
