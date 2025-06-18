import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Hypothermia: IBadgeData = {
    type: BadgeType.EVENT,
    key: "hypothermia",
    setTitleId: 2545,
    names: [
        {value: "Hypothermia"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `It's that time of year again, when the temperature drops and it's a good idea to bundle up and stay warm. There are festivities to enjoy -- no time to let hypothermia put a damper on your celebration!`},
    ],
    acquisition: "Log in during the 2024 Winter Event, or purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "Hypothermia Badge", href: "https://homecoming.wiki/wiki/Hypothermia_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/hypothermia.png"}]
};
