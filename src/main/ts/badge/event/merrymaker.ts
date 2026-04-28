import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Merrymaker: BadgeData = {
  type: 'event',
  key: 'merrymaker',
  gameId: 'Anniversary3',
  setTitleId: [829],
  name: 'Merrymaker',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 3rd anniversary of City of Heroes.',
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Merrymaker Badge', href: 'https://homecoming.wiki/wiki/Merrymaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/merrymaker.png',
}
