import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TimeTraveler: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "time-traveler",
    setTitleId: 400,
    names: [
        {value: "Time Traveler"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "It seems you have mastered the recursive time flux of Lord Recluse's victory. You've spent one " +
                "hour here, though it seems like much longer."
        }
    ],
    acquisition: "Spend 1 hour in Recluse's Victory",
    links: [
        {title: "Time Traveler Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Time_Traveler_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png"}
    ],
};
