import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const VirtualVictor: IBadgeData = {
    type: BadgeType.AE,
    key: "virtual-victor",
    names: [
        {value: "Virtual Victor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've defeated your first enemy in Test Mode earning yourself the Virtual Victor badge."}],
    acquisition: "Defeat one enemy while testing your Architect missions.",
    links: [
        {title: "Virtual Victor Badge", href: "https://paragonwiki.com/wiki/Virtual_Victor_Badge"}
    ],
    imageKeys: [{value: "core.ae.virtual-victor"}]
};
