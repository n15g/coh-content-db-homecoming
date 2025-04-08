import { BadgeData } from 'coh-content-db'

export const Curator: BadgeData = {
  type: 'achievement',
  key: 'curator',
  setTitleId: [2366],
  name: 'Curator',
  morality: 'all',
  badgeText: `You never throw anything away, lest it be the clue that unravels the next mystery of the universe. Your collection of souvenirs makes museums jealous, and you wouldn't get rid of any of them.`,
  acquisition: 'Collect 200 Souvenirs.',
  links: [
    { title: 'Curator Badge', href: 'https://homecoming.wiki/wiki/Curator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/curator.png',
}
