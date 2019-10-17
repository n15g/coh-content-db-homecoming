import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Silencer: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "silencer",
    setTitleId: 2172,
    names: [
        {value: "Silencer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have stilled the cry of the innocent by punishing all false accusers."}
    ],
    acquisition: "Defeat 100 points worth of Incarnate-level Knives of Vengeance",
    links: [
        {title: "Silencer Badge", href: "https://paragonwiki.com/wiki/Silencer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/silencer.png"}
    ],
};