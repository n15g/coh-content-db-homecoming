import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const VirtualVictim: IBadgeData = {
    type: BadgeType.AE,
    key: "virtual-victim",
    names: [
        {value: "Virtual Victim"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've been defeated within a virtual environment earning yourself the Virtual Victim badge."}],
    acquisition: "Be defeated in a Mission Architect mission while in Test Mode.",
    links: [
        {title: "Virtual Victim Badge", href: "https://paragonwiki.com/wiki/Virtual_Victim_Badge"}
    ],
    imageKeys: [{value: "core.ae.virtual-victim"}]
};
