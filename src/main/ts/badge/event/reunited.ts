import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Reunited: BadgeData = {
  type: 'event',
  key: 'reunited',
  setTitleId: [2510],
  name: 'Reunited',
  releaseDate: '2024-05-02',
  morality: 'all',
  badgeText: `You have helped celebrate the 20th anniversary of City of Heroes.`,
  acquisition: `Awarded upon login during May 2024, and thereafter available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Reunited Badge', href: 'https://homecoming.wiki/wiki/Reunited_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reunited.png',
}
