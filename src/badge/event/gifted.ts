import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Gifted: IBadgeData = {
    type: BadgeType.EVENT,
    key: "gifted",
    setTitleId: 967,
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
        {title: "Gifted Badge", href: "https://homecoming.wiki/wiki/Gifted_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/gifted.png"}]
};
