import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Voyager: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "voyager",
    names: [
        {value: "Voyager"},
        {type: Alternate.P, value: "No Road Not Taken"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You've been able to handle everything the world has thrown at you." +
                " You've battled across Paragon City and the Rogue Isles, have thwarted alien invasions and explored strange new dimensions," +
                " but you have a sneaking suspicion that there is still much more to be done"
        },
        {
            type: Alternate.P, value: "Standing in the Magisterium for the first time, never in your wildest dreams could you have guessed the road you'd take from there to here." +
                " But there is no rest for someone such as yourself, and though you can't predict where you will head next -- you will still charge ahead!"
        }
    ],
    acquisition: "Earn this badge by earning 1250 badges.",
    links: [
        {title: "Voyager Badge", href: "https://paragonwiki.com/wiki/Voyager_Badge"},
        {title: "No Road Not Taken Badge", href: "https://paragonwiki.com/wiki/No_Road_Not_Taken_Badge"},
    ],
    icons: [
        {type: Alternate.H, value: "core.achievement.badge-count-1250-h"},
        {type: Alternate.V, value: "core.achievement.badge-count-1250-v"}
    ]
};
