import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Redundant: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "redundant",
    setTitleId: 1656,
    names: [
        {value: "Redundant"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Destroying the Destroyers has destroyed their chance to cause destruction, even if saying out " +
                "loud sounds a bit Redundant. Those big and strangely colored targets are hard to resist. You " +
                "destroyed many Destroyers to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Destroyers",
    links: [
        {title: "Redundant Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Redundant_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/redundant.png"}
    ],
};
