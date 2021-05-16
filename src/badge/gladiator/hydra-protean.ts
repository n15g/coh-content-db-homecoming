import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const HydraProtean: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "hydra-protean",
    setTitleId: 480,
    names: [
        {value: "Hydra Protean"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "Mindless, yes. But yours to command."}
    ],
    acquisition: "Earn the [badge:charmer] Badge (Hydra)",
    links: [
        {title: "Hydra Protean Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hydra_Protean_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
