import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Artisan: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "artisan",
    setTitleId: 740,
    names: [{value: "Artisan"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have created 50 inventions, proving you are an Artisan."}],
    acquisition: "Craft 50 items in the Invention System or Supergroup Base system.",
    notes: "This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the" +
        " Vanguard Crafting Table and Candy Keeper.",
    links: [
        {title: "Artisan Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Artisan_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/artisan.png"}]
};
