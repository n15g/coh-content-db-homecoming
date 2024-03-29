import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BuddyCop: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "buddy-cop",
    setTitleId: 2203,
    names: [
        {value: "Buddy Cop"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You rescued Detective Hopp from the Banished Pantheon in Dark Astoria. When the time came, he " +
                "remembered you and was able to stay alive long enough for you to find him. The question is, " +
                "did you actually save him?"
        }
    ],
    acquisition: "Save Detective Hopp at least once in Dark Astoria before your final meeting in Dream Doctor's story arc",
    links: [
        {title: "Buddy Cop Badge", href: "https://homecoming.wiki/wiki/Buddy_Cop_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png"}
    ],
};
