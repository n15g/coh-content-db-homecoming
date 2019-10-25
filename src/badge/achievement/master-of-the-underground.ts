import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheUnderground: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-the-underground",
    setTitleId: 2000,
    names: [
        {value: "Master of the Underground"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: Underground."}
    ],
    acquisition: "Earn the Regenerate This, Tour Guide, Preservation Specialist, and Avatar Assassin badges",
    links: [
        {title: "Master of the Underground Badge", href: "https://paragonwiki.com/wiki/Master_of_the_Underground_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-underground.png"}
    ],
};