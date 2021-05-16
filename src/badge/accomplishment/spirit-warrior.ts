import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const SpiritWarrior: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "spirit-warrior",
    setTitleId: 74,
    names: [
        {value: "Spirit Warrior"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You stopped a war between the Banished Pantheon and the Circle of Thorns."}
    ],
    acquisition: "Complete the Stop both Groups of Mystic Madmen mission from Andrea Mitchell, Cain Royce, Dr. Cheng, Piper Irving, Oliver Haak, or Josef Keller",
    links: [
        {title: "Spirit Warrior Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Spirit_Warrior_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spirit-warrior.png"}
    ],
};
