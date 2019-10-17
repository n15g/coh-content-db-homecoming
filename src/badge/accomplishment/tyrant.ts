import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Tyrant: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "tyrant",
    setTitleId: 2354,
    names: [
        {value: "Tyrant"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Complete every story arc in the Praetorian Power storyline to earn this badge.",
    links: [
        {title: "Tyrant Badge", href: "https://paragonwiki.com/wiki/Tyrant_Badge"}
    ],
};
