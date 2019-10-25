import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const PortalHopper: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "portal-hopper",
    setTitleId: 343,
    names: [
        {value: "Portal Hopper"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Your journeys to other dimensions have earned you the Portal Hopper badge."}
    ],
    acquisition: "Complete the Attack Longbow portal base mission from Technician Naylor",
    links: [
        {title: "Portal Hopper Badge", href: "https://paragonwiki.com/wiki/Portal_Hopper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-7.png"}
    ],
};