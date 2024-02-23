import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const HolidaySpirit: IBadgeData = {
    type: BadgeType.EVENT,
    key: "holiday-spirit",
    setTitleId: 521,
    names: [
        {type: Alternate.H, value: "Holiday Spirit"},
        {type: Alternate.V, value: "Scrooge"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Arachnos tried to ruin the holidays, but you have done your best to stop them."},
        {type: Alternate.V, value: "Bah humbug! You've done your best to disrupt the holidays over in Paragon City."}
    ],
    acquisition: "Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "Holiday Spirit Badge", href: "https://homecoming.wiki/wiki/Holiday_Spirit_Badge"},
        {title: "Scrooge Badge", href: "https://homecoming.wiki/wiki/Scrooge_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/holiday-spirit.png"}]
};
