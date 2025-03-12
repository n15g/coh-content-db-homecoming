import { BadgeData } from 'coh-content-db'

export const Mythical: BadgeData = {
  type: 'DEFEAT',
  key: 'mythical',
  setTitle: { id: 2470 },
  name: [
    { value: 'Mythical' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have defeated 100 Minotaurs in Cimerora.` },
  ],
  acquisition: `Defeat 100 Minotaurs in Cimerora.`,
  links: [
    { title: 'Mythical Badge', href: 'https://homecoming.wiki/wiki/Mythical_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/mythical.png' },
  ],
}
