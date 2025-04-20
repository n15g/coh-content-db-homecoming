import { BadgeData } from 'coh-content-db'

export const MasterArtisan: BadgeData = {
  type: 'invention',
  key: 'master-artisan',
  setTitleId: [741],
  name: 'Master Artisan',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have created 100 inventions, justifying your title of Master Artisan.',
  acquisition: 'Craft 100 items in the Invention System or Supergroup Base system.',
  notes: `This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the Vanguard Crafting Table and Candy Keeper.`,
  links: [
    { title: 'Master Artisan Badge', href: 'https://homecoming.wiki/wiki/Master_Artisan_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/master-artisan.png',
}
