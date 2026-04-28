import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Reveler: BadgeData = {
  type: 'event',
  key: 'reveler',
  gameId: 'Anniversary2',
  setTitleId: [611],
  name: 'Reveler',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 2nd anniversary of City of Heroes.',
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Reveler Badge', href: 'https://homecoming.wiki/wiki/Reveler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reveler.png',
}
