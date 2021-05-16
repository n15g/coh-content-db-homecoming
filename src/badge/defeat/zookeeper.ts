import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Zookeeper: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "zookeeper",
    setTitleId: 50,
    names: [
        {value: "Zookeeper"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have earned the title Zookeeper by defeating the hordes of Ruin Monkeys that plague " +
                "Paragon City."
        }
    ],
    acquisition: "Defeat 1000 Rikti monkeys",
    links: [
        {title: "Zookeeper Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Zookeeper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/zookeeper.png"}
    ],
};
