import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Descended: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "descended",
    setTitleId: 1463,
    names: [
        {value: "Descended"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You have shrugged off the heavy binds of morality and selflessness and have become a Villain. " +
                "You have shifted your alignment from Hero to Villain earning yourself the Descended badge."
        }
    ],
    acquisition: "Shift alignment from Hero to Villain",
    links: [
        {title: "Descended Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Descended_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/descended.png"}
    ],
};
