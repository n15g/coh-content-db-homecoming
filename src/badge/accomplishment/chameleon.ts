import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Chameleon: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "chameleon",
    setTitleId: 2385,
    names: [
        {value: "Chameleon"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Complete the task set `The Chameleon Suit`.",
    links: [
        {title: "Chameleon Badge", href: "https://paragonwiki.com/wiki/Chameleon_Badge"}
    ],
};
