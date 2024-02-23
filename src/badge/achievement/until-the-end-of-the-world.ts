import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const UntilTheEndOfTheWorld: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "until-the-end-of-the-world",
    setTitleId: 2361,
    names: [
        {value: "Until the End of the World"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You've seen your world and others come to the brink many times, but each time you've been there to pull them back and keep things going. And you'll continue to be there, no matter what the future brings.`}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/until-the-end-of-the-world-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/until-the-end-of-the-world-v.png"}
    ],
    acquisition: "Collect 1500 badges to earn this badge.",
    links: [
        {title: "Until the End of the World Badge", href: "https://homecoming.wiki/wiki/Until_the_End_of_the_World_Badge"}
    ],
};
