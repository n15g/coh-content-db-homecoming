import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Fabricator: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "fabricator",
    setTitleId: 744,
    names: [{value: "Fabricator"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "Your ingenuity knows no bounds, and after 2,000 inventions you are now a Fabricator."}],
    acquisition: "Craft 2000 items in the Invention System or Supergroup Base system.",
    notes: "This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the" +
        " Vanguard Crafting Table and Candy Keeper.",
    links: [
        {title: "Fabricator Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Fabricator_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/fabricator.png"}]
};
