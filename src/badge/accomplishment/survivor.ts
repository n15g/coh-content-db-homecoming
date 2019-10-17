import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Survivor: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "survivor",
    setTitleId: 2348,
    names: [
        {value: "Survivor"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Complete every story arc in the Praetorian Warden storyline to earn this badge.",
    links: [
        {title: "Survivor Badge", href: "https://paragonwiki.com/wiki/Survivor_Badge"}
    ],
};
