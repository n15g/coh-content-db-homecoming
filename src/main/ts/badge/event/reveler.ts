import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Reveler: BadgeData = {
  type: 'event',
  key: 'reveler',
  setTitleId: [611],
  name: 'Reveler',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have helped celebrate the 2nd anniversary of City of Heroes.',
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Reveler Badge', href: 'https://homecoming.wiki/wiki/Reveler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reveler.png',
}
