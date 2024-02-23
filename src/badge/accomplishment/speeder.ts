import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Speeder: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "speeder",
    setTitleId: 1058,
    names: [
        {value: "Speeder"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have taken the gold medal in the advanced ski course!"}
    ],
    acquisition: "Complete a ski run on the Advanced slope in under 50 seconds during a Winter Event",
    links: [
        {title: "Speeder Badge", href: "https://homecoming.wiki/wiki/Speeder_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-gold.png"}
    ],
};
