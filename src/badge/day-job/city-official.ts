import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const CityOfficial: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "city-official",
    names: [
        {type: Alternate.H, value: "City Official"},
        {type: Alternate.V, value: "Ousted Official"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H,
            value: "You have worked closely with the Paragon City government during your free time earning the City Official Day Job." +
                " Logging out in the City Hall will earn you an Influence Bonus, when you log back in, each time you complete a mission for a short time."
        },
        {
            type: Alternate.V,
            value: "You were unceremoniously ejected from your position in Paragon City government when you became a villain."
        }
    ],
    acquisition: "Log out inside City Hall or the Freedom Corps headquarters for 100 hours.",
    effect: "Day Job: Bonus Influence upon mission completion",
    links: [
        {title: "City Official Badge", href: "https://paragonwiki.com/wiki/City_Official_Badge"},
        {title: "Ousted Official Badge", href: "https://paragonwiki.com/wiki/Ousted_Official_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.city-official"}]
};
