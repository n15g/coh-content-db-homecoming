import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CutOff: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "cut-off",
    names: [
        {value: "Cut-Off"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 40 and 44 while not using any Epic Power Pools."},
    ],
    acquisition: "Complete a level 40-45 Flashback arc using no Ancillary powers.",
    links: [
        {title: "Cut-Off Badge", href: "https://paragonwiki.com/wiki/Cut-Off_Badge"}
    ],
    icons: [{value: "core.ouroboros.cut-off"}]
};
