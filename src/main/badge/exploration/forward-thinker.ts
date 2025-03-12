import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../map/brickstown'

export const ForwardThinker: BadgeData = {
  type: 'EXPLORATION',
  key: 'forward-thinker',
  setTitle: { id: 1567 },
  name: [{ value: 'Forward Thinker' }],
  alignment: ['H'],
  mapKey: Brickstown.key,
  loc: [254, 31.8, -1343.5],
  badgeText: [{
    value: 'The Mashu bridge was built in Brickstown long before construction on the Zig began.'
      + ' Traffic was heavy in Brickstown, causing a need for this bridge to be constructed.'
      + ' It was only shortly afterward that plans for the Zig were created, driving the majority of business owners out from Brickstown and into Steel Canyon,'
      + ' rendering Mashu bridge nothing but an odd landmark.',
  }],
  notes: 'Located on the Mashu Bridge in [map:brickstown], 97 feet east of the neighborhood marker.',
  links: [
    { title: 'Forward Thinker Badge', href: 'https://homecoming.wiki/wiki/Forward_Thinker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
