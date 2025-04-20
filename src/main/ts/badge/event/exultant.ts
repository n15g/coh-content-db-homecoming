import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Exultant: BadgeData = {
  type: 'event',
  key: 'exultant',
  setTitleId: [1482],
  name: 'Exultant',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 6th anniversary of City of Heroes/Villains.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Exultant Badge', href: 'https://homecoming.wiki/wiki/Exultant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/exultant.png',
}
