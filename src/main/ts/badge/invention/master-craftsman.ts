import { BadgeData } from 'coh-content-db'

export const MasterCraftsman: BadgeData = {
  type: 'invention',
  key: 'master-craftsman',
  setTitleId: [743],
  name: 'Master Craftsman',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'A Master Craftsman they call you, as you have created 1,000 inventions.',
  acquisition: 'Craft 1000 items in the Invention System or Supergroup Base system.',
  notes: `This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the Vanguard Crafting Table and Candy Keeper.`,
  links: [
    { title: 'Master Craftsman Badge', href: 'https://homecoming.wiki/wiki/Master_Craftsman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/master-craftsman.png',
}
