import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Ragnarok: BadgeData = {
  type: 'EXPLORATION',
  key: 'ragnarok',
  setTitle: { id: 288 },
  name: [{ value: 'Ragnarok' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: ReclusesVictory.key,
  loc: [-848, -15, -352],
  badgeText: [{ value: 'Some say this battle will signal the end of civilization as we know it, and the beginning of a new history—written by Lord Recluse.' }],
  notes: 'The Ragnarok Badge is located in the ${zoneLink(ReclusesVictory)} zone in Sector 3.'
    + ' It is at the north end of a cobblestone walkway on the western side of a small park, 418 yards due south of the Echo pillbox.',
  links: [
    { title: 'Ragnaraok Badge', href: 'https://homecoming.wiki/wiki/Ragnarok_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '2',
}
