import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheKeyesIslandReactor: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-keyes-island-reactor",
    setTitleId: 1994,
    names: [
        {value: "Master of the Keyes Island Reactor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: Keyes Island Reactor."}
    ],
    acquisition: "Earn the Anti-Anti-Matter, Bunker Buster, Loves A Challenge, and Avoids the Green Stuff badges",
    links: [
        {title: "Master of Keyes Island Reactor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_Keyes_Island_Reactor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-keyes-island-reactor.png"}
    ],
};
