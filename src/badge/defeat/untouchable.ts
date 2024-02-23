import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Untouchable: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "untouchable",
    setTitleId: 45,
    names: [
        {value: "Untouchable"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have shown that no matter the bribe or threat, you will stand before organized criminals " +
                "and take them on."
        }
    ],
    acquisition: "Defeat 100 bosses of The Family, of any kind.",
    links: [
        {title: "Untouchable Badge", href: "https://homecoming.wiki/wiki/Untouchable_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/untouchable.png"}
    ],
};
