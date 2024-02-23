import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Erasure: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "erasure",
    setTitleId: 2171,
    names: [
        {value: "Erasure"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have washed away the memories of the ancestors, who have no place in the world of the " +
                "living."
        }
    ],
    acquisition: "Defeat 100 points worth of Incarnate-level Tsoo",
    links: [
        {title: "Erasure Badge", href: "https://homecoming.wiki/wiki/Erasure_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/erasure.png"}
    ],
};
