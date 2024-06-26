import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HomeForTheHolidays: IBadgeData = {
    type: BadgeType.EVENT,
    key: "home-for-the-holidays",
    setTitleId: 2518,
    names: [
        {value: "Home for the Holidays"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You feel the warm and comforting sense of returning to a familiar place filled with cherished friends and traditions.`},
    ],
    acquisition: "Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "Home for the Holidays Badge", href: "https://homecoming.wiki/wiki/Home_for_the_Holidays_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/winter-login.png"}]
};
