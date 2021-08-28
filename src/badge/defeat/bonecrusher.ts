import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Bonecrusher: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "bonecrusher",
    setTitleId: 30,
    names: [
        {value: "Bonecrusher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You're all about knocking heads and beating Skulls."}
    ],
    acquisition: "Defeat 50 Skulls Bone Daddies, Death Dolls, or Death Walkers",
    links: [
        {title: "Bonecrusher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bonecrusher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/skulls.png"}
    ],
};
