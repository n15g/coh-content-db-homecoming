import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../map/striga-isle'

export const SeaDog: BadgeData = {
  type: 'EXPLORATION',
  key: 'sea-dog',
  setTitle: { id: 197 },
  name: [{ value: 'Sea Dog' }],
  alignment: ['H'],
  mapKey: StrigaIsle.key,
  loc: [-470, 0, 1020],
  badgeText: [{
    value: 'Port Noble\'s shipping industry has declined of late, as Paragon City\'s manufacturing has taken a hit in the wake of the Rikti War.'
      + ' Now, with the Council plaguing Striga Isle, the situation has gone from bad to worse.',
  }],
  notes: 'Located in [map:striga-isle] at the end of a dock 440 yards east of the ferry.',
  links: [
    { title: 'Sea Dog Badge', href: 'https://homecoming.wiki/wiki/Sea_Dog_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
