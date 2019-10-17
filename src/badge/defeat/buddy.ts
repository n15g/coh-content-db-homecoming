import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Buddy: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "buddy",
    setTitleId: 2327,
    names: [
        {value: "Buddy"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Defeat 100 Hamidon Buds",
    links: [
        {title: "Buddy Badge", href: "https://paragonwiki.com/wiki/Buddy_Badge"}
    ],
};
