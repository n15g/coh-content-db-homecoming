import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Entertainer: BadgeData = {
  type: 'event',
  key: 'entertainer',
  setTitleId: [972],
  name: 'Entertainer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 4th anniversary of City of Heroes/Villains.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Entertainer Badge', href: 'https://homecoming.wiki/wiki/Entertainer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/entertainer.png',
}
