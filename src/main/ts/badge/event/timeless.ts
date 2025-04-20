import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Timeless: BadgeData = {
  type: 'event',
  key: 'timeless',
  setTitleId: [2341],
  name: 'Timeless',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have helped celebrate the 13th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Timeless Badge', href: 'https://homecoming.wiki/wiki/Timeless_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/timeless.png',
}
