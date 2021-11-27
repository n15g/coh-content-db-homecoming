import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TheBeastWithin: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "the-beast-within",
    setTitleId: 2483,
    names: [
        {value: "The Beast Within"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `The way they talk, their irrational paranoia, and other subtle signs can be found in the 5th Column soldiers who have undergone experimental lycanthropy treatments. After experiencing their transformations many times, you've become an expert at drawing out the beast within and vanquishing it.`}
    ],
    acquisition: `Defeat 50 of the 5th Column's lycanthrope soldiers after they have transformed.`,
    links: [
        {title: "The Beast Within Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Beast_Within_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/the-beast-within.png"}
    ],
};