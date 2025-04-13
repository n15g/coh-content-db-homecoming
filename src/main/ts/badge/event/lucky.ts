import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Lucky: BadgeData = {
  type: 'event',
  key: 'lucky',
  setTitleId: [2002],
  name: 'Lucky',
  morality: 'all',
  badgeText: 'You have helped celebrate the 7th anniversary of City of Heroes/Villains.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Lucky Badge', href: 'https://homecoming.wiki/wiki/Lucky_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/lucky.png',
}
