import { BadgeData, contactLink } from 'coh-content-db'
import { Luna } from '../../contact/luna'

export const Unforgettable: BadgeData = {
  type: 'event',
  key: 'unforgettable',
  gameId: 'Anniversary19',
  setTitleId: [2509],
  name: 'Unforgettable',
  releaseDate: '2020-11-26',
  morality: 'all',
  badgeText: 'You have helped celebrate the 19th anniversary of City of Heroes.',
  acquisition: `Available for purchase from ${contactLink(Luna)} during the anniversary event in May.`,
  links: [
    { title: 'Unforgettable Badge', href: 'https://homecoming.wiki/wiki/Unforgettable_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unforgettable.png',
}
