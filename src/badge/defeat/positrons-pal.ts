import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PositronsPal: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "positrons-pal",
    setTitleId: 2240,
    names: [
        {type: Alternate.H, value: "Positron's Pal"},
        {type: Alternate.V, value: "Positron's Nemesis"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You have rescued Positron from the clutches of Praetoria."},
        {type: Alternate.V, value: "In the past you rescued Positron from the Praetorians. Perhaps today you might not do the same."}
    ],
    acquisition: "Complete the A Hero's Epic story arc from Maria Jenkins",
    links: [
        {title: "Positron's Pal Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Positron%27s_Pal_Badge"},
        {title: "Positron's Nemesis Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Positron%27s_Nemesis_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png"}
    ],
};
