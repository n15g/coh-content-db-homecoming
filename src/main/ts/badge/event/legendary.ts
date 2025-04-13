import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Legendary: BadgeData = {
  type: 'event',
  key: 'legendary',
  setTitleId: [2460],
  name: 'Legendary',
  morality: 'all',
  badgeText: 'You have helped celebrate the 17th anniversary of City of Heroes.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Legendary Badge', href: 'https://homecoming.wiki/wiki/Legendary_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/legendary.png',
}
