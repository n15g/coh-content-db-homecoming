import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const KeyesTechnician: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "keyes-technician",
    setTitleId: 1989,
    names: [
        {value: "Keyes Technician"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Incarnate Trial: Keyes Island Reactor."}
    ],
    acquisition: "Complete the Keyes Island Reactor Trial",
    links: [
        {title: "Keyes Technician Badge", href: "https://homecoming.wiki/wiki/Keyes_Technician_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/keyes-technician.png"}
    ],
};
