import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Mythical: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "mythical",
    setTitleId: 2470,
    names: [
        {value: "Mythical"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have defeated 100 Minotaurs in Cimerora.`}
    ],
    acquisition: `Defeat 100 Minotaurs in Cimerora.`,
    links: [
        {title: "Mythical Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Mythical_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/mythical.png"}
    ],
};