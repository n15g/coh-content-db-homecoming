import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Volcanic: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "volcanic",
    setTitleId: 203,
    names: [
        {value: "Volcanic"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have cracked the Igneous bosses, earning you the right to call yourself Volcanic."}
    ],
    acquisition: "Defeat 100 Magmite Lords or Pumicite Lords",
    links: [
        {title: "Volcanic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Volcanic_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/volcanic.png"}
    ],
};
