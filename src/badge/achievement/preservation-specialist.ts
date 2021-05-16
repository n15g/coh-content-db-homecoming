import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PreservationSpecialist: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "preservation-specialist",
    setTitleId: 1998,
    names: [
        {value: "Preservation Specialist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "The Demolition Charges sent by the IDF to take out the Underground didn't pose a threat to " +
                "your league, and you were able to take all of them out without a single detonation."
        }
    ],
    acquisition: "Don't let any of the IDF bombs detonate in The Underground Trial",
    links: [
        {title: "Preservation Specialist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Preservation_Specialist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png"}
    ],
};
