import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Indomitable: BadgeData = {
  type: 'event',
  key: 'indomitable',
  gameId: 'Anniversary12',
  setTitleId: [2340],
  name: 'Indomitable',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have helped celebrate the 12th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Indomitable Badge', href: 'https://homecoming.wiki/wiki/Indomitable_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/indomitable.png',
}
