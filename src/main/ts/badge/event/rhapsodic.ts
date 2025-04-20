import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Rhapsodic: BadgeData = {
  type: 'event',
  key: 'rhapsodic',
  setTitleId: [2209],
  name: 'Rhapsodic',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 8th anniversary of City of Heroes/Villains. (This badge was awarded to every character who logged in during the month of May, 2012)',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Rhapsodic Badge', href: 'https://homecoming.wiki/wiki/Rhapsodic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/rhapsodic.png',
}
