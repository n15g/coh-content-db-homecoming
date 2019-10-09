import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SharedVictory: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "shared-victory",
    names: [
        {value: "Shared Victory"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback under the parameter of \"5 Defeats Allowed\" for the team."},
    ],
    acquisition: "Complete a Flashback arc with five or fewer defeats.",
    links: [
        {title: "Shared Victory Badge", href: "https://paragonwiki.com/wiki/Shared_Victory_Badge"}
    ],
    icons: [{value: "core.ouroboros.shared-victory"}]
};
