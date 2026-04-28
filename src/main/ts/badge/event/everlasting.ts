import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Everlasting: BadgeData = {
  type: 'event',
  key: 'everlasting',
  gameId: 'Anniversary14',
  setTitleId: [2384],
  name: 'Everlasting',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: `You have helped celebrate the 14th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Everlasting Badge', href: 'https://homecoming.wiki/wiki/Everlasting_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/everlasting.png',
}
