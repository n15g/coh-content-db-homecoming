import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Unquenchable: BadgeData = {
  type: 'event',
  key: 'unquenchable',
  setTitleId: [2493],
  name: 'Unquenchable',
  morality: 'all',
  badgeText: 'You have helped celebrate the 18th anniversary of City of Heroes.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Unquenchable Badge', href: 'https://homecoming.wiki/wiki/Unquenchable_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unquenchable.png',
}
