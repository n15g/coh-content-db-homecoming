import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gravedigger: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "gravedigger",
    setTitleId: 33,
    names: [
        {value: "Gravedigger"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have learned to put the Embalmed Cadavers in their place-- 6 feet under the ground."}
    ],
    acquisition: "Defeat 100 Vahzilok embalmed corpses",
    links: [
        {title: "Gravedigger Badge", href: "https://homecoming.wiki/wiki/Gravedigger_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/gravedigger.png"}
    ],
};
