import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Everlasting: BadgeData = {
  type: 'event',
  key: 'everlasting',
  setTitleId: [2384],
  name: 'Everlasting',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: `You have helped celebrate the 14th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Everlasting Badge', href: 'https://homecoming.wiki/wiki/Everlasting_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/everlasting.png',
}
