import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Irradiated: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "irradiated",
    setTitleId: 401,
    names: [
        {value: "Irradiated"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've basked for more than five hours in the weird radiation of Bloody Bay."}
    ],
    acquisition: "Spend 1 hour in Bloody Bay",
    links: [
        {title: "Irradiated Badge", href: "https://paragonwiki.com/wiki/Irradiated_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time.png"}
    ],
};
