import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Joyful: IBadgeData = {
    type: BadgeType.EVENT,
    key: "joyful",
    names: [
        {value: "Joyful"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The power of the season finds you overcome with joy."},
    ],
    acquisition: "Select as a reward for completing Father Time's mission during the Winter Event or purchase from the Candy Keeper during the Winter Event for 20 Candy Canes and 5000 inf.",
    links: [
        {title: "Joyful Badge", href: "https://paragonwiki.com/wiki/Joyful_Badge"}
    ],
    imageKeys: [{value: "core.event.joyful"}]
};
