import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Cheers: BadgeData = {
  type: 'event',
  key: 'cheers',
  gameId: 'Anniversary21',
  setTitleId: [2552],
  name: 'Cheers!',
  releaseDate: '2025-04-19',
  morality: 'all',
  badgeText: `You have helped celebrate the 21st anniversary of City of Heroes.`,
  acquisition: `Awarded upon login during May 2025, and thereafter available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Cheers!', href: 'https://homecoming.wiki/wiki/Cheers_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/cheers.png',
}
