import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Perseverant: BadgeData = {
  type: 'event',
  key: 'perseverant',
  gameId: 'Anniversary11',
  setTitleId: [2339],
  name: 'Perseverant',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have helped celebrate the 11th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Perseverant Badge', href: 'https://homecoming.wiki/wiki/Perseverant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/perseverant.png',
}
