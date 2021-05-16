import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Avenger: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "avenger",
    setTitleId: 2407,
    names: [
        {value: "Avenger"}
    ],
    alignment: ALIGNMENT_HERO,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/avenger.png"}],
    badgeText: [
        {value: "When the law fails to serve us, we must serve as the law."}
    ],
    acquisition: "Kill Rider in the story arc `Dirty Work` from Shauna Braun (Level 25-29, Arc 26.01 in Ouro, Vigilante)",
    links: [
        {title: "Avenger Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Avenger_Badge"}
    ],
};
