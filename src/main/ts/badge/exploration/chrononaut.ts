import { BadgeData } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const Chrononaut: BadgeData = {
  type: 'exploration',
  key: 'chrononaut',
  setTitleId: [947],
  name: 'Chrononaut',
  morality: 'all',
  badgeText: `Welcome to Ouroboros. You have a feeling as if there is a lot of work that needs to be done.`,
  notes: 'The Chrononaut Badge is located at the very top of the building structure.',
  links: [
    { title: 'Chrononaut Badge', href: 'https://homecoming.wiki/wiki/Chrononaut_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Ouroboros.key, coords: [543, 868, -768] }, vidiotMapKey: '1' },
  ],
}
