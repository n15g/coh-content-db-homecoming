import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ArachnosTraitor: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "arachnos-traitor",
    setTitleId: 1051,
    names: [
        {type: Alternate.H, value: "Arachnos Traitor"},
        {type: Alternate.V, value: "Arachnos Official"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{
        type: Alternate.H,
        value: "The Arbiters of Arachnos have made you a priority target. They do not like to let their secrets slip."
    }, {
        type: Alternate.V,
        value: "Your time spent working with the Arachnos Arbiters has earned you the Arachnos Official Day Job." +
            " Logging out in Grandville will earn you Jetpack power, when you log back in, for a short time."
    }],
    acquisition: "Log out within Grandville for 100 hours.",
    effect: "Day Job: Jetpack",
    links: [
        {title: "Arachnos Traitor Badge", href: "https://paragonwiki.com/wiki/Arachnos_Traitor_Badge"},
        {title: "Arachnos Official Badge", href: "https://paragonwiki.com/wiki/Arachnos_Official_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/arachnos-traitor.png"}]
};
