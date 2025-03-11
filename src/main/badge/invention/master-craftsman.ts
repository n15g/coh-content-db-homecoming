import { BadgeData } from 'coh-content-db'

export const MasterCraftsman: BadgeData = {
  type: 'INVENTION',
  key: 'master-craftsman',
  setTitle: { id: 743 },
  name: [{ value: 'Master Craftsman' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'A Master Craftsman they call you, as you have created 1,000 inventions.' }],
  acquisition: 'Craft 1000 items in the Invention System or Supergroup Base system.',
  notes: 'This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the'
    + ' Vanguard Crafting Table and Candy Keeper.',
  links: [
    { title: 'Master Craftsman Badge', href: 'https://homecoming.wiki/wiki/Master_Craftsman_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/master-craftsman.png' }],
}
