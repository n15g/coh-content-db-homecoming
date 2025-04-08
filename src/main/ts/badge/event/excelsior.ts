import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Excelsior: BadgeData = {
  type: 'event',
  key: 'excelsior',
  setTitleId: [2396],
  name: 'Excelsior!',
  morality: 'all',
  badgeText: `You have helped celebrate the 15th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Excelsior! Badge', href: 'https://homecoming.wiki/wiki/Excelsior!_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/excelsior.png',
}
