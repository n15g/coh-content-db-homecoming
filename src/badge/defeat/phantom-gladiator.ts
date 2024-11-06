import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PhantomGladiator: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "phantom-gladiator",
    setTitleId: 2540,
    names: [
        {value: "Phantom Gladiator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Labyrinth's Gladiators In The Fog are a curious phenomenon. This legion of immortal warriors compete in an eternal blood sport to determine who is the strongest amongst them, but not one was found worthy of taking you down."}
    ],
    acquisition: "Defeat 25 Gladiators in the Fog.",
    links: [
        {title: "Phantom Gladiator Badge", href: "https://homecoming.wiki/wiki/Phantom_Gladiator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/phantom-gladiator.png"}
    ],
};
