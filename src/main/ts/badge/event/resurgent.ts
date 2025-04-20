import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Resurgent: BadgeData = {
  type: 'event',
  key: 'resurgent',
  setTitleId: [2432],
  name: 'Resurgent',
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `You have helped celebrate the 16th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Resurgent Badge', href: 'https://homecoming.wiki/wiki/Resurgent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/resurgent.png',
}
