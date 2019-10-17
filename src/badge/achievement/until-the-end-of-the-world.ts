import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const UntilTheEndOfTheWorld: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "until-the-end-of-the-world",
    names: [
        {value: "Until the End of the World"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Collect 1500 badges to earn this badge.",
    links: [
        {title: "Until the End of the World Badge", href: "https://paragonwiki.com/wiki/Until_the_End_of_the_World_Badge"}
    ],
};
