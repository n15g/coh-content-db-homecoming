import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const StatesmansPal: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "statesmans-pal",
    setTitleId: 58,
    names: [
        {type: Alternate.H, value: "Statesman's Pal"},
        {type: Alternate.V, value: "Praetoria's Bane"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You have rescued Statesman from the clutches of Praetoria."},
        {
            type: Alternate.V, value: "In the past you rescued Statesman from the Praetorians. Perhaps today you might not do the " +
                "same."
        }
    ],
    acquisition: "Defeat Tyrant in the Free Statesman mission from Maria Jenkins' A Hero's Hero arc",
    links: [
        {title: "Statesman's Pal Badge", href: "https://homecoming.wiki/wiki/Statesman%27s_Pal_Badge"},
        {title: "Praetoria's Bane Badge", href: "https://homecoming.wiki/wiki/Praetoria%27s_Bane_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png"}
    ],
};
