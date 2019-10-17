import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TrollTaskForceMember: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "troll-task-force-member",
    setTitleId: 205,
    names: [
        {value: "Troll Task Force Member"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have logged enough time in the Hollows to be named an honorary member of Lt. Wincott's " +
        "Trolls Task Force."}
    ],
    acquisition: "Spend 1 hour in The Hollows",
    links: [
        {title: "Troll Task Force Member Badge", href: "https://paragonwiki.com/wiki/Troll_Task_Force_Member_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time.png"}
    ],
};