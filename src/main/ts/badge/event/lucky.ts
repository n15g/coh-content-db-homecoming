import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Lucky: BadgeData = {
  type: 'event',
  key: 'lucky',
  gameId: 'Anniversary7',
  setTitleId: [2002],
  name: 'Lucky',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 7th anniversary of City of Heroes/Villains.',
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Lucky Badge', href: 'https://homecoming.wiki/wiki/Lucky_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/lucky.png',
}
