import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Unstoppable: BadgeData = {
  type: 'event',
  key: 'unstoppable',
  setTitleId: [2334],
  name: 'Unstoppable',
  morality: 'all',
  badgeText: `You have helped celebrate the 10th anniversary of City of Heroes.`,
  acquisition: `Available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
  links: [
    { title: 'Unstoppable Badge', href: 'https://homecoming.wiki/wiki/Unstoppable_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unstoppable.png',
}
