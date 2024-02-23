import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Buddy: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "buddy",
    setTitleId: 2327,
    names: [
        {value: "Buddy"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Even in defeat, Hamidon is a force to contend with. You have cleaned up the mess left behind after Hamidon's demise.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/buddy.png"}],
    acquisition: "Defeat 100 Hamidon Buds",
    links: [
        {title: "Buddy Badge", href: "https://homecoming.wiki/wiki/Buddy_Badge"}
    ],
};
