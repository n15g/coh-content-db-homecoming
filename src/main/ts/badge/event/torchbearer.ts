import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Torchbearer: BadgeData = {
  type: 'event',
  key: 'torchbearer',
  setTitleId: [2321],
  name: 'Torchbearer',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: `You have helped celebrate the 9th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Torchbearer Badge', href: 'https://homecoming.wiki/wiki/Torchbearer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/torchbearer.png',
}
