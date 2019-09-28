import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Craftsman: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "craftsman",
    names: [{value: "Craftsman"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You are a true Craftsman, and have created 500 inventions."}],
    acquisition: "Craft 5000 items in the Invention System or Supergroup Base system.",
    notes: "This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the" +
        " Vanguard Crafting Table and Candy Keeper.",
    links: [
        {title: "Craftsman Badge", href: "https://paragonwiki.com/wiki/Craftsman_Badge"}
    ],
    imageKeys: [{value: "core.invention.craftsman"}]
};
