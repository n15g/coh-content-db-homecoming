import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gearsmasher: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "gearsmasher",
    setTitleId: 31,
    names: [
        {value: "Gearsmasher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have learned that the smallest gear can power the greatest threat, and have taken steps to " +
                "stop the Clockwork menace."
        }
    ],
    acquisition: "Defeat 100 Clockwork gears",
    links: [
        {title: "Gearsmasher Badge", href: "https://homecoming.wiki/wiki/Gearsmasher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/clockwork.png"}
    ],
};
