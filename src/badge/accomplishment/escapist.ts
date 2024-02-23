import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Escapist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "escapist",
    setTitleId: 2349,
    names: [
        {value: "Escapist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You left your mark in Praetoria before using the Rift Enclosure to travel to Primal Earth.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_align_mission.png"}],
    acquisition: "Leave Praetoria through the Rift Enclosure after completing the Crusader, Warden, Responsibility or Power story arc.",
    links: [
        {title: "Escapist Badge", href: "https://homecoming.wiki/wiki/Escapist_Badge"}
    ],
};
