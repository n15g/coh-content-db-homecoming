import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Gifted: IBadgeData = {
    type: BadgeType.EVENT,
    key: "gifted",
    names: [
        {value: "Gifted"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "The Freedom Phalanx wishes you Happy Holidays!"},
        {type: Alternate.V, value: "Everyone deserves a Happy Holidays gift."}
    ],
    acquisition: "Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "Gifted Badge", href: "https://paragonwiki.com/wiki/Gifted_Badge"}
    ],
    icons: [{value: "core.event.gifted"}]
};
