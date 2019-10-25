import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const SlagReaper: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "slag-reaper",
    setTitleId: 337,
    names: [
        {value: "Slag Reaper"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The weird coral of Sharkhead Isle is said to have mystical properties."}
    ],
    acquisition: "Complete the Retrieve the shipment for Crash mission from Vince Dubrowski",
    links: [
        {title: "Slag Reaper Badge", href: "https://paragonwiki.com/wiki/Slag_Reaper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-4.png"}
    ],
};