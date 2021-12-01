import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheMindsOfMayhem: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-minds-of-mayhem",
    setTitleId: 2083,
    names: [
        {value: "Master of the Minds of Mayhem"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: The Minds of Mayhem."}
    ],
    acquisition: "Earn the Mental Voyager, Dreamwalker, A Perfect Storm, Daylight Saver, and Lost Connection to Server badges",
    links: [
        {title: "Master of the Minds of Mayhem Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_the_Minds_of_Mayhem_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-minds-of-mayhem.png"}
    ],
};
