import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Spellbinding: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "spellbinding",
    setTitleId: 434,
    names: [
        {value: "Spellbinding"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Cabal's spells are useless against you."}
    ],
    acquisition: "Defeat 333 Cabal",
    links: [
        {title: "Spellbinding Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Spellbinding_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/spellbinding.png"}
    ],
};
