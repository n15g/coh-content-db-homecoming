import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Illusionist: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "illusionist",
    setTitleId: 56,
    names: [
        {value: "Illusionist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have learned enough from fighting the Illusionists of the Carnival of Shadows to know the " +
                "real from the fake."
        }
    ],
    acquisition: "Defeat 100 Illusionists, Phantasms, and Dark Servants summoned by Master Illusionists",
    links: [
        {title: "Illusionist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Illusionist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/illusionist.png"}
    ],
};
