import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Legionnaire: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "legionnaire",
    setTitleId: 55,
    names: [
        {value: "Legionnaire"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have shown the leaders of the Warriors who the real combatant is."}
    ],
    acquisition: "Defeat 100 Warrior bosses",
    links: [
        {title: "Legionnaire Badge", href: "https://homecoming.wiki/wiki/Legionnaire_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/legionnaire.png"}
    ],
};
