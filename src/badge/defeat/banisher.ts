import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Banisher: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "banisher",
    setTitleId: 37,
    names: [
        {value: "Banisher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are a banisher of evil spirits. The Banished Pantheon fears your very name."}
    ],
    acquisition: "Defeat 200 Banished Pantheon Spirit Masks",
    links: [
        {title: "Banisher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Banisher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/banished.png"}
    ],
};
