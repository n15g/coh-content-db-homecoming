import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const CivilizationsSavior: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "civilizations-savior",
    setTitleId: 2261,
    names: [
        {value: "Civilization's Savior"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You held the line in the last bastion for civilization in Praetoria. You're considered a hero " +
                "now to these people, who can now establish the beginnings of a new civilization in Praetoria."
        },
        {
            type: Alternate.V, value: "You held the line in the last bastion for civilization in Praetoria. You're considered a hero " +
                "now to these people, who can now establish the beginnings of a new civilization in Praetoria. " +
                "All according to your plan, of course."
        }
    ],
    acquisition: "Complete the story arc from Number Six",
    links: [
        {title: "Civilization's Savior Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Civilization%27s_Savior_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/civilizations-savior.png"}
    ],
};
