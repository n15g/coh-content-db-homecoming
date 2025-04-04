import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Perseverant: BadgeData = {
  type: 'event',
  key: 'perseverant',
  setTitleId: [2339],
  name: 'Perseverant',
  morality: 'all',
  badgeText: `You have helped celebrate the 11th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Perseverant Badge', href: 'https://homecoming.wiki/wiki/Perseverant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/perseverant.png',
}
