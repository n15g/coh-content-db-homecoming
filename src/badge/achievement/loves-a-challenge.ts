import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LovesAChallenge: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "loves-a-challenge",
    names: [
        {value: "Loves A Challenge"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You successfully faced down Anti-Matter without losing anyone during the fight or destroying " +
        "his regenerative terminal links during Keyes Island Reactor."}
    ],
    acquisition: "Complete the Keyes Island Reactor Trial without anyone dying or destroying any terminals during the final battle with Anti-Matter",
    links: [
        {title: "Loves A Challenge Badge", href: "https://paragonwiki.com/wiki/Loves_A_Challenge_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png"}
    ],
};