import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Escapist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "escapist",
    setTitleId: 2349,
    names: [
        {value: "Escapist"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Leave Praetoria through the Rift Enclosure after completing the Crusader, Warden, Responsibility or Power story arc.",
    links: [
        {title: "Escapist Badge", href: "https://paragonwiki.com/wiki/Escapist_Badge"}
    ],
};
