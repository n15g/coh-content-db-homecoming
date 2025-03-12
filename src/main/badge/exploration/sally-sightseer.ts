import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../map/croatoa'

export const SallySightseer: BadgeData = {
  type: 'EXPLORATION',
  key: 'sally-sightseer',
  setTitle: { id: 1541 },
  name: [{ value: 'Sally Sightseer' }],
  alignment: ['H'],
  mapKey: Croatoa.key,
  loc: [-503, -25, 1195],
  badgeText: [{
    value: 'Students from Croatoa University frequent this beach when it isn\'t being used as a battleground by the Tuatha and Cabal.'
      + ' Armed with video cameras, the students are determined to get a good look at the mythical Sally.'
      + ' The pictures taken of Sally here have been used in many \'Save Sally!\' posters.',
  }],
  notes: 'Located in the Salamanca neighborhood of [map:croatoa].\n'
    + '\n'
    + 'It is under the easternmost umbrella on the beach, 246 yards northeast of the neighborhood marker.',
  links: [
    { title: 'Sally Sightseer Badge', href: 'https://homecoming.wiki/wiki/Sally_Sightseer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
