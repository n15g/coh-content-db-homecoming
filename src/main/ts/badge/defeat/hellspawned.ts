import { BadgeData } from 'coh-content-db'

export const Hellspawned: BadgeData = {
  type: 'defeat',
  key: 'hellspawned',
  setTitleId: [1],
  name: 'Hellspawned',
  morality: 'all',
  badgeText: `You've whupped those Hellions, but good.`,
  acquisition: 'Defeat 50 Hellions Damned bosses.',
  links: [
    { title: 'Hellspawned Badge', href: 'https://homecoming.wiki/wiki/Hellspawned_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/hellspawned.png',
}
