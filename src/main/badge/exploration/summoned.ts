import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../map/kings-row'

export const Summoned: BadgeData = {
  type: 'EXPLORATION',
  key: 'summoned',
  setTitle: { id: 96 },
  name: [{ value: 'Summoned' }],
  alignment: ['H'],
  mapKey: KingsRow.key,
  loc: [-940.5, -41.7, 2977.4],
  badgeText: [{
    value: 'Statesman broke up a ritual by the Circle of Thorn members that would have bolstered their ranks exponentially.',
  }],
  notes: 'The Summoned Badge is located near the southern border of Kings Row, southeastern to the hospital 343 yards.'
    + '\n\nIt is in the middle of the Industrial Avenue neighborhood, next to a broken pipe in the ground that leaks steam.'
    + ' It is approximately 182 yards east of the Industrial Avenue neighborhood marker.',
  links: [
    { title: 'Summoned Badge', href: 'https://homecoming.wiki/wiki/Summoned_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
