import { BadgeData, zoneLink } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const SallySightseer: BadgeData = {
  type: 'exploration',
  key: 'sally-sightseer',
  setTitleId: [1541],
  name: 'Sally Sightseer',
  morality: 'heroic',
  zoneKey: Croatoa.key,
  loc: [-503, -25, 1195],
  badgeText: [{
    value: 'Students from Croatoa University frequent this beach when it isn\'t being used as a battleground by the Tuatha and Cabal.'
      + ' Armed with video cameras, the students are determined to get a good look at the mythical Sally.'
      + ' The pictures taken of Sally here have been used in many \'Save Sally!\' posters.',
  }],
  notes: `Located in the Salamanca neighborhood of ${zoneLink(Croatoa)}.

It is under the easternmost umbrella on the beach, 246 yards northeast of the neighborhood marker.`,
  links: [
    { title: 'Sally Sightseer Badge', href: 'https://homecoming.wiki/wiki/Sally_Sightseer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '5',
}
