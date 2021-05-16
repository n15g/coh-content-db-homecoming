import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const IncarnateRival: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "incarnate-rival",
    setTitleId: 2204,
    names: [
        {value: "Incarnate Rival"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You rescued Madame Bellerose from the forces of Dark Astoria. She eventually succumbed to " +
                "Mot's will and attacked you, but came to her senses before it was too late. Did you choose to " +
                "spare her life, or end it when she refused to pay you back?"
        }
    ],
    acquisition: "Save Madame Bellerose at least once in Dark Astoria before your final meeting in Dream Doctor's story arc",
    links: [
        {title: "Incarnate Rival Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Incarnate_Rival_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png"}
    ],
};
