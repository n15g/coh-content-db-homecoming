import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Buster: IBadgeData = {
    type: BadgeType.EVENT,
    key: "buster",
    setTitleId: 186,
    names: [
        {value: "Buster"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 20 ghosts, spirits who have not rested since their original death."},
    ],
    acquisition: "Defeat 20 Spirits during the Halloween event.",
    links: [
        {title: "Buster Badge", href: "https://homecoming.wiki/wiki/Buster_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/buster.png"}]
};
