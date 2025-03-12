import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../map/striga-isle'

export const Vulcanologist: BadgeData = {
  type: 'EXPLORATION',
  key: 'vulcanologist',
  setTitle: { id: 198 },
  name: [{ value: 'Vulcanologist' }],
  alignment: ['H'],
  mapKey: StrigaIsle.key,
  loc: [-5346, 875, -796],
  badgeText: [{
    value: 'The Council has hollowed out this dormant volcano to build a massive factory. The creations within are guarded with the utmost secrecy.',
  }],
  notes: 'Located in [map:striga-isle] on the southwestern lip of the large volcano in the center of the Council Base neighborhood.\n'
    + '\n'
    + 'It is approximately 46 yards from the Council Base marker.',
  links: [
    { title: 'Vulcanologist Badge', href: 'https://homecoming.wiki/wiki/Vulcanologist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
