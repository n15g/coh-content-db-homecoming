import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TheDeterminedMentor: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-determined-mentor",
    setTitleId: 2189,
    names: [
        {value: "The Determined Mentor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Ice Mistral was absorbed by Mot, but you were able to save Scirocco from the creature known as " +
                "the Sentinel. Scirocco has pledged to not rest until he rescues Ice Mistral from the maw of " +
                "Mot."
        }
    ],
    acquisition: "Complete the story arc from Mu'Vorkan",
    links: [
        {title: "The Determined Mentor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Determined_Mentor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png"}
    ],
};
