import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PickyEater: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "picky-eater",
    names: [
        {value: "Picky Eater"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reject 50 recipe drops.",
    links: [
        {title: "Picky Eater Badge", href: "https://paragonwiki.com/wiki/Picky_Eater_Badge"}
    ],
};
