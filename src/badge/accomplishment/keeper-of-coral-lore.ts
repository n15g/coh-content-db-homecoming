import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const KeeperOfCoralLore: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "keeper-of-coral-lore",
    names: [
        {value: "Keeper of Coral Lore"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You've discovered the secret to the Blood Coral and the ancient power of the slumbering " +
        "Leviathan."}
    ],
    acquisition: "Complete the story arc from Vincent Ross",
    links: [
        {title: "Keeper of Coral Lore Badge", href: "https://paragonwiki.com/wiki/Keeper_of_Coral_Lore_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/keeper-of-coral-lore.png"}
    ],
};