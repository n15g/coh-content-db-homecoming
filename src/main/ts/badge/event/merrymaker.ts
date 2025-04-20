import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Merrymaker: BadgeData = {
  type: 'event',
  key: 'merrymaker',
  setTitleId: [829],
  name: 'Merrymaker',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 3rd anniversary of City of Heroes.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Merrymaker Badge', href: 'https://homecoming.wiki/wiki/Merrymaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/merrymaker.png',
}
