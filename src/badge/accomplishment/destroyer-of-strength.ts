import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const DestroyerOfStrength: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "destroyer-of-strength",
    setTitleId: 424,
    names: [
        {value: "Destroyer of Strength"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You defeated the being known as Ruladak the Strong, freeing the people of the Shadow Shard " +
        "from his tyranny."}
    ],
    acquisition: "Complete the Sara Moore Task Force: The Legend of Ruladak",
    links: [
        {title: "Destroyer of Strength Badge", href: "https://paragonwiki.com/wiki/Destroyer_of_Strength_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/destroyer-of-strength.png"}
    ],
};