import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const RegenerateThis: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "regenerate-this",
    setTitleId: 1996,
    names: [
        {value: "Regenerate This"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You blitzed the Self-Repairing and Lichen Infested War Walkers within 8 minutes of starting " +
                "combat in the Underground."
        }
    ],
    acquisition: "Defeat the Self-Repairing and Lichen Infested War Walkers within 8 minutes of starting the fight",
    links: [
        {title: "Regenerate This Badge", href: "https://homecoming.wiki/wiki/Regenerate_This_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png"}
    ],
};
