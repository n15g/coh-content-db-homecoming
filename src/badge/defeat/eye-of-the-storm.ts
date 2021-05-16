import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const EyeOfTheStorm: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "eye-of-the-storm",
    setTitleId: 1435,
    names: [
        {value: "Eye of the Storm"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "Maelstrom crossed the line and had to be stopped. Thankfully you were there to prevent things " +
                "from getting out of hand."
        },
        {type: Alternate.V, value: "Maelstrom fell before your might. Perhaps now he will learn to not meddle in your schemes."}
    ],
    acquisition: "Defeat Maelstrom in an Alignment Mission or a Morality Mission",
    links: [
        {title: "Eye of the Storm Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Eye_of_the_Storm_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/eye-of-the-storm.png"}
    ],
};
