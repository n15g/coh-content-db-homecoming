import { BadgeData } from 'coh-content-db'

export const Artisan: BadgeData = {
  type: 'INVENTION',
  key: 'artisan',
  setTitle: { id: 740 },
  name: [{ value: 'Artisan' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have created 50 inventions, proving you are an Artisan.' }],
  acquisition: 'Craft 50 items in the Invention System or Supergroup Base system.',
  notes: 'This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the'
    + ' Vanguard Crafting Table and Candy Keeper.',
  links: [
    { title: 'Artisan Badge', href: 'https://homecoming.wiki/wiki/Artisan_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/artisan.png' }],
}
