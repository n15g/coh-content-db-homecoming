import { BadgeData } from 'coh-content-db'

export const Mythical: BadgeData = {
  type: 'defeat',
  key: 'mythical',
  setTitleId: [2470],
  name: 'Mythical',
  morality: 'all',
  badgeText: `You have defeated 100 Minotaurs in Cimerora.`,
  acquisition: `Defeat 100 Minotaurs in Cimerora.`,
  links: [
    { title: 'Mythical Badge', href: 'https://homecoming.wiki/wiki/Mythical_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/mythical.png',
}
