import { BadgeData } from 'coh-content-db'
import { Ouroboros } from '../../map/ouroboros'

export const Chrononaut: BadgeData = {
  type: 'EXPLORATION',
  key: 'chrononaut',
  setTitle: { id: 947 },
  name: [{ value: 'Chrononaut' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Ouroboros.key,
  loc: [543, 868, -768],
  badgeText: [{
    value: 'Welcome to Ouroboros. You have a feeling as if there is a lot of work that needs to be done.',
  }],
  notes: 'The Chrononaut Badge is located at the very top of the building structure in Ouroboros.',
  links: [
    { title: 'Chrononaut Badge', href: 'https://homecoming.wiki/wiki/Chrononaut_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
