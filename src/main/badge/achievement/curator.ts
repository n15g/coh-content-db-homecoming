import { BadgeData } from 'coh-content-db'

export const Curator: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'curator',
  setTitle: { id: 2366 },
  name: [
    { value: 'Curator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You never throw anything away, lest it be the clue that unravels the next mystery of the universe. Your collection of souvenirs makes museums jealous, and you wouldn't get rid of any of them.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/curator.png' }],
  acquisition: 'Collect 200 Souvenirs',
  links: [
    { title: 'Curator Badge', href: 'https://homecoming.wiki/wiki/Curator_Badge' },
  ],
}
