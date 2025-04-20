import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Jubilant: BadgeData = {
  type: 'event',
  key: 'jubilant',
  setTitleId: [1327],
  name: 'Jubilant',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 5th anniversary of City of Heroes/Villains.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Jubilant Badge', href: 'https://homecoming.wiki/wiki/Jubilant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/jubilant.png',
}
