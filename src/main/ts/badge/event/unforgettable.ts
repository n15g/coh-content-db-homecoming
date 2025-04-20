import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Unforgettable: BadgeData = {
  type: 'event',
  key: 'unforgettable',
  setTitleId: [2509],
  name: 'Unforgettable',
  releaseDate: '2020-11-26',
  morality: 'all',
  badgeText: 'You have helped celebrate the 19th anniversary of City of Heroes.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Unforgettable Badge', href: 'https://homecoming.wiki/wiki/Unforgettable_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unforgettable.png',
}
