import { BadgeData } from 'coh-content-db'

export const Fabricator: BadgeData = {
  type: 'INVENTION',
  key: 'fabricator',
  setTitle: { id: 744 },
  name: [{ value: 'Fabricator' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'Your ingenuity knows no bounds, and after 2,000 inventions you are now a Fabricator.' }],
  acquisition: 'Craft 2000 items in the Invention System or Supergroup Base system.',
  notes: 'This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the'
    + ' Vanguard Crafting Table and Candy Keeper.',
  links: [
    { title: 'Fabricator Badge', href: 'https://homecoming.wiki/wiki/Fabricator_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/fabricator.png' }],
}
