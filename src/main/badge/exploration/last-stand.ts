import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const LastStand: BadgeData = {
  type: 'EXPLORATION',
  key: 'last-stand',
  setTitle: { id: 290 },
  name: [{ value: 'Last Stand' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: ReclusesVictory.key,
  loc: [1083, 0, -136],
  badgeText: [{ value: 'Lee Towers may go down in history as the place where civilization fell to Lord Recluse.' }],
  notes: 'The Last Stand Badge is located in the ${zoneLink(ReclusesVictory)} zone in Sector 2.'
    + ' It is under the monorail track behind a store approximately halfway between the Foxtrot and Golf pillboxes (but slightly closer to Foxtrot).',
  links: [
    { title: 'Last Stand Badge', href: 'https://homecoming.wiki/wiki/Last_Stand_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '4',
}
