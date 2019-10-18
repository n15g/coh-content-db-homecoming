import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BackFromTheFuture: IBadgeData = {
    type: BadgeType.PVP,
    key: "back-from-the-future",
    names: [
        {value: "Back From the Future"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "100 pillboxes have been captured by you, you are truly a Time Bandit."}
    ],
    acquisition: "Capture 100 pillboxes in Recluse's Victory",
    links: [
        {title: "Back from the Future Badge", href: "https://paragonwiki.com/wiki/Back_from_the_Future_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/back-from-the-future.png"}
    ],
};
