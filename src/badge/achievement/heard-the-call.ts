import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const HeardTheCall: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "heard-the-call",
    setTitleId: 1454,
    names: [
        {value: "Heard the Call"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You completed a Hero Morality Mission and then maintained your Hero alignment for 7 days " +
                "earning yourself this badge."
        }
    ],
    acquisition: "Maintain a Hero alignment for 7 days",
    links: [
        {title: "Heard the Call Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Heard_the_Call_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heard-the-call.png"}
    ],
};
